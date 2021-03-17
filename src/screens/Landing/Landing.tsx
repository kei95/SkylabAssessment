// react/react-native
import React, { useEffect, useState } from "react";

// UI
import { Container } from "native-base";
import globalStyles from "../../components/globalStyles";
import * as Font from "expo-font";

// components
import { TopImage } from "./components/TopImage";
import { Title } from "./components/Title";
import { BottomContents } from "./components/BottomContents";

export const Landing: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Set fonts for native-base
    (async () => {
      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      });
      setIsLoading(false);
    })();
  });

  return isLoading ? (
    <Container style={globalStyles.globalContainer} />
  ) : (
    <Container style={globalStyles.globalContainer}>
      <Title />
      <TopImage />
      <BottomContents />
    </Container>
  );
};
