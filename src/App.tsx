import { useState, useEffect } from 'react'

import { ReconmmendKeywordType } from './components/search/types'
import useDebounce from './hooks/useDebounce'
import SearchPage from './page/searchPage'

function App() {
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
    <SearchPage
      clearInput={clearInput}
      getInput={getInput}
      keyword={keyword}
      reconmmendKeywords={reconmmendKeywords}
      setKeyword={setKeyword}
    ></SearchPage>
  )
}

export default App
