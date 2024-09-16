import api from './api';

export const getTasks = async (token: string) => {
  const response = await api.get('/tasks', {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  return response.data;
};

export const createTask = async (name: string, description: string, deliveryDate: string, projectId: number, userId: number, token: string) => {
  const response = await api.post('/tasks', {
    name,
    description,
    deliveryDate,
    projectId,
    userId,
  }, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  return response.data;
};
