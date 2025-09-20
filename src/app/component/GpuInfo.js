import Image from "next/image";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.css';
import '@/app/globals.css';


export function GpuInfo({title, about, price, original_price, stars, n_rating, url, images, stock}){

    var COLOR_BG_STOCK = "bg-success-subtle"
    var COLOR_STOCK = "text-success"
    if(stock === 0){
       COLOR_BG_STOCK = "bg-danger-subtle"
       COLOR_STOCK = "text-danger"
    }else if(stock <= 10){
        COLOR_BG_STOCK = "bg-warning-subtle"
        COLOR_STOCK = "text-warning"
    }

    return(
        <div className="d-flex align-items-start gap-5 p-3">
            {/*  
            El contenedor que envuelve la imagen deberiia ser un flex, para poder centrar la imagen y se pueda ver mas visual
            */}

            {/* Sección de Imágenes */}
            <section style={{ maxWidth: "900px" }} className="flex-shrink-0">
                {/* Imagen principal */}
                <div className="d-flex justify-content-center align-items-center mb-3 p-3 bg-white rounded-3" style={{ width: "800px", height: "600px"}}>
                    <Image 
                        src={images[0]} 
                        alt={title} 
                        width={600}
                        height={600}
                        style={{ objectFit: "contain" }}
                    />
                </div>

                {/* Miniaturas en grid */}
                <div className="d-flex justify-content-between" style={{ width: "800px" }}>
                    {images.slice(1,6).map((img, i) => (
                        <div className="d-flex justify-content-center align-items-center bg-white rounded-3" key={i} style={{ width: "125px", height: "125px"}}>
                            <Image 
                                src={img} 
                                alt={title} 
                                width={100}
                                height={100}
                                style={{ objectFit: "contain" }}
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* Sección de Información */}
            <section className="d-flex flex-column" style={{ maxWidth: "800px" }}>
                <h2 className="fw-bold">{title}</h2>

                <div>
                    <span className="me-3" ><FontAwesomeIcon className="text-warning mx-2 fs-6" icon={faStar}/>{stars}</span>
                    <span className="mx-0">({n_rating})</span>
                </div>                

                <p className="mt-3" style={{ textAlign: "justify", maxWidth: "800px" }}>{about}</p>

                <div className={`mt-2 mb-5 p-2 rounded-1 fw-bold text-center ${COLOR_BG_STOCK} ${COLOR_STOCK}`} style={{ width: "150px" }}>
                   Hay {stock} en stock
                </div>

                <div className="d-flex gap-3 mt-5">
                    <span className="fw-bold fs-2">{price}€</span>
                    <span className="text-decoration-line-through fs-2 text-secondary">{original_price}</span>
                    <Button variant="primary" className="bg-success border border-0" style={{ width: "200px" }}>
                        <Link variant="primary" className="link-light link-underline-opacity-0" href={url}>Ver en amazon</Link>
                    </Button>
                </div>
                
            </section>
        </div>
    )
}