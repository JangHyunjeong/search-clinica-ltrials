import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'

const GlobalStyles = createGlobalStyle`
${reset},
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body {
        height: 100%;
        font-family: 'Spoqa Han Sans Neo', 'sans-serif';
        font-size: ${({ theme }) => theme.fontSize.default};
        color: ${({ theme }) => theme.color.textColor};
    }
    body {
        background: ${({ theme }) => theme.color.bgColor};
    }
    a {
        color: inherit;
        text-decoration: none;
        font: inherit;
    }
    button, 
    input, 
    textarea, 
    select, 
    option {
        color: inherit;
        font: inherit;
        border: 0;
    }
    button{
        cursor: pointer;
    }
    button:focus, 
    input:focus, 
    textarea:focus, 
    select:focus{
        outline: none;
    }
    .visuallyHidden {
        overflow: hidden;
        display: inline-block;
        position: absolute;
        z-index: -1;
        border: 0;
        width: 1px;
        height: 1px;
        clip: rect(1px, 1px, 1px, 1px);
        clip-path: inset(50%);
    }
`

export default GlobalStyles
