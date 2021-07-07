import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, Alert, ActivityIndicator } from "react-native";
import { styles } from "./style";
import IllustrationImg from "../../assets/illustration.png";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Background } from "../../components/Background";
import { useAuth } from "../../hooks/auth";
import { theme } from "../../global/styles/themes";

export const Signin = () => {
  const { loading, signIn } = useAuth();

  const handleSignin = async () => {
    try {
      await signIn();
    } catch (error) {
      Alert.alert(error);
    }
  };

  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={IllustrationImg}
          style={styles.image}
          resizeMode="stretch"
        />
        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {"\n"} e organize suas{"\n"} jogatinas {"\n"}
          </Text>
          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {"\n"}
            favoritos com seus amigos
          </Text>
          {loading ? (
            <ActivityIndicator color={theme.colors.primary} />
          ) : (
            <ButtonIcon
              title="Entrar com Discord"
              onPress={() => handleSignin()}
            />
          )}
        </View>
      </View>
    </Background>
  );
};
