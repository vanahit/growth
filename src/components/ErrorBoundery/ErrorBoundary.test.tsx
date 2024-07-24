import { render, screen } from '@testing-library/react';
import ErrorBoundary from './';

// Mock the ErrorPage component
jest.mock('../ErrorPage', () => () => <div data-testid="error-page">Error Page</div>);

const ProblemChild = () => {
    throw new Error('Test error');
};

describe('ErrorBoundary', () => {
    const originalConsoleError = console.error;

    beforeAll(() => {
        console.error = jest.fn(); // Suppress console.error
    });

    afterAll(() => {
        console.error = originalConsoleError; // Restore console.error
    });

    it('should render ErrorPage when a child component throws an error', () => {
        render(
            <ErrorBoundary>
                <ProblemChild />
            </ErrorBoundary>
        );

        // Assert that the ErrorPage component is rendered
        expect(screen.getByTestId('error-page')).toBeInTheDocument();
    });

    it('should render children when there is no error', () => {
        render(
            <ErrorBoundary>
                <div data-testid="child">Child Component</div>
            </ErrorBoundary>
        );

        // Assert that the child component is rendered
        expect(screen.getByTestId('child')).toBeInTheDocument();
    });
});
