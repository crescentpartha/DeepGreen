import { useEffect, useState } from "react"

const useSofa = () => {
    const [sofas, setSofas] = useState([]);

    useEffect(() => {
        fetch('./api/sofa.json')
            .then(res => res.json())
            .then(data => setSofas(data));
    }, []);

    return [sofas, setSofas];
}

export default useSofa;