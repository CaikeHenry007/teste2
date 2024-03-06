import {
  Button,
  Image,
  ImageBackground,
  ImageBackgroundComponent,
} from "react-native";
//navegacao
import { useNavigation } from "@react-navigation/native";
import { Background } from "../../assets/images/images";
import HomeText from "./HomeText";
import HomeButton from "./HomeButton";
import { styles } from "../../styles/Stylesheet";
import { View } from "react-native-web";

export default function HomeBackground() {
  const Navigation = useNavigation();

  return (
    <ImageBackground
      source={Background}
      resizeMode="cover"
      style={styles.Background}
    >
      <View style={styles.quadrado}>
        <HomeText />
        <HomeButton />
      </View>
    </ImageBackground>
  );
}
