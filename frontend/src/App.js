import Navbar from "./components/Navbar"
import Shop from "./pages/Shop"
import Basket from "./pages/Basket"
import EditBasket from "./pages/EditBasket"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './pages/style.css'
const App = () => {
  return (
    <div className="main">
      <BrowserRouter>
        <h1>Todo List</h1>
        <div className="toDoList">
        <Navbar />
        <Routes>
          <Route
            path='/basket'
            element={<Basket />}
          />
          <Route
            path='/shop'
            element={<Shop />}
          />
          <Route
            // dynamic :id to create custom route
            path='/edit-punk/:id'
            element={<EditBasket />}
          />
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App