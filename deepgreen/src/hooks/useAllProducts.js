import { useEffect, useState } from "react"

const useAllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('./api/allProducts.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return [products, setProducts];
}

export default useAllProducts;