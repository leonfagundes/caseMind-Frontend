import { themes } from "../../global/themes";
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
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
  rightSection: {  
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsContainer: {  
    flexDirection: 'row',
    marginTop: 15,  // Diminui o espaçamento superior entre o status e os botões
    justifyContent: 'center',  // Alinha os botões centralizados abaixo do status
  },
  iconButton: {  
    marginHorizontal: 8,  // Reduz a margem horizontal entre os botões
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
  creator: {
    fontSize: 12,
    color: themes.colors.primary,
    marginTop: 4,
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
  taskContainer: {
    paddingLeft: 20,
    marginTop: 10,
  },
  task: {
    backgroundColor: themes.colors.brightInputs,
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: themes.colors.primary,
  },
  taskDescription: {
    fontSize: 14,
    color: themes.colors.softText,
    marginTop: 4,
  },
  noTasksText: {
    fontSize: 14,
    color: themes.colors.softText,
    marginTop: 10,
  },
  
});
