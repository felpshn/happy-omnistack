import axios from 'axios';

// ip pode alterar a cada reinicialização!, sempre conferir no expo.
const api = axios.create({
  //baseURL: 'http://192.168.100.13:3333' Expo cel físico
  baseURL: 'http://localhost:3333'
});

export default api;
