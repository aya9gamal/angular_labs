import { Category } from "./category.model";
import { PaymentType } from "./payment.type.model";
import { ProductLang } from "./product-lang.model";
import { Tag } from "./tags.model";

export interface product{
    _id :number,
    // name:string,
    data:ProductLang[],
    price:number,
    discount ?:number,
    // imageUrl:string,
    imagesUrls:string[],
    // count:1,
    category:Category,
    paymentTypes:PaymentType[],
    tages:Tag[];
}
