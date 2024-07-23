import styled from 'styled-components';
import {Row} from "components/Grid";

export const SCard = styled(Row)`
  flex-direction: column;  
  background-color: ${({ theme }) => theme.main.secondaryBackgroundColor};
  border-radius: ${({ theme }) => theme.radiuses.md};
  padding: ${({ theme }) => theme.spacings.lg};
  position: relative;
  margin-bottom: ${({ theme }) => theme.spacings.lg};
`;

export const SCardActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacings.sm};
    
`;

export const SCardTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.main.textColor};
  margin: 0;
  margin-bottom: ${({ theme }) => theme.spacings.md};
  overflow-wrap: break-word;
    
`;

export const SCardBody = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.main.textColor};
  margin: 0;
  white-space: pre-line;  
`;
