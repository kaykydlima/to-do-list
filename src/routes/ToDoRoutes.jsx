import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Calendar from "../components/Calendar";

export default function ToDoRoutes() {
  return (
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Calendar />} path="/calendario" />
      </Routes>
  )
}