import 'bootstrap/dist/css/bootstrap.css';
import { FilterClient } from "../component/FilterClient";
import { Suspense } from "react";
import { GridGpus } from '../component/GridGpus';
import { TopClient } from '../component/TopClient';
import { fetchGPUs } from '../lib/data';

//Para coger el top usaremos la formula IMDB
// WR = (v / (v + m)) * R + (m / (v + m)) * C
// W = media global de valoraciones (se calcula con todas las valoraciones de todos los productos)
// R = media de valoracion del producto
// v = numero de valoraciones del producto
// m = minimo numero de valoraciones para entrar en el top (por ejemplo 50)
// C = media global (se calcula con todas las valoraciones de todos los productos)
function getTopGpus(gpus, topN = 5) {
  // Calcular la media global (C)
  const ratings = gpus
    .filter(g => g.product_star_rating)
    .map(g => parseFloat(g.product_star_rating));
  const C = ratings.reduce((a, b) => a + b, 0) / ratings.length;

  const m = 50; // minimo de votos para "confiabilidad"

  const scored = gpus.map(gpu => {
    const R = parseFloat(gpu.product_star_rating) || 0;
    const v = parseInt(gpu.product_num_ratings) || 0;

    const WR = (v / (v + m)) * R + (m / (v + m)) * C;

    return { ...gpu, weighted_score: WR };
  });

  // Ordenar por score ponderado
  return scored
    .sort((a, b) => b.weighted_score - a.weighted_score)
    .slice(0, topN);
}

// Parsea el precio de un string con simbolo de moneda a float
function parsePrice(priceStr) {
    if (typeof priceStr !== "string" || !priceStr.trim()) return null;
    const normalized = priceStr.replace(/[^\d.,]/g, '').replace('.', '').replace(',', '.').trim();
    const parsed = parseFloat(normalized);
    return Number.isNaN(parsed) ? null : parsed;
}


function filter_gpus(gpus, params){
    let filtered_gpus = gpus;
    console.log(filtered_gpus);

    //Si hay filtro de precio, transformamos el precio a float y filtramos el array
    if (params.price){
        const maxPrice = parseFloat(params.price);
        if (!Number.isNaN(maxPrice)) {
            filtered_gpus = filtered_gpus.filter(gpu => {
                const parsedPrice = parsePrice(gpu.product_price);
                return parsedPrice !== null && parsedPrice <= maxPrice;
            });
        }
    }

    //Si hay filtro de marca, filtramos por palabras clave en el titulo
    if (params.brand){ // puede ser un string o un array
        let brands = Array.isArray(params.brand) ? params.brand : [params.brand];

        //Recorremos los arrays de marcas para filtrar por palabras clave
        //AMD: Radeon, AMD, RX
        //Nvidia: Nvidia, GeForce, RTX, GTX
        //Intel: Intel, Arc

        filtered_gpus = filtered_gpus.filter(gpu => {
            var title = gpu.product_title.toLowerCase();

            return brands.some(brand => {
                switch(brand){
                    case "AMD": 
                        return title.includes("radeon") || title.includes("amd") || title.includes("rx");
                    case "Intel":
                        return title.includes("intel") || title.includes("arc");
                    case "Nvidia":
                        return title.includes("nvidia") || title.includes("geforce") || title.includes("rtx") || title.includes("gtx");
                    default: return false;
                    }
            });
        });
    }

    return filtered_gpus;
}


//Return graphic cards
export default async function GPUs({ searchParams }) {

    const params = await searchParams;  
    const gpus = await fetchGPUs(); 

    console.log(gpus);
    var filtered_gpus = filter_gpus(gpus, params); //Aplicar filtros de precio y marca

    return (
        <main className="container-fluid min-vh-100 bg-dark text-white">
            <div className="row">
                {/* Filtros */}
                <FilterClient/>

                {/* Contenido principal */}
                <Suspense fallback={<div className="col-12 col-md-6 col-lg-7 p-4 d-flex flex-wrap gap-4 justify-content-between">Cargando...</div>}>
                    <GridGpus gpus={filtered_gpus}/>
                </Suspense>

                {/* TOPS */}
                <aside className="sticky-sidebar col-12 col-md-3 col-lg-3 p-4">
                    <h3>TOPS</h3>
                    <div>
                        <ul className="list-group border-0 rounded-0 gap-2">
                            {getTopGpus(filtered_gpus).map(gpu => (
                                <TopClient key={gpu.asin} name={gpu.product_title} price={gpu.product_price} id={gpu.asin}/>
                            ))}
                        </ul>
                    </div>
                </aside>
            </div>
        </main>
    );
}
