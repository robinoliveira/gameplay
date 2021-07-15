import React, { useState } from "react";
import { CategorySelect } from "../../components/CategorySelect";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { styles } from "./style";
import { SmallInput } from "../../components/SmallInput";
import { TextArea } from "../../components/TextArea";
import { ModalView } from "../../components/ModalView";
import { GuildIcon } from "../../components/GuildIcon";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { theme } from "../../global/styles/themes";
import { Button } from "../../components/Button";
import { Guilds } from "../Guilds";
import { GuildProps } from "../../components/Guild";
import uuid from "react-native-uuid";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLLECTION_APPOINTMENTS } from "../../config/database";
import { useNavigation } from "@react-navigation/native";

export const AppointmentCreate = () => {
  const [category, setCategory] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [guildSelected, setGuildSelected] = useState<GuildProps>(
    {} as GuildProps
  );

  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [description, setDescription] = useState("");
  const navigation = useNavigation();

  const handleGuildList = () => {
    setIsVisible(!isVisible);
  };

  const handleCloseGuild = () => {
    setIsVisible(false);
  };

  const handleGuildSelected = (guildSelected: GuildProps) => {
    setGuildSelected(guildSelected);
    setIsVisible(!isVisible);
  };

  const handleCategorySelected = (categoryId: string) => {
    setCategory(categoryId);
  };

  const handleSave = async () => {
    const newAppointment = {
      id: uuid.v4,
      guildSelected,
      category,
      date: `${day}/${month} às ${hour}:${minute}h`,
      description,
    };

    const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const appointments = storage ? JSON.parse(storage) : [];

    await AsyncStorage.setItem(
      COLLECTION_APPOINTMENTS,
      JSON.stringify([...appointments, newAppointment])
    );

    navigation.navigate("Home");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Background>
        <ScrollView>
          <Header title="agendar partida" />
          <Text
            style={[
              styles.label,
              { marginLeft: 24, marginBottom: 18, marginTop: 36 },
            ]}
          >
            Categoria
          </Text>
          <CategorySelect
            hasCheckBox
            categorySelected={category}
            setCategory={handleCategorySelected}
          ></CategorySelect>
          <View style={styles.form}>
            <RectButton onPress={() => handleGuildList()}>
              <View style={styles.select}>
                {guildSelected.icon ? (
                  <GuildIcon
                    guildId={guildSelected.id}
                    iconId={guildSelected.icon}
                  />
                ) : (
                  <View style={styles.image} />
                )}
                <View style={styles.selectBody}>
                  <Text style={styles.label}>
                    {guildSelected.name
                      ? guildSelected.name
                      : "Selecione um servidor"}
                  </Text>
                </View>
                <Feather
                  name="chevron-right"
                  size={18}
                  color={theme.colors.heading}
                />
              </View>
            </RectButton>
            <View style={styles.field}>
              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>
                  Dia e mês
                </Text>
                <View style={styles.column}>
                  <SmallInput maxLength={2} onChangeText={setDay} />
                  <Text style={styles.divider}>/</Text>
                  <SmallInput maxLength={2} onChangeText={setMonth} />
                </View>
              </View>

              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>
                  Hora e minuto
                </Text>
                <View style={styles.column}>
                  <SmallInput maxLength={2} onChangeText={setHour} />
                  <Text style={styles.divider}>:</Text>
                  <SmallInput maxLength={2} onChangeText={setMinute} />
                </View>
              </View>
            </View>
            <View style={[styles.field, { marginBottom: 12 }]}>
              <Text style={styles.label}>Descrição</Text>
              <Text style={styles.caracteresLimit}>Max 100 caracteres</Text>
            </View>
            <TextArea
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
              onChangeText={setDescription}
            />
            <View style={styles.footer}>
              <Button title="Agendar" onPress={() => handleSave()} />
            </View>
          </View>
        </ScrollView>
      </Background>
      <ModalView visible={isVisible} closeModal={handleCloseGuild}>
        <Guilds setGuildSelected={handleGuildSelected} />
      </ModalView>
    </KeyboardAvoidingView>
  );
};
