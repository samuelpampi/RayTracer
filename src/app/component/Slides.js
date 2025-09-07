'use client'
import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import styles from "../page.module.css";
import Image from "next/image";

export function Slides(){
    return(
        <Carousel className={styles.carrusel} >
            <Carousel.Item>
                <Image className={styles.imgSlide} src="/img/5090.png" alt="RTX 5090 Image" width={1200} height={600}/>
                <Carousel.Caption className="d-flex align-items-start flex-column">
                <h3 className="fw-bold">RTX 5090</h3>
                <p>Lleva tus juegos al límite absoluto con la potencia que solo la RTX 5090 puede ofrecer</p>
                <button type="button" className="btn btn-success fw-bold px-5">Más info</button>
                </Carousel.Caption>
            </Carousel.Item>      
            <Carousel.Item>
                <Image className={styles.imgSlide} src="/img/rx 9070 xt.png" alt="RTX 5090 Image" width={1200} height={600}/>
                <Carousel.Caption className="d-flex align-items-start flex-column">
                <h3 className="fw-bold">RX 9070 XT</h3>
                <p>Transforma tus juegos en experiencias épicas con gráficos impresionantes y sin límites</p>
                <button type="button" className="btn btn-success fw-bold px-5">Más info</button>
                </Carousel.Caption>
            </Carousel.Item>  
            <Carousel.Item>
                <Image className={styles.imgSlide} src="/img/4090.png" alt="RTX 5090 Image" width={1200} height={600}/>
                <Carousel.Caption className="d-flex align-items-start flex-column">
                <h3 className="fw-bold">RTX 4090</h3>
                <p>Rinde como nunca antes y conquista cualquier juego con la reina de las GPUs</p>
                <button type="button" className="btn btn-success fw-bold px-5">Más info</button>
                </Carousel.Caption>
            </Carousel.Item>  
            <Carousel.Item>
                <Image className={styles.imgSlide} src="/img/rx 6650 xt.png" alt="RTX 5090 Image" width={1200} height={600}/>
                <Carousel.Caption className="d-flex align-items-start flex-column">
                <h3 className="fw-bold">RX 6650 XT</h3>
                <p>Rendimiento sólido y eficiente para que disfrutes de cada juego sin compromisos</p>
                <button type="button" className="btn btn-success fw-bold px-5">Más info</button>
                </Carousel.Caption>
            </Carousel.Item>        
        </Carousel>
    );
}