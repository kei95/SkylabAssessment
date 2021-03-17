import { Container } from "native-base";
import React from "react";
import globalStyles from "./globalStyles";

interface defaultContainerProps {
  children: JSX.Element;
}

export const defaultContainer: React.FC<defaultContainerProps> = ({
  children,
}) => {
  return <Container style={globalStyles.globalContainer}>{children}</Container>;
};
