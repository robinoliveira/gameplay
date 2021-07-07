import React from "react";
import { View } from "react-native";
import { styles } from "./style";

type Props = {
  isCenter?: boolean;
};

export const ListDivider = ({ isCenter }: Props) => {
  return (
    <View
      style={[
        styles.container,
        isCenter ? { marginVertical: 12 } : { marginTop: 2, marginBottom: 31 },
      ]}
    />
  );
};
