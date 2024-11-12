import { ChangeEvent, FormEvent, useState } from "react";

export default function LoginPage() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [user, setUser] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:3000/api/login", {
                method: "POST",
                body: JSON.stringify(formData),
                headers: { "Content-Type": "application/json" },
            });

            if (!response.ok) {
                if (response.status === 401) {
                    setError("Authentication failed: Invalid email or password.");
                } else if (response.status === 500) {
                    setError("Internal server error. Try again later.");
                }
                return;
            }

            const data = await response.json();
            console.log("Login form successfully sent:", data);
            setUser(data.userId);
            setError(null);
        } catch (error) {
            console.error("Error sending form:", error);
            setError("An unexpected error ocurred. Please try again.");
        }
    };

    return (
        <div className="flex flex-col items-center w-full h-screen max-w-screen-sm p-8">
            <h1 className="mb-4 text-4xl font-semibold">Bienvenido</h1>
            <p className="mb-6">
                <span>¿No tenés cuenta?</span>{" "}
                <a className="font-semibold underline">Registrate gratis</a>
            </p>
            <form onSubmit={handleSubmit} className="w-full">
                <div className="flex flex-col gap-6">
                    <label htmlFor="email">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-6 py-4 font-medium border rounded-xl border-neutral-400"
                        />
                    </label>

                    <label htmlFor="password">
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Contraseña"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-6 py-4 font-medium border rounded-xl border-neutral-400"
                        />
                    </label>

                    <button
                        type="submit"
                        className="px-6 py-4 font-medium text-white bg-black rounded-xl"
                    >
                        Iniciar sesión
                    </button>
                </div>
            </form>
            <a className="mt-4 font-semibold underline">¿Necesitás ayuda para iniciar sesión?</a>
            <div className="flex items-center w-full gap-2 my-4">
                <div className="w-full h-[1px] bg-neutral-400" />
                ó
                <div className="w-full h-[1px] bg-neutral-400" />
            </div>
            <div className="flex flex-col w-full gap-6">
                <button className="inline-flex px-6 py-4 font-medium border border-black rounded-xl">
                    Iniciar sesión con Google
                </button>
                <button className="inline-flex px-6 py-4 font-medium border border-black rounded-xl">
                    Iniciar sesión con Facebook
                </button>
                <button className="inline-flex px-6 py-4 font-medium border border-black rounded-xl">
                    Iniciar sesión con Apple
                </button>
                <button className="inline-flex px-6 py-4 font-medium border border-black rounded-xl">
                    Iniciar sesión con Magic Link
                </button>
            </div>

            {error && <p className="mt-4 text-red-500">{error}</p>}
            {user && <p>user id: {user}</p>}
        </div>
    );
}
