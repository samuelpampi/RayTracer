import { getGpuDetail } from "@/app/lib/data";

export default async function GpuDetail({ params}){
    //Accede a params.id directamente
    const { id } = await params
    const gpu = await getGpuDetail(id);
    
    return(
        <main className="container-fluid min-vh-100 bg-dark text-white">
            <h1>Detalle de la GPU {id}</h1>
        </main>
    )
}