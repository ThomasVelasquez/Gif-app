import React,{useState} from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = ()=>{
    
    

    const [categories, setCategories] = useState(['One Punch'])

    return(
        <div>
        <h2>Gif Expert App</h2>
        <AddCategory setCategories={setCategories} />
        <hr/>


        <ul>
            {
                categories.map( category => {
                    return(
                    <GifGrid 
                    category={category} 
                    key={category}
                    />
                )})
            }
        </ul>

        </div>
    )
}

export default GifExpertApp