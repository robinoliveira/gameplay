import React from "react";
import { Image } from "react-native";
import { styles } from "./style";

export const GuildIcon = () => {
  const uri = "https://img.icons8.com/fluent/452/discord-new-logo.png";
  return <Image source={{ uri }} style={styles.image} resizeMode="cover" />;
};
