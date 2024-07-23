import styled from 'styled-components';
import {Col, Row} from "components/Grid";

export const SEmptyStateContainer = styled(Row)`
    display: flex;
    flex:1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${({theme}) => theme.spacings.md};
    color: ${({theme}) => theme.emptyState.textColor};
    text-align: center;
    height: 80%;
`;

export const SEmptyStateIcon = styled(Col)`
  margin-bottom: ${({ theme }) => theme.spacings.sm};
`;

export const SEmptyStateMessage = styled(Col)`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;
