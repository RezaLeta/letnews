import React from "react";
import { Link } from "@inertiajs/inertia-react";

export default function NavLink({ href, active, children }) {
    // return (
    //     <Link
    //         href={href}
    //         className={
    //             active
    //                 ? "inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out"
    //                 : "inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
    //         }
    //     >
    //         {children}
    //     </Link>
    // );
    return (
        <Link
            href={href}
            className={
                active
                    ? "inline-flex items-center  pt-1 mb-5  border-white  border-b-2 py-2 text-lg font-medium leading-5 text-white  focus:outline-none focus:border-white transition duration-150 ease-in-out"
                    : "inline-flex items-center  pt-1 mb-5  border-transparent text-lg font-medium leading-5 text-gray-400 hover:text-white hover:border-white focus:outline-none focus:text-gray-500 focus:border-blue-300 transition duration-150 ease-in-out"
            }
        >
            {children}
        </Link>
    );
}
