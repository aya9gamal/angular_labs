import { Lang } from "./lang.model";

export interface ProductLang{
    id?:number;
    name:string;
    description:string;
    // langId:number;
    lang:Lang;
}