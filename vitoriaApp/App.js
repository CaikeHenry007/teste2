import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Importando os componentes
import Home from "./src/components/pages/Home";
import Desvantagens from "./src/components/pages/Desvantagens";
import Vantagens from "./src/components/pages/Vantagens";

//CRIANDO UMA INSTÂNCIA NO STACK NAVIGATOR
//ISSO NOS PERMITE UTILIZAR NA NAVEGAÇÃO
export default function App() {
  //coletando pacote stackNavigator
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Vantagens" component={Vantagens} />
        <Stack.Screen name="Desvantagens" component={Desvantagens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
