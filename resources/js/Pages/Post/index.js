import { Head, Link } from "@inertiajs/inertia-react";
import React, { useState, useEffect } from "react";
import Authenticated from "@/Layouts/Authenticated";

import { Inertia } from "@inertiajs/inertia";
import App from "@/Layouts/App";

export default function Post(props) {
    const posts = props.posts.data;

    function createMark(data) {
        return { __html: data };
    }

    return (
        <div className="bg-white rounded-lg shadow-lg   px-5   py-5">
            <div className="flex justify-between">
                <div className="font-bold border-b text-sm sm:text-lg border-blue-400 text-gray-500 uppercase">
                    All Data POST
                </div>

                <div>
                    <Link
                        href={route("post.create")}
                        className="bg-blue-400 hover:bg-blue-500 focus:outline-none text-white
                                p-1 sm:px-4 sm:py-2 rounded-md 
                            "
                    >
                        New POST
                    </Link>
                </div>
            </div>
            <div className="overflow-x-auto  lg:w-full" id="table">
                <table className="w-full bg-white divide-y divide-gray-200  rounded-lg overflow-hidden my-5">
                    <thead className=" bg-gray-900  font-bold">
                        <tr className=" text-white ">
                            <th className="w-32  text-center font-semibold  text-sm uppercase  px-6 py-2 ">
                                User Id
                            </th>
                            <th className="w-52 font-semibold text-left text-sm uppercase px-6 py-2 ">
                                Title
                            </th>
                            <th className="w-96 font-semibold text-left text-sm uppercase px-6 py-2 ">
                                Body
                            </th>
                            <th className=" w-40 font-semibold text-left text-sm uppercase px-6 py-2 ">
                                Date Post
                            </th>
                            <th className="   sm:w-60 font-semibold text-center text-sm uppercase px-6 py-2 ">
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
                                          <td className="px-6 py-2 text-center">
                                              <button className="p-2 bg-blue-400 mr-2 lg:mr-4 rounded-lg text-white">
                                                  Detail
                                              </button>
                                              <button className="p-2 lg:mt-0 mt-2  bg-red-500 rounded-lg text-white">
                                                  Delete
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
