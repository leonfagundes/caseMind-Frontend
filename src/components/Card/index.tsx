import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Ícones do Material
import { style } from './styles';
import { themes } from '../../global/themes';

type CardProps = {
  title: string;
  description?: string;
  dueDate: string;
  status: string;
  creatorName?: string;
  onPress?: () => void;
  onEdit: () => void;
  onDelete: () => void;
};

export default function Card({
  title,
  description,
  dueDate,
  status,
  creatorName,
  onPress,
  onEdit,
  onDelete,
}: CardProps) {
  return (
    <TouchableOpacity
      style={style.cardContainer}
      onPress={onPress}
      activeOpacity={onPress ? 0.7 : 1}
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
            <TouchableOpacity style={style.iconButton} onPress={onDelete}>
              <MaterialIcons name="delete" size={20} color={themes.colors.primary} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
