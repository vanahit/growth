import styled from "styled-components";

export const SHeader = styled.header`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.header.background};
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
`