import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Ícones do Material
import { style } from './styles';
import { themes } from '../../global/themes';

type Task = {
  id: number;
  title: string;
  description: string;
};

type CardProps = {
  title: string;
  description?: string;
  dueDate: string;
  status: string;
  creatorName?: string;
  projectId: number;
  tasks?: Task[]; // Adiciona a lista de tarefas ao tipo
  onEdit: () => void;
  onDelete: (projectId: number) => void;
};

export default function Card({
  title,
  description,
  dueDate,
  status,
  creatorName,
  projectId,
  tasks = [], // Tarefas relacionadas
  onEdit,
  onDelete,
}: CardProps) {
  const [expanded, setExpanded] = useState(false);

  // Função que irá perguntar ao usuário antes de excluir o projeto
  const confirmDelete = () => {
    Alert.alert(
      'Excluir Projeto',
      'Tem certeza que deseja excluir este projeto?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Excluir', style: 'destructive', onPress: () => onDelete(projectId) },
      ]
    );
  };

  // Função para alternar a expansão do card
  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <TouchableOpacity
      style={style.cardContainer}
      onPress={toggleExpand} // Expande o card ao clicar
      activeOpacity={0.7}
    >
      <View style={style.cardContent}>
        <View style={style.textContainer}>
          <Text style={style.title}>{title}</Text>
          {description && <Text style={style.description}>{description}</Text>}
          <Text style={style.dueDate}>Entrega: {dueDate}</Text>
          {creatorName && <Text style={style.creator}>Criado por: {creatorName}</Text>}
        </View>

        <View style={style.rightSection}>
          {/* Status */}
          <View style={style.statusContainer}>
            <Text style={style.status}>{status}</Text>
          </View>

          {/* Botões de Editar e Excluir abaixo do status */}
          <View style={style.buttonsContainer}>
            {/* Botão de Editar */}
            <TouchableOpacity style={style.iconButton} onPress={onEdit}>
              <MaterialIcons name="edit" size={20} color="#000" />
            </TouchableOpacity>

            {/* Botão de Excluir */}
            <TouchableOpacity style={style.iconButton} onPress={confirmDelete}>
              <MaterialIcons name="delete" size={20} color={themes.colors.primary} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Exibir tarefas se o card estiver expandido */}
      {expanded && (
        <View style={style.taskContainer}>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <View key={task.id} style={style.task}>
                <Text style={style.taskTitle}>{task.title}</Text>
                <Text style={style.taskDescription}>{task.description}</Text>
              </View>
            ))
          ) : (
            <Text style={style.noTasksText}>Nenhuma tarefa encontrada.</Text>
          )}
        </View>
      )}
    </TouchableOpacity>
  );
}
