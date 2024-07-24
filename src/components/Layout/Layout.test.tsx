import { render, screen } from 'tests/utils';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Layout from './';


const headerBody = 'Header'
const mainBody = 'Main'
jest.mock('components/Header', () => ({
    __esModule: true,
    default: () => <header>{headerBody}</header>,
}));

describe('Layout', () => {

    it('renders the Layout component with Header and Outlet', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="/" element={<main>{mainBody}</main>} />
                    </Route>
                </Routes>
            </MemoryRouter>
        );

        const header = screen.getByText('Header');
        const outlet = screen.getByText(mainBody);

        expect(header).toBeInTheDocument();
        expect(outlet).toBeInTheDocument();
    });
});
