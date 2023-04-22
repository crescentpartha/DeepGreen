import { useEffect, useState } from "react"

const usePainting = () => {
    const [paintings, setPaintings] = useState([]);

    useEffect(() => {
        fetch('./api/painting.json')
            .then(res => res.json())
            .then(data => setPaintings(data));
    }, []);

    return [paintings, setPaintings];
}

export default usePainting;