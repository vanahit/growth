import { render, screen } from 'tests/utils';
import Card from './';
import { ICardProps } from './Card.types';

describe('Card', () => {
    const defaultProps: ICardProps = {
        title: 'Card Title',
        body: 'Card body content goes here.',
        actions: <button>Action</button>,
    };

    it('renders correctly with the given title and body', () => {
        render(<Card {...defaultProps} />);
        expect(screen.getByText('Card Title')).toBeInTheDocument();
        expect(screen.getByText('Card body content goes here.')).toBeInTheDocument();
    });

    it('renders actions when provided', () => {
        render(<Card {...defaultProps} />);
        expect(screen.getByText('Action')).toBeInTheDocument();
    });

    it('does not render actions when not provided', () => {
        const {  ...propsWithoutActions } = defaultProps;
        render(<Card {...propsWithoutActions} actions={undefined} />);
        expect(screen.queryByText('Action')).not.toBeInTheDocument();
    });
});
