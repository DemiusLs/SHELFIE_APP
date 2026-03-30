import { StyleSheet, Text} from "react-native";
import { Link } from "expo-router";

//themed components
import ThemedView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import ThemedButton from "../../components/ThemedButton";



const login = () =>{

    const handleSubmit = () =>{
        console.log("login form submitted");
    };


    return (
        <ThemedView style= {styles.container}>

            <Spacer/>
            <ThemedText title={true} style={styles.title}>
                Login to your Account
            </ThemedText>

            <Spacer/>
            <ThemedButton onPress={handleSubmit}> 
                    <Text style={{color: "#f2f2f2"}}>Login</Text>
            </ThemedButton>

            <Spacer height={100}/>
            <Link href="/register">
                <ThemedText title={true} style={{textAlign : "center"}}>
                    Register instead
                </ThemedText>
            </Link>

            <Spacer/>
            <Link style={styles.link} href="/">
                <ThemedText>HomePage</ThemedText>
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
    
});