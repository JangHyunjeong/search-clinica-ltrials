import styled from 'styled-components'

export const SearchSection = styled.section`
  margin: 0 auto;
  padding: 50px 0;
  width: calc(100% - 40px);
  max-width: 490px;
  min-height: 100vh;
`
export const SearchPara = styled.p`
  margin-bottom: 40px;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: 700;
  letter-spacing: -0.018em;
  line-height: 1.6;
`
export const SearchBoxWrapper = styled.div`
  width: 100%;
`
export const SearchForm = styled.form`
  ${({ theme }) => theme.flex.flexBetweenCenter};
  width: 100%;
  height: 70px;
  border-radius: 35px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.white};
  padding-right: 10px;
`
export const SearchInput = styled.input`
  display: block;
  width: 100%;
  height: 70px;
  padding: 0 20px;
`
export const SearchClearButton = styled.button`
  flex-shrink: 0;
  font-size: ${({ theme }) => theme.fontSize.small};
  width: 30px;
  height: 30px;
  color: ${({ theme }) => theme.color.textColor};
  background-color: ${({ theme }) => theme.color.gray};
  border-radius: 15px;
  margin-right: 10px;
`
export const SearchButton = styled.button`
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.blue};
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.color.white};
`
export const ResultWrapper = styled.div`
  margin-top: 20px;
  padding: 20px 0;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.color.white};
`
export const Resultkeyword = styled.p`
  padding: 10px 20px;
`
export const SuggestionTittle = styled.h3`
  padding: 10px 20px;
  color: ${({ theme }) => theme.color.subTextColor};
`
export const SuggestionEmpty = styled.div`
  padding: 40px 20px 50px;
  text-align: center;
`
export const SuggestionListItem = styled.li``
export const SuggestionListButton = styled.button`
  display: block;
  width: 100%;
  padding: 10px 20px;
  text-align: left;
  background-color: transparent;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.color.lightGray};
  }
`
