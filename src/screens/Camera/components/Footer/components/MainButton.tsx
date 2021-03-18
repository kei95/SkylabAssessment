// react/react-native
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, ViewStyle } from "react-native";

// expo
import { Camera } from "expo-camera";

interface MainButtonProps {
  cameraRef: React.MutableRefObject<Camera>;
  setCapturedImage: React.Dispatch<string>;
}

export const MainButton: React.FC<MainButtonProps> = ({
  cameraRef,
  setCapturedImage,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onPressPictureButton = async (): Promise<void> => {
    if (isLoading) return;
    setIsLoading(true);
    if (!cameraRef?.current) {
      setIsLoading(false);
      return;
    }
    const { uri } = await cameraRef.current.takePictureAsync();
    setIsLoading(false);
    setCapturedImage(uri);
  };

  return (
    <TouchableOpacity
      style={styles.cameraButton}
      onPress={onPressPictureButton}
    />
  );
};

const styles = StyleSheet.create({
  cameraButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#fff",
  } as ViewStyle,
});
