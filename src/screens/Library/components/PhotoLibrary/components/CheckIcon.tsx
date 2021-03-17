// react/react-native
import React from "react";
import { Platform, StyleSheet, TextStyle, ViewStyle } from "react-native";

// UI
import { Icon, View } from "native-base";
import { headerColor } from "../../../../../components/globalStyles";

interface PhotoIconProps {
  isPressed: boolean;
}

export const CheckIcon: React.FC<PhotoIconProps> = ({ isPressed }) => {
  return isPressed ? (
    <View style={styles.circlePressed}>
      <Icon name="checkmark-circle" style={styles.checkedIcon} />
    </View>
  ) : (
    <View style={styles.circle} />
  );
};

const styles = StyleSheet.create({
  circle: {
    position: "absolute",
    width: 18,
    height: 18,
    bottom: 5,
    right: 5,
    borderRadius: 9,
    borderColor: "#fff",
    borderWidth: 0.5,
    backgroundColor: "rgba(0,0,0,0.5)",
  } as ViewStyle,
  circlePressed: {
    position: "absolute",
    width: 18,
    height: 18,
    bottom: 5,
    right: 5,
    borderRadius: 9,
    borderColor: "#fff",
    borderWidth: 0.5,
    backgroundColor: headerColor,
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  checkedIcon: {
    fontSize: 21.5,
    color: "#fff",
    width: 20,
    height: 20,
    marginBottom: Platform.OS === "ios" ? 2.5 : 3,
    marginLeft: Platform.OS === "ios" ? 0.9 : 0,
  } as TextStyle,
});
