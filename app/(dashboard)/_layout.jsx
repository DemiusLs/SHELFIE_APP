import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";
import { Colors } from "../../constants/Colors";

const DashboardLayout = () => {
  const colorScheme = useColorScheme();
  const theme= Colors[colorScheme] ?? Colors.light;

  return (
    <>        
        <Tabs 
          screenOptions={{headersShown : false, tabBarStyle :{
            backgroundColor : theme.navBackGround,
            paddingTop : 10,
            height:90,
          },
          tabBarActiveTintColor : theme.iconColorFocused,
          tabBarInativeTintColor : theme.iconColor,
          }}>
          <Tabs.Screen
            name="profile" 
            options={{title : "Profile"}} 
            />
            <Tabs.Screen
            name="books" 
            options={{title : "Books"}} 
            />
            <Tabs.Screen
            name="create" 
            options={{title : "Create"}} 
            />
        </Tabs> 
        
        
    </>
  );
};

export default DashboardLayout;

