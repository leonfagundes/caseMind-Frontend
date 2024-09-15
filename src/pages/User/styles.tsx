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
});
