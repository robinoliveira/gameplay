import React, { useState } from "react";
import { BorderlessButton } from "react-native-gesture-handler";
import { Fontisto } from "@expo/vector-icons";
import { View, ImageBackground, Text, FlatList } from "react-native";
import { styles } from "./style";
import { ListHeader } from "../../components/ListHeader";
import { Member } from "../../components/Member";
import { ListDivider } from "../../components/ListDivider";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { theme } from "../../global/styles/themes";
import { ButtonIcon } from "../../components/ButtonIcon";
import BannerImg from "../../assets/banner.png";

export const AppointmentDetails = () => {
  const members = [
    {
      id: "1",
      username: "Rodrigo",
      avatar_url: "https://github.com/robinoliveira.png",
      status: "online",
    },
    {
      id: "2",
      username: "Rodrigo",
      avatar_url: "https://github.com/robinoliveira.png",
      status: "offline",
    },
    {
      id: "3",
      username: "Rodrigo",
      avatar_url: "https://github.com/robinoliveira.png",
      status: "online",
    },
  ];

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto name="share" size={24} color={theme.colors.primary} />
          </BorderlessButton>
        }
      />
      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>Lendários</Text>
          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Text>
        </View>
      </ImageBackground>

      <ListHeader title="Jogadores" subtitle="Total 3" />
      <FlatList
        style={styles.players}
        ItemSeparatorComponent={() => <ListDivider />}
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Member data={item} />}
      />
      <View style={styles.footer}>
        <ButtonIcon title="Entrar na partida" />
      </View>
    </Background>
  );
};
