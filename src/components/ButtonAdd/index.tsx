import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { styles } from "./style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "../../global/styles/themes";

type Props = RectButtonProps & {
  title: string;
  //title?:string;-> significa que title é uma prop não obrigatória
};

export const ButtonAdd = ({ ...rest }: RectButtonProps) => {
  return (
    <RectButton style={styles.container} {...rest}>
      <MaterialCommunityIcons
        name="plus"
        color={theme.colors.heading}
        size={24}
      />
    </RectButton>
  );
};
