import React from "react";
import { View, Text, Alert } from "react-native";

import { RectButton } from "react-native-gesture-handler";
import { styles } from "./style";
import { Avatar } from "../Avatar";
import { useAuth } from "../../hooks/auth";

export const Profile = () => {
  const { user, signOut } = useAuth();

  const handleSignOut = () => {
    Alert.alert("Logout", "Deseja sair do Gameplay", [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: () => signOut(),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <RectButton onPress={() => handleSignOut()}>
        <Avatar urlImage={user.avatar} />
      </RectButton>
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá,</Text>
          <Text style={styles.username}>{user.firstName}</Text>
        </View>
        <Text style={styles.message}>hoje é dia de vitoria</Text>
      </View>
    </View>
  );
};
