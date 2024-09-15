import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { style } from './styles';
import { MaterialIcons, Octicons } from '@expo/vector-icons';
import { themes } from '../../global/themes';

export default function Register() {
  const navigation = useNavigation<NavigationProp<any>>();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [loading, setLoading] = useState(false);

  function handleRegister() {
    setLoading(true);

    try {
      // Verificar se os campos estão preenchidos
      if (!name || !email || !password || !confirmPassword) {
        setLoading(false);
        return Alert.alert('Atenção, preencha todos os campos!');
      }

      // Verificar se as senhas coincidem
      if (password !== confirmPassword) {
        setLoading(false);
        return Alert.alert('As senhas não coincidem!');
      }

      // Simulação de sucesso no cadastro
      Alert.alert('Cadastro realizado com sucesso!');

      // Navegar diretamente para a Home, usando 'BottomRoutes'
      navigation.reset({
        index: 0,
        routes: [{ name: 'BottomRoutes' }], // Reseta a pilha de navegação e vai para as rotas de abas
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={style.container}>
      <Text style={style.title}>Cadastrar-se</Text>

      <Input
        value={name}
        onChangeText={setName}
        title="Nome"
        IconRigth={MaterialIcons}
        iconRightName="person"
      />

      <Input
        value={email}
        onChangeText={setEmail}
        title="E-mail"
        IconRigth={MaterialIcons}
        iconRightName="email"
      />

      <Input
        value={password}
        onChangeText={setPassword}
        title="Senha"
        secureTextEntry={showPassword}
        IconRigth={Octicons}
        iconRightName={showPassword ? 'eye-closed' : 'eye'}
        onIconRigthPress={() => setShowPassword(!showPassword)}
      />

      <Input
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        title="Confirmar Senha"
        secureTextEntry={showPassword}
        IconRigth={Octicons}
        iconRightName={showPassword ? 'eye-closed' : 'eye'}
        onIconRigthPress={() => setShowPassword(!showPassword)}
      />

      <View style={style.buttonContainer}>
        <Button text="Cadastrar" loading={loading} onPress={handleRegister} />
      </View>
    </View>
  );
}
