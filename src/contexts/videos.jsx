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
        if (videos.length === 0) { 
            fetch('https://my-json-server.typicode.com/Th0mzzz/miniquasart-json-server/db')
                .then(response => response.json())
                .then(data => setVideos(data.videos))
                .catch(error => {
                    console.log('Erro ao capturar API:', error);
                });
        }
    }, [videos, setVideos]);

    function addVideos(video) {
        let newList = [...videos]

        video.id = videos.length > 0 ? videos[videos.length - 1].id + 1 : 1;

        newList.push(video)
        console.log('Adicionando novo vídeo')
        console.log(video)
        setVideos(newList)
    }
    return {
        videos,
        addVideos
    }


}

export default VideosProvider