import {render, screen} from 'tests/utils';
import EmptyState from './';
import {IEmptyStateProps} from './EmptyState.types';
import {EIconNames} from "../Icon";

// Mock the Icon component and EIconNames
jest.mock('components/Icon', () => {
    return {
        __esModule: true,
        EIconNames: {
            FILE: 'file-icon'
        },
        Icon: () => <div data-testid="icon">icon</div>
    };
});

describe('EmptyState', () => {
    const defaultProps: IEmptyStateProps = {
        message: 'No data available',
        action: <button>Retry</button>,
        icon: EIconNames.FILE,
    };

    it('renders correctly with the given message and icon', () => {
        render(<EmptyState {...defaultProps} />);
        expect(screen.getByText('No data available')).toBeInTheDocument();
        expect(screen.getByTestId('icon')).toBeInTheDocument();
    });

    it('renders action when provided', () => {
        render(<EmptyState {...defaultProps} />);
        expect(screen.getByText('Retry')).toBeInTheDocument();
    });

    it('does not render icon when not provided', () => {
        render(<EmptyState  message={defaultProps.message} action={defaultProps.action} />);
        expect(screen.queryByTestId('icon')).not.toBeInTheDocument();
    });

    it('does not render action when not provided', () => {
        render(<EmptyState message={defaultProps.message} icon={defaultProps.icon} />);
        expect(screen.queryByText('Retry')).not.toBeInTheDocument();
    });
});
