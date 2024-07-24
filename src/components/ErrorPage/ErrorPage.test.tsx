import {fireEvent, render, screen} from 'tests/utils.tsx';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ErrorPage from './';
import {IButtonProps} from "../Button/Button.types.ts";

// Mock the Button component if needed
jest.mock('components/Button', () => (props: IButtonProps) => (
    <button {...props}>{props.children}</button>
));

// Create a mock function for useNavigate
const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', ():unknown => {
    return {
        ...jest.requireActual('react-router-dom'),
        useNavigate: () => mockUseNavigate,
    };
});

describe('ErrorPage', () => {
    it('should render 404 message when on /404 path', () => {
        render(
            <MemoryRouter initialEntries={['/404']}>
                <Routes>
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </MemoryRouter>
        );

        // Assert that the 404 message is displayed
        expect(screen.getByText('404 - Page Not Found')).toBeInTheDocument();
        expect(screen.getByText('Sorry, the page you are looking for does not exist.')).toBeInTheDocument();
    });

    it('should render general error message when not on /404 path', () => {
        render(
            <MemoryRouter initialEntries={['/some-other-path']}>
                <Routes>
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </MemoryRouter>
        );

        // Assert that the general error message is displayed
        expect(screen.getByText('OOPS! Something went wrong!')).toBeInTheDocument();
        expect(screen.getByText('We\'re sorry, but something went wrong. Please try again later.')).toBeInTheDocument();
    });

    it('should navigate back when "Go to Home" button is clicked', () => {
        render(
            <MemoryRouter initialEntries={['/some-other-path']}>
                <Routes>
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </MemoryRouter>
        );

        // Simulate clicking the button
        fireEvent.click(screen.getByText('Go to Home'));

        // Assert that the navigate function was called with the correct argument
        expect(mockUseNavigate).toHaveBeenCalledWith(-1);
    });
});
