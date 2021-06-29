import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/themes";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 56,
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },

  buttonText: {
    flex: 1,
    color: theme.colors.heading,
    fontSize: 15,
    textAlign: "center",
    fontFamily: theme.fonts.text500,
  },
});
