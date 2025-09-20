'use client';
import 'bootstrap/dist/css/bootstrap.css';
import { PriceFilter, BrandFilter } from "../component/Filters";
import {useEffect, useState} from "react";
import { useRouter } from 'next/navigation';

export function FilterClient(){

    // Hooks for filters
    const [selectedBrands, setSelectedBrands] = useState([]); 
    const [price, setPrice] = useState(5000);
    const router = useRouter();

    // Handler for brand filter changes
    const handlerBrandChange = (brand, checked) => {
        if(checked) setSelectedBrands([...selectedBrands, brand]);
        else setSelectedBrands(selectedBrands.filter(b => b !== brand));
    }

    // Update URL parameters when filters change
    useEffect(() => {
        const timeout = setTimeout(() => {
            const query = new URLSearchParams();

            // precio
            if (price) query.set("price", price.toString());

            // marcas (varias veces la misma key "brand")
            if (selectedBrands.length > 0) {
            selectedBrands.forEach(b => query.append("brand", b));
            }

            router.push(`/gpu?${query.toString()}`);
        }, 500);

        return () => clearTimeout(timeout);
    }, [price, selectedBrands, router]);

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