export default function GpuDetail({ params}){
    //Accede a params.id directamente
    return(
        <main className="container-fluid min-vh-100 bg-dark text-white">
            <h1>Detalle de la GPU {params.id}</h1>
        </main>
    )
}