import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { View, Text } from "react-native";
import { styles } from "./style";
import { GuildIcon } from "../GuildIcon";
import { categories } from "../../utils/categories";
import PlayerSvg from "../../assets/player.svg";
import CalendarSvg from "../../assets/calendar.svg";
import { theme } from "../../global/styles/themes";
import { GuildProps } from "../Guild";
import { LinearGradient } from "expo-linear-gradient";

type Props = RectButtonProps & {
  data: AppointmentProps;
};

export type AppointmentProps = {
  id: string;
  guildSelected: GuildProps;
  category: string;
  date: string;
  description: string;
};

export const Appointment = ({ data, ...rest }: Props) => {
  const [category] = categories.filter((item) => item.id === data.category);
  const { owner } = data.guildSelected;

  const { primary, on, secondary50, secondary70 } = theme.colors;
  return (
    <RectButton {...rest}>
      <View style={styles.container}>
        <LinearGradient
          style={styles.guildContainer}
          colors={[secondary50, secondary70]}
        >
          <GuildIcon
            guildId={data.guildSelected.id}
            iconId={data.guildSelected.icon}
          />
        </LinearGradient>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{data.guildSelected.name}</Text>
            <Text style={styles.category}>
              {category ? category.title : "Sem categoria"}
            </Text>
          </View>
          <View style={styles.footer}>
            <View style={styles.dateInfo}>
              <CalendarSvg />
              <Text style={styles.date}>{data.date}</Text>
            </View>
            <View style={styles.playersInfo}>
              <PlayerSvg fill={owner ? primary : on} />
              <Text style={[styles.player, { color: owner ? primary : on }]}>
                {owner ? "Anfitrião" : "Visitante"}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </RectButton>
  );
};
