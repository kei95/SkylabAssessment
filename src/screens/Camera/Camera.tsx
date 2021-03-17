// react/react-native
import React, { useState } from "react";
import {
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

// expo
import { Camera } from "expo-camera";

// UI
import { Container, View, Text, Icon } from "native-base";

// router
import { useHistory } from "react-router-dom";

export const CameraScreen: React.FC = ({}) => {
  const [type, setType] = useState(Camera.Constants.Type.back);
  const history = useHistory();

  const onPressCloseButton = (): void => {
    history.goBack();
  };

  return (
    <Container>
      <Camera style={styles.camera} type={type}>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={onPressCloseButton}
        >
          <Icon name="close" style={styles.closeIcon} />
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </Container>
  );
};

const styles = StyleSheet.create({
  camera: {
    flex: 1,
  } as ViewStyle,
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    margin: 20,
  } as ViewStyle,
  button: {
    flex: 0.1,
    alignSelf: "flex-end",
    alignItems: "center",
  } as ViewStyle,
  text: {
    fontSize: 18,
    color: "white",
  } as TextStyle,
  closeButton: {
    flex: 0.1,
    alignItems: "center",
    alignSelf: "flex-start",
    margin: 10,
  } as ViewStyle,
  closeIcon: {
    fontSize: 40,
    color: "#fff",
  } as TextStyle,
});
