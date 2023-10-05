import { useContext } from "react";
import { ToDoContext } from "../contexts/toDoContext";

export default function useToDoContext() {
  const context = useContext(ToDoContext)

  if(context === undefined) throw new Error('Não foi possível acessar o contexto')

  return context
}