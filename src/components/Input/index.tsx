import React, { forwardRef, Fragment, LegacyRef } from "react";
import { MaterialIcons, AntDesign, FontAwesome, Octicons } from '@expo/vector-icons'
import { Text, TextInput, TextInputProps, TouchableOpacity, View } from 'react-native'
import { themes } from '../../global/themes';
import { style } from './styles'

type IconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>> | 
                     React.ComponentType<React.ComponentProps<typeof FontAwesome>> | 
                     React.ComponentType<React.ComponentProps<typeof Octicons>>;

type InputProps = TextInputProps & {
    IconLeft?: IconComponent,
    IconRigth?: IconComponent,
    iconLeftName?: string,  
    iconRightName?: string, 
    title?: string,
    onIconLeftPress?: () => void, 
    onIconRigthPress?: () => void ,
}

export const Input = forwardRef((Props: InputProps, ref: LegacyRef<TextInput> | null) => {
    
    const { IconLeft, IconRigth, iconLeftName, iconRightName, title, onIconLeftPress, onIconRigthPress, ...rest } = Props
    
    const calculateSizeWidth = () => {
        if (IconLeft && IconRigth) {
            return '80%';
        } else if (IconLeft || IconRigth) {
            return '90%';
        } else {
            return '100%';
        }
    };

    const calculateSizePaddingLeft = () => {
        if (IconLeft && IconRigth) {
            return 0;
        } else if (IconLeft || IconRigth) {
            return 10;
        } else {
            return 20;
        }
    };

    return (
        <Fragment>
            {title && <Text style={style.titleInput}>{title}</Text>}
            <View style={[style.boxInput, {paddingLeft:calculateSizePaddingLeft()}]}>

                {IconLeft && iconLeftName && (
                    <TouchableOpacity onPress={onIconLeftPress} style={style.Button}>
                        <IconLeft name={iconLeftName as any} size={20} color={themes.colors.primary} style={style.icon} />
                    </TouchableOpacity>
                )}

                <TextInput
                    style={
                        [style.input, {width:calculateSizeWidth()}
                            
                        ]}
                    {...rest}
                />

                {IconRigth && iconRightName && (
                    <TouchableOpacity onPress={onIconRigthPress} style={style.Button}>
                        <IconRigth name={iconRightName as any} size={20} color={themes.colors.primary} style={style.icon} />
                    </TouchableOpacity>
                )}

            </View>
        </Fragment>
    )
})