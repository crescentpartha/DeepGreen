import { useEffect, useState } from "react"

const useChair = () => {
    const [chairs, setChairs] = useState([]);

    useEffect(() => {
        fetch('./api/chair.json')
            .then(res => res.json())
            .then(data => setChairs(data));
    }, []);

    return [chairs, setChairs];
}

export default useChair;