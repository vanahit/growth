import { render, screen, theme } from 'tests/utils'; // Use the custom render function
import 'jest-styled-components';
import Loader from './';


describe('Loader', () => {
    it('renders with default size and without centered', () => {
        render(<Loader />);
        const loader = screen.getByTestId('loading');
        expect(loader).toBeInTheDocument();
        expect(loader).toHaveStyle(`width: 40px`);
        expect(loader).toHaveStyle(`height: 40px`);
        expect(loader).not.toHaveStyle(`position: absolute`);
    });

    it('renders with the given size', () => {
        render(<Loader size={60} />);
        const loader = screen.getByTestId('loading');
        expect(loader).toBeInTheDocument();
        expect(loader).toHaveStyle(`width: 60px`);
        expect(loader).toHaveStyle(`height: 60px`);
    });

    it('renders centered when centered prop is true', () => {
        render(<Loader centered />);
        const loader = screen.getByTestId('loading');
        expect(loader).toBeInTheDocument();
        expect(loader).toHaveStyle(`
      position: absolute;
      transform: translate(-50%, -50%);
    `);
    });

    it('applies correct border colors from theme', () => {
        render(<Loader />);
        const loader = screen.getByTestId('loading');
        const borderSize = theme.colors.gray;
        expect(loader).toHaveStyle(`border-top-color: ${borderSize}`);
        expect(loader).toHaveStyle(`border-right-color: ${borderSize}`);
        expect(loader).toHaveStyle(`border-left-color: ${borderSize}`);
    });
});
