import { StyleSheet, Dimensions } from 'react-native';
import { themes } from '../../global/themes';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.colors.backgorund,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: themes.colors.primary,
    textAlign: 'center',
    marginBottom: 32,
  },
  buttonContainer: {
    marginTop: 24,
    alignItems: 'center',
  },
});
