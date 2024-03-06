import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        justifyContent:'center',
        alignItems: 'center',
        
    },
    Background: {
        width: "100%",
        height: "100%",
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',

    },
    button: {
        fontSize: 36,
        fontWeight: 'bold',
    },


})
export const sobreestilo = StyleSheet.create({
    icon: {
        width: 300,
        height: 300,
        border: 'solid',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 150,
    },
    secundaryContainer: {

        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        marginTop: 25,
        fontSize: 30,
    }
})
export const StylesContato = StyleSheet.create({
    NomeCaixa: {
        padding: 20,
        fontSize: 20,
        marginTop: 5,
        borderBottomWidth: 1,
        border: 'solid',
        borderColor: 'black',
    },
    text: {
        marginTop: 25,
        fontSize: 30,
    },
    TherreContainerContact:{
        backgroundColor: "#fff",
        opacity: '0.5',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        height: '60%',
        border: 'solid',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 15,
    }
})