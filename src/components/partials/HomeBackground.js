import { Button, Image, ImageBackground, ImageBackgroundComponent } from "react-native";
//navegacao
import { useNavigation } from '@react-navigation/native';
import { Background } from "../../assets/images/images";
import HomeText from "./HomeText";
import HomeButton from "./HomeButton";
import { styles } from "../../styles/Stylesheet";



export default function HomeBackground() {
    const Navigation = useNavigation();
    
    return (
        <ImageBackground 
        source={Background}
        resizeMode="cover"
        style={styles.Background}>
                <HomeText />
                <HomeButton />
                </ImageBackground>
    )
}