import React from "react";

import { View, Text, FlatList } from "react-native";
import { styles } from "./style";
import { Guild, GuildProps } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";

type Props = {
  setGuildSelected: (guildSelected: GuildProps) => void;
};

export const Guilds = ({ setGuildSelected }: Props) => {
  const guilds = [
    {
      id: "1",
      name: "Lendários",
      icon: "image.png",
      owner: true,
    },

    {
      id: "2",
      name: "Galera do game",
      icon: null,
      owner: true,
    },

    {
      id: "3",
      name: "Jabuticaba",
      icon: null,
      owner: true,
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={() => <ListDivider isCenter />}
        contentContainerStyle={{ paddingBottom: 69, paddingTop: 104 }}
        style={styles.guilds}
        ItemSeparatorComponent={() => <ListDivider isCenter />}
        showsVerticalScrollIndicator={false}
        data={guilds}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Guild data={item} onPress={() => setGuildSelected(item)} />
        )}
      />
    </View>
  );
};
