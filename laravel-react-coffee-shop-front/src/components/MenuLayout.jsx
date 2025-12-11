import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import axiosClient from "../axios-client.js";

export default function MenuLayout() {
    const [coffee, setCoffee] = useState([]);
    const [loading, setLoading] = useState(false);

    const getCoffee = () => {
        setLoading(true);
        axiosClient.get('/coffee')
            .then(({ data }) => {
                setLoading(false);
                setCoffee(data.data);
            })
            .catch(() => {
                setLoading(false);
            })
    }

    useEffect(() => {
        getCoffee();
    }, [])

    return (
        <>
            {loading && <div>Loading...</div>}
            {!loading && coffee.map(c => (
                <div key={c.id}>
                    <p>{c.name}</p>
                    <p>{c.description}</p>
                </div>
            ))}
            <Outlet />
        </>
    )
}