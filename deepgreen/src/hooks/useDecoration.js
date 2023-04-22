import { useEffect, useState } from "react"

const useDecoration = () => {
    const [decorations, setDecorations] = useState([]);

    useEffect(() => {
        fetch('./api/decoration.json')
            .then(res => res.json())
            .then(data => setDecorations(data));
    }, []);

    return [decorations, setDecorations];
}

export default useDecoration;