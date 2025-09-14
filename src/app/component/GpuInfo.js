import Image from "next/image";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Link from "next/link";

export function GpuInfo({title, price, original_price, stars, n_rating, url, img, stock}){
    return(
        <div className="d-flex align-items-start gap-5 p-3">
            <section className="rounded-4 bg-white p-3" style={{ position: "relative", width: "600px", height: "auto" }}>
                <Image 
                    src={img}
                    alt="Gpu image"
                    width={600}   // le das tamaño fijo
                    height={400}  // altura aproximada (no tiene que ser exacta)
                    style={{ objectFit: "contain" }}
                />
            </section>
            <section>
                <h2 className="fw-bold">{title}</h2>
                <span className="me-3"><FontAwesomeIcon className="text-warning mx-2" icon={faStar}/>{stars}</span>
                <span className="mx-0">({n_rating})</span>

                <div className="mt-2 mb-5 bg-warning p-2 text-dark rounded-1 fw-bold text-center opacity-75" style={{ width: "150px" }}>
                   Hay {stock} en stock
                </div>
                <div className="d-flex gap-3 mt-3">
                    <span className="fw-bold fs-3">{price}</span>
                    <span className="text-decoration-line-through fs-3">{original_price}</span>
                    <Button variant="primary" className="bg-success border border-0" style={{ width: "200px" }}>
                        <Link variant="primary" className="link-light link-underline-opacity-0" href={url}>Ver en amazon</Link>
                    </Button>
                </div>
                
            </section>
        </div>
    )
}