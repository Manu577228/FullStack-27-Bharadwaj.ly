import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import TextField from "./TextField";
import toast from "react-hot-toast";
import api from '../api/api';
import { useStoreContext } from "../contextApi/contextApi";

const LoginPage = () => {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);
    const [showGifLoader, setShowGifLoader] = useState(false);
    const { setToken } = useStoreContext();

    const audioRef = useRef(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            username: "",
            password: "",
        },
        mode: "onTouched",
    });

    const loginHandler = async (data) => {
        setLoader(true);

        try {
            const { data: response } = await api.post(
                "/api/auth/public/login",
                data
            );

            toast.success("Login Successful!");
            reset();

            setShowGifLoader(true);

            setTimeout(() => {
                setToken(response.token);
                localStorage.setItem("JWT_TOKEN", JSON.stringify(response.token));
                navigate("/dashboard");
            }, 4000);

        } catch (error) {
            toast.error("Login Failed!");
            setLoader(false);
        }
    };

    const playAudio = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
        }
    };

    if (showGifLoader) {
        return (
            <div className="fixed inset-0 flex items-center justify-center 
            bg-black/30 backdrop-blur-2xl z-50">

                <div className="bg-white/5 backdrop-blur-3xl 
                border border-white/20 
                rounded-2xl 
                shadow-[0_0_40px_rgba(0,0,0,0.4)] 
                px-14 py-12 
                flex flex-col items-center">

                    <img
                        src="/images/bharadwaj.gif"
                        alt="Loading..."
                        className="w-56 h-56 object-contain cursor-pointer"
                        onClick={playAudio}
                    />

                    <p className="mt-6 text-white/80 font-medium tracking-wide">
                        Entering Dashboard...
                    </p>

                    {/* Hidden Audio */}
                    <audio
                        ref={audioRef}
                        src="/audio/intro.mp3"
                        preload="auto"
                    />
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-[calc(100vh-64px)] flex justify-center items-center bg-gray-50">
            <form
                onSubmit={handleSubmit(loginHandler)}
                className="sm:w-[450px] w-[360px] shadow-md py-8 sm:px-8 px-6 rounded-xl bg-white"
            >
                <h1 className="text-center font-semibold text-indigo-600 lg:text-3xl text-2xl">
                    Login Here
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
                    {loader ? "Authenticating..." : "Login"}
                </button>

                <p className="text-center text-sm text-gray-600 mt-6">
                    Don't have an account?{" "}
                    <Link
                        className="font-semibold text-indigo-600 hover:text-indigo-700"
                        to="/register"
                    >
                        Sign Up
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default LoginPage;