// react/react-native
import React from "react";
import {
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

// expo
import { Camera } from "expo-camera";

// UI
import { Text } from "native-base";

interface LeftButtonProps {
  onPressFlip: React.Dispatch<React.SetStateAction<string | number>>;
  type: string | number;
}

export const LeftButton: React.FC<LeftButtonProps> = ({
  onPressFlip,
  type,
}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        onPressFlip(
          type === Camera.Constants.Type.back
            ? Camera.Constants.Type.front
            : Camera.Constants.Type.back
        );
      }}
    >
      <Text style={styles.text}>Flip</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: "white",
  } as TextStyle,
  button: {
    alignSelf: "flex-end",
  } as ViewStyle,
});
