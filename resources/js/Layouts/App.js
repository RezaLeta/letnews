import Alert from "@/Components/Alert";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import { Head, Link, usePage } from "@inertiajs/inertia-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";

export default function App({ children, title }) {
    const { auth, flash } = usePage().props;
    const [tutup, setTutup] = useState(false);

    flash.message &&
        toast.success(flash.message, {
            position: "top-center",
        });

    return (
        <div className="block bg-bg_abu min-h-screen">
            <Head title={title} />
            <div className="m-0 p-0 overflow-auto   md:w-52 w-full h-auto relative  bg-bg_biru_tua md:fixed md:h-full ">
                <div className="bg-gray-700  shadow-md flex items-center justify-between px-5 md:items-center md:justify-center h-16 w-full">
                    <div className="text-2xl text-shadow text-white font-bold">
                        LET NEWS
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
                    <div className=" flex   px-5  md:px-4 pt-4  flex-col">
                        <NavLink
                            href={route("dashboard")}
                            active={route().current("dashboard")}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                                />
                            </svg>
                            <p className=" ml-2 font-bold">Dashboard</p>
                        </NavLink>
                    </div>
                    <div className=" flex   px-5  md:px-4 pt-2  flex-col">
                        <NavLink
                            href={route("post.page")}
                            active={route().current("post.page")}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                                />
                            </svg>
                            <p className="ml-2 font-bold">POST</p>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div id="content" className=" ml-0 md:ml-52  ">
                <div className="bg-white h-auto">
                    <div className="flex justify-between px-5 md:px-10 py-5">
                        <p>Letak Group</p>

                        <div className=" sm:items-center md:ml-6">
                            <div className="ml-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3  border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {auth.user.name}

                                                <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                        >
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <ToastContainer />
                </div>

                <main className=" px-5 py-4">{children}</main>
            </div>
        </div>
    );
}
