import { StyleSheet } from 'react-native';
import { themes } from '../../global/themes';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: themes.colors.backgorund,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: themes.colors.primary,
    marginBottom: 20,
    marginTop: 25, 
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: themes.colors.primary,
    marginTop: 10,
  },
  tasksContainer: {
    paddingLeft: 20,
    marginTop: 10,
    marginBottom: 10,  // Adiciona espaçamento entre tarefas
  },
  projectDetails: {
    paddingLeft: 20,
    backgroundColor: themes.colors.brightInputs,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: themes.colors.primary,
  },
  description: {
    fontSize: 14,
    color: themes.colors.softText,
    marginTop: 4,
  },
  addButton: {
    marginTop: 10,
    backgroundColor: themes.colors.primary,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  addTaskText: {
    color: themes.colors.primary, 
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  cardContainer: {
    backgroundColor: themes.colors.brightInputs,
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  textContainer: {
    flex: 1,
  },
  dueDate: {
    fontSize: 12,
    color: themes.colors.softText,
    marginTop: 2,
  },
  statusContainer: {
    backgroundColor: themes.colors.primary,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  status: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
  },

  // Estilos do modal
  modalButton: {
    backgroundColor: themes.colors.primary,  // Botão com cor primária
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  modalButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: themes.colors.softText,  // Ajuste para a cor mais suave para cancelar
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  cancelButtonText: {
    fontSize: 16,
    color: themes.colors.primary,  // Texto de cancelar com a cor principal
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', // Fundo escuro com transparência
  },
  modalContent: {
    width: '80%',
    backgroundColor: themes.colors.brightInputs,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: themes.colors.primary,
  },
  input: {
    width: '100%',
    borderColor: themes.colors.primary,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flex: 1,
    backgroundColor: themes.colors.primary,
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
