import { Routes, Route } from "react-router-dom"
import { About } from "../pages/about"
import { Home } from "../pages/home"
import { Main } from "../pages/layout/main"
import { Users } from "../pages/users"
import { CreateUser } from "../pages/users/create"

export const MainRoutes = () => {
    return (
      <main>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="main" element={<Main />} />
        <Route path="about" element={<About />} />
        <Route path="users" element={<Users />} />
        <Route path="users/create" element={<CreateUser />} />
      </Routes>
      </main>
    )
}
