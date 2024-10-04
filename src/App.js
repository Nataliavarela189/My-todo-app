//(en terminal) npx create-react-app nombre-app-react
//cd nombre-app-react(la estructura del proyecto ya esta creada)
//npm start(run en navegador localhost 3000)
//eliminar las carpetas de src: App.test.js, logo.svg, reportWebVitals.js

//edito->

//Importa React y el hook useState desde la biblioteca React.
//useState: Es un hook que permite agregar y manejar el estado en 
//componentes funcionales.
import React, { useState } from "react";
import "./App.css";

//cada funcion es un componente que devuelve elementos de la interfaz
function App() {
  //Usa el hook useState para manejar el estado de las tareas
  //tasks: Es una variable de estado que contiene un array con las tareas actuales.
  //setTasks: Es una función que actualiza el estado de tasks.
  //El array vacío [] pasado como argumento inicializa tasks como un array vacío.
  const [tasks, setTasks] = useState([]);
  //Usa useState para manejar el estado del texto de una nueva tarea.
  //newTask: Es una variable de estado que contiene el texto de la 
  //nueva tarea que el usuario está escribiendo.
  //setNewTask: Es una función que actualiza el estado de newTask.
  //La cadena vacía "" inicializa newTask como una cadena vacía.
  const [newTask, setNewTask] = useState("");

  //Define una función addTask que se llama cuando el usuario 
  //quiere agregar una nueva tarea.
  const agregarTask = () => {
    //Verifica si newTask no está vacía después de eliminar los espacios en 
    //blanco a los lados con trim(). Si newTask no está vacía, continúa 
    //agregando la tarea.
    if (newTask.trim() !== "") {
      //crea una nueva lista de tareas que incluye todas las tareas 
      //existentes (...tasks) más un nuevo objeto de tarea con el texto de 
      //newTask y un estado completed establecido en false.
      setTasks([...tasks, { text: newTask, completed: false }]);
      //Limpia el campo de entrada
      setNewTask("");
    }
  };
  //Define una función toggleTaskCompletion que se llama cuando el 
  //usuario quiere marcar o desmarcar una tarea como completada.
  const marcadoTask = (index) => {
    //Usa map para crear una nueva lista de tareas donde se cambia el 
    //estado de completed de la tarea que fue clicada.
    const updatedTasks = tasks.map((task, i) =>
    //Verifica si el índice actual coincide con el índice de la tarea 
//clicada. Si coincide, invierte el estado de completed; si no, deja la tarea igual.
    i === index ? { ...task, completed: !task.completed } : task
  );
  //Actualiza el estado de tasks con la lista de tareas actualizada.
  setTasks(updatedTasks);
  };
  //Define una función deleteTask que se llama cuando el 
  //usuario quiere eliminar una tarea.
  const borrarTask = (index) => {
    //Filtra las tareas para crear una nueva lista sin la tarea cuyo 
    //índice coincide con el índice pasado como argumento para ser eliminado
    // Luego, actualiza tasks con esta lista filtrada.
    setTasks(tasks.filter((_, i) => i !== index));
  };
  //renderiza en la interfaz del usuario
  return (
    //Un div con la clase App, que será estilizado usando CSS.
    <div className="App">
      {/*titulo*/}
      <h1>To Do List</h1>
      {/*titulo*/}
      <input
      type="text"
      value={newTask}
      onChange={(e) => setNewTask(e.target.value)}
      />
      {/*^^Cada vez que el usuario escribe algo, newTask se actualiza con el 
        valor actual del campo de entrada.*/}
      <button onClick={agregarTask}>Add Task</button>
      <ul>
        {/*Mapea sobre la lista de tareas (tasks) para crear un 
        elemento de lista (li) para cada tarea.*/}
        {tasks.map((task, index) => (
            <li key={index}>
            {/*^^Un elemento de lista (li) que representa una tarea. 
            La key es el índice de la tarea, lo que ayuda a React a identificar 
            los elementos de la lista.
            abajo: Aplica una línea de tachado al texto si la tarea está marcada como completada.*/}
            <span
            style={{
              textDecoration: task.completed ? "line-through" : "none"
            }}
            onClick={() => marcadoTask(index)}
            >
              {task.text}
            </span>
            {/*Un botón que, al ser clicado, ejecuta la función deleteTask 
            para eliminar la tarea correspondiente.*/}
            <button onClick={() => borrarTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
      
    </div>
  )
}
/*exporta
Funciones como map(), filter(), trim(), y el spread operator (...) son funciones 
y características nativas de JavaScript.
useState es un hook propio de React que se usa en conjunto con esas funciones de JavaScript.*/
export default App;
