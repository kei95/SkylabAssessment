// react/react-native
import React from "react";
import { Image, ImageStyle, StyleSheet, ViewStyle } from "react-native";

// UI
import { Container } from "native-base";
import globalStyles from "../../../components/globalStyles";

export const TopImage: React.FC = () => {
  return (
    <Container style={styles.container}>
      <Image
        resizeMode="cover"
        style={styles.image}
        source={require("../../../assets/img/landingImage.png")}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    ...globalStyles.shadow,
    width: "100%",
    maxHeight: 350,
    borderRadius: 10,
    marginTop: 20,
  } as ViewStyle,
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  } as ImageStyle,
});
