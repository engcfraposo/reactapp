import './App.css';
import axios from 'axios';
import Logo from './logo.svg'
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([])
  const api = axios.create({
    baseURL: "https://mocknode.azurewebsites.net"
  })
  useEffect(()=>{
    api.get("/users").then(
      response => {
        setUsers(response.data)
      }
    )
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div className="App">
      <header className="App-header">
      {
        users
        ?users.map(user => <p key={user.id}>{user.nome}</p>)
        :<img class="App-logo"src={Logo} alt="loading" />
      }
      </header>
    </div>
  );
}

export default App;
