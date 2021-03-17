// react/react-native
import React, { useState } from "react";
import {
  ImageURISource,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageStyle,
  ViewStyle,
  Platform,
} from "react-native";

// components
import { CheckIcon } from "./CheckIcon";

interface PhotoListProps {
  item: ImageURISource;
}

export const PhotoList: React.FC<PhotoListProps> = ({ item }) => {
  const [isPressed, setIsPressed] = useState<boolean>(false);

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => setIsPressed(!isPressed)}
      style={styles.imageFrame}
    >
      <Image style={styles.image} resizeMode="contain" source={item} />
      <CheckIcon isPressed={isPressed} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageFrame: {
    width: 90,
    height: 90,
    borderRadius: Platform.OS === "ios" ? 10 : 4,
    marginRight: 10,
  } as ViewStyle,
  image: {
    width: 90,
    height: 90,
    borderRadius: Platform.OS === "ios" ? 10 : 4,
  } as ImageStyle,
});
