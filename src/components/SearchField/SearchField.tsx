import React,{useState} from "react";
import styles from "./search.module.scss"
export interface ISearch {
    handleSearch: (searchText: string) => void
}
const SearchField=({handleSearch}:ISearch)=>{
    const [text, setText] = useState('')
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }
    return (
        <div className={styles.field}>
        <input type="text" className={styles.textbox} placeholder="Search" onChange={handleChange}/>
            <input title="Search"  type="button" className={styles.button} onClick={()=>handleSearch(text)}/>
        </div>
    )
}
export default SearchField
