import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Alert, Modal, TextInput, TouchableOpacity } from 'react-native';
import Card from '../../components/Card';
import { style } from './styles';
import { getProjects } from '../../services/projectService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { themes } from '../../global/themes';
import { createTask } from '../../services/taskService'; // Função para criar tarefa

const statusMapping: { [key: string]: string } = {
  pending: 'PENDENTE',
  in_progress: 'ANDAMENTO',
  completed: 'CONCLUÍDO',
};

type Task = {
  id: number;
  title: string;
  description: string;
};

type Project = {
  id: number;
  name: string;
  description: string;
  deliveryDate: string;
  status: string;
  creator: string;
  tasks: Task[];
};

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [expandedProject, setExpandedProject] = useState<number | null>(null); // Guarda o projeto expandido
  const [loading, setLoading] = useState(true);
  const [addTaskModalVisible, setAddTaskModalVisible] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);

  // Função para buscar os projetos da API
  async function fetchProjects() {
    try {
      const token = await AsyncStorage.getItem('token');
      if (!token) {
        return Alert.alert('Erro', 'Token de autenticação não encontrado');
      }

      const data = await getProjects(token);
      setProjects(data);
    } catch (error) {
      console.log(error);
      Alert.alert('Erro', 'Falha ao tentar buscar os projetos');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  // Função para expandir e contrair o card do projeto
  const toggleExpandProject = (projectId: number) => {
    setExpandedProject((prev) => (prev === projectId ? null : projectId)); // Expande ou contrai o projeto
  };

  // Função para criar nova tarefa
  const handleSaveTask = async () => {
    if (!newTaskTitle || !newTaskDescription || !selectedProjectId) {
      return Alert.alert('Por favor, preencha todos os campos.');
    }

    try {
      const token = await AsyncStorage.getItem('token');
      const userId = await AsyncStorage.getItem('userId'); // Obtém o userId do AsyncStorage

      if (!token || !userId) {
        return Alert.alert('Erro', 'Token ou ID de usuário não encontrado.');
      }

      await createTask(
        newTaskTitle,
        newTaskDescription,
        '2024-12-31', // Data de entrega temporária
        selectedProjectId,
        Number(userId),
        token
      );

      Alert.alert('Sucesso', 'Tarefa criada com sucesso!');
      setAddTaskModalVisible(false);
      fetchProjects(); // Atualiza a lista de projetos e tarefas
    } catch (error) {
      console.log('Erro ao criar tarefa:', error);
      Alert.alert('Erro', 'Falha ao criar a tarefa');
    }
  };

  if (loading) {
    return <Text>Carregando...</Text>;
  }

  return (
    <View style={style.container}>
      <Text style={style.header}>Meus Projetos</Text>

      <FlatList
        data={projects}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity
              onPress={() => toggleExpandProject(item.id)} // Garante que o clique está funcionando
              activeOpacity={0.7}
            >
              <Card
                title={item.name}
                description={item.description}
                dueDate={item.deliveryDate}
                status={statusMapping[item.status] || item.status.toUpperCase()}
                creatorName={item.creator}
                projectId={item.id}
                onEdit={() => {}}
                onDelete={() => {}}
              />
            </TouchableOpacity>

            {/* Exibe as tarefas e o botão "Adicionar Tarefa" somente se o projeto estiver expandido */}
            {expandedProject === item.id && (
              <View style={style.tasksContainer}>
                <Text style={style.sectionTitle}>Tarefas</Text>
                {item.tasks && item.tasks.length > 0 ? (
                  item.tasks.map((task) => (
                    <View key={task.id} style={style.projectDetails}>
                      <Text style={style.title}>{task.title}</Text>
                      <Text style={style.description}>{task.description}</Text>
                    </View>
                  ))
                ) : (
                  <Text style={style.addTaskText}>Nenhuma tarefa encontrada.</Text>
                )}

                {/* Botão para abrir o modal de adicionar tarefa */}
                <TouchableOpacity
                  style={style.addButton}
                  onPress={() => {
                    setSelectedProjectId(item.id);
                    setAddTaskModalVisible(true);
                  }}
                >
                  <Text style={style.addButtonText}>Adicionar Tarefa</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        )}
      />

      {/* Modal para adicionar nova tarefa */}
      <Modal visible={addTaskModalVisible} transparent={true} animationType="slide">
        <View style={style.modalContainer}>
          <View style={style.modalContent}>
            <Text style={style.modalTitle}>Nova Tarefa</Text>

            <TextInput
              style={style.input}
              placeholder="Título da Tarefa"
              value={newTaskTitle}
              onChangeText={setNewTaskTitle}
            />
            <TextInput
              style={style.input}
              placeholder="Descrição da Tarefa"
              value={newTaskDescription}
              onChangeText={setNewTaskDescription}
            />

            <TouchableOpacity style={style.modalButton} onPress={handleSaveTask}>
              <Text style={style.modalButtonText}>Salvar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.cancelButton} onPress={() => setAddTaskModalVisible(false)}>
              <Text style={style.cancelButtonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
