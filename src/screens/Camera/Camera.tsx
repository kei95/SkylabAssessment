// react/react-native
import React, { useRef, useState } from "react";
import { StyleSheet, ViewStyle } from "react-native";

// expo
import { Camera } from "expo-camera";

// UI
import { Container } from "native-base";

// router
import { Footer } from "./components/Footer/Footer";
import { CloseButton } from "./components/CloseButton";
import { CameraPreview } from "./CameraPreview";

export const CameraScreen: React.FC = () => {
  const [type, setType] = useState<string | number>(Camera.Constants.Type.back);
  const [capturedImage, setCapturedImage] = useState<string | undefined>(
    undefined
  );
  const cameraRef = useRef<Camera | undefined>(undefined);

  return (
    <Container>
      {capturedImage ? (
        <CameraPreview
          capturedImage={capturedImage}
          setCapturedImage={setCapturedImage}
        />
      ) : (
        <Camera
          style={styles.camera}
          ref={(ref: Camera) => {
            cameraRef.current = ref;
          }}
          type={type}
        >
          <CloseButton />
          <Footer
            setCapturedImage={setCapturedImage}
            onPressFlip={setType}
            type={type}
            cameraRef={cameraRef}
          />
        </Camera>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  camera: {
    flex: 1,
  } as ViewStyle,
});
