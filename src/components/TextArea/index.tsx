import React, { useState } from "react";
import { TextInput, TextInputProps } from "react-native";
import { styles } from "./style";

export const TextArea = ({ ...rest }: TextInputProps) => {
  return <TextInput style={styles.container} {...rest} />;
};
