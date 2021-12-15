import { products } from "./products/products";

export const pedirDatos = () => {
  
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            resolve(products)
        }, 2000)
    });
};