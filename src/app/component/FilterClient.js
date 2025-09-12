'use client';
import 'bootstrap/dist/css/bootstrap.css';
import { PriceFilter, BrandFilter } from "../component/Filters";
import {useState} from "react";

export function FilterClient(){

    //Hooks for filters
    const [selectedBrands, setSelectedBrands] = useState([]); 
    const [price, setPrice] = useState(500);

    //Handler for brand filter changes
    const handlerBrandChange = (brand, checked) => {
        if(checked) setSelectedBrands([...selectedBrands, brand]);
        else setSelectedBrands(selectedBrands.filter(b => b !== brand));
    }

    return(
        <aside className="sticky-sidebar col-12 col-md-3 col-lg-2 p-4 pe-5">
            <h3>FILTROS</h3>
            <BrandFilter
                brands={["Nvidia", "AMD", "Intel"]}
                selectedBrands={selectedBrands}
                onChange={handlerBrandChange}
            />
            <PriceFilter min={0} max={5000} value={price} onChange={setPrice} />
        </aside>
    );
}