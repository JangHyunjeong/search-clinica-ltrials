import { SearchResultProps, RecommendsType } from './types'

import * as S from './Search.styled'

function SearchResult({ keyword, setKeyword, recommends }: SearchResultProps) {
  return (
    <S.ResultWrapper>
      <S.Resultkeyword>{keyword}</S.Resultkeyword>

      <section>
        <S.SuggestionTittle>추천 검색어</S.SuggestionTittle>
        {recommends.length !== 0 ? (
          <ul>
            {recommends.map((keyword: RecommendsType) => {
              return (
                <S.SuggestionListItem key={keyword.sickCd}>
                  <S.SuggestionListButton type="button" onClick={() => setKeyword(keyword.sickNm)}>
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
