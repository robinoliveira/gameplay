import React, { useState, useEffect } from "react";
import { BorderlessButton } from "react-native-gesture-handler";
import { Fontisto } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import {
  View,
  ImageBackground,
  Text,
  FlatList,
  Alert,
  Share,
  Platform,
} from "react-native";
import { styles } from "./style";
import { ListHeader } from "../../components/ListHeader";
import { Member, MemberProps } from "../../components/Member";
import { ListDivider } from "../../components/ListDivider";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { theme } from "../../global/styles/themes";
import { ButtonIcon } from "../../components/ButtonIcon";
import BannerImg from "../../assets/banner.png";
import { AppointmentProps } from "../../components/Appointment";
import { api } from "../../services/api";
import { Load } from "../../components/Load";
import * as Linking from "expo-linking";

type Params = {
  guildSelected: AppointmentProps;
};

type guildWidget = {
  id: string;
  name: string;
  instant_invite: string;
  members: MemberProps[];
};

export const AppointmentDetails = () => {
  const routes = useRoute();
  const { guildSelected } = routes.params as Params;
  const [widget, setWidget] = useState<guildWidget>({} as guildWidget);
  const [loading, setLoading] = useState(true);

  const getGuildWidget = async () => {
    try {
      const response = await api.get(
        `/guilds/${guildSelected.guildSelected.id}/widget.json`
      );
      setWidget(response.data);
    } catch {
      Alert.alert(
        "Verifique as configurações do servidor. O widget poderá estar desativado "
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getGuildWidget();
  }, []);

  const handleOpenGuild = () => {
    Linking.openURL(widget.instant_invite);
  };

  const handleShareInvitation = () => {
    const message =
      Platform.OS === "ios"
        ? `junte-se a ${guildSelected.guildSelected.name}`
        : widget.instant_invite;
    Share.share({
      message,
      url: widget.instant_invite,
    });
  };

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          guildSelected.guildSelected.owner && (
            <BorderlessButton onPress={() => handleShareInvitation()}>
              <Fontisto name="share" size={24} color={theme.colors.primary} />
            </BorderlessButton>
          )
        }
      />
      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>{guildSelected.guildSelected.name}</Text>
          <Text style={styles.subtitle}>{guildSelected.description}</Text>
        </View>
      </ImageBackground>

      {loading ? (
        <Load />
      ) : (
        <>
          <ListHeader
            title="Jogadores"
            subtitle={`Total ${widget.members.length}`}
          />
          <FlatList
            style={styles.players}
            ItemSeparatorComponent={() => <ListDivider isCenter />}
            data={widget.members}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Member data={item} />}
          />
        </>
      )}

      {guildSelected.guildSelected.owner && (
        <View style={styles.footer}>
          <ButtonIcon
            title="Entrar na partida"
            onPress={() => handleOpenGuild()}
          />
        </View>
      )}
    </Background>
  );
};
