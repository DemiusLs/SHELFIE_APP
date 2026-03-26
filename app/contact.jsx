import { StyleSheet, Text , View , Image} from "react-native";
import { Link } from "expo-router";

const Contact = () => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.title}>Contact </Text>

      <Link style = {styles.link} href="/">Back Home</Link>
    </View>

    
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