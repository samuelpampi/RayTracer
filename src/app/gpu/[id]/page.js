import { getGpuDetail } from "@/app/lib/data";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { GpuInfo } from "@/app/component/GpuInfo";
import "@/app/globals.css";

export default async function GpuDetail({ params}){
    //Accede a params.id directamente
    const { id } = await params
    console.log("ID de la GPU: ", id);
    const gpu = await getGpuDetail(id);
    console.log(gpu);
    
    return(
        <main className="main-home container-fluid min-vh-100 bg-dark text-white">
            <GpuInfo 
                title={gpu.product_title} 
                about={gpu.about_product}
                price={gpu.product_price} 
                original_price ={gpu.product_original_price}
                stars={gpu.product_star_rating}
                n_rating={gpu.product_num_ratings}
                url={gpu.product_url}
                images={gpu.product_photos}
                stock={gpu.product_num_offers}
            />            
        </main>
    )
}