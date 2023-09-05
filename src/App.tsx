import { useState, useEffect } from 'react'

import useDebounce from './hooks/useDebounce'

interface RecentKeywordType {
  sickCd: string
  sickNm: string
}

function App() {
  const [searchKeyword, setSearchKeyword] = useState('')
  const [searchedKeywordList, setSearchedKeywordList] = useState<RecentKeywordType[]>([])
  const debouncedKeyword = useDebounce(searchKeyword, 250)

  const getInput = (value: string) => {
    setSearchKeyword(value)
  }
  const clearInput = () => {
    setSearchKeyword('')
  }

  const getRecommandKeywordList = async (debouncedKeyword: string) => {
    const URL = `http://localhost:4000/sick/?q=${debouncedKeyword.trim().toLowerCase()}`
    const cacheStorage = await caches.open('search')
    const reponsedChache = await cacheStorage.match(URL)

    try {
      if (reponsedChache) {
        const result = await reponsedChache.clone().json()
        setSearchedKeywordList(result)
      } else {
        fetch(URL).then(async (response) => {
          console.info('calling api')
          const result = await response.clone().json()
          setSearchedKeywordList(result)
          await cacheStorage.put(URL, response)
        })
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (debouncedKeyword == '') {
      setSearchedKeywordList([])
    } else {
      getRecommandKeywordList(debouncedKeyword)
    }
  }, [debouncedKeyword])

  return (
    <section>
      <h2>검색하기</h2>
      <p>
        국내 모든 임상시험 검색하고
        <br />
        온라인으로 참여하기
      </p>

      <div>
        <form>
          <div>
            <input
              type="text"
              value={searchKeyword}
              onInput={(e) => getInput((e.target as HTMLTextAreaElement).value)}
            />
            <button type="button" onClick={clearInput}>
              X
            </button>
            <button type="button">검색하기</button>
          </div>
        </form>

        <div>
          <p>{searchKeyword}</p>

          <section>
            <h3>추천 검색어</h3>
            {searchedKeywordList.length !== 0 ? (
              <ul>
                {searchedKeywordList.map((keyword: RecentKeywordType) => {
                  return (
                    <li key={keyword.sickCd}>
                      <button type="button" onClick={() => setSearchKeyword(keyword.sickNm)}>
                        {keyword.sickNm}
                      </button>
                    </li>
                  )
                })}
              </ul>
            ) : (
              <div>추천 검색어가 없습니다.</div>
            )}
          </section>
        </div>
      </div>
    </section>
  )
}

export default App
