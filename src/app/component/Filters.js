'use client';
import { Geist, Geist_Mono } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.css';
import styles from "../globals.css";

export function BrandFilter({ brands, selectedBrands, onChange }) {
    return (
        <div className=" mt-3 d-flex flex-column">
          <h4>Marca</h4>
            {brands.map((brand) => (
                <label key={brand} className="">
                  <input
                      type="checkbox"
                      value={brand}
                      checked={selectedBrands.includes(brand)} // refleja estado
                      onChange={(e) => onChange(e.target.value, e.target.checked)} 
                  />
                  <span className="ms-2">{brand}</span>
                </label>
            ))}
        </div>
    );
}

export function PriceFilter({ min, max, value, onChange}) {
  return (
    <div className="mt-5">
      <h4>Precio</h4>
      <div>
        <input 
            type="range" 
            min={min} 
            max={max} 
            value={value} 
            onChange={(e) => onChange(Number(e.target.value))} 
        />
        <div className="d-flex justify-content-between">
          <span>${min}</span>
          <span>${value}</span>
        </div>        
      </div>
    </div>
  );
}