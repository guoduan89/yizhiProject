import { http } from '@/http';

export const userServices = {
  async login(data) {
    return http.post('/login', data);
  },
  async getInfo() {
    return http.get('/getInfo');
  },
};
