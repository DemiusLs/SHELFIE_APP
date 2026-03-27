import { StyleSheet, Text , View , Image, useColorScheme} from "react-native";
import Logo from '../assets/img/logo_light.png';
import { Link } from "expo-router";
import { Colors } from "../constants/Colors";
//themed components
import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemedLogo";

const Home = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <ThemedView style = {styles.container}>
        <ThemedLogo style={styles.card}/>
      <Text style = {styles.title}>The number 1</Text>
      <Text style = {{marginTop : 10, marginBottom: 30}}>Reading List App</Text>

      <View style={styles.card}>
        <Link style={styles.link} href="/about">About Page</Link>
      </View>
      <View style={styles.card}>
        <Link style={styles.link} href="/contact">Contact Page</Link>
      </View>
    </ThemedView>

    
  );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title :{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    card:{
        backgroundColor: '#fff',
        padding: 20,
        margin: 10,
        borderRadius: 10,
    },
    img:{
        marginVertical: 20,},
    link :{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
    },
});