import { ImageBackground, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
const lab5 = ()=> {
    return(
        <View style = {styles.container}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0)"></StatusBar>
            <ImageBackground
                source={require('../../assets/images/travel.png')}
                style= {styles.image}>
                <View style= {styles.details}>
                    <Text style={styles.Text}>
                        <Text style={styles.firstLine}>Discover {'\n'}</Text>
                        <Text style={styles.secondLine} World with us ></Text>
                    </Text>
                    <Text style={styles.textStyle}>World with us</Text> 
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}
export default lab5;