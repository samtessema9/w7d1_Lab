import React from "react";
import Delete from "./delete";


const Display = ({product, changeState, data}) => {

    return ( 
        <>
            <div>Name: {product.name}</div>
            <div>{product.price}</div>
            <div>{product.description}</div>
            <img src={product.img}></img>
            <Delete identifier={product} changeState={changeState} data={data}/>
        </>
     );
}
 
export default Display;