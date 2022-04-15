import MenuGuest from '@/Layouts/MenuGuest';
import React from 'react'
import { Link } from '@inertiajs/inertia-react';

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
                      <img
                          className="md:h-110 w-full"
                          src={`/storage/post_image/${post.images[0].url}`}
                          alt="Foto"
                      />
                  </div>
                  <div className="mt-5">
                      <p className="text-justify">{post.body}</p>
                  </div>
              </div>
              <div className="md:w-1/3 mt-5 md:mt-32 md:px-5">
                  <p className='font-bold text-2xl mb-5'>Berita Lainnya</p>
                  {limit.map((post) => {
                      return (
                          <div className=" mb-5 md:mb-10 shadow-lg  w-full">
                              <Link
                                  href={route("menu.detail", post.slug)}
                                  key={post.id}
                              >
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
  );
}


DetailPost.layout = (page) => <MenuGuest children={page} />;