import React from "react";

import { View, ActivityIndicator } from "react-native";
import { theme } from "../../global/styles/themes";
import { styles } from "./style";

export const Load = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </View>
  );
};
