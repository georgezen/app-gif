import { useState } from "react"
import AddCategoria from './AddCategoria';
import GifGrid from './GifGrid';


const GiftExpertApp = () => {
    
    const [categorias, setCategory] = useState(['agua']);

 
    return (
        <>
            
            <AddCategoria setCategory={setCategory} />  
            <h2>Gift Expert App</h2>
            <div>
                {categorias.map((categorias) => (
                    <GifGrid 
                        key={categorias}
                        categorias={categorias}
                    />
                ))
                    
                }
            </div>
            

        </>
    )
}

export default GiftExpertApp;
