import { useState, useEffect } from 'react'

import { ReconmmendKeywordType } from './components/search/types'
import useDebounce from './hooks/useDebounce'

function App() {
  const [keyword, setKeyword] = useState('')
  const debouncedKeyword = useDebounce(keyword)
  const [reconmmendKeywords, setReconmmendKeywords] = useState<ReconmmendKeywordType[]>([])

  const getInput = (value: string): void => {
    setKeyword(value)
  }
  const clearInput = (): void => {
    setKeyword('')
  }

  const getRecommendKeywords = async (debouncedKeyword: string) => {
    const URL = `http://localhost:4000/sick/?q=${debouncedKeyword.trim().toLowerCase()}`
    const cacheStorage = await caches.open('search')
    const reponsedChache = await cacheStorage.match(URL)

    try {
      if (reponsedChache) {
        const result = await reponsedChache.clone().json()
        setReconmmendKeywords(result)
        return
      }

      fetch(URL).then(async (response) => {
        console.info('calling api')
        const result = await response.clone().json()
        setReconmmendKeywords(result)
        await cacheStorage.put(URL, response)
      })
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (debouncedKeyword === '') {
      setReconmmendKeywords([])
      return
    }

    getRecommendKeywords(debouncedKeyword)
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
              value={keyword}
              onInput={(e) => getInput((e.target as HTMLTextAreaElement).value)}
            />
            <button type="button" onClick={clearInput}>
              X
            </button>
            <button type="button">검색하기</button>
          </div>
        </form>

        <div>
          <p>{keyword}</p>

          <section>
            <h3>추천 검색어</h3>
            {reconmmendKeywords.length !== 0 ? (
              <ul>
                {reconmmendKeywords.map((keyword: ReconmmendKeywordType) => {
                  return (
                    <li key={keyword.sickCd}>
                      <button type="button" onClick={() => setKeyword(keyword.sickNm)}>
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
