export const Divider = ({ children }: { children?: React.ReactNode }) => {
    return (
        <div className="flex items-center w-full gap-2 my-4">
            <div className="w-full h-[1px] bg-neutral-400" />
            {children}
            <div className="w-full h-[1px] bg-neutral-400" />
        </div>
    );
};
