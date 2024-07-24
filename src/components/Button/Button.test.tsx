import { render, screen, theme } from 'tests/utils';
import Button from './';
import { IButtonProps } from './Button.types';


// Mock the Loader component
jest.mock('components/Loading', () => () => <div data-testid="loader">Loading...</div>);

describe('Button', () => {
    const defaultProps: IButtonProps = {
        children: 'Click me',
        outline: false,
        loading: false,
        type: 'button',
    };

    it('renders correctly with the given children', () => {
        render(<Button {...defaultProps} />);
        expect(screen.getByText('Click me')).toBeInTheDocument();
    });

    it('renders the loader when loading is true', () => {
        render(<Button {...defaultProps} loading={true} />);
        expect(screen.getByTestId('loader')).toBeInTheDocument();
    });

    it('does not render the loader when loading is false', () => {
        render(<Button {...defaultProps} loading={false} />);
        expect(screen.queryByTestId('loader')).not.toBeInTheDocument();
    });

    it('is disabled when loading is true', () => {
        render(<Button {...defaultProps} loading={true} />);
        expect(screen.getByRole('button')).toBeDisabled();
    });

    it('is not disabled when loading is false', () => {
        render(<Button {...defaultProps} loading={false} />);
        expect(screen.getByRole('button')).not.toBeDisabled();
    });

    it('applies the outline style when outline is true', () => {
        render(<Button {...defaultProps} outline={true} />);
        expect(screen.getByRole('button')).toHaveStyle(`border: 1px solid ${theme.button.background}`);
    });

    it('does not apply the outline style when outline is false', () => {
        render(<Button {...defaultProps} outline={false} />);
        expect(screen.getByRole('button')).not.toHaveStyle('border: 1px solid');
    });
});
