import SobreText from "../partials/SobreText";
import { StylesContato, styles } from "../../styles/Stylesheet";
import { View } from "react-native";
import SobreImage from "../partials/SobreImage";
import TextInputContato from "../partials/TextInputContato";

export default function Contato() {
    return (
        <View style={styles.container}>
            <View style={StylesContato.TherreContainerContact}>
                <TextInputContato/>
            </View>


        </View>
    )
}