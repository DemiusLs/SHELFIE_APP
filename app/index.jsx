import { StyleSheet, Text , View , Image, useColorScheme} from "react-native";
import Logo from '../assets/img/logo_light.png';
import { Link } from "expo-router";
import { Colors } from "../constants/Colors";

const Home = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <View style = {[styles.container, {backgroundColor : theme.background }]}>
        <Image source={Logo} style={styles.img}></Image>
      <Text style = {styles.title}>The number 1</Text>
      <Text style = {{marginTop : 10, marginBottom: 30}}>Reading List App</Text>

      <View style={styles.card}>
        <Link style={styles.link} href="/about">About Page</Link>
      </View>
      <View style={styles.card}>
        <Link style={styles.link} href="/contact">Contact Page</Link>
      </View>
    </View>

    
  );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b21c1c',
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