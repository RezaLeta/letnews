import MenuGuest from '@/Layouts/MenuGuest';
import React from 'react'
import { Link } from '@inertiajs/inertia-react';
import Logo from "../../../public/images/logo.png";
export default function DetailPost({post,limit}) {

  return (
      <div className="py-5">
          <div className="bg-white py-10 px-11 block md:flex">
              <div className="md:w-2/3 ">
                  <p className="font-bold text-3xl mb-5">{post.title}</p>

                  <div className="flex justify-between">
                      <p>Post By : {post.user.name}</p>
                      <p>{post.date_post}</p>
                  </div>
                  <div className="mt-5">
                      {post.images == "" ? (
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
                              className="md:h-110 object-cover object-tops   w-full"
                              src={`/storage/post_image/${post.images[0].url}`}
                              alt="Foto"
                          />
                      )}
                      {/* <img
                          className="md:h-110 object-cover object-tops   w-full"
                          src={`/storage/post_image/${post.images[0].url}`}
                          alt="Foto"
                      /> */}
                  </div>
                  <div className="mt-5">
                      <p className="text-justify">{post.body}</p>
                  </div>
              </div>
              <div className="md:w-1/3 mt-5 md:mt-32 md:px-5">
                  <p className="font-bold text-2xl mb-5">Berita Lainnya</p>
                  {limit.map((post) => {
                      return (
                          <div className=" mb-5 md:mb-10 shadow-lg  w-full">
                              <Link
                                  href={route("menu.detail", post.slug)}
                                  key={post.id}
                              >
                                  {" "}
                                  {post.images == "" ? (
                                      <div className="flex flex-col justify-center  h-full items-center">
                                          <img src={Logo} alt="Eksel PRO" />
                                          <div>
                                              <p className="">
                                                  Belum ada gambar untuk post
                                                  ini
                                              </p>
                                          </div>
                                      </div>
                                  ) : (
                                      <img
                                          className="w-full md:h-48 object-cover object-center   "
                                          src={`/storage/post_image/${post.images[0].url}`}
                                          alt=""
                                      />
                                  )}
                              </Link>
                          </div>
                      );
                  })}
              </div>
          </div>
      </div>
  );
}


DetailPost.layout = (page) => <MenuGuest children={page} />;