import api from './api';

export const login = async (email: string, password: string) => {
  try {
    const response = await api.post('/auth', { email, password });

    if (response.status === 200) {
      // Extraindo o token e o userId corretamente da resposta
      const { token, user } = response.data;
      const userId = user.id; // O userId está dentro do objeto user
      return { token, userId };
    } else {
      throw new Error('Falha na autenticação');
    }
  } catch (error: any) {
    console.error('Erro na autenticação:', error);
    throw error.response?.data || new Error('Erro de rede');
  }
};
