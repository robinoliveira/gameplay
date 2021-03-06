import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { Text, View, Image } from "react-native";
import { styles } from "./style";

import DiscordImg from "../../assets/discord.png";

type Props = RectButtonProps & {
  title: string;
  //title?:string;-> significa que title é uma prop não obrigatória
};

export const ButtonIcon = ({ title, ...rest }: Props) => {
  return (
    <RectButton style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon} />
      </View>
      <Text style={styles.buttonText}>{title}</Text>
    </RectButton>
  );
};
