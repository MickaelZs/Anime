import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:5000'
})


export async function cadastrarAnime(anime){
    const resposta = await api.post('/anime', {
  nome:anime
    })
    return resposta.data;
}

export async function listaAnime(){
    const resposta = await api.get('/anime');
    return resposta.data;
  }