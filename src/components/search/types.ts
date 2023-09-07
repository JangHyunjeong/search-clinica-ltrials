export interface RecommendsType {
  sickCd: string
  sickNm: string
}

export interface searchFormType {
  keyword: string
  getInput: (vlaue: string) => void
  clearInput: () => void
}

export interface SearchResultProps {
  keyword: string
  setKeyword: React.Dispatch<React.SetStateAction<string>>
  recommends: RecommendsType[]
}
