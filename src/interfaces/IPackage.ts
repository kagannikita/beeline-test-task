interface IUser{
    username:string
    email:string
}

interface IPackageData{
    name:string
    version:string
    description:string
    date:string
    publisher:IUser
}

export interface IPackage{
    package:IPackageData
}

export interface IData{
    objects:IPackage[]
    total:number
}
