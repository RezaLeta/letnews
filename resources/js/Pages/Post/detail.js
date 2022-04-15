import Input from "@/Components/Input";
import Label from "@/Components/Label";
import App from "@/Layouts/App";
import { Link, useForm } from "@inertiajs/inertia-react";
import React, { useState } from "react";

export default function Detail({ dpost, allImages }) {

    const { data, setData, post, errors, processing } = useForm({
        post_id: dpost.id,
        slug: dpost.slug,
        title: dpost.title,
        body: dpost.body,
        date_post: dpost.date_post,
        image: [],
    });

    const [datas, setDatas] = useState("oke");
    const [selectedImage, setSelectedImage] = useState([]);
    const [images, setImages] = useState([])
    const handleImage = (e) => {
        if (e.target.files) {
            const files = Array.from(e.target.files).map((file) =>
                URL.createObjectURL(file)
            );

            setSelectedImage((prevImages) => prevImages.concat(files));

            // setData("image", e.target.files );
            images.push(e.target.files );
            console.log(images);
            setData('image', images);
            // Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
        }
    };

    const tampilanFoto = (source) => {
        return source.map((foto) => {
            return (
                <img className="w-96 h-96 rounded-lg" src={foto} key={foto} />
            );
        });
    };

    function eventOnSubmit(e) {
        e.preventDefault();
        post(route("post.update", dpost.slug));
    }

    function handleUpload(e) {
        e.preventDefault();
        post(route("upload.image", dpost.slug));
    }

    return (
        <div className="bg-white h-full rounded-lg shadow-lg px-6 py-4">
            <div className="flex justify-between mb-5 border-b border-bg_abu_tua-200">
                <p className="text-2xl font-bold text-bg_biru_tua">
                    Detail POST
                </p>

                <div>
                    <Link className="flex" href={route("post.page")}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-bg_biru_tua"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z"
                            />
                        </svg>
                        BACK TO POST
                    </Link>
                </div>
            </div>
            <div>
                <div className="">
                    <form onSubmit={handleUpload} encType="multipart/form-data">
                        <input type="text" onChange={() => setData('id'. e.target.value)}  value={data.post_id} hidden />
                        <input type="text" onChange={() => setData('slug'. e.target.value)}  value={data.slug} hidden />
                        <div className="flex">
                            <div className="block">
                                <label
                                    htmlFor="formFileMultiple"
                                    className="form-label block mb-2 text-gray-400"
                                >
                                    Tambah Gambar
                                </label>
                                <div className="flex">
                                    <input
                                        onChange={handleImage}
                                        type="file"
                                        className="block w-full md:w-80 mb-5  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        multiple
                                    />
                                    <button
                                        disabled={processing}
                                        className="ml-2 block w-full md:w-80 mb-5  px-3 py-1.5 text-base font-normal  bg-bg_abu_tua-100 text-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-out m-0 focus:text-white focus:bg-bg_abu_tua-200 focus:border-blue-600 focus:outline-none "
                                    >
                                        Upload
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="grid grid-cols-3 gap-x-5 gap-y-3">
                        {tampilanFoto(selectedImage)}
                    </div>
                    <div className="grid grid-cols-3 gap-x-5 mb-5 gap-y-3">
                      {allImages.length > 0 ? allImages.map((foto) => {
                            return (
                                <div>
                                    <img
                                        className="w-96 h-96 rounded-lg"
                                        src={`/storage/post_image/${foto.url}`}
                                        key={foto.id}
                                    />
                                    <button className="bg-red-500 flex m-auto mt-2  hover:bg-red-600 text-white rounded-lg px-4 py-2 focus:outline-none">Hapus Foto</button>
                                </div>
                            );
                        }) : "Tidak ada data"}
                    </div>
                     
                </div>
                <form onSubmit={eventOnSubmit}>
                    <div className="mb-3">
                        <Label value="Title POST" className=" text-gray-400" />
                        <Input
                            value={data.title}
                            handleChange={(e) =>
                                setData("title", e.target.value)
                            }
                            className="w-full"
                            name="title"
                            placeHolder="Input title post...."
                        />
                        <div>
                            {errors.title && (
                                <p className="text-red-600  ml-1">
                                    {errors.title}
                                </p>
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
                        <Label
                            value="Deskripsi POST"
                            className=" text-gray-400"
                        />
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
                    <button
                        disabled={processing}
                        className="bg-bg_abu_tua-200 hover:bg-bg_abu_tua-100 text-white focus:outline-none rounded-lg block px-4 py-2 w-full"
                    >
                        UPDATE NEW POST
                    </button>
                </form>
            </div>
        </div>
    );
}

Detail.layout = (page) => <App children={page} title={`Detail Post`} />;
