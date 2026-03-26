import { StyleSheet, Text , View , Image} from "react-native";

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
