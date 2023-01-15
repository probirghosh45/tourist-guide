import { useEffect, useState } from 'react';

const LoadDB = () => {
    const [items, setItems] = useState()
    useEffect(() => {
        fetch('/DB.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return [items, setItems]
};

export default LoadDB;