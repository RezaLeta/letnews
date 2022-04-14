import { Head, Link } from "@inertiajs/inertia-react";
import React, { useState, useEffect } from "react";
import Authenticated from "@/Layouts/Authenticated";

import { Inertia } from "@inertiajs/inertia";
import App from "@/Layouts/App";
import Swal from "sweetalert2";

export default function Post(props) {
    const posts = props.posts.data;

    function createMark(data) {
        return { __html: data };
    }

    const handleDeletePost = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                Inertia.delete(route("post.delete", id));
            }
        });
    };

    return (
        <div className="bg-white rounded-lg shadow-lg   px-5   py-5">
            <div className="flex justify-between">
                <div className="font-bold border-b text-sm sm:text-lg border-blue-400 text-gray-500 uppercase">
                    All Data POST
                </div>

                <div>
                    <Link
                        href={route("post.create")}
                        className="flex bg-bg_abu_tua-200 hover:bg-gray-700 focus:outline-none text-white
                                p-1 sm:px-4 sm:py-2 rounded-md "
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        New POST
                    </Link>
                </div>
            </div>
            <div className="overflow-x-auto  lg:w-full" id="table">
                <table className="w-full bg-white divide-y divide-gray-200  rounded-lg overflow-hidden my-5">
                    <thead className=" bg-bg_abu_tua-200  font-bold">
                        <tr className=" text-white ">
                            <th className="w-32  text-center font-semibold  text-sm uppercase  px-6 py-5 ">
                                User Id
                            </th>
                            <th className="w-52 font-semibold text-left text-sm uppercase px-6 py-5 ">
                                Title
                            </th>
                            <th className="w-96 font-semibold text-left text-sm uppercase px-6 py-5 ">
                                Body
                            </th>
                            <th className=" w-40 font-semibold text-left text-sm uppercase px-6 py-5 ">
                                Date Post
                            </th>
                            <th className="   sm:w-60 font-semibold text-center text-sm uppercase px-6 py-5 ">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {posts.length < 1
                            ? "Tidak Ada data"
                            : posts.map((post) => {
                                  return (
                                      <tr key={post.id} className="">
                                          <td className="px-6 py-2 text-center ">
                                              {post.user.name}
                                          </td>
                                          <td className="px-6 py-2 ">
                                              {post.title.length > 25
                                                  ? `${post.title.substring(
                                                        0,
                                                        24
                                                    )}...`
                                                  : post.title}
                                          </td>
                                          <td className="px-6 py-2">
                                              {post.body.length > 30
                                                  ? `${post.body.substring(
                                                        0,
                                                        35
                                                    )}...`
                                                  : post.body}
                                          </td>
                                          <td className="px-6 py-2">
                                              {post.date_post}
                                          </td>
                                          <td className="px-6 py-2 text-center flex  md:justify-evenly">
                                              <Link
                                                  href={route(
                                                      "post.detail",
                                                      post.slug
                                                  )}
                                                  className="p-2 lg:mt-0 mt-2   bg-blue-500 rounded-lg text-white"
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
                                                          d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                                                      />
                                                  </svg>
                                              </Link>
                                              <div className="ml-2 xl:-ml-5"></div>
                                              <button
                                                  onClick={() =>
                                                      handleDeletePost(post.id)
                                                  }
                                                  className="p-2 lg:mt-0 mt-2  bg-red-500 rounded-lg text-white"
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
                                                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                      />
                                                  </svg>
                                              </button>
                                          </td>
                                      </tr>
                                  );
                              })}
                    </tbody>
                </table>
                <ul className="flex justify-center px-10 md:overflow-hidden items-center gap-x-1 mt-10">
                    {props.posts.links.map((item, index) => (
                        <Link
                            preserveScroll={true}
                            href={item.url}
                            disabled={item.url == null ? true : false}
                            className={`${
                                item.active == true
                                    ? "bg-blue-500 text-white"
                                    : "bg-white"
                            } hover:bg-blue-500 hover:text-white px-2 py-1  focus:outline-none md:px-4 md:py-2 rounded-lg flex items-center justify-center border `}
                            key={index}
                        >
                            <div
                                dangerouslySetInnerHTML={createMark(item.label)}
                            />
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    );
}

Post.layout = (page) => <App children={page} title="POST" />;
