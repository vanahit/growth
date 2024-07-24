import { render, screen } from '@testing-library/react';
import Icon, {EIconNames} from './';
import { IIconProps } from './Icon.type';

// Mock the Loading component
jest.mock('components/Loading', () => ({
    __esModule: true,
    default: ({ size }: { size: number }) => (
        <div data-testid="loading" style={{ fontSize: size }}>Loading...</div>
    ),
}));

describe('Icon', () => {
    const defaultProps: IIconProps = {
        color: 'red',
        size: 24,
        icon: EIconNames.FILE,
        className: 'test-class',
        role: 'img',
        onClick: jest.fn(),
        dataTestId: 'icon-test',
        loading: false,
    };

    it('renders the Loading component when loading is true', () => {
        render(<Icon {...defaultProps} loading={true} />);
        const loadingComponent = screen.getByTestId('loading');
        expect(loadingComponent).toBeInTheDocument();
        expect(loadingComponent).toHaveStyle('font-size: 20px'); // size - 4
    });

    it('renders the IcomoonReact component when loading is false', () => {
        render(<Icon {...defaultProps} loading={false} />);
        const icomoonComponent = screen.getByTestId(defaultProps?.dataTestId || '');
        expect(icomoonComponent).toBeInTheDocument();
    });
});
