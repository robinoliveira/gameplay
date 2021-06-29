import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { Text } from "react-native";
import { styles } from "./style";

type Props = RectButtonProps & {
  title: string;
  //title?:string;-> significa que title é uma prop não obrigatória
};

export const Button = ({ title, ...rest }: Props) => {
  return (
    <RectButton style={styles.container} {...rest}>
      <Text style={styles.buttonText}>{title}</Text>
    </RectButton>
  );
};
