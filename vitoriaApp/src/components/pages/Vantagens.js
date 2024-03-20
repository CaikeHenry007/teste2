import { StylesContato, styles } from "../../styles/Stylesheet";
import { Image, ImageBackground, View } from "react-native";
import TextVantagens from "../partials/TextVantagens";
import { BackgroundVantagens, Certo } from "../../assets/images/images";

export default function Vantagens() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={BackgroundVantagens}
        resizeMode="repeat"
        style={StylesContato.back}
      >
        <View style={StylesContato.TherreContainerContact}>
          <Image source={Certo} style={StylesContato.icon} />
          <TextVantagens />
        </View>
      </ImageBackground>
    </View>
  );
}
