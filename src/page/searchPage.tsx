import { useState, useEffect } from 'react'

import SearchForm from '../components/search/SearchForm'
import SearchResult from '../components/search/SearchResult'
import { ReconmmendKeywordType } from '../components/search/types'
import useDebounce from '../hooks/useDebounce'

function SearchPage() {
  const [keyword, setKeyword] = useState<string>('')
  const debouncedKeyword = useDebounce(keyword)
  const [reconmmendKeywords, setReconmmendKeywords] = useState<ReconmmendKeywordType[]>([])

  const getInput = (value: string): void => {
    setKeyword(value)
  }
  const clearInput = (): void => {
    setKeyword('')
  }

  const getRecommendKeywords = async (debouncedKeyword: string) => {
    const URL = `https://json-server-ashen-tau.vercel.app/sick/?q=${debouncedKeyword
      .trim()
      .toLowerCase()}`
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
        console.log(response)
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
        <SearchForm clearInput={clearInput} getInput={getInput} keyword={keyword}></SearchForm>

        <SearchResult
          keyword={keyword}
          reconmmendKeywords={reconmmendKeywords}
          setKeyword={setKeyword}
        ></SearchResult>
      </div>
    </section>
  )
}
export default SearchPage
