import  { useRef } from 'react';
import { render, screen } from 'tests/utils';  // Use the custom render function
import { Input, Textarea } from './';
import { IInputProps, ITextareaProps } from './Input.types';

describe('Input and Textarea components', () => {
    const defaultInputProps: IInputProps = {
        placeholder: 'Enter text',
    };

    const defaultTextareaProps: ITextareaProps = {
        placeholder: 'Enter text',
    };

    it('renders the Input component', () => {
        render(<Input {...defaultInputProps} />);
        const inputElement = screen.getByPlaceholderText(defaultInputProps.placeholder || '');
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveAttribute('placeholder', defaultInputProps.placeholder);
    });

    it('renders the Textarea component', () => {
        render(<Textarea {...defaultTextareaProps} />);
        const textareaElement = screen.getByPlaceholderText(defaultTextareaProps.placeholder || '');
        expect(textareaElement).toBeInTheDocument();
        expect(textareaElement).toHaveAttribute('placeholder', defaultTextareaProps.placeholder);
    });

    it('forwards ref to the Input component', () => {
        const TestComponent = () => {
            const inputRef = useRef<HTMLInputElement>(null);
            return <Input ref={inputRef} {...defaultInputProps} />;
        };
        render(<TestComponent />);
        const inputElement = screen.getByPlaceholderText(defaultInputProps.placeholder || '');
        expect(inputElement).toBeInTheDocument();
    });

    it('forwards ref to the Textarea component', () => {
        const TestComponent = () => {
            const textareaRef = useRef<HTMLTextAreaElement>(null);
            return <Textarea ref={textareaRef} {...defaultTextareaProps} />;
        };
        render(<TestComponent />);
        const textareaElement = screen.getByPlaceholderText(defaultTextareaProps.placeholder || '');
        expect(textareaElement).toBeInTheDocument();
    });
});
