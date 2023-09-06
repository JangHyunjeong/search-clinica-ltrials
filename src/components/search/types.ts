export interface ReconmmendKeywordType {
  sickCd: string
  sickNm: string
}

export interface SearchPageType {
  clearInput: () => void
  getInput: (vlaue: string) => void
  keyword: string
  reconmmendKeywords: ReconmmendKeywordType[]
  setKeyword: React.Dispatch<React.SetStateAction<string>>
}

export interface searchFormType {
  keyword: string
  getInput: (vlaue: string) => void
  clearInput: () => void
}

export interface SearchResultType {
  keyword: string
  setKeyword: React.Dispatch<React.SetStateAction<string>>
  reconmmendKeywords: ReconmmendKeywordType[]
}
