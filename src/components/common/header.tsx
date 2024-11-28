import { Button } from "../UI/button";

export const ProfileHeader = ({
    title,
    bio,
    location,
    links,
    telephone,
}: {
    title?: string;
    bio?: string;
    location?: string;
    links?: string[];
    telephone?: string;
}) => {
    return (
        <div className="w-full p-4 border-b">
            <div className="flex justify-between gap-2">
                <div className="flex flex-col w-full gap-2 shrink">
                    <h1 className="text-2xl font-semibold">{title}</h1>
                    <p>{bio}</p>
                    <span className="text-neutral-500">{location}</span>
                    {links?.map((link) => (
                        <span className="text-neutral-500" key={link}>
                            {link}
                        </span>
                    ))}
                </div>
                <div className="h-24 overflow-hidden rounded-full min-w-24">
                    <img
                        src="https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="object-cover w-full h-full "
                    />
                </div>
            </div>
            <a
                href={`https://wa.me/${telephone}`}
                className="flex w-full gap-4 mt-4"
                target="_blank"
            >
                <Button className="w-full h-full py-3 max-w-44">Mensaje</Button>
            </a>
        </div>
    );
};
