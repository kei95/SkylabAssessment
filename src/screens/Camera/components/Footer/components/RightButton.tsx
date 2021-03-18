// react/react-native
import React from "react";
import { TextStyle, StyleSheet } from "react-native";

// UI
import { Text } from "native-base";

export const RightButton: React.FC = () => {
  return <Text style={styles.textHidden}>Flip</Text>;
};

const styles = StyleSheet.create({
  textHidden: {
    fontSize: 18,
    color: "white",
    opacity: 0,
  } as TextStyle,
});
