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
import { Icon } from "native-base";
import { headerColor } from "../../../../components/globalStyles";

// navigation
import { useHistory } from "react-router-dom";

export const CameraButton: React.FC = ({}) => {
  const history = useHistory();

  const onPressButton = async (): Promise<void> => {
    const { status } = await Camera.requestPermissionsAsync();
    if (status === "granted") {
      history.push("/camera");
    }
  };

  return (
    <TouchableOpacity onPress={onPressButton} style={styles.buttonFrame}>
      <Icon
        type="MaterialCommunityIcons"
        name="camera-plus"
        style={styles.icon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonFrame: {
    position: "absolute",
    bottom: 30,
    right: 30,
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: headerColor,
    zIndex: 999,
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  icon: {
    fontSize: 36,
    color: "#fff",
  } as TextStyle,
});
