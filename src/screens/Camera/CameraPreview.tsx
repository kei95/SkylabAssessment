// react/react-native
import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

// expo
import { View } from "native-base";
import { Footer } from "./components/Footer/Footer";

interface CameraPreviewProps {
  capturedImage: string;
  setCapturedImage?: React.Dispatch<string | undefined>;
}

export const CameraPreview: React.FC<CameraPreviewProps> = ({
  capturedImage,
  setCapturedImage,
}) => {
  return (
    <View style={styles.body}>
      <ImageBackground
        source={{ uri: capturedImage }}
        style={styles.backgroundImage}
      >
        <Footer
          isPreView
          capturedImage={capturedImage}
          setCapturedImage={setCapturedImage}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: "transparent",
    flex: 1,
    width: "100%",
    height: "100%",
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
