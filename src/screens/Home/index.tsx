import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./style";
import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from "../../components/ListHeader";
import { Appointment } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";
import { Background } from "../../components/Background";

export const Home = () => {
  const [category, setCategory] = useState("");
  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.navigate("AppointmentDetails");
  };

  const handleAppoitmentCreateNavigation = () => {
    navigation.navigate("AppointmentCreate");
  };

  const appointments = [
    {
      id: "1",
      guild: { id: "1", name: "Legendarios", icon: null, owner: true },
      category: "1",
      date: "22/06 às 20:40",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
    },

    {
      id: "2",
      guild: { id: "1", name: "Legendarios", icon: null, owner: true },
      category: "1",
      date: "22/06 às 20:40",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
    },
  ];

  const handleCategorySelected = (categoryId: string) => {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  };

  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.header}>
          <Profile />
          <ButtonAdd onPress={() => handleAppoitmentCreateNavigation()} />
        </View>
        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelected}
        />
        <View style={styles.content}>
          <ListHeader title="Partidas agendadas" subtitle="Total 6" />
          <FlatList
            data={appointments}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Appointment data={item} onPress={() => handleNavigation()} />
            )}
            ItemSeparatorComponent={() => <ListDivider />}
            style={styles.matches}
            showsVerticalScrollIndicator={false}
          ></FlatList>
        </View>
      </View>
    </Background>
  );
};
