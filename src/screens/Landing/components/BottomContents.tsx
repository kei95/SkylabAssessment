// react/react-native
import React from "react";
import { StyleSheet, TextStyle } from "react-native";

// UI
import { Text } from "native-base";

// components
import { SelectPhotoButton } from "./SelectPhotoButton";

export const BottomContents: React.FC = () => {
  return (
    <>
      <Text style={styles.topText}>Select a photo to start</Text>
      <SelectPhotoButton />
      <Text style={styles.ToS}>
        by selecting a photo you agree to our{" "}
        <Text style={styles.TosBold}>Terms of Service</Text> and{" "}
        <Text style={styles.TosBold}>Privacy Policy</Text>
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  topText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 22,
  } as TextStyle,
  ToS: {
    fontSize: 8,
    textAlign: "center",
    color: "#B1BBC7",
    marginTop: 28,
  } as TextStyle,
  TosBold: {
    fontSize: 8,
    fontWeight: "bold",
    textAlign: "center",
    color: "#B1BBC7",
  } as TextStyle,
});
