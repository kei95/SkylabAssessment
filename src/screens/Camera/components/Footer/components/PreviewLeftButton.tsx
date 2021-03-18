// react/react-native
import React from "react";
import {
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

// UI
import { Text } from "native-base";

interface PreviewLeftButtonProps {
  onPress: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export const PreviewLeftButton: React.FC<PreviewLeftButtonProps> = ({
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => onPress(undefined)}>
      <Text style={styles.text}>Re-take</Text>
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
