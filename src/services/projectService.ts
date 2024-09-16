import api from './api';

export const getProjects = async (token: string) => {
    const response = await api.get('/projects', {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });
    return response.data;
};

export const createProject = async (name: string, description: string, deliveryDate: string, token: string) => {
    const response = await api.post('/projects', {
      name,
      description,
      deliveryDate
    }, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.data;
  };

  export const deleteProject = async (projectId: number, token: string) => {
    try {
      const response = await api.delete(`/projects/${projectId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.log('Erro ao excluir projeto:', error);
      throw error;
    }
  };

  export const updateProject = async (projectId: number, updatedData: any, token: string) => {
    const response = await api.put(`/projects/${projectId}`, updatedData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  };