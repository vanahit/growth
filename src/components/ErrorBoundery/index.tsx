import React, { Component, ReactNode } from 'react';
import ErrorPage from "../ErrorPage";
import {ErrorBoundaryProps, ErrorBoundaryState} from "./ErrorBoundary.types.ts";

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
            return <ErrorPage />
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
