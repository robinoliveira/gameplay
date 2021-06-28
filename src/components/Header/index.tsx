import React, { ReactNode } from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { BorderlessButton } from "react-native-gesture-handler";
import { styles } from "./style";
import { theme } from "../../global/styles/themes";
import { Feather } from "@expo/vector-icons";

type Props = {
  title: string;
  action?: ReactNode;
};

export const Header = ({ title, action }: Props) => {
  const navigation = useNavigation();
  const handleBackButton = () => {
    navigation.goBack();
  };

  const { secondary100, secondary40, heading } = theme.colors;
  return (
    <LinearGradient
      colors={[secondary100, secondary40]}
      style={styles.container}
    >
      <BorderlessButton onPress={() => handleBackButton()}>
        <Feather name="arrow-left" size={24} color={heading} />
      </BorderlessButton>
      <Text style={styles.title}>{title}</Text>
      {action && <View>{action}</View>}
    </LinearGradient>
  );
};
