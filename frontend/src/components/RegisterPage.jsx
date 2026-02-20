import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import TextField from "./TextField";
import toast from "react-hot-toast";
import api from '../api/api';

const RegisterPage = () => {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            username: "",
            email: "",
            password: "",
        },
        mode: "onTouched",
    });

    const registerHandler = async (data) => {
        setLoader(true);
        try {
            await api.post("/api/auth/public/register", data);

            reset();
            toast.success("Registration Successful!");
            navigate("/login");
        } catch (error) {
            toast.error("Registration Failed!");
        } finally {
            setLoader(false);
        }
    };

    return (
        <div className="min-h-[calc(100vh-64px)] flex justify-center items-center bg-gray-50">
            <form
                onSubmit={handleSubmit(registerHandler)}
                className="sm:w-[450px] w-[360px] shadow-md py-8 sm:px-8 px-6 rounded-xl bg-white"
            >
                <h1 className="text-center font-semibold text-indigo-600 lg:text-3xl text-2xl">
                    Register Here
                </h1>

                <hr className="mt-3 mb-6 border-gray-200" />

                <div className="flex flex-col gap-4">
                    <TextField
                        label="Username"
                        required
                        id="username"
                        type="text"
                        message="*Username is required"
                        placeholder="Type your username"
                        register={register}
                        errors={errors}
                    />

                    <TextField
                        label="Email"
                        required
                        id="email"
                        type="email"
                        message="*Email is required"
                        placeholder="Type your email"
                        register={register}
                        errors={errors}
                    />

                    <TextField
                        label="Password"
                        required
                        id="password"
                        type="password"
                        message="*Password is required"
                        placeholder="Type your password"
                        register={register}
                        min={6}
                        errors={errors}
                    />
                </div>

                <button
                    disabled={loader}
                    type="submit"
                    className="bg-indigo-600 hover:bg-indigo-700 
                    font-medium text-white w-full py-2.5 
                    transition-all duration-300 
                    rounded-lg mt-5 shadow-sm hover:shadow-md"
                >
                    {loader ? "Loading..." : "Register"}
                </button>

                <p className="text-center text-sm text-gray-600 mt-6">
                    Already have an account?{" "}
                    <Link
                        className="font-semibold text-indigo-600 hover:text-indigo-700"
                        to="/login"
                    >
                        Login
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default RegisterPage;