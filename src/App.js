import { useSelector, useDispatch } from "react-redux";
import { fetchEmployees } from "./asyncActions/employees";
import { incrCountAction, decrCountAction } from "./store/countReducer";
import { addEmplAction, remEmplAction  } from "./store/emplReducer";



function App() {

  const disptach = useDispatch()
  const count = useSelector(state => state.count.count)
  const empl = useSelector(state => state.empl.empl)

  const addEmplHandler = (name) => {
    const user = {
      id: Date.now(),
      name: name
    }
    disptach(addEmplAction(user))
  }

  const remEmplHandler = (empl) => {
    disptach(remEmplAction(empl.id))
  }

  return (
    <div >
      <h3>Счетчик:</h3>
      {count}
      <div>
        <button onClick={()=> disptach(incrCountAction(+prompt('введите число')))}>Добавить</button>
        <button onClick={()=> disptach(decrCountAction(+prompt('введите число')))}> Убавить</button>
      </div>
      <h3>Cотрудники:</h3>
      {empl.map(e => 

        <div onClick={()=> remEmplHandler(e)} key = {e.id}>
          <p>{e.name}</p>
        </div>)}
      <div>
       <button onClick={()=> addEmplHandler(prompt('Введите имя'))}>Добавить cотрудника</button>
       <button onClick={()=> disptach(fetchEmployees())}>Добавить список cотрудников</button>
      </div>
    </div>
  );
}

export default App;
