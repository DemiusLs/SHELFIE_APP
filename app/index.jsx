import { StyleSheet, Text , View , Image} from "react-native";
import Logo from '../assets/img/logo_light.png';

const Home = () => {
  return (
    <View style = {styles.container}>
        <Image source={Logo} style={styles.img}></Image>
      <Text style = {styles.title}>The number 1</Text>
      <Text style = {{marginTop : 10, marginBottom: 30}}>Reading List App</Text>

      <View>
        <Text style={styles.card}>Hello this is a cardd </Text>
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
});