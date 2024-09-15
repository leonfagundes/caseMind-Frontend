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
  },
  projectDetails: { // Novo estilo adicionado
    paddingLeft: 20,
    marginTop: 10,
    backgroundColor: themes.colors.brightInputs,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
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
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: themes.colors.primary,
  },
  description: {
    fontSize: 14,
    color: themes.colors.softText,
    marginTop: 4,
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

  // Novo estilo para o botão de "Adicionar Tarefa"
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
});
