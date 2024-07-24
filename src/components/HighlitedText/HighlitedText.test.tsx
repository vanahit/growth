import React from 'react';
import { render, screen } from '@testing-library/react';
import HighlightedText from './';
import { IHighlightedTextProps } from './HighlitedText.types';

// Mock the SHighlightedText styled component
jest.mock('./HighlightedText.styles.ts', () => ({
    SHighlightedText: ({ children }: { children: React.ReactNode }) => (
        <mark data-testid="highlight">{children}</mark>
    ),
}));

describe('HighlightedText', () => {
    const defaultProps: IHighlightedTextProps = {
        text: 'This is a sample text for testing highlighted text component.',
        highlight: 'sample',
    };

    it('renders text without highlight when highlight is empty', () => {
        render(<HighlightedText {...defaultProps} highlight="" />);
        expect(screen.getByText(defaultProps.text)).toBeInTheDocument();
        expect(screen.queryByTestId('highlight')).not.toBeInTheDocument();
    });

    it('renders text without highlight when highlight is only whitespace', () => {
        render(<HighlightedText {...defaultProps} highlight="  " />);
        expect(screen.getByText(defaultProps.text)).toBeInTheDocument();
        expect(screen.queryByTestId('highlight')).not.toBeInTheDocument();
    });

    it('highlights matching substring', () => {
        render(<HighlightedText {...defaultProps} />);
        expect(screen.getByText('sample')).toBeInTheDocument();
        expect(screen.getByTestId('highlight')).toHaveTextContent('sample');
    });

    it('highlights matching substring case-insensitively', () => {
        render(<HighlightedText {...defaultProps} highlight="Sample" />);
        expect(screen.getByText('sample')).toBeInTheDocument();
        expect(screen.getByTestId('highlight')).toHaveTextContent('sample');
    });

    it('does not highlight when substring is not present', () => {
        render(<HighlightedText {...defaultProps} highlight="nonexistent" />);
        expect(screen.queryByTestId('highlight')).not.toBeInTheDocument();
    });

    it('highlights multiple occurrences of the substring', () => {
        render(<HighlightedText text="sample sample sample" highlight="sample" />);
        const highlights = screen.getAllByTestId('highlight');
        expect(highlights).toHaveLength(3);
        highlights.forEach((highlight) => {
            expect(highlight).toHaveTextContent('sample');
        });
    });
});
