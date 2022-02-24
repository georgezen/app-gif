import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

/* codigo de componente  GifGrid*/
const GifGrid = ({ categorias }) => {
    //const [images, setImages] = useState([]);
    const {data,loading} = useFetchGifs(categorias); //useFetchGifs es un customhook el cual su nombre inicia con use y seguido por el nombre del hook   
    
    console.log(loading);
    /* el hook de useEffect sirve para que se ejecute una sola vez la funcion que le mandes el primer parametro es de una funcion de flecha, el segundo es un array vacio */
    // useEffect(() => {
    //     obtenerGifs(categorias)
    //     .then(imgs => {
    //         setImages(imgs);
    //     })
    //     .catch(err => console.log(err));
    // }, [categorias]);

    

    return (
        <>
            <h2 className="titulin">{categorias} </h2>
            {loading && <p className="titulin">Cargando</p>}
            <div className="container-card">
            {data.map((img) => {
                return <GifGridItem 
                    key={img.id}    
                    {...img} 
                />
            })}
             </div>
        </>
    );
};
/* fin codigo de componente  GifGrid*/

export default GifGrid;
