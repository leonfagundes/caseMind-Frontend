import { StyleSheet} from "react-native";
import { themes } from "../../global/themes";

export const style =StyleSheet.create({
    tabArea:{
       height:80,
       backgroundColor:themes.colors.inputs,
       flexDirection:'row',
       borderTopColor: 'black',
       shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    tabItem:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    tabItemButton:{
        width:70,
        height:70,
        borderRadius:40,
        justifyContent:'center',
        alignItems:'center',
        top:-30,
        zIndex:9999,
        backgroundColor:themes.colors.primary,
        paddingHorizontal:15
    },
})