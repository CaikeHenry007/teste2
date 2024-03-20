import { Image, View } from "react-native";
import { Erro } from "../../assets/images/images";
import { sobreestilo } from "../../styles/Stylesheet";

export default function SobreImage() {
  return (
    <View>
      <Image source={Erro} style={sobreestilo.icon} />
    </View>
  );
}
