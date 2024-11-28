import { useEffect, useState } from "react";
import { catalog as products } from "../utils/mockStore";
import { vendor } from "../utils/mockVendor";
import { ProfileHeader } from "@/components/common/header";
import { Card } from "@/components/common/card";

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

export default function StorefrontPage() {
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
        <div className="flex flex-col w-full max-w-screen-sm">
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
            </div>
        </div>
    );
}
