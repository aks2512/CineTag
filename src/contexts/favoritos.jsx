import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext();
FavoritosContext.displayName = 'Favoritos';

export default function FavoritosProvider({ children }) {
    const [favorito, setfavorito] = useState([]);

    return (
        <FavoritosContext.Provider
            value={{ favorito, setfavorito }}
        >
            {children}
        </FavoritosContext.Provider>
    )
}

export function useFavoritoContext() {
    const { favorito, setfavorito } = useContext(FavoritosContext);

    function adicionarFavorito(novoFavorito) {
        const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id );

        let novaLista = [...favorito];

        if (!favoritoRepetido) {
            novaLista.push(novoFavorito);
        } else {
            novaLista = novaLista.filter(item => item.id !== novoFavorito.id );
        }

        return setfavorito(novaLista);
    }

    function isFavorito(id) {
        return favorito.find(item => item.id === id)
            ? true
            : false
    }

    return {
        favorito,
        adicionarFavorito,
        isFavorito
    }
}