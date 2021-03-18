// react/react-native
import React from "react";
import {
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

// UI
import { Icon } from "native-base";

// router
import { useHistory } from "react-router-dom";

export const CloseButton: React.FC = () => {
  const history = useHistory();

  const onPressCloseButton = (): void => {
    history.goBack();
  };

  return (
    <TouchableOpacity style={styles.closeButton} onPress={onPressCloseButton}>
      <Icon name="close" style={styles.closeIcon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
