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

export const AppointmentCreate = () => {
  const [category, setCategory] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [guildSelected, setGuildSelected] = useState<GuildProps>(
    {} as GuildProps
  );

  const handleGuildList = () => {
    setIsVisible(!isVisible);
  };

  const handleGuildSelected = (guildSelected: GuildProps) => {
    setGuildSelected(guildSelected);
    setIsVisible(!isVisible);
  };

  const handleCategorySelected = (categoryId: string) => {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
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
                <GuildIcon />
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
              <Text style={styles.label}>Dia e mês</Text>
              <View style={styles.column}>
                <SmallInput maxLength={2} />
                <Text style={styles.divider}>/</Text>
                <SmallInput maxLength={2} />
              </View>
            </View>

            <View>
              <Text style={styles.label}>Hora e minuto</Text>
              <View style={styles.column}>
                <SmallInput maxLength={2} />
                <Text style={styles.divider}>:</Text>
                <SmallInput maxLength={2} />
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
          />
          <View style={styles.footer}>
            <Button title="Agendar" />
          </View>
        </View>
      </ScrollView>

      <ModalView visible={isVisible}>
        <Guilds setGuildSelected={handleGuildSelected} />
      </ModalView>
    </KeyboardAvoidingView>
  );
};
