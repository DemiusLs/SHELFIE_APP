import { StyleSheet, Text , View , Image} from "react-native";
import { Link } from "expo-router";
import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";


const Contact = () => {
  return (
    <ThemedView style = {[styles.container]}>
      <ThemedText style = {styles.title}>Contact Page </ThemedText>

      <Link style = {styles.link} href="/">
        <ThemedText>Back Home</ThemedText> 
      </Link>
    </ThemedView>

    
  );
};

export default Contact;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title :{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
    },
    link :{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
    },
   
});