const obtenerGifs = async (categorias) => {
    const ulr =
        `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(categorias) }&limit=10&api_key=gpvS12FctGgYIV6qoBGz48Fqxrnqi1eF`;

    const res = await fetch(ulr);
    const { data } = await res.json();

    const gifs = data.map((img) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        };
    });

    return gifs;
};

export default obtenerGifs;