import { cadastrarAnime } from '../../api/anime'
import { ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect, useState } from 'react';
 
export default function App() {

    const [nome, setNome] = useState('');
    const [ID, setId] = useState(0);
    const [anime, setAnime] = useState('');
    

    async function salvarClick(){
        try{      
            const r = await cadastrarAnime(nome);
            toast.dark('Anime cadastrador ');
        }
        catch (err){
            toast.error(err.response.data.erro)
        }
        
        
    }

  return (
    <div className="App">
        <ToastContainer/>
        <a>Qual Anime Gostaria?</a>

      <input type='text' placeholder='Anime' value={nome} onChange={e => setNome(e.target.value)}/>

    <div>
      <button onClick={salvarClick}> SALVAR</button> 
    </div>
    </div>
  );
}

