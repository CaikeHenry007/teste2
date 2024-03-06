import SobreText from "../partials/SobreText";
import { styles } from "../../styles/Stylesheet";
import { View } from "react-native";
import SobreImage from "../partials/SobreImage";
import { sobreestilo } from "../../styles/Stylesheet";

export default function Sobre() {
    return (
        <View style={styles.container}>
            <View style={sobreestilo.secundaryContainer}>
                <SobreImage />
                <SobreText />
            </View>


        </View>
    )
}