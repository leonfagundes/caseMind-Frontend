import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import EditModal from '../../components/Modal';
import { style } from './styles';
import { themes } from '../../global/themes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUserById } from '../../services/userService'; // Função para buscar usuário pelo ID
import { useNavigation, NavigationProp } from '@react-navigation/native'; // Para navegação

export default function User() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation<NavigationProp<any>>(); // Adicionando navegação

  // Função para buscar o perfil usando o ID do AsyncStorage
  const fetchProfile = async () => {
    try {
      const userId = await AsyncStorage.getItem('userId');
      const token = await AsyncStorage.getItem('token'); // Recupera o token do AsyncStorage
  
      if (!userId || !token) {
        return Alert.alert('Erro', 'Usuário ou token não encontrado!');
      }
  
      const userProfile = await getUserById(userId, token); // Passa o token para a função
      setUserName(userProfile.name);
      setUserEmail(userProfile.email);
  
      if (userProfile.photo) {
        setProfileImage(userProfile.photo);
      }
    } catch (error) {
      console.error('Erro ao buscar perfil:', error);
      Alert.alert('Erro ao buscar perfil');
    }
  };

  useEffect(() => {
    fetchProfile(); // Buscar perfil ao carregar a tela
  }, []);

  const handleSaveEdit = (newName: string, newEmail: string) => {
    setUserName(newName);
    setUserEmail(newEmail);
    setModalVisible(false);
  };

  const handleLogout = async () => {
    await AsyncStorage.clear(); // Limpa o AsyncStorage
    navigation.reset({ // Redireciona para a tela de login
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return (
    <View style={style.container}>
      {profileImage ? (
        <Image source={{ uri: profileImage }} style={style.profileImage} />
      ) : (
        <Image source={require('../../assets/default-profile.png')} style={style.profileImage} />
      )}

      <Text style={style.userName}>{userName}</Text>
      <Text style={style.userEmail}>{userEmail}</Text>

      <TouchableOpacity style={style.editButton} onPress={() => setModalVisible(true)}>
        <MaterialIcons name="edit" size={24} color={themes.colors.text} />
        <Text style={style.editText}>Editar Perfil</Text>
      </TouchableOpacity>

      {/* Botão de Logout */}
      <TouchableOpacity style={style.logoutButton} onPress={handleLogout}>
        <MaterialIcons name="logout" size={24} color={themes.colors.primary} />
      </TouchableOpacity>

      <EditModal
        visible={modalVisible}
        title={userName}
        description={userEmail}
        onClose={() => setModalVisible(false)}
        onSave={(newName, newEmail) => handleSaveEdit(newName, newEmail)}
      />
    </View>
  );
}
