import React from "react"; 
import { Text, View, TouchableOpacity } from 'react-native'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { AntDesign, Entypo, FontAwesome } from '@expo/vector-icons'
import { style } from "./styles";
import { themes } from "../../global/themes";


export default ({state,navigation}: BottomTabBarProps) => {

    const go=((screenName:string)=>{
        navigation.navigate(screenName);
    })

    return (
        <View style={style.tabArea}>

            <TouchableOpacity style={style.tabItem} onPress={() => go('Home')}>
                <AntDesign
                    name='bars'
                    style={{opacity:state.index===0?1:0.5,color:themes.colors.primary,fontSize:32}}
                    color={themes.colors.softText}
                />
            </TouchableOpacity>

            <TouchableOpacity style={style.tabItemButton}>
                <View style={{width: '100%'}}>
                    <Entypo
                        name='plus'
                        size={40}
                        color={themes.colors.inputs}
                    />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={style.tabItem} onPress={() => go('User')}>
                <FontAwesome
                    name='user'
                    style={{opacity:state.index===1?1:0.2,color:themes.colors.primary,fontSize:32}}
                    color={themes.colors.softText}
                />
            </TouchableOpacity>
        </View>
    )
}