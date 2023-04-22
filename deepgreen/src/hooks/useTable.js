import { useEffect, useState } from "react"

const useTable = () => {
    const [tables, setTables] = useState([]);

    useEffect(() => {
        fetch('./api/table.json')
            .then(res => res.json())
            .then(data => setTables(data));
    }, []);

    return [tables, setTables];
}

export default useTable;