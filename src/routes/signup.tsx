import { Button } from "@/components/UI/button";
import { Divider } from "@/components/UI/divider";
import { Input } from "@/components/UI/input";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import googleSvg from "../assets/google.svg";
import facebookSvg from "../assets/facebook.svg";
import appleLightSvg from "../assets/Apple_light.svg";

export default function RegisterPage() {
    const [username, setUsername] = useState<string>("");
    const [step, setStep] = useState<"first" | "second">("first");
    const [formData, setFormData] = useState({
        username: "",
        fullName: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const timeout = setTimeout(() => {
            console.log(username);
            async function checkAvailability() {
                const response = await fetch("http://localhost:3000/api/users/availability", {
                    method: "POST",
                    body: JSON.stringify({ username: username }),
                    headers: { "Content-Type": "application/json" },
                });

                if (!response.ok) {
                    console.error("Username not available");
                    return;
                }

                console.log(`Username ${username} is available`);
                setFormData({ ...formData, username: username });
            }
            checkAvailability();
        }, 300);
        return () => {
            clearTimeout(timeout);
        };
    }, [username]);

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:3000/api/signup", {
                method: "POST",
                body: JSON.stringify(formData),
                headers: { "Content-Type": "application/json" },
            });

            if (!response.ok) {
                console.error("Error in user register");
                return;
            }

            const data = response.json();
            console.log(data);
        } catch (error) {
            console.error("Error sending form", error);
            setError("An unexpected error ocurred, please try again");
        }
    }

    return (
        <div className="flex flex-col items-center justify-around w-full h-screen max-w-screen-sm p-8">
            <div className="text-center">
                <h1 className="mb-4 text-4xl font-semibold">Registrate en butik</h1>
                <p>
                    Crea tu tienda en línea y vendé <b>gratis.</b>
                </p>
            </div>
            <div className="flex flex-col items-center w-full">
                {step === "first" ? (
                    <>
                        <b>Obtené el link gratuito a tu tienda</b>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                setStep("second");
                            }}
                            className="flex flex-col w-full gap-6 pt-4"
                        >
                            <label htmlFor="username">
                                <div className="inline-flex w-full gap-0.5 px-6 py-4 font-medium border rounded-xl border-neutral-400">
                                    <b>butik.shop/</b>
                                    <input
                                        type="text"
                                        id="username"
                                        name="username"
                                        placeholder="nombre"
                                        className="focus-visible:outline-none"
                                        onChange={(e) => setUsername(e.currentTarget.value)}
                                    />
                                </div>
                            </label>

                            <Button>Continuar</Button>
                        </form>
                    </>
                ) : (
                    <>
                        <form onSubmit={handleSubmit} className="w-full">
                            <div className="flex flex-col gap-6">
                                <label htmlFor="fullName">
                                    <Input
                                        type="text"
                                        name="fullName"
                                        id="fullName"
                                        placeholder="Nombre"
                                        onChange={handleChange}
                                    />
                                </label>
                                <label htmlFor="email">
                                    <Input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Email"
                                        onChange={handleChange}
                                    />
                                </label>
                                <label htmlFor="password">
                                    <Input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Contraseña"
                                        onChange={handleChange}
                                    />
                                </label>
                                <Button>Crear cuenta</Button>
                            </div>
                        </form>
                        {error && <p className="mt-4 text-red-500">{error}</p>}
                        <Divider>ó</Divider>
                        <div className="flex flex-col w-full gap-6">
                            <Button variant="secondary" className="inline-flex gap-4">
                                <img src={googleSvg} alt="Google logo" className="h-6" />
                                Registrate con Google
                            </Button>
                            <Button variant="secondary" className="inline-flex gap-4">
                                <img src={facebookSvg} alt="Facebook logo" className="h-6" />
                                Registrate con Facebook
                            </Button>
                            <Button variant="secondary" className="inline-flex gap-4">
                                <img src={appleLightSvg} alt="Apple logo" className="h-6" />
                                Registrate con Apple
                            </Button>
                        </div>
                    </>
                )}
            </div>
            <p>
                ¿Tenés una cuenta?{" "}
                <a href="/login" className="font-semibold underline">
                    Inicia sesión
                </a>
            </p>
        </div>
    );
}
