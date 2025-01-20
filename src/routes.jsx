import { BrowserRouter, Route, Routes } from "react-router-dom";
// components
import Banner from "./components/Banner";
// paginas
import Favoritos from "./pages/favoritos";
import Home from "./pages/home";
import Player from "./pages/player/index.jsx";
import Error404 from "./pages/error404/index.jsx";
import Template from "./pages/template/index.jsx";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Template />}>
                    <Route index element={<Home />} />
                    <Route path="favoritos" element={<Favoritos />} />
                    <Route path="player/:id" element={<Player />} />
                    <Route path="*" element={<Error404 msg={'pagina não encontrada'}/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;