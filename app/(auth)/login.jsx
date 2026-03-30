import { StyleSheet, Text , View , Image, useColorScheme} from "react-native";
import { Link } from "expo-router";

//themed components
import ThemedView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";



const login = () =>{
    return (
        <ThemedView style= {styles.container}>

            <Spacer/>
            <ThemedText title={true} style={styles.title}>
                Login to your Account
            </ThemedText>

            <Spacer height={100}/>
            <Link href="/register">
                <ThemedText title={true} style={{textAlign : "center"}}>
                    Register instead
                </ThemedText>
            </Link>
            
        </ThemedView>
    )
}
export default login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title :{
        fontSize: 18,
        fontWeight: 'bold',
    },
    card:{
        padding: 20,
        margin: 10,
        borderRadius: 10,
    },
    link :{
        fontSize: 18,
        fontWeight: 'bold',
    },
});