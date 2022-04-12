import Input from "@/Components/Input";
import Label from "@/Components/Label";
import App from "@/Layouts/App";
import React from "react";

export default function Create() {
    return (
        <div className="bg-white h-full rounded-lg shadow-lg px-6 py-4">
            <form action="">
                <div className="mb-3">
                    <Label value="Title POST" className=" text-gray-400" />
                    <Input
                        className="w-full"
                        required={true}
                        name="title"
                        placeHolder="Input title post...."
                    />
                </div>
                <div className="mb-3">
                    <Label value="Tanggal" className=" text-gray-400" />
                    <Input
                        type="date"
                        className="w-full"
                        required={true}
                        name="title"
                        placeHolder="Input title post...."
                    />
                </div>
                <div className="mb-3">
                    <Label value="Deskripsi POST" className=" text-gray-400" />
                    <textarea
                        required
                        className={`border-gray-300 w-full focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm `}
                        name="deskripsi"
                        id=""
                        rows="5"
                    ></textarea>
                </div>
                <button className="bg-indigo-500 hover:bg-indigo-600 text-white focus:outline-none rounded-lg block px-4 py-2 w-full">
                    Save New POST
                </button>
            </form>
        </div>
    );
}

Create.layout = (page) => <App children={page} title="Create POST" />;
