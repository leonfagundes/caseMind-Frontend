import api from './api';

// Função para registrar usuário
export const registerUser = async (name: string, email: string, password: string, photo: Blob | null) => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);

    if (photo) {
        formData.append('photo', photo, 'profile.jpg');
    }

    const response = await api.post('/users', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });

    return response.data;
};

// Função para buscar o usuário pelo ID
export const getUserById = async (userId: string, token: string) => {
    try {
      const response = await api.get(`/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Envia o token de autenticação
        },
      });
  
      return response.data;
    } catch (error: any) {
      console.error('Erro ao buscar usuário por ID:', error);
      throw new Error('Erro ao buscar usuário');
    }
}

