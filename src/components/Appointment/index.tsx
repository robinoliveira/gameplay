import React, { useState } from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { View } from "react-native";
import { styles } from "./style";
import { GuildIcon } from "../GuildIcon";

type Props = RectButtonProps & {
  data: AppointmentProps;
};

export type GuildProps = {};

export type AppointmentProps = {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
};

export const Appointment = ({ data, ...rest }: Props) => {
  return (
    <RectButton {...rest}>
      <View style={styles.container}>
        <GuildIcon />
      </View>
    </RectButton>
  );
};
