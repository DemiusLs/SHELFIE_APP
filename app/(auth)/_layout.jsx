import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useUser } from "../../hooks/useUser";
import GuestOnly from "../../components/auth/GuestOnly";

const AuthLayout = () => {

  const {user} = useUser();
  
  return (
    <GuestOnly>
        <StatusBar style = "auto" />
        <Stack screenOptions= {{ headerShown: true, animation:"none" }} /> 
   </GuestOnly>
  );
};

export default AuthLayout;

