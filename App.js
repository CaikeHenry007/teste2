import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./src/components/pages/Home";
import Sobre from "./src/components/pages/Sobre";
import Contato from './src/components/pages/Contato';

//CRIANDO UMA INSTÂNCIA NO STACK NAVIGATOR
//ISSO NOS PERMITE UTILIZAR NA NAVEGAÇÃO 
export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Sobre" component={Sobre}/>
        <Stack.Screen name="Contato" component={Contato}/>

        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

