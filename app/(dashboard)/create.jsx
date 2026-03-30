import { StyleSheet} from "react-native";


//themed components
import ThemedView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";



const create = () =>{

    return (
        <ThemedView style= {styles.container}>

            <Spacer/>
            <ThemedText title={true} style={styles.heading}>
                Add a New Book
            </ThemedText>

        </ThemedView>
    )
}
export default create;

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