import SearchForm from '../components/search/SearchForm'
import SearchResult from '../components/search/SearchResult'
import { SearchPageType } from '../components/search/types'

function SearchPage(props: SearchPageType) {
  return (
    <section>
      <h2>검색하기</h2>
      <p>
        국내 모든 임상시험 검색하고
        <br />
        온라인으로 참여하기
      </p>

      <div>
        <SearchForm
          clearInput={props.clearInput}
          getInput={props.getInput}
          keyword={props.keyword}
        ></SearchForm>

        <SearchResult
          keyword={props.keyword}
          reconmmendKeywords={props.reconmmendKeywords}
          setKeyword={props.setKeyword}
        ></SearchResult>
      </div>
    </section>
  )
}
export default SearchPage
