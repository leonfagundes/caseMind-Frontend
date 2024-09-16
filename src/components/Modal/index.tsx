import React, { useState } from 'react';
import { Modal, View, Text, TextInput, Button } from 'react-native';
import { style } from './styles';

type EditModalProps = {
  visible: boolean;
  title: string;
  description: string;
  onClose: () => void;
  onSave: (name: string, description: string, deliveryDate: string) => void;
};

export default function EditModal({ visible, title, description, onClose, onSave }: EditModalProps) {
  const [name, setName] = useState(title);
  const [desc, setDesc] = useState(description);
  const [deliveryDate, setDeliveryDate] = useState('');

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={style.modalContainer}>
        <View style={style.modalContent}>
          <Text>Nome do Projeto</Text>
          <TextInput value={name} onChangeText={setName} style={style.input} />
          <Text>Descrição</Text>
          <TextInput value={desc} onChangeText={setDesc} style={style.input} />
          <Text>Data de Entrega</Text>
          <TextInput value={deliveryDate} onChangeText={setDeliveryDate} style={style.input} placeholder="AAAA-MM-DD" />

          <Button title="Salvar" onPress={() => onSave(name, desc, deliveryDate)} />
          <Button title="Fechar" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
}
