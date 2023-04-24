import { useEffect, useState } from "react"

const useSlides = () => {
    const [slides, setSlides] = useState([]);

    useEffect(() => {
        fetch('./api/slides.json')
            .then(res => res.json())
            .then(data => setSlides(data));
    }, []);

    return [slides, setSlides];
}

export default useSlides;