// react/react-native
import React from "react";
import { TextStyle, StyleSheet, ViewStyle } from "react-native";

// expo
import * as ImagePicker from "expo-image-picker";

// UI
import { Button, Text } from "native-base";
import platform from "../../../../native-base-theme/variables/platform";

// navigation
import { useHistory } from "react-router-dom";
import globalStyles from "../../../components/globalStyles";

export const SelectPhotoButton: React.FC = () => {
  const history = useHistory();

  const pickImage = async () => {
    let result: ImagePicker.ImagePickerResult = await ImagePicker.launchImageLibraryAsync(
      {
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
      }
    );

    if (!result.cancelled) {
      history.push("/library");
    }
  };

  return (
    <Button onPress={pickImage} style={styles.button}>
      <Text style={styles.buttonText}>SELECT PHOTO</Text>
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    ...globalStyles.shadow,
    width: "100%",
    height: 55,
    borderRadius: 12,
    backgroundColor: "#D0D4F3",
    justifyContent: "center",
  } as ViewStyle,
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: platform.textColor,
  } as TextStyle,
});
