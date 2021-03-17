// react/react-native
import { ImageURISource } from "react-native";

interface albumPhotos {
  id: number;
  title: string;
  data: ImageURISource[];
}

export const PHOTOS: albumPhotos[] = [
  {
    id: 1,
    title: "1touch",
    data: [require("../img/girl1.png")],
  },
  {
    id: 2,
    title: "Album Name",
    data: [
      require("../img/girl2.png"),
      require("../img/girl3.png"),
      require("../img/girl4.png"),
    ],
  },
  {
    id: 3,
    title: "Album Name",
    data: [require("../img/girl5.png"), require("../img/girl6.png")],
  },
  {
    id: 4,
    title: "Album Name",
    data: [require("../img/girl3.png")],
  },
];
