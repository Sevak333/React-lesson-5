import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [users, setUsers] = useState([
    { id: 101, name: "Tiko", salary: 100000 },
    { id: 102, name: "Aram", salary: 120000 },
    { id: 103, name: "Eva", salary: 180000 },
    { id: 104, name: "Mariam", salary: 210000 },
    { id: 105, name: "Lusine", salary: 145000 }
  ])
  const salaryUp = id => {
    let temp = [...users]
    let obj = temp.find(x => x.id == id)
    obj.salary += 50000
    setUsers(temp)
  }
  return <>
    <h1>Hello {count}</h1>
    <h2>Good Bye {4 + 5}</h2>
    <button onClick={() => setCount(count + 1)}> up </button>
    <table>
      <thead>
        <tr>
          <th> id </th>
          <th> name </th>
          <th>salary</th>
          <th>uctions</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map(us => <tr key={us.id}>
            <td> {us.id} </td>
            <td> {us.name} </td>
            <td> {us.salary} </td>
            <td>
              <button onClick={() => salaryUp(us.id)}>Salary up</button>
            </td>
          </tr>)
        }
      </tbody>
    </table>
  </>
}

export default App
