import React from "react";
import { View, Text } from "react-native";
import { styles } from "./style";
import { Avatar } from "../Avatar";

export const Profile = () => {
  return (
    <View style={styles.container}>
      <Avatar urlImage="https://github.com/robinoliveira.png" />
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá,</Text>
          <Text style={styles.username}>Robin</Text>
        </View>
        <Text style={styles.message}>hoje é dia de vitoria</Text>
      </View>
    </View>
  );
};
