'use client';
import 'bootstrap/dist/css/bootstrap.css';
import { PriceFilter, BrandFilter } from "../component/Filters";
import { CardGpu } from '../component/CardGpu';
import {useState} from "react";

export default function GPUs() {

    const [selectedBrands, setSelectedBrands] = useState([]); 
    const [price, setPrice] = useState(500);

    const handlerBrandChange = (brand, checked) => {
        if(checked) setSelectedBrands([...selectedBrands, brand]);
        else setSelectedBrands(selectedBrands.filter(b => b !== brand));
    }

    return (
        <main className="container-fluid min-vh-100 bg-dark text-white">
            <div className="row">
                {/* Filtros */}
                <aside className="col-12 col-md-3 col-lg-2 p-4 pe-5">
                    <h3>FILTROS</h3>
                    <BrandFilter
                        brands={["Nvidia", "AMD", "Intel"]}
                        selectedBrands={selectedBrands}
                        onChange={handlerBrandChange}
                    />
                    <PriceFilter min={0} max={5000} value={price} onChange={setPrice} />
                </aside>

                {/* Contenido principal */}
                <section className="col-12 col-md-6 col-lg-7 p-4 d-flex flex-wrap gap-4 justify-content-between">
                <CardGpu />
                <CardGpu />
                <CardGpu />
                <CardGpu />
                <CardGpu />
                <CardGpu />
                <CardGpu />
                </section>

                {/* TOPS */}
                <aside className="col-12 col-md-3 col-lg-3 p-4">
                    <h3>TOPS</h3>
                    <div>
                        <ul className="list-group border-0 rounded-0">
                            <li className="list-group-item border-0 rounded-0 bg-dark bg-gradient text-white d-flex align-items-center justify-content-between">
                                <span>RTX 4090</span>
                                <span className="badge bg-success p-2">1700 €</span>
                            </li>
                            <li className="list-group-item border-0 rounded-0 bg-dark bg-gradient text-white d-flex align-items-center justify-content-between">
                                <span>RTX 4090</span>
                                <span className="badge bg-success p-2">1700 €</span>
                            </li>
                            <li className="list-group-item border-0 rounded-0 bg-dark bg-gradient text-white d-flex align-items-center justify-content-between">
                                <span>RTX 4090</span>
                                <span className="badge bg-success p-2">1700 €</span>
                            </li>
                            <li className="list-group-item border-0 rounded-0 bg-dark bg-gradient text-white d-flex align-items-center justify-content-between">
                                <span>RTX 4090</span>
                                <span className="badge bg-success p-2">1700 €</span>
                            </li>
                        </ul>
                    </div>
                </aside>
            </div>
        </main>
    );
}