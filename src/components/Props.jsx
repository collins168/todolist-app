import style from "./props.module.css";
export default function Props({item, setItems, items, handleEditItem, index}){
    const clickButton=()=>{
        console.log(item, "Was clicked.");
        setItems(items.filter((name) =>name!==item))
    }
    const handleEdit = () => {
        const newItem = window.prompt("Edit the item:", item.text);
        const newImageURL=window.prompt("Edit the Image URL:",item.imageURL)
        if (newItem !== null && newItem.trim() !== ''&& newImageURL !== null && newImageURL.trim() !=="") {
            handleEditItem(index,{text:newItem, imageURL:newImageURL});
        }
    };
    return(
        <>
        <li className={style.one}>
            <span className={style.two}>{item.text}</span>
            <img src={item.image} alt={item.text} style={{height:"50px", width:"50px"}}/>
            <button onClick={()=>clickButton()} className={style.three}>X</button>
            <button onClick={() =>handleEdit()} className={style.four}>Edit</button>
        </li>
        </>
    )
}