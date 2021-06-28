import React, { useState } from "react";
import { BorderlessButton } from "react-native-gesture-handler";
import { Fontisto } from "@expo/vector-icons";
import { View, ImageBackground, Text, FlatList } from "react-native";
import { styles } from "./style";
import { Avatar } from "../../components/Avatar";
import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { Appointment } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { theme } from "../../global/styles/themes";
import BannerImg from "../../assets/banner.png";

export type MemberProps = {
  id: string;
  username: string;
  avatar_url: string;
  status: string;
};

type Props = {
  data: MemberProps;
};

export const Member = ({ data }: Props) => {
  return (
    <View style={styles.container}>
      <Avatar urlImage={data.avatar_url} />
      <View>
        <Text style={styles.title}>{data.username}</Text>
        <View style={styles.avaiable}>
          <View
            style={data.status == "online" ? styles.sOnline : styles.sOffline}
          />
          <Text style={styles.subtitle}>
            {data.status == "online" ? "Disponível" : "Ocupado"}
          </Text>
        </View>
      </View>
    </View>
  );
};
