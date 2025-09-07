'use client'
import React, {Component} from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function LinkClient({route, text}){

    // Hook para obtener la ruta actual
    const pathname = usePathname();

    return(<Link className={`link ${pathname === route ? "nav-link active" : "nav-link"}`} href={route}>{text}</Link>);
}