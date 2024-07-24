import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`

  html,
  body {
      overflow: hidden;
      ul {
          margin: 0
      }
      header {
          padding: 0 16px;
      }
      
      margin: 0;
      textarea, input { font-family: Helvetica, Arial, sans-serif; }
      font-family: ${({theme}) => theme.fonts.primary};
      font-weight:  ${props => props.theme.fontWeights.regular};
      font-style: normal;
      background-color: ${(props) => props.theme.main.background};
      color: ${(props) => props.theme.main.textColor};
      
          svg {
              fill: ${(props) => props.theme.icon.color};
              path {
                  fill: ${(props) => props.theme.icon.color};
              }
          }
     
  }
  h1,h2, h3, h4, h5, h6 {
      margin-bottom: ${({ theme }) => theme.spacings.md};
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
  .pointer {
      cursor: pointer;
  }
  .h-100 {
      height: 100vh;
  }
  .link {
      font-weight: ${({ theme }) => theme.fontWeights.semibold};
      &:hover {
          text-decoration: underline;
      }
      
  }
`;

export default GlobalStyle;