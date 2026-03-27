import { StyleSheet, Text , View , Image, useColorScheme} from "react-native";
import { Colors } from "../constants/Colors";

const ThemedView = ({styleProp, ...props}) => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;
    return(
        <View style= {[{
            backgroundColor : theme.backgroundColor}, styleProp ]}
            {...props}
            />

    )
}
export default ThemedView;