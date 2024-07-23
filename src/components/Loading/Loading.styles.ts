import styled, {css, keyframes} from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SLoader = styled.span<{$size: number, $centered?: boolean}>`
    display: inline-block;
    ${({$centered}) => $centered && css`
        top: calc(50% - 40px);
        right: calc(50% - 40px);
        position: absolute;
        transform: translate(-50%, -50%);
    `};
    border: ${(props) => props.$size / 10}px solid transparent;
    border-top: ${(props) => props.$size / 10}px solid ${(props) => props.theme.colors.gray};
    border-right: ${(props) => props.$size / 10}px solid ${(props) => props.theme.colors.gray};
    border-left: ${(props) => props.$size / 10}px solid ${(props) => props.theme.colors.gray};
    border-radius: 50%;
    width: ${(props) => props.$size}px;
    height: ${(props) => props.$size}px;
    animation: ${spin} 2s linear infinite;
    margin-left: 4px;

`;