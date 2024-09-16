import React, { useState } from 'react';
import { Text, View, Image, Alert, TouchableOpacity } from 'react-native';
import { style } from './styles';
import { MaterialIcons, Octicons } from '@expo/vector-icons';
import { themes } from '../../global/themes';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login } from '../../services/authService'; // Importa o serviço de login

export default function Login() {
  const navigation = useNavigation<NavigationProp<any>>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(true);

  // Função para realizar o login
  async function getLogin() {
    setLoading(true);
    try {
      if (!email || !password) {
        setLoading(false);
        return Alert.alert('Atenção, informe os campos obrigatórios');
      }

      // Faz a chamada de login que retorna o token e as informações do usuário
      const response = await login(email, password);

      // Armazena o token e o userId no AsyncStorage
      await AsyncStorage.setItem('token', response.token);
      await AsyncStorage.setItem('userId', response.userId.toString());

      // Exibe mensagem de sucesso
      Alert.alert('Logado com sucesso!');
      console.log('Usuário logado!', response);

      // Redireciona para as rotas principais
      navigation.navigate('BottomRoutes');
    } catch (error) {
      console.log('Erro ao tentar logar:', error);
      Alert.alert('Erro', 'Falha ao tentar logar. Verifique suas credenciais.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={style.container}>
      {/* Estrutura da tela de login */}
      <View style={style.boxTop}>
        <Image
          style={style.logo}
          source={require('../../assets/logoMind.png')}
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
          onPress={getLogin} // Chama a função de login ao pressionar o botão
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
