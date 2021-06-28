import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/themes";
import { getBottomSpace } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
  banner: {
    width: "100%",
    height: 234,
    marginBottom: 30,
  },

  bannerContent: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 24,
    marginTop: 30,
  },

  title: {
    fontSize: 28,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
  },

  subtitle: {
    fontSize: 13,
    fontFamily: theme.fonts.text400,
    color: theme.colors.heading,
  },

  players: {
    marginTop: 30,
  },

  footer: {
    paddingHorizontal: 24,
    paddingVertical: 20,
    marginBottom: getBottomSpace(),
  },
});
