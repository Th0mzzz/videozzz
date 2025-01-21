import Header from "@/components/header";
import Footer from "@/components/Footer";
import { Outlet } from "react-router-dom";
import Container from "@/components/Container";
import FavoritosProv from "@/contexts/favoritos.jsx";
import VideosProvider from "../../contexts/videos";

const Template = () => {
    return (
        <div>
            <VideosProvider>
                <FavoritosProv>
                    <Header />
                    <main>
                        <Container>
                            <Outlet />
                        </Container>
                    </main>
                    <Footer />
                </FavoritosProv>
            </VideosProvider>
        </div>
    )
}

export default Template;