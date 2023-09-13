# Search Clinical Trials

- [한국임상정보](https://clinicaltrialskorea.com/) 의 검색/최근 검색어 기능 구현
- input change 이벤트에 따른 API호출 전략이 포인트

## 배포 주소

- https://search-clinical-trials-sand.vercel.app/

## 사용 기술

- 언어 : TypeScript
- 프레임워크 : React.js
- 통신 : Axios
- 스타일링 : Styled-components
- 배포 : Vercel

## 상세 기능 설명

### 1. 질환명 검색시 API 호출 통해서 검색어 추천 기능 구현

- input의 값이 변할때마다, axios를 사용하여 응답받은 결과를 출력합니다.
- 출력된 결과가 없을 시, 응답받은 값의 length를 이용해 “검색어 없음”을 표출합니다.
![캐싱1](https://github.com/JangHyunjeong/search-clinical-trials/assets/85441226/9396c467-c407-4122-b713-fd79a59c0718)




### 2. API 호출별로 로컬 캐싱 구현

- 검색된 키워드를 SessionStorage에 저장하여, 로컬 캐싱을 구현하였습니다.

[검색 시]

- 검색된 키워드가 SessionStorage에 있을 경우, SessionStorag에 저장된 data를 출력합니다.
- 검색된 키워드가 SessionStorage에 없을 경우, SessionStorage에 응답받은 data,데이터의 유효 시간을 저장합니다.
- 검색된 키워드가 SessionStorage에 있지만 만료되었을 경우, API를 다시 호출하여 값을 갱신합니다.

![검색](https://github.com/JangHyunjeong/search-clinical-trials/assets/85441226/3a5a4849-208f-41cf-a8d9-149c90bef5be)



### 3. 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행

- setTimeOut매서드를 사용하여 useDebouce 훅을 만들어 API 호출을 줄였습니다.
- input이 변할 때 250ms의 지연을 두어 debounce된 값을 API호출에 사용하였습니다.
- API를 호출할 때 마다 `console.info("calling api")` 출력하여 콘솔창에서 API 호출 횟수 확인 가능합니다.

### 4. 키보드만으로 추천 검색어들로 이동 가능하도록 구현

- 각 추천 검색어는 `button tag`로 마크업하여, `tab`(아래로)과 `shft + tab`(위) 을 사용하여, 추천 검색어 내에 이동 가능합니다.
![키보드](https://github.com/JangHyunjeong/search-clinical-trials/assets/85441226/2805c6b6-72b1-4ecf-ab3c-013ab836be4d)


## 디렉토리 구조

```
📦src
 ┣ 📂apis
 ┃ ┗ // api 정의
 ┣ 📂components
 ┃ ┗ 📂search
 ┃ ┃ ┗ // 컴포넌트 파일
 ┣ 📂hooks
 ┃ ┗ // 커스텀 훅
 ┣ 📂page
 ┃ ┗ 📜SearchPage.tsx
 ┣ 📂styles
 ┃ ┣ 📂base
 ┃ ┃ ┗ // base 스타일
 ┃ ┗ 📂constants
 ┃ ┃ ┗ // 스타일 상수
```



## 프로젝트 실행 방법

- 프로젝트 다운로드 후, 터미널에서 다음 명령어를 순서대로 입력하여 실행하실 수 있습니다.

```
npm install
```

```
npm start
```
