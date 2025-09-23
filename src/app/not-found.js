import Image from "next/image";
import { Button } from "react-bootstrap";

export default function NotFound() {
    return(
        <main className="main-home bg-dark text-white d-flex flex-column justify-content-center align-items-center ">
            <h1 className="fw-bold" style={{fontSize:"100px"}}>404</h1>
            <h2 className="fw-bold mb-5" style={{fontSize:"50px"}}>Page Not Found</h2>
            <h3 className="mb-3 text-secondary" style={{fontSize:"30px", fontWeight:"100"}}>La pagina que buscas no existe</h3>
            <Image className="mb-4" src="/img/notfound.png" alt="Not found" width="400" height="300"/>
            <Button href="/" variant="primary" className="py-2 px-4 ms-3 bg-success border border-0 mt-3">
                Volver al inicio
            </Button>            
        </main>
    );
}