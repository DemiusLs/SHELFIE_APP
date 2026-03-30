import { StyleSheet} from "react-native";

//themed components
import ThemedView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";

const profile = () =>{

    return (
        <ThemedView style= {styles.container}>

            <ThemedText title={true} style={styles.heading}>
                Your Email
            </ThemedText>
            <Spacer/>

            <ThemedText >Time to start reading some books... </ThemedText>
            <Spacer/>

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