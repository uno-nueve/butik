import { Button } from "../UI/button";

export const Card = ({
    picture,
    title,
    price,
}: {
    title: string;
    price: string;
    picture: { url: string; height: number; width: number };
}) => {
    return (
        <div className="grid h-full grid-cols-2 gap-4 p-3 overflow-hidden rounded-2xl bg-neutral-100 min-h-32">
            <div className="w-full h-full overflow-hidden rounded-lg aspect-square">
                <img src={picture.url} alt={title} className="object-cover w-full h-full" />
            </div>
            <div className="flex flex-col justify-between h-full">
                <div className="flex flex-col gap-2">
                    <h3 className="font-medium">{title}</h3>
                    <p className="text-xl font-medium">${price}</p>
                </div>
                <Button variant="secondary" className="py-[6px] rounded-lg">
                    Añadir
                </Button>
            </div>
        </div>
    );
};
