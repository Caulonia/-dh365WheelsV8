import React from 'react';
import SmallCard from './SmallCard';

let clientes = {
    color:   "primary",
    titulo: "CLIENTES",
    valor: 23,
}

let autos ={
    color:   "success",
    titulo: "AUTOS",
    valor: 42,
}

let marcas = {
    color:   "warning",
    titulo: "MARCAS",
    valor: 8,
}

let cardProps = [clientes,autos,marcas];


function ContentRow(){
    return (
        <React.Fragment>
        <div className="row">
            {
                cardProps.map((producto,index)=>{
                    return <SmallCard  {...producto}  key= {index}/>
                })
            }      
        </div>
        </React.Fragment>
    )
}
export default ContentRow;