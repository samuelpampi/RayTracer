//Fetch get GPUs
export async function fetchGPUs(){
    const res = await fetch("http://localhost:3005/products");
    
    if (!res.ok) throw new Error("Failed to fetch data");
    const data = await res.json();

    return data;
}