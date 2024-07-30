import { useEffect, useState, useRef } from 'react'
import './style.css'
import Trash from '../../assets/16qg.svg'
import api from '../../services/api'

function Home() {
  const [users, setUsers] = useState([])

  const inputName = useRef()
  const inputSurname = useRef()
  const inputEmail = useRef()
  const inputAge = useRef()
  const inputAddress = useRef()



  async function getUsers() {
    const usersFromApi = await api.get('/usuarios')

    setUsers(usersFromApi.data)
  }

  async function createUsers() {
    await api.post('/usuarios', {
      nome: inputName.current.value,
      sobrenome: inputSurname.current.value,
      email: inputEmail.current.value,
      idade: inputAge.current.value,
      endereço: inputAddress.current.value
      

    })

    {
      const nome = inputName.current.value
      const sobre = inputSurname.current.value
      alert('usuario criado com sucesso');
      alert(`Bem vindo!! ${nome} ${sobre}`);
      await window.location.href('navegacao')
    }
    getUsers()



  } 

  async function deleteUsers(id) {
    await api.delete(`/usuarios/${id}`)
    {
      alert("USUARIO FOI DE VASCO")
    }
    getUsers()
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (

    <div className='container'>
      <form action="">
        <h1>Cadrasto</h1>
        <input placeholder='Nome' name='nome' type='text' ref={inputName} />
        <input placeholder='Sobreno' name='sobrenome' type='text' ref={inputSurname} />
        <input placeholder='Email' name='email' type='email' ref={inputEmail} />
        <input placeholder='Idade' name='idade' type='number' ref={inputAge} />
        <input placeholder='Cidade' name='cidade' type='text' ref={inputAddress} />
        <button type='button' onClick={createUsers}>Contratado</button>
      </form>

      {users.map((user) => (

        <div key={user.id} className='card'>
          <div>
            <p>Nome: <span>{user.name} </span> </p>
            <p>Sorenome: <span> {user.surname} </span> </p>
            <p>Email: <span> {user.email} </span> </p>
            <p>Idade: <span> {user.age} </span> </p>
            <p>Cidade: <span>{user.address} </span> </p>
          </div>
          <button onClick={() => deleteUsers(user.id)}>
            <img src={Trash} alt="Lixo" />
          </button>
        </div>
      ))}

    </div>

  )
}



function AnalisarDados() {

}

export default Home
