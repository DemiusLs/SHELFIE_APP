import { StyleSheet, Text } from "react-native";
import { Link } from "expo-router";
import { Colors } from "../../constants/Colors";

//themed components
import ThemedView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import ThemedButton from "../../components/ThemedButton";


const register = () =>{

    const handleSubmit = () =>{
        console.log("register form submitted");
    };

    return (
        <ThemedView style= {styles.container}>

            <Spacer/>
            <ThemedText title={true} style={styles.title}>
                Register to your Account
            </ThemedText>

            <Spacer/>
            <ThemedButton onPress={handleSubmit}> 
                    <Text style={{color: "#f2f2f2"}}>Register</Text>
            </ThemedButton>

            <Spacer height={100}/>
            <Link href="/login">
                <ThemedText title={true} style={{textAlign : "center"}}>
                    Login instead
                </ThemedText>
            </Link>

            <Spacer/>
            <Link style={styles.link} href="/">
                <ThemedText>HomePage</ThemedText>
            </Link>
            
        </ThemedView>
    )
}
export default register;

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