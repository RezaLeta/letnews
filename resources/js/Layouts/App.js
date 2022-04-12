import NavLink from "@/Components/NavLink";
import { Head, Link, usePage } from "@inertiajs/inertia-react";
import React, { useState } from "react";

export default function App({ children, title }) {
    const { auth } = usePage().props;

    const [tutup, setTutup] = useState(false);

    return (
        <div className="block bg-gray-200 min-h-screen">
            <Head title={title} />
            <div className="m-0 p-0 overflow-auto   md:w-52 w-full h-auto relative    bg-purple-800 md:fixed md:h-full ">
                <div className="bg-gray-700  shadow-md flex items-center justify-between px-5 md:items-center md:justify-center h-16 w-full">
                    <div className="text-2xl text-shadow text-white font-bold">
                        Letak News
                    </div>
                    <div className="block md:hidden">
                        <button
                            className="mt-2"
                            onClick={() => setTutup(!tutup)}
                        >
                            {tutup == false ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6  text-white cursor-pointer"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-white cursor-pointer"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
                <div className={`${tutup == false ? "hidden" : ""} md:block`}>
                    <div className=" flex   px-5  md:px-10 pt-4  flex-col">
                        <NavLink
                            href={route("dashboard")}
                            active={route().current("dashboard")}
                        >
                            Dashboard
                        </NavLink>
                    </div>
                    <div className=" flex   px-5  md:px-10 pt-2  flex-col">
                        <NavLink
                            href={route("post.page")}
                            active={route().current("post.page")}
                        >
                            Post
                        </NavLink>
                    </div>
                </div>
            </div>
            <div id="content" className=" ml-0 md:ml-52  ">
                <div className="bg-white h-auto">
                    <div className="flex justify-between px-5 md:px-10 py-5">
                        <p>Letak Group</p>
                        <p className="text-md text-blue-400 font-bold">
                            {auth.user.email}
                        </p>
                    </div>
                </div>
                <main className=" px-5 py-4">{children}</main>
            </div>
        </div>
    );
}
