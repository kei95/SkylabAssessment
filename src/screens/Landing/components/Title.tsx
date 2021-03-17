// react/react-native
import React from "react";
import { StyleSheet, TextStyle } from "react-native";

// UI
import { H3 } from "native-base";

export const Title: React.FC = () => {
  return (
    <>
      <H3 style={styles.title}>Professional retouching.</H3>
      <H3 style={styles.title}>Powered by A.I.</H3>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: "left",
    fontWeight: "bold",
  } as TextStyle,
});
