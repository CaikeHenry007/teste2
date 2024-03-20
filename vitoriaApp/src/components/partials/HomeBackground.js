import { Image, ImageBackground } from "react-native";
//Navegação
import { useNavigation } from "@react-navigation/native";
import { Background, Certo, Coração } from "../../assets/images/images";
import HomeText from "./HomeText";
import HomeButton from "./HomeButton";
import { StylesContato, styles } from "../../styles/Stylesheet";
import { View } from "react-native";

export default function HomeBackground() {
  const Navigation = useNavigation();

  return (
    <ImageBackground
      source={Background}
      resizeMode="repeat"
      style={styles.Background}
    >
      <View style={styles.quadrado}>
        <Image
          source={require("../../assets/images/vivi.png")}
          style={StylesContato.icon}
        />

        <HomeText />
        <HomeButton />
      </View>
    </ImageBackground>
  );
}
