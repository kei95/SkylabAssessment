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

// expo
import * as MediaLibrary from "expo-media-library";

interface PreviewRightButtonProps {
  onPress: React.Dispatch<React.SetStateAction<string | undefined>>;
  uri?: string;
}

export const PreviewRightButton: React.FC<PreviewRightButtonProps> = ({
  onPress,
  uri,
}) => {
  const onPressSave = async (): Promise<void> => {
    await MediaLibrary.createAssetAsync(uri);
    onPress(undefined);
  };
  return (
    <TouchableOpacity style={styles.button} onPress={onPressSave}>
      <Text style={styles.text}>Save</Text>
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
