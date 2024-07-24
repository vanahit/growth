import { render, screen } from 'tests/utils';
import Header from './';

// Mock the Navbar component
jest.mock('components/Navbar', () => {
    return {
        __esModule: true,
        default: () => <nav data-testid="navbar">Mocked Navbar</nav>
    };
});

describe('Header', () => {
    it('renders correctly with the Navbar component', () => {
        render(<Header />);
        expect(screen.getByTestId('navbar')).toBeInTheDocument();
    });
});
