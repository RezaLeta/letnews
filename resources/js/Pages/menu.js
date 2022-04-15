import MenuGuest from "@/Layouts/MenuGuest";

import { data } from "autoprefixer";
import { Link } from "@inertiajs/inertia-react";
export default function Menu({ posts, last_post, limit }) {
    return (
        <div className="py-0">
      

            <div className="bg-white mt-5 px-2 py-5">
                <div className="bg-white w-full px-6 py-4 block  md:grid md:grid-cols-2 md:gap-5">
                    <div>
                        <Link>
                            <img
                                className="w-full md:h-98  bg-cover bg-center  "
                                src={`/storage/post_image/${last_post.images[0].url}`}
                                alt=""
                            />
                        </Link>
                    </div>
                    <div className="block  md:grid grid-cols-2 gap-3 ">
                        {limit.map((post) => {
                            return (
                                <div className=" mb-5 md:mb-0  w-full">
                                    <Link href={route('menu.detail', post.slug)}  key={post.id}>
                                        <img
                                            className="w-full md:h-48    "
                                            src={`/storage/post_image/${post.images[0].url}`}
                                            alt=""
                                        />
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* <div className="mt-5 bg-white w-full px-6 py-4 block  md:grid md:grid-cols-2 md:gap-1 ">
                <div className="mb-5 md:mb-0   md:row-span-4">
                    <Link>
                        <img
                            className="w-full md:h-96  bg-cover bg-center  "
                            src={`/storage/post_image/${last_post.images[0].url}`}
                            alt=""
                        />
                    </Link>
                </div>
                <div className="">
                    <div className="grid     md:grid-cols-2  ">
                        {limit.map((post) => {
                            return (
                                <div className=" mb-5 md:mb-0  w-full">
                                    <Link key={post.id}>
                                        <img
                                            className="w-full md:h-48    "
                                            src={`/storage/post_image/${post.images[0].url}`}
                                            alt=""
                                        />
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div> */}
        </div>
    );
}

Menu.layout = (page) => <MenuGuest children={page} />;
