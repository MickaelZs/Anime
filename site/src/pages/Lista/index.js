import { listaAnime } from '../../api/anime'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
 
export default function App() {

   
    const [nome, setNome] = useState([]);
    



    async function carregarTodosAnime(){
        const resp = await listaAnime();
        setNome(resp);
    }

    useEffect(() => {
        carregarTodosAnime();
    }, [])
    

    
  return (
    <div className="App">
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>ANIME</th>
                </tr>
            </thead>

            <tbody>
                {nome.map(item =>
                <tr>
                    <td>{item.id}</td>
                    <td>{item.nome}</td>
                </tr>
                    )}
            </tbody>
        </table>
    </div>
  );
}