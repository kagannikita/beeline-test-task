import {IPackage} from "../../interfaces/IPackage";
import styles from './item.module.scss'
const ListItem=(data:IPackage)=>{
    const month=new Date().getMonth()- new Date(data.package.date).getMonth()
    return (
            <div className={styles.item}>
                <div className={styles.title}>
                    <h3 className="">{data.package.name}</h3>
                </div>
                <p className={styles.desc}>{data.package.description}</p>
                <div className={styles.user}>
                        <p className="">{data.package.publisher.username}
                            <span className=""> published {data.package.version} {month} months ago</span>
                        </p>
                </div>
            </div>
    )
}
export default ListItem
