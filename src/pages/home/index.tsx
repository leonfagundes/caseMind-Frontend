import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Card from '../../components/Card';
import EditModal from '../../components/Modal';
import { style } from './styles';

const projects = [
  {
    id: '1',
    name: 'Projeto A',
    description: 'Descrição do Projeto A',
    dueDate: '2024-12-01',
    status: 'Em andamento',
    creator: 'Usuário 1',
    tasks: [
      {
        id: '1',
        name: 'Tarefa 1',
        description: 'Descrição da Tarefa 1',
        dueDate: '2024-11-01',
        status: 'Pendente',
        createdBy: 'Usuário 2',
      },
      {
        id: '2',
        name: 'Tarefa 2',
        description: 'Descrição da Tarefa 2',
        dueDate: '2024-11-15',
        status: 'Concluída',
        createdBy: 'Usuário 3',
      },
    ],
  },
  // Adicione mais projetos aqui...
];

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState<any | null>(null); // Tarefa ou Projeto selecionado

  // Função para abrir o modal de edição
  function handleEdit(item: any) {
    setSelectedTask(item);
    setIsEditing(true);
    setModalVisible(true);
  }

  // Função para salvar a edição
  function handleSaveEdit(title: string, description: string) {
    // Aqui você adicionaria a lógica para salvar as alterações (provavelmente envolvendo uma API)
    setIsEditing(false);
    setModalVisible(false);
  }

  // Função para adicionar uma tarefa
  function handleAddTask() {
    setSelectedTask(null);
    setModalVisible(true); // Abrir o modal para criar uma nova tarefa
  }

  return (
    <View style={style.container}>
      <Text style={style.header}>Meus Projetos</Text>

      <FlatList
        data={projects}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Card
              title={item.name}
              description={item.description}
              dueDate={item.dueDate}
              status={item.status}
              creatorName={item.creator}
              onPress={() => setSelectedProject(selectedProject === item.id ? null : item.id)}
              onEdit={() => handleEdit(item)}
              onDelete={() => { /* Lógica de exclusão */ }}
            />

            {selectedProject === item.id && (
              <View style={style.projectDetails}>
                <Text style={style.sectionTitle}>Tarefas:</Text>

                {item.tasks.map((task) => (
                  <Card
                    key={task.id}
                    title={task.name}
                    description={task.description}
                    dueDate={task.dueDate}
                    status={task.status}
                    creatorName={task.createdBy}
                    onEdit={() => handleEdit(task)}
                    onDelete={() => { /* Lógica de exclusão da tarefa */ }}
                  />
                ))}

                {/* Botão de Adicionar Tarefa */}
                <TouchableOpacity style={style.addButton} onPress={handleAddTask}>
                  <Text style={style.addButtonText}>Adicionar Tarefa</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        )}
      />

      {/* Modal de Edição ou Adição */}
      <EditModal
        visible={modalVisible}
        title={selectedTask ? selectedTask.name : ''}
        description={selectedTask ? selectedTask.description : ''}
        onClose={() => setModalVisible(false)}
        onSave={handleSaveEdit}
      />
    </View>
  );
}
