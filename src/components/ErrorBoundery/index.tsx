import React, { Component, ReactNode } from 'react';
import {Row} from "components/Grid";

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.log("Error caught in ErrorBoundary:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <Row className='h-100' align='middle' justify='center'><h1>OOPS! Something went wrong!</h1></Row>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
