import { Component } from "react";

import { IErrorProps, IErrorState } from "@interfaces";
import { Container } from "@layout";

import { ErrorText } from "./styles";

export class ErrorBoundary extends Component<IErrorProps, IErrorState> {
  constructor(props: IErrorProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  public static getDerivedStateFromError(): IErrorState {
    return { hasError: true };
  }

  public componentDidCatch(error: Error) {
    this.setState({ error: error.toString() });
  }

  public render() {
    const { hasError, error } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <Container>
          <ErrorText>{error}</ErrorText>
        </Container>
      );
    }

    return children;
  }
}
