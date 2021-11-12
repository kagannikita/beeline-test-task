import {IData} from "../../interfaces/IPackage";
import {useEffect, useState} from "react";
import {getData} from "../../api/api";
import SearchField from "../SearchField/SearchField";
import Paginator from "../Paginator/Paginator";
import ListItem from "../ListItem/ListItem";

const List=()=>{
    const [data, setData] = useState<IData|null>(null)
    const [currentPage, setPage] = useState(1)
    const page=currentPage-1
    const handlePages = (updatePage: number) => setPage(updatePage)
    const [search, setSearch]: [string, (search: string) => void] = useState<string>('')
    const handleSearch = (searchText: string) => setSearch(searchText)
    useEffect(()=>{
      getData(search,page.toString()).then((data)=>setData(data))
    },[currentPage, page, search, setData])
    return(
        <div>
            <SearchField handleSearch={handleSearch} />
            <ul className="posts">
                {data!==null && data!.objects.map((info) => (
                        <ListItem key={info.package.name} {...info}/>
                    ))}
            </ul>
            {(data!==null && data.total!==0)&&( <Paginator currentPage={currentPage} pages={data!.total} handlePagination={handlePages} />)}
        </div>
    )
}
export default List
