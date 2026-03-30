import { Stack } from "expo-router";
import { useColorScheme} from "react-native";
import { Colors } from "../../constants/Colors";
import { StatusBar } from "expo-status-bar";

const AuthLayout = () => {

  return (
    <>
        <StatusBar style = "auto" />
        <Stack screenOptions= {{ headerShown: false, animation:"none" }} /> 
   </>
  );
};

export default AuthLayout;

