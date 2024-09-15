import React, { useState } from "react"; 
import { Text, View, TouchableOpacity, Modal, TextInput, Alert } from 'react-native'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { AntDesign, Entypo, FontAwesome } from '@expo/vector-icons'
import { style } from "./styles";
import { themes } from "../../global/themes";

export default function CustomTabBar({state, navigation}: BottomTabBarProps) {
    const [modalVisible, setModalVisible] = useState(false);
    const [projectName, setProjectName] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const [projectDueDate, setProjectDueDate] = useState('');

    const go = (screenName: string) => {
        navigation.navigate(screenName);
    };

    // Função para salvar o projeto
    const handleSaveProject = () => {
        if (!projectName || !projectDescription || !projectDueDate) {
            return Alert.alert('Por favor, preencha todos os campos.');
        }
        // Aqui você pode implementar a lógica para salvar o projeto
        Alert.alert('Projeto criado com sucesso!');
        setModalVisible(false);
        setProjectName('');
        setProjectDescription('');
        setProjectDueDate('');
    };

    return (
        <View style={style.tabArea}>
            {/* Ícone de Navegação Home */}
            <TouchableOpacity style={style.tabItem} onPress={() => go('Home')}>
                <AntDesign
                    name='bars'
                    style={{opacity: state.index === 0 ? 1 : 0.5, color: themes.colors.primary, fontSize: 32}}
                    color={themes.colors.softText}
                />
            </TouchableOpacity>

            {/* Botão Central para Adicionar Projeto */}
            <TouchableOpacity style={style.tabItemButton} onPress={() => setModalVisible(true)}>
                <View style={{width: '100%'}}>
                    <Entypo
                        name='plus'
                        size={40}
                        color={themes.colors.inputs}
                    />
                </View>
            </TouchableOpacity>

            {/* Ícone de Navegação Usuário */}
            <TouchableOpacity style={style.tabItem} onPress={() => go('User')}>
                <FontAwesome
                    name='user'
                    style={{opacity: state.index === 1 ? 1 : 0.2, color: themes.colors.primary, fontSize: 32}}
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
                            placeholder="Data de Entrega (YYYY-MM-DD)"
                            value={projectDueDate}
                            onChangeText={setProjectDueDate}
                            placeholderTextColor={themes.colors.softText}
                        />
                        
                        {/* Botões de Ação */}
                        <View style={style.modalButtons}>
                            <TouchableOpacity style={style.button} onPress={handleSaveProject}>
                                <Text style={style.buttonText}>Salvar</Text>
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
