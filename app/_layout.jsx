import { Slot, Stack } from "expo-router";
import { StyleSheet, Text , View , Image, useColorScheme} from "react-native";
import { Colors } from "../constants/Colors";
import { StatusBar } from "expo-status-bar";
import { UserProvider } from "../contexts/UserContext";
import { BooksProvider } from "../contexts/BooksContext";

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <UserProvider>
      <BooksProvider>
        <StatusBar style= "auto" />
        <Stack screenOptions= {{ 
            headerStyle : {ImageBackgroundColor : theme.navBackground},
            headerTintColor : theme.title,
          }}>
            <Stack.Screen name="(auth)" options={{headerShown: false}}/>
            <Stack.Screen name="index" options={{title : "Home"}}/>
        </Stack>
      </BooksProvider> 
    </UserProvider>

  );
};

export default RootLayout;
