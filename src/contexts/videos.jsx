import { createContext, useContext, useEffect, useState } from "react";

export const VideosContext = createContext()
VideosContext.displayName = 'videos'

const VideosProvider = ({ children }) => {
    const [videos, setVideos] = useState([])
    return (
        <VideosContext.Provider value={{ videos, setVideos }}>
            {children}
        </VideosContext.Provider>
    )
}

export const useVideosContext = () => {
    const { videos, setVideos } = useContext(VideosContext)

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/Th0mzzz/miniquasart-json-server/db')
            .then(response => response.json())
            .then(data => setVideos(data.videos))
            .catch(error => {
                console.log('Erro ao capturar API')
                console.log(error)
            })
    }, [])

    return {
        videos,
    }


}

export default VideosProvider