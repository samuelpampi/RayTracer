//Fetch get GPUs
export async function fetchGPUs(){
    const res = await fetch("http://localhost:3005/products");
    
    if (!res.ok) throw new Error("Failed to get GPUs");
    const data = await res.json();

    return data;
}

export async function getGpuDetail(asin) {
    const res = await fetch(`http://localhost:3005/products?asin=${asin}`);
  
    if (!res.ok) throw new Error("Failed to get GPU detail");
    const data = await res.json();
    return data[0]; // porque json-server devuelve un array
}