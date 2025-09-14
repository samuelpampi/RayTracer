import Image from "next/image";

export function GpuDetail({title, price, original_price, stars, n_rating, url, img, stock}){
    return(
        <div>
            <p>{title}</p>
            <p>{price}</p>
            <Image href={img}/>
        </div>
    )
}