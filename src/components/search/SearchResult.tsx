import { SearchResultType, ReconmmendKeywordType } from './types'

function SearchResult(props: SearchResultType) {
  return (
    <div>
      <p>{props.keyword}</p>

      <section>
        <h3>추천 검색어</h3>
        {props.reconmmendKeywords.length !== 0 ? (
          <ul>
            {props.reconmmendKeywords.map((keyword: ReconmmendKeywordType) => {
              return (
                <li key={keyword.sickCd}>
                  <button type="button" onClick={() => props.setKeyword(keyword.sickNm)}>
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
  )
}
export default SearchResult
