import 'bootstrap/dist/css/bootstrap.css';
import { FilterClient } from "../component/FilterClient";
import { Suspense } from "react";
import { GridGpus } from '../component/GridGpus';
import { TopClient } from '../component/TopClient';
import { fetchGPUs } from '../lib/data';

function getTopGpus(gpus){
    // Sort GPUs by price in descending order and get the top 4
    const ordered_gpus = [...gpus].sort((a, b) => {
        let ratingA = a.product_star_rating ? parseFloat(a.product_star_rating) : 0;
        let ratingB = b.product_star_rating ? parseFloat(b.product_star_rating) : 0;
        return ratingB - ratingA;
    });

    return ordered_gpus.slice(0, 4);
}


//Return graphic cards
export default async function GPUs() {

    const gpus = await fetchGPUs();

    return (
        <main className="container-fluid min-vh-100 bg-dark text-white">
            <div className="row">
                {/* Filtros */}
                <FilterClient/>

                {/* Contenido principal */}
                <Suspense fallback={<div className="col-12 col-md-6 col-lg-7 p-4 d-flex flex-wrap gap-4 justify-content-between">Cargando...</div>}>
                    <GridGpus/>
                </Suspense>

                {/* TOPS */}
                <aside className="sticky-sidebar col-12 col-md-3 col-lg-3 p-4">
                    <h3>TOPS</h3>
                    <div>
                        <ul className="list-group border-0 rounded-0">
                            {getTopGpus(gpus).map(gpu => (
                                <TopClient key={gpu.asin} name={gpu.product_title} price={gpu.product_price}/>
                            ))}
                        </ul>
                    </div>
                </aside>
            </div>
        </main>
    );
}