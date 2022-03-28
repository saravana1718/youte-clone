import React, { useState } from 'react';
import "./_categories.scss";

import {categoriesList} from"./List";

function Categories(props) {
    const[activeElement,setactiveElement]=useState("All");
    const handleClick=value=>{
        setactiveElement(value)
    }
    
    return (
        <div className="categories_bar" >
            {
                categoriesList.map((value,i)=>(
                    <span
                    onClick={()=>handleClick(value)}
                    className={activeElement==value?"active":""}
                    >{value}</span>
                ))
            }
        
        </div>
    );
}

export default Categories;