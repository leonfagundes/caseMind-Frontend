import React, { useState } from 'react';
import { Text, View, Image, Alert } from 'react-native';
import logo from '../../assets/logoMind.png';
import { style } from './styles';
import { MaterialIcons, Octicons } from '@expo/vector-icons';
import { themes } from '../../global/themes';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

export default function Login() {
  const navigation = useNavigation<NavigationProp<any>>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(true);

  async function getLogin() {
    setLoading(true);
    try {
      if (!email || !password) {
        return Alert.alert('Atenção, informe os campos obrigatórios');
      }

      navigation.navigate('BottomRoutes');

      Alert.alert('Logado com sucesso!');
      console.log('Logado');
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Image
          style={style.logo}
          source={logo}
          resizeMode="contain"
        />
      </View>

      <View style={style.boxMid}>
        <Input
          value={email}
          onChangeText={setEmail}
          title="E-MAIL"
          IconRigth={MaterialIcons}
          iconRightName="email"
        />
        <Input
          value={password}
          onChangeText={setPassword}
          title="SENHA"
          IconRigth={Octicons}
          iconRightName={showPassword ? 'eye-closed' : 'eye'}
          secureTextEntry={showPassword}
          onIconRigthPress={() => setShowPassword(!showPassword)}
        />
      </View>

      <View style={style.boxBottom}>
        <Button
          text="Entrar"
          loading={loading}
          onPress={() => getLogin()}
        />
      </View>

      <Text style={style.textBottom}>
        Não tem conta?{' '}
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={[style.textBottom, { color: themes.colors.primary, textDecorationLine: 'underline' }]}>
            Crie agora!
          </Text>
        </TouchableOpacity>
      </Text>

      
    </View>
  );
}
