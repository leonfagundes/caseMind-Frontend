import { StyleSheet,Dimensions} from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    button: {
        width: 200,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themes.colors.primary,
        borderRadius: 40,
        marginTop: 20
    },
    textButton: {
        fontSize: 16,
        color: themes.colors.text,
        fontWeight: 'bold'
    },
})