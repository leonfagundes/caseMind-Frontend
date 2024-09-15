import React from "react";

import { ActivityIndicator, Text, TouchableHighlightProps, TouchableOpacity } from 'react-native'
import { style } from "./styles";

type ButtonProps = TouchableHighlightProps & {
    text: string,
    loading?: boolean,

}
export function Button({...rest}: ButtonProps) {
    return (
        <TouchableOpacity
            style={style.button}
            {...rest}
            activeOpacity={0.6}
        >
            {rest.loading ? <ActivityIndicator/> : <Text style={style.textButton}>{rest.text}</Text>}
        </TouchableOpacity>
    )
}