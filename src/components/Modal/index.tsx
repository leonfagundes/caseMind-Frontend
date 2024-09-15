import React, { useState } from 'react';
import { View, Text, Modal, TextInput, TouchableOpacity } from 'react-native';
import { style } from './styles'; // Importando os estilos do modal

type EditModalProps = {
  visible: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  onSave: (title: string, description: string) => void;
};

export default function EditModal({ visible, onClose, title, description, onSave }: EditModalProps) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description || '');

  return (
    <Modal visible={visible} transparent={true} animationType="fade">
      <View style={style.modalContainer}>
        <View style={style.modalContent}>
          <Text style={style.modalTitle}>Editar</Text>

          <TextInput
            style={style.input}
            value={newTitle}
            onChangeText={setNewTitle}
            placeholder="Título"
          />
          
          <TextInput
            style={style.input}
            value={newDescription}
            onChangeText={setNewDescription}
            placeholder="Descrição"
          />

          <View style={style.modalButtons}>
            <TouchableOpacity style={style.button} onPress={() => onSave(newTitle, newDescription)}>
              <Text style={style.buttonText}>Salvar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.button} onPress={onClose}>
              <Text style={style.buttonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
