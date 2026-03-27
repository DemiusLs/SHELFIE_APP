import { StyleSheet, Text , View , Image, useColorScheme} from "react-native";
import { Colors } from "../constants/Colors";

const ThemedCard = ({styleProp, ...props}) => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;
    return(
        <View style= {[{
            backgroundColor : theme.uiBackground}, styles.card , styleProp]}
            {...props}
            />

    )
}
export default ThemedCard;

const styles = StyleSheet.create({
    card:{
        padding: 20,
        borderRadius: 5,
    },
})