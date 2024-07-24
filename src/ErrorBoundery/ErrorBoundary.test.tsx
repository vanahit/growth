import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorBoundary from './index.tsx';

// Mock the Row component if necessary
jest.mock('components/Grid', () => ({
    Row: ({ children, ...props }: { children: React.ReactNode }) => (
        <div data-testid="row" {...props}>
            {children}
        </div>
    ),
}));

describe('ErrorBoundary', () => {
    // Suppress error logs to keep the test output clean
    const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});

    const ThrowError = () => {
        throw new Error('Test error');
    };

    afterAll(() => {
        consoleError.mockRestore();
    });

    it('catches errors and displays the fallback UI', () => {
        render(
            <ErrorBoundary>
                <ThrowError />
            </ErrorBoundary>
        );

        expect(screen.getByText('OOPS! Something went wrong!')).toBeInTheDocument();
    });

    it('renders children when there is no error', () => {
        render(
            <ErrorBoundary>
                <div data-testid="child">Child component</div>
            </ErrorBoundary>
        );

        expect(screen.getByTestId('child')).toBeInTheDocument();
    });
});
