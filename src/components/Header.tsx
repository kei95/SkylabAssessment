// react/react-native
import React from "react";
import { StyleSheet, ViewStyle } from "react-native";

// UI
import { Header, Body, Left, Right, Title } from "native-base";
import platform from "../../native-base-theme/variables/platform";
import { headerColor } from "./globalStyles";

interface HeaderProps {
  title?: string;
  left?: JSX.Element;
  right?: JSX.Element;
}

export const CommonHeader: React.FC<HeaderProps> = ({ title, left, right }) => {
  return (
    <Header style={styles.headerBody}>
      {left && <Left>{left}</Left>}
      {title && (
        <Body>
          <Title>{title}</Title>
        </Body>
      )}
      {right && <Right>{right}</Right>}
    </Header>
  );
};

const styles = StyleSheet.create({
  headerBody: {
    backgroundColor: headerColor,
    height: platform.toolbarHeight,
  } as ViewStyle,
});
