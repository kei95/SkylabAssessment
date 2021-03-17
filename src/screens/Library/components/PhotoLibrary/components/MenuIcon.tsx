// react/react-native
import React from "react";
import { StyleSheet, ViewStyle } from "react-native";

// UI
import { Icon, View } from "native-base";

export const MenuIcon: React.FC = () => {
  return (
    <View style={styles.body}>
      <Icon name="menu" />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    alignItems: "flex-end",
    marginRight: 20,
    marginTop: 10,
  } as ViewStyle,
});
