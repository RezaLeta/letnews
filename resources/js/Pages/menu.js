import MenuGuest from "@/Layouts/MenuGuest";
import Logo from "../../../public/images/logo.png";
import { data } from "autoprefixer";
import { Link } from "@inertiajs/inertia-react";
export default function Menu({ posts, last_post, limit }) {

    console.log(last_post.images == "" ? 'Bener kosong' : 'gk la');
    return (
        <div className="pb-2">
            <div className="bg-white mt-5 px-2 py-5">
                <div className="bg-white w-full px-6 py-4 block  md:grid md:grid-cols-2 gap-y-2  md:gap-5">
                    <div className="relative z-20   text-lg font-bold ">
                        <Link href={route("menu.detail", last_post.slug)}>
                            {last_post.images == "" ? (
                                <div className="flex flex-col justify-center  h-full items-center">
                                    <img src={Logo} alt="Eksel PRO" />
                                    <div>
                                        <p className="">
                                            Belum ada gambar untuk post ini
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                <img
                                    className="w-full md:h-98 object-cover object-center  "
                                    src={`/storage/post_image/${last_post.images[0].url}`}
                                    alt=""
                                />
                            )}
                        </Link>
                        <div className="font-bold md:mt-0   bg-purple-300 px-10  text-white  absolute bottom-5 left-0">
                            <p
                                style={{ backgroundColor: "" }}
                                className="text-2xl"
                            >
                                {last_post.title}
                            </p>
                            <p
                                style={{ backgroundColor: "" }}
                                className="text-lg"
                            >
                                Tanggal Posting : {last_post.date_post}
                            </p>
                        </div>
                    </div>
                    <div className="block  md:grid grid-cols-2 gap-3 ">
                        {limit.map((post) => {
                            return (
                                <div className=" mb-5 md:mb-0 relative  w-full">
                                    <Link
                                        href={route("menu.detail", post.slug)}
                                        key={post.id}
                                    >
                                        <img
                                            className="w-full md:h-48   text-white font-extrabold  -z-50 block  object-cover object-center  "
                                            src={`/storage/post_image/${post.images[0].url}`}
                                            alt=""
                                        />
                                        <p className="absolute  capitalize  bottom-0 hover:text-gray-200  stroke-white stroke-2   left-0 px-5 text-white  text-lg font-black  py-2 text-shadow z-50">
                                            {post.title}
                                        </p>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

Menu.layout = (page) => <MenuGuest children={page} />;
