import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
  },

  avaiable: {
    flexDirection: "row",
    alignItems: "center",
  },

  sOnline: {
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: theme.colors.on,
    marginRight: 8,
  },

  sOffline: {
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: theme.colors.primary,
    marginRight: 8,
  },

  title: {
    fontFamily: theme.fonts.title700,
    fontSize: 18,
    color: theme.colors.heading,
  },

  subtitle: {
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    color: theme.colors.highlight,
  },
});
