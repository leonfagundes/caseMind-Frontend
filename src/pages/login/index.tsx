import React, { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator} from 'react-native';
import logo from '../../assets/logoMind.png'
import { style } from './styles'
import { MaterialIcons, AntDesign, Octicons } from '@expo/vector-icons'
import { themes } from '../../global/themes';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export default function Login() {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(true)

    async function getLogin() {
        try {

            if(!email || !password)
                return Alert.alert('Atenção, informe os campos obrigatórios')
                
            setTimeout(() => {

                if (email == 'leonfagundes7@gmail.com' && password == '1234')
                    Alert.alert('Logado com sucesso!')
                Alert.alert('Usuário não encontrado!')

                setLoading(false)
            }, 3000);

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image
                    style={style.logo}
                    source={logo}
                    resizeMode='contain'/>
            </View>

            <View style={style.boxMid}>
                <Input
                    value={email}
                    onChangeText={setEmail}
                    title='E-MAIL'
                    IconRigth={MaterialIcons}
                    iconRightName='email'
                />
                <Input
                    value={password}
                    onChangeText={setPassword}
                    title='SENHA'
                    IconRigth={Octicons}
                    iconRightName={showPassword ? 'eye-closed': 'eye'}
                    secureTextEntry={showPassword}
                    onIconRigthPress={() => setShowPassword(!showPassword)}
                />
                
            </View> 

            <View style={style.boxBottom}>
                <Button 
                    text='Entrar'
                    loading={loading}
                    onPress={() => getLogin()}
                />
            </View>
            
            <Text style={style.textBottom}>Não tem conta?<Text style={{color: themes.colors.primary}}> Crie agora!</Text></Text>
        </View>
        
    )
}