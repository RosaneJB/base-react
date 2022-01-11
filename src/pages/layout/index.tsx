import { MainRoutes } from "../../routes"
import { Home } from "../home"
import { Footer } from "./footer"
import { Header } from "./header"
import { Main } from "./main"
import "./style.css"

export const Layout = () => {
    return (
        <>
       <Header />
       <MainRoutes />
       <Footer/>
        </>
    )
}
