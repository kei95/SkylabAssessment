import { ViewStyle } from "react-native";

export const backgroundColor: string = "#F4F4F8";

export const headerColor: string = "#373761";

export default {
  globalBody: {
    flex: 1,
    backgroundColor: backgroundColor,
  } as ViewStyle,
  flex: {
    flex: 1,
  } as ViewStyle,
  globalContainer: {
    backgroundColor: backgroundColor,
    marginHorizontal: "8%",
    justifyContent: "center",
  } as ViewStyle,
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 1,
  } as ViewStyle,
};
