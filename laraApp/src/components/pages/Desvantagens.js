import SobreText from "../partials/SobreText";
import { styles } from "../../styles/Stylesheet";
import { ImageBackground, View } from "react-native";
import SobreImage from "../partials/SobreImage";
import { sobreestilo } from "../../styles/Stylesheet";
import { BackgroundDesvantagens } from "../../assets/images/images";

export default function Desvantagens() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={sobreestilo.back}
        source={BackgroundDesvantagens}
        resizeMode="repeat"
      >
        <View style={sobreestilo.secundaryContainer}>
          <SobreImage />
          <SobreText />
        </View>
      </ImageBackground>
    </View>
  );
}
