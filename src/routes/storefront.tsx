import { useEffect, useState } from "react";
import { catalog as response } from "../utils/mockStore";
import { Button } from "@/components/UI/button";

type TResponse = {
    _id: string;
    title: string;
    description: string;
    price: number;
    stock: number;
    hasDelivery: boolean;
    pictures: { url: string; height: number; width: number }[];
};

export default function StorefrontPage() {
    const [catalog, setCatalog] = useState<TResponse[]>([]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setCatalog(response);
        });

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    console.log(catalog);

    return (
        <div className="flex flex-col w-full max-w-screen-sm">
            <ProfileHeader />
            <div className="flex flex-col gap-4 p-4">
                {catalog.map((product) => (
                    <Card
                        key={product._id}
                        picture={product.pictures[0]}
                        title={product.title}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    );
}

const Card = ({ picture, title, price }) => {
    return (
        <div className="grid h-full grid-cols-2 gap-4 p-4 overflow-hidden rounded-2xl bg-neutral-100 min-h-32">
            <div className="w-full h-full overflow-hidden rounded-lg aspect-square">
                <img src={picture.url} alt={title} className="object-cover w-full h-full" />
            </div>
            <div className="flex flex-col justify-between h-full py-4">
                <h3 className="font-medium">{title}</h3>
                <p className="text-xl font-medium">${price}</p>
            </div>
        </div>
    );
};

const ProfileHeader = ({}) => {
    return (
        <div className="w-full p-4 border-b">
            <div className="flex justify-between gap-2">
                <div className="flex flex-col w-full gap-2 shrink">
                    <h1 className="text-2xl font-semibold">Nombre de tienda</h1>
                    <p>Breve descripcion de la tienda y lo que vende.</p>
                    <span className="text-neutral-500">Ubicación</span>
                    <span className="text-neutral-500">Link de redes</span>
                </div>
                <div className="h-24 overflow-hidden rounded-full min-w-24">
                    <img
                        src="https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="object-cover w-full h-full "
                    />
                </div>
            </div>
            <div className="flex w-full gap-4 mt-4">
                <Button className="w-full h-full py-3 max-w-44">Enviar mensaje</Button>
            </div>
        </div>
    );
};
