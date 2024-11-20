import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export default function Root() {
    const [stores, setStores] = useState([]);

    useEffect(() => {
        async function getUsers() {
            const response = await fetch("http://localhost:3000/api/users");
            const data = await response.json();
            setStores(data);
        }
        getUsers();
    }, []);

    console.log(stores);

    return (
        <>
            {/* <h1>Hello world!</h1>
            <a href="/login">Inicia sesión</a>
            <a href="/signup">Registrate</a>

            {stores.length &&
                stores.map(({ username, _id }) => (
                    <a href={`/${username}`} key={_id}>
                        {username}
                    </a>
                ))} */}

            <Outlet />
        </>
    );
}
