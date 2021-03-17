// react/react-native
import React from "react";

// components
import { CommonHeader } from "../../components/Header";
import { PhotoLibrary } from "./components/PhotoLibrary/PhotoLibrary";
import { CameraButton } from "./components/CameraButton/CameraButton";

export const Library: React.FC = () => {
  return (
    <>
      <CommonHeader />
      <PhotoLibrary />
      <CameraButton />
    </>
  );
};
