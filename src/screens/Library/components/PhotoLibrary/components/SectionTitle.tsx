// react/react-native
import React from "react";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";

// UI
import { View, Text, Icon } from "native-base";
import { headerColor } from "../../../../../components/globalStyles";

interface SectionTitleProps {
  title: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <View style={styles.sectionTitleBody}>
      <Text style={styles.title}>{title}</Text>
      <Icon name="chevron-forward" style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitleBody: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
    marginBottom: 10,
    marginRight: 24,
  } as ViewStyle,
  title: {
    fontSize: 18,
    marginLeft: 38,
    color: headerColor,
  } as TextStyle,
  icon: {
    color: "#D0D4F3",
    fontSize: 22,
    fontWeight: "bold",
  } as TextStyle,
});
