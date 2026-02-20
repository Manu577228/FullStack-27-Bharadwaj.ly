import { useState } from "react";
import { useStoreContext } from "../../contextApi/contextApi";
import TextField from "../TextField";
import { useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";
import Tooltip from "@mui/material/Tooltip";
import toast from "react-hot-toast";
import api from "../../api/api";

const CreateNewShorten = ({ setOpen, refetch }) => {
    const { token } = useStoreContext();
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            originalUrl: "",
        },
        mode: "onTouched",
    });

    const createShortUrlHandler = async (data) => {
        setLoading(true);
        try {
            const { data: res } = await api.post(
                "/api/urls/shorten",
                data,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        Authorization: "Bearer " + token,
                    },
                }
            );

            const shortenUrl = `${import.meta.env.VITE_REACT_SUBDOMAIN}${res.shortUrl}`;

            await navigator.clipboard.writeText(shortenUrl);

            toast.success("Short URL Copied to Clipboard", {
                position: "bottom-center",
                duration: 3000,
            });

            reset();
            setOpen(false);

            if (refetch) {
                refetch();
            }
        } catch (error) {
            toast.error("Generating ShortURL Failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center bg-white rounded-md">
            <form
                onSubmit={handleSubmit(createShortUrlHandler)}
                className="sm:w-[450px] w-[360px] relative shadow-lg pt-8 pb-6 sm:px-8 px-4 rounded-lg"
            >
                <h1 className="text-center font-bold sm:text-2xl text-[22px] text-slate-800">
                    Generate a New Shorten Link
                </h1>

                <hr className="mt-3 mb-4" />

                <TextField
                    label="Enter URL"
                    required
                    id="originalUrl"
                    placeholder="https://example.com"
                    type="url"
                    message="Url is required"
                    register={register}
                    errors={errors}
                />

                {/* 🔥 FIXED BUTTON (Visible Always) */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md mt-5 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                    {loading ? "Generating..." : "Generate Short Link"}
                </button>

                {/* Close Button */}
                <Tooltip title="Close">
                    <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="absolute right-3 top-3"
                    >
                        <RxCross2 className="text-slate-700 text-2xl" />
                    </button>
                </Tooltip>
            </form>
        </div>
    );
};

export default CreateNewShorten;