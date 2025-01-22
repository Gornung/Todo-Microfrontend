import React, { Component, ErrorInfo, ReactNode } from 'react';

export interface ErrorProps {
  children?: ReactNode;
  fallback?: ReactNode;
}

export interface ErrorState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorProps, ErrorState> {
  public state: ErrorState = {
    hasError: false,
  };

  public static getDerivedStateFromError(): ErrorState {
    return {
      hasError: true,
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <h2>Ein Fehler ist aufgetreten</h2>;
    }

    return this.props.children;
  }
}
