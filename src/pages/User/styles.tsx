import { StyleSheet } from 'react-native';
import { themes } from '../../global/themes';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: themes.colors.backgorund,
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderColor: themes.colors.primary,
    borderWidth: 2, // Adiciona uma borda à volta da imagem
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: themes.colors.primary,
    marginBottom: 10,
  },
  userEmail: {
    fontSize: 16,
    color: themes.colors.softText,
    marginBottom: 20,
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: themes.colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  iconColor: {
    color: '#fff',
  },
  editText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10,
    fontSize: 16,
  },
  logoutButton: {
    position: 'absolute',
    top: 60,  // Ajuste de acordo com o design da sua tela
    right: 20, // Ajuste de acordo com o design da sua tela
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
  }
});

