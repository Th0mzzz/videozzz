import Header from "@/components/header";
import Footer from "@/components/Footer";
import { Outlet } from "react-router-dom";
import Container from "@/components/Container";
import FavoritosProv from "@/contexts/favoritos.jsx";
import VideosProvider from "../../contexts/videos";


const Template = () => {
    return (
        <main>
            <Header />
            <VideosProvider>
                <FavoritosProv>
                    <Container>
                        <Outlet />
                    </Container>
                </FavoritosProv>
            </VideosProvider>

            <Footer />

        </main>
    )
}

export default Template;