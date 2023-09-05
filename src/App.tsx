function App() {
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
          <input type="text" />
          <button type="button">검색하기</button>

          <div style={{ display: 'none' }}>
            <div>
              <h3>추천 검색어</h3>

              {/* TODO: 1. 검색어가 없을때 */}
              <div>추천 검색어가 없습니다.</div>

              {/* TODO: 2. 검색어가 있을때 */}
              <ul>
                <li>추천검색어1</li>
                <li>추천검색어2</li>
              </ul>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default App
