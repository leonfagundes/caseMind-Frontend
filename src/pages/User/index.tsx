import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Para o ícone de edição
import EditModal from '../../components/Modal'; // Reutilizando o Modal de edição
import { style } from './styles';
import { themes } from '../../global/themes';

export default function User() {
  // Estado para armazenar as informações do perfil
  const [userName, setUserName] = useState('Usuário Teste');
  const [userEmail, setUserEmail] = useState('email@usuario.com');
  const [profileImage, setProfileImage] = useState('https://via.placeholder.com/150'); // URL da imagem
  const [modalVisible, setModalVisible] = useState(false);

  // Função para salvar as alterações do perfil
  const handleSaveEdit = (newName: string, newEmail: string) => {
    setUserName(newName);
    setUserEmail(newEmail);
    setModalVisible(false);
  };

  return (
    <View style={style.container}>
      {/* Foto do Usuário */}
      <Image source={{ uri: profileImage }} style={style.profileImage} />

      {/* Informações do Usuário */}
      <Text style={style.userName}>{userName}</Text>
      <Text style={style.userEmail}>{userEmail}</Text>

      {/* Botão de Editar */}
      <TouchableOpacity style={style.editButton} onPress={() => setModalVisible(true)}>
        <MaterialIcons name="edit" size={24} color={themes.colors.text} />
        <Text style={style.editText}>Editar Perfil</Text>
      </TouchableOpacity>

      {/* Modal de Edição */}
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
