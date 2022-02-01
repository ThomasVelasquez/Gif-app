import React from 'react';
import useFetchGif from '../hooks/useFetchGif';
import GifGridItem from './GifGridItem';

const GifGrid = ({category}) => {

  

    const {data:images,loading} = useFetchGif(category)

    return(
        
        <React.Fragment>
        <h3> {category} </h3>
            <div className="card-grid">
        
            {loading && <div className="msg"><p className='animate__animated animate__flash'>Loading...</p></div>}

        {
            images.map( img =>{
                return(
                    <GifGridItem  
                    key={img.id}
                    { ...img } />
                ); 
            }) // Fin del map
        }; {/*Corchetes del Map*/}
        
    </div>
        </React.Fragment>
    );
}

export default GifGrid