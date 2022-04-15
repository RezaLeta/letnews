import Tanggal from "@/Components/Tanggal";
import { Link } from "@inertiajs/inertia-react";
import React from "react";
import Logo from "../../../public/images/logo.png";
import Banner from "../../../public/images/banner.jpg";
import NavbarMenu from "@/Components/NavbarMenu";

export default function MenuGuest({ children }) {
    return (
        <div className=" md:px-12 bg-white  md:bg-gray-200 w-full min-h-screen">
            <div className="py-1  justify-center  sm:py-4 sm:px-12 w-full  bg-bg_biru_tua flex   sm:items-center h-11">
                <div className="text-white flex justify-center items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 "
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>

                    <Tanggal />
                </div>
                <div className="ml-5 text-white flex justify-center items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <p className="text-sm ml-2">
                        Referensi Bisnis Sumatera Selatan{" "}
                    </p>

                    <Link className="text-sm ml-5">Home</Link>
                    <Link className="text-sm ml-5">About Us</Link>
                </div>
            </div>
            <div id="header" className="py-10 bg-white  md:py-10 md:px-10">
                <div className="block w-full px-12 md:px-0  md:flex md:justify-between">
                    <div className="mb-10 flex justify-center">
                        <img src={Logo} alt="Eksel PRO" />
                    </div>
                    <div className="">
                        <img src={Banner} alt="Banner Kontak" />
                    </div>
                </div>

                <div className="mt-5  px-6 md:px-0">
                    <NavbarMenu />
                </div>
            </div>
            <div className=" ">{children}</div>
        </div>
    );
}
