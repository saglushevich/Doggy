import { Component, ErrorInfo } from "react";

import { Container } from "@components/layout";

import { ErrorText } from "./styles";
import { IErrorProps, IErrorState } from "./types";

export class ErrorBoundary extends Component<IErrorProps, IErrorState> {
  constructor(props: IErrorProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  public static getDerivedStateFromError(): IErrorState {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error: error.toString(),
      errorInfo: errorInfo.toString(),
    });
  }

  public render() {
    const { hasError, error, errorInfo } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <Container>
          <ErrorText>{error}</ErrorText>
          <ErrorText>{errorInfo}</ErrorText>
        </Container>
      );
    }

    return children;
  }
}
