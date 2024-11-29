import { notis } from "@/utils/mockNotifications";

export default function Notifications() {
    const notifications = notis.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return (
        <div>
            <header className="w-full h-[100px] border-b p-4">
                <h1 className="text-4xl font-semibold pt-[28px]">Notificaciones</h1>
            </header>
            <div className="flex flex-col gap-4 px-4 pt-4 pb-[84px]">
                {notifications.map(({ _id, title, description, detail }) => (
                    <NotisCard key={_id} title={title} description={description} detail={detail} />
                ))}
            </div>
        </div>
    );
}

const NotisCard = ({
    title,
    description,
    detail,
}: {
    title: string;
    description: string;
    detail?: string;
}) => {
    return (
        <div className="flex gap-4 px-4 py-2 bg-neutral-100 rounded-2xl">
            <div className="w-full h-full overflow-hidden rounded-full max-h-[60px] max-w-[60px] aspect-square">
                <div className="w-full h-full bg-purple-300" />
            </div>
            <div className="flex flex-col">
                <h3 className="font-bold">{title}</h3>
                <p>{description}</p>
                {detail && <p className="text-neutral-400">{detail}</p>}
            </div>
        </div>
    );
};
