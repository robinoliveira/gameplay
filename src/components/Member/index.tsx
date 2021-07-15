import React from "react";

import { View, Text } from "react-native";
import { styles } from "./style";
import { Avatar } from "../../components/Avatar";

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
