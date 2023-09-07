import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineSearch } from 'react-icons/hi'

import { searchFormType } from './types'

import * as S from './Search.styled'

function SearchForm(props: searchFormType) {
  return (
    <S.SearchForm>
      <S.SearchInput
        type="text"
        value={props.keyword}
        onChange={(e) => props.getInput(e.target.value)}
      />
      <S.SearchClearButton type="button" onClick={props.clearInput}>
        <AiOutlineClose />
        <span className="visuallyHidden">입력값 초기화</span>
      </S.SearchClearButton>
      <S.SearchButton type="button">
        <HiOutlineSearch />
        <span className="visuallyHidden">검색하기</span>
      </S.SearchButton>
    </S.SearchForm>
  )
}
export default SearchForm
