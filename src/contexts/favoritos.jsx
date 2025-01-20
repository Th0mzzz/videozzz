import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext()
FavoritosContext.displayName = 'Favoritados'


function FavoritosProv({ children }) {
    const [favoritos, setFavoritos] = useState([])

    return (
        <FavoritosContext.Provider value={
            {
                favoritos,
                setFavoritos
            }
        }>
            {children}
        </FavoritosContext.Provider>
    )
}

export function useFavoritoContext() {
    const { favoritos, setFavoritos } = useContext(FavoritosContext)

    function addFavorito(newFavorito) {
        const favoritoRepetido = favoritos.some(item => item.id === newFavorito.id)

        let newList = [...favoritos]
        if (!favoritoRepetido) {
            console.log('favoritando')
            newList.push(newFavorito)
        } else {
            console.log('desfavoritando')
            newList.splice(
                newList.findIndex(
                    item => item.id === newList.find(item => item.id === newFavorito.id).id
                ),
                1
            )
        }
        return setFavoritos(newList)
    }

    return {
        favoritos,
        addFavorito
    }
}

export default FavoritosProv