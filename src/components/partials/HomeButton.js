import { Button, Text, Touchable, TouchableOpacity } from "react-native";
//navegacao
import { useNavigation } from '@react-navigation/native';
import { styles } from "../../styles/Stylesheet";




export default function HomeButton() {
    const Navigation = useNavigation();
    return (
        <>
            <TouchableOpacity onPress={() => Navigation.navigate("Sobre")}>
                <Text style={styles.button}>Ir para Sobre</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Navigation.navigate("Contato")}>
                <Text style={styles.button}>Ir para Contato</Text>
            </TouchableOpacity>
        </>
    )
}