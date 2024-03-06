import { TextInput, View } from "react-native"
import { StylesContato } from "../../styles/Stylesheet"
//navegacao




export default function TextInputContato(){
    return(
        <View>
        <TextInput
        placeholder="nome:"
        style={StylesContato.NomeCaixa}
        />

        <TextInput
        placeholder="E-Mail:"
        style={StylesContato.NomeCaixa}
        />

        <TextInput
        placeholder="Mensagem:"
        style={StylesContato.NomeCaixa}
        />
        </View>
    )
}