import { Slot, Stack } from "expo-router";
import { StyleSheet, Text , View , Image, useColorScheme} from "react-native";
import { Colors } from "../constants/Colors";
import { StatusBar } from "expo-status-bar";

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <>
    <StatusBar value= "auto"></StatusBar>
    <Stack screenOptions= {{ 
        headerStyle : {ImageBackgroundColor : theme.navBackground},
        headerTintColor : theme.title,
      }}>  
        <Stack.Screen name="index" options={{title : "Home"}}/>
        <Stack.Screen name="about" options={{title : "About"}}/>
        <Stack.Screen name="contact" options={{title : "Contact" }}/>
      </Stack> 
    </>
        


   

    
  );
};

export default RootLayout;

const styles = StyleSheet.create({
    
   
});