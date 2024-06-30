
import { http } from '@/http';

export const userServices = {
  async login(data) {
    return http.post('/login', data);
  },
  async getInfo() {
    return http.get('/getInfo');
  },
  async changeInfo(data) {
    return http.post('/biz/user/edit', data);
  },
  //
  async getListInfo(data){
    return http.post('/biz/user/list',data);
  }
}
