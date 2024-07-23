import styled from 'styled-components';


export const SAvatar = styled.img`
    border-radius: 8px;
    width: 120px;
    height: 120px;
    object-fit: cover;
    margin-bottom: 20px;
`;

export const SInfoItem = styled.div`
    margin-bottom: ${({ theme }) => theme.spacings.md};
    font-size: ${({ theme }) => theme.fontSizes.md};
`;

export const STitle = styled.h2`
    font-size:${({ theme }) => theme.fontSizes.xl};
    margin-bottom: ${({ theme }) => theme.spacings.lg};
`;
