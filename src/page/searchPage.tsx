import { useState } from 'react'

import SearchForm from '../components/search/SearchForm'
import SearchResult from '../components/search/SearchResult'
import useDebounce from '../hooks/useDebounce'
import { useRecommends } from '../hooks/useRecommends'

import * as S from '../components/search/Search.styled'

function SearchPage() {
  const [keyword, setKeyword] = useState<string>('')
  const debouncedKeyword = useDebounce(keyword)
  const recommends = useRecommends(debouncedKeyword)

  const getInput = (value: string): void => {
    setKeyword(value)
  }
  const clearInput = (): void => {
    setKeyword('')
  }

  return (
    <S.SearchSection>
      <h2 className="visuallyHidden">검색하기</h2>
      <S.SearchPara>
        국내 모든 임상시험 검색하고
        <br />
        온라인으로 참여하기
      </S.SearchPara>

      <S.SearchBoxWrapper>
        <SearchForm clearInput={clearInput} getInput={getInput} keyword={keyword}></SearchForm>

        <SearchResult
          keyword={keyword}
          recommends={recommends.recommends}
          setKeyword={setKeyword}
        ></SearchResult>
      </S.SearchBoxWrapper>
    </S.SearchSection>
  )
}
export default SearchPage
