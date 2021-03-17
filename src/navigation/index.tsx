// react
import React from "react";

// screens
import { Landing } from "../screens/Landing/Landing";
import { Library } from "../screens/Library/Library";
import { CameraScreen } from "../screens/Camera/Camera";

// router
import { NativeRouter, Route } from "react-router-native";

export const RouterIndex: React.FC = () => {
  return (
    <NativeRouter>
      <Route exact path="/" component={Landing} />
      <Route path="/library" component={Library} />
      <Route path="/camera" component={CameraScreen} />
    </NativeRouter>
  );
};
