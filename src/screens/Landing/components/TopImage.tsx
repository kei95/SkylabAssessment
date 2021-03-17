// react/react-native
import React from "react";
import { Image, ImageStyle, StyleSheet, ViewStyle } from "react-native";

// UI
import { Container } from "native-base";

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
    width: "100%",
    maxHeight: 350,
    borderRadius: 10,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 1,
  } as ViewStyle,
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  } as ImageStyle,
});
