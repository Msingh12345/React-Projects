import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import TodoItemsContextProvider, { TodoItemsContext } from "./store/todo-items-store"; 
import { useState } from "react";


function App() {

  // const [todoItems,setTodoItems]=useState([]);

  // const addNewItem=(itemName,itemDueDate)=>{
  //   const newTodoItems =[
  //     ...TodoItems,
  //     {name: itemName, dueDate:itemDueDate},
  //   ];
  //   setTodoItems(newTodoItems);
  // }

  // const deleteItem=(todoItemName)=>{
  //   const newTodoItems=todoItems.filter((item)=>item.name!==todoItemName);
  //   setTodoItems(newTodoItems);
  // }

    


  return (

  //   <TodoItemsContext.Provider
  //      value={{
  //       TodoItems,
  //       addNewItem,
  //       deleteItem,
  //      }}
  //   >
  //   <center className="todo-container">
  //     <AppName />
  //     <AddTodo />
  //     <WelcomeMessage></WelcomeMessage>
  //     <TodoItems></TodoItems>
  //   </center>
  // </TodoItemsContext.Provider>

    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage></WelcomeMessage>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;