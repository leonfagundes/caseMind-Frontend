import React, { useState } from 'react';
import { View, Text, Alert, Image, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { style } from './styles';
import { MaterialIcons, Octicons } from '@expo/vector-icons';
import { themes } from '../../global/themes';
import * as ImagePicker from 'expo-image-picker';  // Importando o image picker

export default function Register() {
  const navigation = useNavigation<NavigationProp<any>>();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<string | null>(null);  // Estado para a imagem

  // Função para abrir o seletor de imagens
  async function pickImage() {
    // Pedindo permissão para acessar as fotos
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      return Alert.alert('Precisamos de permissão para acessar suas fotos!');
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    
    // Verificando se a seleção foi cancelada
    if (!result.canceled) {
      // Salvando a URI da imagem (agora é um array de 'assets')
      const selectedAsset = result.assets[0]; // Pegue o primeiro item da lista de assets
      setImage(selectedAsset.uri); // A propriedade 'uri' ainda está dentro do 'assets'
    } else {
      Alert.alert('Seleção de imagem foi cancelada');
    }
  }

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
        routes: [{ name: 'BottomRoutes' }],
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

      {/* Seletor de Imagem */}
      <TouchableOpacity style={style.imagePicker} onPress={pickImage}>
        {image ? (
          <Image source={{ uri: image }} style={style.image} />
        ) : (
          <Text style={style.imageText}>Selecionar Foto (Opcional)</Text>
        )}
      </TouchableOpacity>

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
