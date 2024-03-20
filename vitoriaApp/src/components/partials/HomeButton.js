import { Text, TouchableOpacity } from "react-native";
//Navegação
import { useNavigation } from "@react-navigation/native";
import { styles } from "../../styles/Stylesheet";

export default function HomeButton() {
  const Navigation = useNavigation();
  return (
    //Botões usados nos Textos, usando a Tag TouchableOpacity
    <>
      <TouchableOpacity onPress={() => Navigation.navigate("Vantagens")}>
        <Text style={styles.button}>Vantagens</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Navigation.navigate("Desvantagens")}>
        <Text style={styles.button}>Desvantagens</Text>
      </TouchableOpacity>
    </>
  );
}
