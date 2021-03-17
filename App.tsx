// react/react-native
import React, { useEffect } from "react";
import { Platform } from "react-native";

// expo
import * as ImagePicker from "expo-image-picker";

// UI
import { Body, StyleProvider } from "native-base";
import getTheme from "./native-base-theme/components";

// components
import { RouterIndex } from "./src/navigation";
import platform from "./native-base-theme/variables/platform";

export default function App(): JSX.Element {
  useEffect(() => {
    let isMounted: boolean = true;
    if (isMounted) {
      // Get library permission
      (async (): Promise<void> => {
        if (Platform.OS !== "web") {
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        }
      })();
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <StyleProvider style={getTheme(platform)}>
      <Body>
        <RouterIndex />
      </Body>
    </StyleProvider>
  );
}
