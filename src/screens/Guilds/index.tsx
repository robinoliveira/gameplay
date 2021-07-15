import React, { useState, useEffect } from "react";

import { View, FlatList } from "react-native";
import { styles } from "./style";
import { Guild, GuildProps } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";
import { Load } from "../../components/Load";
import { api } from "../../services/api";

type Props = {
  setGuildSelected: (guildSelected: GuildProps) => void;
};

export const Guilds = ({ setGuildSelected }: Props) => {
  const [guilds, setGuilds] = useState<GuildProps[]>([]);
  const [loading, setLoading] = useState(true);

  const getGuilds = async () => {
    const response = await api.get("/users/@me/guilds");
    console.log("guilds--->>", response.data);
    setGuilds(response.data);
    setLoading(false);
  };

  useEffect(() => {
    getGuilds();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Load />
      ) : (
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
      )}
    </View>
  );
};
