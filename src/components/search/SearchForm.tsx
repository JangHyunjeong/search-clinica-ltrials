import { searchFormType } from './types'

function SearchForm(props: searchFormType) {
  return (
    <form>
      <div>
        <input
          type="text"
          value={props.keyword}
          onInput={(e) => props.getInput((e.target as HTMLTextAreaElement).value)}
        />
        <button type="button" onClick={props.clearInput}>
          X
        </button>
        <button type="button">검색하기</button>
      </div>
    </form>
  )
}
export default SearchForm
