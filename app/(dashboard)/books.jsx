import { StyleSheet} from "react-native";

//themed components
import ThemedView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";



const books = () =>{

    return (
        <ThemedView style= {styles.container}>

            <Spacer/>
            <ThemedText title={true} style={styles.heading}>
                Your Reading List
            </ThemedText>

        </ThemedView>
    )
}
export default books;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading :{
        fontSize: 18,
        fontWeight: 'bold',
    },
    
})