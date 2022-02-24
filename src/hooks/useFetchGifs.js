import { useState,useEffect } from "react";
import obtenerGifs  from "../helpers/obtenerGift";


export const useFetchGifs = (categorias) => {
 const [state, setState] = useState({
    data: [],
    loading: true,
 });  

  useEffect(() => {
   obtenerGifs(categorias)
   .then(imgs => {
      setTimeout(() => {
         console.log(imgs);
         setState({
            data: imgs,
            loading: false,
         });
      }, 2000);
   })
   .catch(err => console.log(err));
  }, [categorias]);

 return state;
}
