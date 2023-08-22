import { useState } from 'react';
import style from './search.module.css';

export default function Search(){
    const [content,setContent] = useState(false);
          
    const data = [
        "The Shawshank ",
        "The Godfather",
        "The Godfather: Part II",
        "The Dark Knight",
        "12 Angry Men",
        "Schindler's List",
        "Pulp Fiction",
      ];
      const handleInputClick=()=>{
        setContent(true)
      }
      const handleListClick=(e)=>{
        console.log(e.target.getAttribute('name'));
        setContent(false)
      }
    return(
        <>
          <div>
            <input className={style.input} type='text' placeholder="add" onClick={handleInputClick} />
            <div className={style.content}>
                { content && 
                data.map((item,index)=>{
                 return(
                    <div key={index}>
                        <li onClick={(e)=>handleListClick(e)} className={style.list} name={item} value={item}>{item}</li>
                    </div>
                    )
                })
                }
            </div>
          </div>
        </>
    );
}