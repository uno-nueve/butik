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
            const response = await fetch("http://localhost:3000/login", {
                method: "POST",
                body: JSON.stringify(formData),
                headers: { "Content-Type": "application/json" },
            });

            if (!response.ok) {
                if (response.status === 401) {
                    setError(
                        "Authentication failed: Invalid email or password."
                    );
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
        <div className="w-full h-screen p-8">
            <h1 className="mb-4 text-4xl">Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-4 p-4 border bg-slate-100">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                    />

                    <button type="submit" className="p-2 text-white bg-black">
                        Log in
                    </button>
                </div>
            </form>

            {error && <p className="mt-4 text-red-500">{error}</p>}
            {user && <p>user id: {user}</p>}
        </div>
    );
}
