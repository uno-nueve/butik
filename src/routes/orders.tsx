import { orders } from "@/utils/mockOrders";

export default function Orders() {
    return (
        <div>
            <header className="w-full h-[100px] border-b p-4">
                <h1 className="text-4xl font-semibold pt-[28px]">Ordenes</h1>
            </header>
            <div className="flex flex-col gap-4 p-4">
                {orders.map(
                    ({ _id, item, orderToken, paymentStatus, quantity, deliveryStatus }) => (
                        <OrderCard
                            key={_id}
                            token={orderToken}
                            item={item}
                            quantity={quantity}
                            paymentStatus={paymentStatus}
                            deliveryStatus={deliveryStatus}
                        />
                    )
                )}
            </div>
        </div>
    );
}

const OrderCard = ({
    token,
    item,
    quantity,
    paymentStatus,
    deliveryStatus,
}: {
    token: string;
    item: string;
    quantity: number;
    paymentStatus: string | null;
    deliveryStatus: string | undefined | null;
}) => {
    return (
        <div className="flex w-full gap-4 p-2 bg-neutral-100 rounded-2xl">
            <div className="w-full h-full overflow-hidden rounded-lg max-h-24 max-w-24 aspect-square">
                <div className="object-cover w-full h-full bg-orange-300" />
            </div>
            <div className="flex flex-col justify-between">
                <h3 className="text-xl font-medium">ORDEN #{token}</h3>
                <p className="font-medium">
                    {item} x {quantity}
                </p>
                <div className="flex w-full gap-2">
                    {paymentStatus && <Pill text={paymentStatus} />}
                    {deliveryStatus && <Pill text={deliveryStatus} />}
                </div>
            </div>
        </div>
    );
};

const Pill = ({ text }: { text: string }) => {
    return (
        <div
            className={`px-2 py-1 font-medium rounded-lg text-xs text-white 
                ${text === "Pagado" && "bg-emerald-500"}
                ${text === "Pago pendiente" && "bg-amber-500"}
                ${text === "Cancelado" && "bg-red-600"}
                ${text === "Entregado" && "bg-emerald-500"}
                ${text === "Entrega pendiente" && "bg-black"}
            `}
        >
            {text}
        </div>
    );
};
