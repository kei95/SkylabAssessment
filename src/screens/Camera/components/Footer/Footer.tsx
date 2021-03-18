// react/react-native
import React from "react";
import { StyleSheet, ViewStyle, View } from "react-native";

// expo
import { Camera } from "expo-camera";

// components
import { MainButton } from "./components/MainButton";
import { LeftButton } from "./components/LeftButton";
import { RightButton } from "./components/RightButton";
import { PreviewLeftButton } from "./components/PreviewLeftButton";
import { PreviewRightButton } from "./components/PreviewRightButton";

interface FooterProps {
  onPressFlip?: React.Dispatch<React.SetStateAction<string | number>>;
  setCapturedImage?: React.Dispatch<string | undefined>;
  capturedImage?: string;
  type?: string | number;
  cameraRef?: React.MutableRefObject<Camera>;
  isPreView?: boolean;
}

export const Footer: React.FC<FooterProps> = ({
  onPressFlip,
  setCapturedImage,
  capturedImage,
  type,
  cameraRef,
  isPreView,
}) => {
  return (
    <View style={styles.buttonContainer}>
      <View style={styles.footerInner}>
        {isPreView ? (
          <>
            <PreviewLeftButton onPress={setCapturedImage} />
            <PreviewRightButton
              onPress={setCapturedImage}
              uri={capturedImage}
            />
          </>
        ) : (
          <>
            <LeftButton onPressFlip={onPressFlip} type={type} />
            <MainButton
              cameraRef={cameraRef}
              setCapturedImage={setCapturedImage}
            />
            <RightButton />
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
  } as ViewStyle,
  footerInner: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    marginHorizontal: 30,
  },
});
