//Fetch get GPUs
/*
export async function fetchGPUs(){
    let res;

    res = await fetch("http://localhost:3005/products");
    
    
    if (!res.ok) throw new Error("Failed to get GPUs");
    const data = await res.json();

    return data;
}
*/


//Devuelve todas las gpus usando la API de RapidAPI de Real Time Amazon Data
export async function fetchGPUs(){
    let res;
    let query = "tarjeta grafica";
    res = res = await fetch(
      `https://real-time-amazon-data.p.rapidapi.com/search?query=${encodeURIComponent(query)}&page=1&country=ES&sort_by=RELEVANCE&product_condition=ALL&is_prime=false&deals_and_discounts=NONE`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
          "x-rapidapi-key": "be0447d223mshde5c1dcf5b5b8a1p13010djsnd839128acdf7", // 👈 tu API key aquí
        },
      }
    );    
    
    if (!res.ok) throw new Error("Failed to get GPUs");
    const data = await res.json();

    // aquí devolvemos directamente el array de productos
    return data.data?.products || [];
}



/*
export async function getGpuDetail(asin) {
    const res = await fetch("http://localhost:3005/data");
  
    if (!res.ok) throw new Error("Failed to get GPU detail");
    const data = await res.json();
    return data; // porque json-server devuelve un array
}
*/

//Devuelve el detalle de una GPU usando la API de RapidAPI de Real Time Amazon Data
export async function getGpuDetail(asin){
    let res;
    res = res = await fetch(
      `https://real-time-amazon-data.p.rapidapi.com/product-details?asin=${asin}&country=ES`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
          "x-rapidapi-key": "be0447d223mshde5c1dcf5b5b8a1p13010djsnd839128acdf7", // 👈 tu API key aquí
        },
      }
    );    
    
    if (!res.ok) throw new Error("Failed to get GPUs");
    const data = await res.json();

    // aquí devolvemos directamente el array de productos
    return data?.data ?? {};
}
