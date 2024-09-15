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
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    textButton: {
        fontSize: 16,
        color: themes.colors.text,
        fontWeight: 'bold'
    },
})