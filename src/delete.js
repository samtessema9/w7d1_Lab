import React from "react";

const Delete = ({identifier, changeState, data}) => {

    const handleDelete = (e) => {
        let updated = data.filter((obj) => {
            return obj !== identifier
        })
        changeState(updated)
    }

    return ( 
        <>
            <button onClick={handleDelete}>Delete</button>
        </>
     );
}
 
export default Delete;