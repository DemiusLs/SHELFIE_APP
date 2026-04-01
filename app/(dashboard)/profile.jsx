import { StyleSheet, Text} from "react-native";
import { useUser } from "../../hooks/useUser";

//themed components
import ThemedView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import ThemedButton from "../../components/ThemedButton";


const profile = () =>{
    const {user,logout} = useUser();


    return (
        <ThemedView style= {styles.container}>

            <ThemedText title={true} style={styles.heading}>
                {user.email}
            </ThemedText>
            <Spacer/>

            <ThemedText >Time to start reading some books... </ThemedText>
            <Spacer/>

            <ThemedButton onPress={logout}>
                <Text style={{ color: "#f2f2f2"}}>Logout</Text>
            </ThemedButton>

        </ThemedView>
    )
}
export default profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    
})