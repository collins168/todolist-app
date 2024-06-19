import { useState } from "react"
import Props from "./Props"
import style from "./todolist.module.css";

export default function Todolist() {
    const[item, setItem]=useState('')
    const[items, setItems]=useState([])
    const[imageURL,setImageURL]=useState('')
    const submitButton=(e) =>{
        e.preventDefault()
        setItems([...items,{text: item, image: imageURL}])
        setItem('')
        setImageURL('')
    }
    const handleEditItem = (index, newItem) => {
        const updatedItems=[...items]
        updatedItems[index]=newItem
        setItems(updatedItems)
    }

    return(
        <>
        <h1 className={style.one}>Just Do It</h1>
        <form onSubmit={submitButton} className={style.two}>
        <input type="text" placeholder="Enter a task" value={item} onChange={(e) => setItem(e.target.value)} className={style.three}/>
        <input type="text" placeholder="Enter Image URL" value={imageURL} onChange={(e) => setImageURL(e.target.value)} className={style.four}/>
        <button type="submit" disabled={!item.trim() || !imageURL.trim('')} className={style.five}>Add</button>
        </form>
        <ul className={style.six}>
            {items.map((item, index) =>(
                <Props key={index} item={item} setItems={setItems} items={items} handleEditItem={ handleEditItem} index={index}/>
            ))}
        </ul>
        </>
    )
}