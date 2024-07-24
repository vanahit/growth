import { render, screen, fireEvent, waitFor } from 'tests/utils';
import AlertMessage from './';
import { IAlertMessageType } from './AlertMessage.type';
import { messageColorsByType } from './AlertMessage.styles'; // Import style variables

describe('AlertMessage', () => {
    const defaultProps: IAlertMessageType = {
        message: 'Test message',
        onClose: jest.fn(),
        type: 'success',
        delay: 3000,
        size: 'sm',
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders correctly with the given message', async () => {
        render(<AlertMessage {...defaultProps} />);
        await waitFor(() => expect(screen.getByText('Test message')).toBeInTheDocument());
    });

    it('calls onClose after the specified delay', async () => {
        jest.useFakeTimers();
        const { onClose } = defaultProps;
        render(<AlertMessage {...defaultProps} />);

        expect(onClose).not.toHaveBeenCalled();
        jest.advanceTimersByTime(3000);

        await waitFor(() => expect(onClose).toHaveBeenCalled());

        jest.useRealTimers();
    });

    it('calls onClose when the close icon is clicked', async () => {
        const { onClose } = defaultProps;
        render(<AlertMessage {...defaultProps} />);

        const closeIcon = await screen.findByRole('button');
        fireEvent.click(closeIcon);

        expect(onClose).toHaveBeenCalled();
    });

    it('does not call onClose if delay is not provided', async () => {
        jest.useFakeTimers();
        const { onClose } = defaultProps;
        render(<AlertMessage {...defaultProps} delay={undefined} />);

        expect(onClose).not.toHaveBeenCalled();
        jest.advanceTimersByTime(3000);

        await waitFor(() => expect(onClose).not.toHaveBeenCalled());

        jest.useRealTimers();
    });

    it('renders the correct styles for success type', async () => {
        render(<AlertMessage {...defaultProps} type="success" />);
        const alert = await screen.findByText('Test message');
        expect(alert).toHaveStyle(`color: ${messageColorsByType.success.color}`);
        expect(alert).toHaveStyle(`background-color: ${messageColorsByType.success.bg}`);
    });

    it('renders the correct styles for danger type', async () => {
        render(<AlertMessage {...defaultProps} type="danger" />);
        const alert = await screen.findByText('Test message');
        expect(alert).toHaveStyle(`color: ${messageColorsByType.danger.color}`);
        expect(alert).toHaveStyle(`background-color: ${messageColorsByType.danger.bg}`);
    });

    it('renders the correct styles for info type', async () => {
        render(<AlertMessage {...defaultProps} type="info" />);
        const alert = await screen.findByText('Test message');
        expect(alert).toHaveStyle(`color: ${messageColorsByType.info.color}`);
        expect(alert).toHaveStyle(`background-color: ${messageColorsByType.info.bg}`);
    });

    it('renders the correct styles for warning type', async () => {
        render(<AlertMessage {...defaultProps} type="warning" />);
        const alert = await screen.findByText('Test message');
        expect(alert).toHaveStyle(`color: ${messageColorsByType.warning.color}`);
        expect(alert).toHaveStyle(`background-color: ${messageColorsByType.warning.bg}`);
    });

    it('does not render when the message is empty',  () => {
        render(<AlertMessage {...defaultProps} message="" />);
        const alert = screen.queryByText('Test message');
        expect(alert).not.toBeInTheDocument();
    });

});
