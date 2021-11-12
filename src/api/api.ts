import axios from "axios";
import {IData} from "../interfaces/IPackage";
export const getData=(text:string,page:string):Promise<IData>=>{
    return new Promise((resolve, reject) => {
        axios
            .get<IData>(`https://registry.npmjs.org/-/v1/search?text=${text}&size=10&from=${page}`)
            .then((res) => resolve(res.data))
            .catch((err) => reject(err))
    })
}
