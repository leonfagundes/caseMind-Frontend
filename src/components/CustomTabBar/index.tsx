import React, { useState } from "react"; 
import { Text, View, TouchableOpacity, Modal, TextInput, Alert } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { AntDesign, Entypo, FontAwesome } from '@expo/vector-icons';
import { style } from "./styles";
import { themes } from "../../global/themes";
import { createProject } from '../../services/projectService'; // Importando o serviço
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CustomTabBar({ state, navigation }: BottomTabBarProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectDueDate, setProjectDueDate] = useState('');
  const [loading, setLoading] = useState(false); // Estado para controlar o loading

  const go = (screenName: string) => {
    navigation.navigate(screenName);
  };

  // Função para formatar a data enquanto o usuário digita (DD-MM-YYYY)
  const handleDateInput = (value: string) => {
    // Remove tudo que não for dígito
    const cleanedValue = value.replace(/\D/g, '');

    // Formata para DD-MM-YYYY de maneira flexível (sem forçar o hífen)
    let formattedValue = cleanedValue;
    if (cleanedValue.length > 2) {
      formattedValue = `${cleanedValue.slice(0, 2)}-${cleanedValue.slice(2)}`;
    }
    if (cleanedValue.length > 4) {
      formattedValue = `${cleanedValue.slice(0, 2)}-${cleanedValue.slice(2, 4)}-${cleanedValue.slice(4, 8)}`;
    }

    setProjectDueDate(formattedValue);
  };

  // Função para salvar o projeto
  const handleSaveProject = async () => {
    if (!projectName || !projectDescription || !projectDueDate) {
      return Alert.alert('Por favor, preencha todos os campos.');
    }
  
    // Formata a data para o padrão YYYY-MM-DD para o backend
    const [day, month, year] = projectDueDate.split('-');
    if (!year || year.length !== 4 || !month || !day) {
      return Alert.alert('Erro', 'Data inválida. Por favor, use o formato DD-MM-YYYY.');
    }
    const formattedDate = `${year}-${month}-${day}`; // Formato YYYY-MM-DD para o envio à API
  
    setLoading(true);
    try {
      const token = await AsyncStorage.getItem('token');
      if (!token) {
        return Alert.alert('Erro', 'Token de autenticação não encontrado.');
      }
  
      // Chama o serviço para criar o projeto no backend
      await createProject(projectName, projectDescription, formattedDate, token);
      Alert.alert('Sucesso', 'Projeto criado com sucesso!');
  
      // Limpa os campos e fecha o modal
      setProjectName('');
      setProjectDescription('');
      setProjectDueDate('');
      setModalVisible(false);
  
      // Força o retorno à tela Home, que será atualizada pelo `useIsFocused`
      navigation.navigate('Home');
    } catch (error) {
      console.log('Erro ao salvar projeto:', error);
      Alert.alert('Erro', 'Falha ao criar o projeto.');
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <View style={style.tabArea}>
      {/* Ícone de Navegação Home */}
      <TouchableOpacity style={style.tabItem} onPress={() => go('Home')}>
        <AntDesign
          name="bars"
          style={{
            opacity: state.index === 0 ? 1 : 0.5,
            color: themes.colors.primary,
            fontSize: 32,
          }}
          color={themes.colors.softText}
        />
      </TouchableOpacity>

      {/* Botão Central para Adicionar Projeto */}
      <TouchableOpacity
        style={style.tabItemButton}
        onPress={() => setModalVisible(true)}
      >
        <View style={{ width: "100%" }}>
          <Entypo name="plus" size={40} color={themes.colors.inputs} />
        </View>
      </TouchableOpacity>

      {/* Ícone de Navegação Usuário */}
      <TouchableOpacity style={style.tabItem} onPress={() => go("User")}>
        <FontAwesome
          name="user"
          style={{
            opacity: state.index === 1 ? 1 : 0.2,
            color: themes.colors.primary,
            fontSize: 32,
          }}
          color={themes.colors.softText}
        />
      </TouchableOpacity>

      {/* Modal para criar novo projeto */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={style.modalContainer}>
          <View style={style.modalContent}>
            <Text style={style.modalTitle}>Criar Novo Projeto</Text>

            {/* Input para Nome do Projeto */}
            <TextInput
              style={style.input}
              placeholder="Nome do Projeto"
              value={projectName}
              onChangeText={setProjectName}
              placeholderTextColor={themes.colors.softText}
            />

            {/* Input para Descrição do Projeto */}
            <TextInput
              style={style.input}
              placeholder="Descrição"
              value={projectDescription}
              onChangeText={setProjectDescription}
              placeholderTextColor={themes.colors.softText}
            />

            {/* Input para Data de Entrega */}
            <TextInput
              style={style.input}
              placeholder="Data de Entrega (DD-MM-YYYY)"
              value={projectDueDate}
              onChangeText={handleDateInput} // Aplica a máscara enquanto o usuário digita
              placeholderTextColor={themes.colors.softText}
              maxLength={10} // Limita a entrada a 10 caracteres
            />

            {/* Botões de Ação */}
            <View style={style.modalButtons}>
              <TouchableOpacity style={style.button} onPress={handleSaveProject} disabled={loading}>
                <Text style={style.buttonText}>
                  {loading ? "Salvando..." : "Salvar"}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={style.button} onPress={() => setModalVisible(false)}>
                <Text style={style.buttonText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
