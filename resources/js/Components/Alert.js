import React, { useState } from "react";

export default function Alert({ pesan }) {
    return (
        <div
            id="alert"
            className={` w-full md:w-2/5 h-auto text-lg bg-green-700 text-white rounded-lg px-4 py-2`}
        >
            <div className="flex justify-between">
                {pesan}
                <button
                    onClick={() =>
                        (document.getElementById("alert").hidden = true)
                    }
                >
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
                </button>
            </div>
        </div>
    );
}
