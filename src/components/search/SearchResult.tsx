import { SearchResultType, ReconmmendKeywordType } from './types'

import * as S from './Search.styled'

function SearchResult(props: SearchResultType) {
  return (
    <S.ResultWrapper>
      <S.Resultkeyword>{props.keyword}</S.Resultkeyword>

      <section>
        <S.SuggestionTittle>추천 검색어</S.SuggestionTittle>
        {props.reconmmendKeywords.length !== 0 ? (
          <ul>
            {props.reconmmendKeywords.map((keyword: ReconmmendKeywordType) => {
              return (
                <S.SuggestionListItem key={keyword.sickCd}>
                  <S.SuggestionListButton
                    type="button"
                    onClick={() => props.setKeyword(keyword.sickNm)}
                  >
                    {keyword.sickNm}
                  </S.SuggestionListButton>
                </S.SuggestionListItem>
              )
            })}
          </ul>
        ) : (
          <S.SuggestionEmpty>추천 검색어가 없습니다.</S.SuggestionEmpty>
        )}
      </section>
    </S.ResultWrapper>
  )
}
export default SearchResult
