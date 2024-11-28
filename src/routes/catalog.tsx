import { useEffect, useState } from "react";
import { catalog as products } from "../utils/mockStore";
import { vendor } from "../utils/mockVendor";
import { Card } from "@/components/common/card";
import { ProfileHeader } from "@/components/common/header";
import { Button } from "@/components/UI/button";

type TProduct = {
    _id?: string;
    title: string;
    description?: string;
    price: string;
    stock?: number;
    hasDelivery?: boolean;
    pictures: { url: string; height: number; width: number }[];
};

type TVendor = {
    _id: string;
    user: string;
    storeName: string;
    bio: string;
    cuil: string;
    address: string;
    telephone: string;
    catalog: TProduct[];
    accountTier: string;
    links: string[];
};

// Display catalog on this page
export default function Catalog() {
    const [storefront, setStorefront] = useState<TVendor | null>(null);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setStorefront({ ...vendor, catalog: products });
        });

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return (
        <div>
            <ProfileHeader
                title={storefront?.storeName}
                bio={storefront?.bio}
                location={storefront?.address}
                links={storefront?.links}
                telephone={storefront?.telephone}
            />
            <div className="flex flex-col gap-4 p-4">
                {storefront?.catalog.map((product) => (
                    <Card
                        key={product._id}
                        picture={product.pictures[0]}
                        title={product.title}
                        price={product.price}
                    />
                ))}
                <div className="sticky flex justify-end w-full bottom-24">
                    <Button className="w-16 h-16 p-4 text-black bg-indigo-300 rounded-full right-4 ">
                        <div className="w-full">
                            <EditIcon />
                        </div>
                    </Button>
                </div>
            </div>
        </div>
    );
}

const EditIcon = () => {
    return (
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M11 3.99998H6.8C5.11984 3.99998 4.27976 3.99998 3.63803 4.32696C3.07354 4.61458 2.6146 5.07353 2.32698 5.63801C2 6.27975 2 7.11983 2 8.79998V17.2C2 18.8801 2 19.7202 2.32698 20.362C2.6146 20.9264 3.07354 21.3854 3.63803 21.673C4.27976 22 5.11984 22 6.8 22H15.2C16.8802 22 17.7202 22 18.362 21.673C18.9265 21.3854 19.3854 20.9264 19.673 20.362C20 19.7202 20 18.8801 20 17.2V13M7.99997 16H9.67452C10.1637 16 10.4083 16 10.6385 15.9447C10.8425 15.8957 11.0376 15.8149 11.2166 15.7053C11.4184 15.5816 11.5914 15.4086 11.9373 15.0627L21.5 5.49998C22.3284 4.67156 22.3284 3.32841 21.5 2.49998C20.6716 1.67156 19.3284 1.67155 18.5 2.49998L8.93723 12.0627C8.59133 12.4086 8.41838 12.5816 8.29469 12.7834C8.18504 12.9624 8.10423 13.1574 8.05523 13.3615C7.99997 13.5917 7.99997 13.8363 7.99997 14.3255V16Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
