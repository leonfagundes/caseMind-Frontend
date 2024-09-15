import { StyleSheet,Dimensions} from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    boxInput: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        borderRadius: 40,
        backgroundColor: themes.colors.brightInputs,
        borderColor: themes.colors.brightInputs,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    input: {
        height: '100%',
        width: '90%',
        borderRadius: 40
    },
    titleInput: {
        fontWeight: 'bold',
        marginLeft: 5,
        color: themes.colors.softText,
        fontSize: 16,
        marginTop: 20
    },
    icon: {
        width: '100%'
    },
    Button: {
        width: '10%',
    }
})