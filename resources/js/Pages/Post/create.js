import Input from "@/Components/Input";
import Label from "@/Components/Label";
import App from "@/Layouts/App";
import { useForm } from "@inertiajs/inertia-react";
import React, { useState } from "react";

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        title: "",
        body: "",
        date_post: "",
    });

    // function handleChange(e) {
    //     const key = e.target.id;
    //     const value = e.target.value;
    //     setValues((values) => ({
    //         ...values,
    //         [key]: value,
    //     }));
    // }

    function sendNewPost(e) {
        e.preventDefault();
        post(route("post.store"));
    }

    return (
        <div className="bg-white h-full rounded-lg shadow-lg px-6 py-4">
            <form onSubmit={sendNewPost}>
                <div className="mb-3">
                    <Label value="Title POST" className=" text-gray-400" />
                    <Input
                        value={data.title}
                        handleChange={(e) => setData("title", e.target.value)}
                        className="w-full"
                        name="title"
                        placeHolder="Input title post...."
                    />
                    <div>
                        {errors.title && (
                            <p className="text-red-600  ml-1">{errors.title}</p>
                        )}
                    </div>
                </div>
                <div className="mb-3">
                    <Label value="Tanggal" className=" text-gray-400" />
                    <Input
                        value={data.date_post}
                        handleChange={(e) =>
                            setData("date_post", e.target.value)
                        }
                        type="date"
                        className="w-full"
                        name="title"
                        placeHolder="Input title post...."
                    />
                    {errors.title && (
                        <p className="text-red-600  ml-1">{errors.title}</p>
                    )}
                </div>
                <div className="mb-3">
                    <Label value="Deskripsi POST" className=" text-gray-400" />
                    <textarea
                        value={data.body}
                        onChange={(e) => setData("body", e.target.value)}
                        className={`border-gray-300 w-full focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm `}
                        name="body"
                        id=""
                        rows="5"
                    ></textarea>
                    {errors.title && (
                        <p className="text-red-600 -mt-2 ml-1">
                            {errors.title}
                        </p>
                    )}
                </div>
                <button className="bg-indigo-500 hover:bg-indigo-600 text-white focus:outline-none rounded-lg block px-4 py-2 w-full">
                    Save New POST
                </button>
            </form>
        </div>
    );
}

Create.layout = (page) => <App children={page} title="Create POST" />;
