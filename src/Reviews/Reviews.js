import React from "react";

const Reviews = ({ onScroll }) => {

    return (
        <div className="">






            <section class="p-4">
                <div class="container mx-auto p-6 border rounded-lg md:flex md:space-x-16">


                    <div class="md:w-1/2 mx-auto">
                        <h1 class="text-3xl font-bold">Customar Reviews</h1>

                        <div class="flex py-4 text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                class="w-6 h-6 text-[#f9cd14]">
                                <path fill-rule="evenodd"
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                    clip-rule="evenodd" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                class="w-6 h-6 text-[#f9cd14]">
                                <path fill-rule="evenodd"
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                    clip-rule="evenodd" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                class="w-6 h-6 text-[#f9cd14]">
                                <path fill-rule="evenodd"
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                    clip-rule="evenodd" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                class="w-6 h-6 text-[#f9cd14]">
                                <path fill-rule="evenodd"
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                    clip-rule="evenodd" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                class="w-6 h-6 text-[#cacac7]">
                                <path fill-rule="evenodd"
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                    clip-rule="evenodd" />
                            </svg>

                            <h3 class="ml-3 text-base font-medium ">Based on 1625 reviews</h3>
                        </div>

                        {/* <!--All animation skil bar --> */}
                        <div class="space-y-3">

                            {/* <!-- animation skil bar --> */}
                            <div class="flex space-x-2 items-center ">
                                <h2 class="text-xl font-medium text-gray-500">5</h2>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="w-6 h-6 text-[#f9cd14]">
                                    <path fill-rule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clip-rule="evenodd" />
                                </svg>
                                <div class="w-3/4 shadow-sm ring-1 ring-gray-300 bg-gray-200 rounded-full h-4 dark:ring-yellow-300 dark:bg-gray-700">
                                    <div class="bg-yellow-400 h-4 rounded-full"></div>
                                </div>
                                <h2 class="-mt-0.5 pl-4 text-xl font-medium text-gray-500">90%</h2>
                            </div>

                            {/* <!-- animation skil bar --> */}
                            <div class="flex space-x-2 items-center ">
                                <h2 class="text-xl font-medium text-gray-500">4</h2>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="w-6 h-6 text-[#f9cd14]">
                                    <path fill-rule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clip-rule="evenodd" />
                                </svg>
                                <div class="w-3/4 shadow-sm ring-1 ring-gray-300 bg-gray-200 rounded-full h-4 dark:ring-yellow-300 dark:bg-gray-700">
                                    <div class="bg-yellow-400 h-4 rounded-full"></div>
                                </div>
                                <h2 class="-mt-0.5 pl-4 text-xl font-medium text-gray-500">80%</h2>
                            </div>

                            {/* <!-- animation skil bar --> */}
                            <div class="flex space-x-2 items-center ">
                                <h2 class="text-xl font-medium text-gray-500">3</h2>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="w-6 h-6 text-[#f9cd14]">
                                    <path fill-rule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clip-rule="evenodd" />
                                </svg>
                                <div class="w-3/4 shadow-sm ring-1 ring-gray-300 bg-gray-200 rounded-full h-4 dark:ring-yellow-300 dark:bg-gray-700">
                                    <div class="bg-yellow-400 h-4 rounded-full"></div>
                                </div>
                                <h2 class="-mt-0.5 pl-4 text-xl font-medium text-gray-500">70%</h2>
                            </div>

                            {/* <!-- animation skil bar --> */}
                            <div class="flex space-x-2 items-center ">
                                <h2 class="text-xl font-medium text-gray-500">2</h2>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="w-6 h-6 text-[#f9cd14]">
                                    <path fill-rule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clip-rule="evenodd" />
                                </svg>
                                <div class="w-3/4 shadow-sm ring-1 ring-gray-300 bg-gray-200 rounded-full h-4 dark:ring-yellow-300 dark:bg-gray-700">
                                    <div class="bg-yellow-400 h-4 rounded-full" ></div>
                                </div>
                                <h2 class="-mt-0.5 pl-4 text-xl font-medium text-gray-500">60%</h2>
                            </div>

                            {/* <!-- animation skil bar --> */}
                            <div class="flex space-x-2 items-center ">
                                <h2 class="text-xl font-medium text-gray-500">1</h2>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="w-6 h-6 text-[#f9cd14]">
                                    <path fill-rule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clip-rule="evenodd" />
                                </svg>
                                <div class="w-3/4 shadow-sm ring-1 ring-gray-300 bg-gray-200 rounded-full h-4 dark:ring-yellow-300 dark:bg-gray-700">
                                    <div class="bg-yellow-400 h-4 rounded-full" ></div>
                                </div>
                                <h2 class="-mt-0.5 pl-4 text-xl font-medium text-gray-500">50%</h2>
                            </div>
                        </div>

                        <div class="py-10 space-y-5">
                            <h2 class="text-3xl font-medium">Share your thoughts</h2>
                            <h3 class="pb-4 text-lg font-medium text-gray-500">If you've used this product,share your thoughts width
                                other customers</h3>
                            <button
                                class="ring-1 focus:bg-slate-200 focus:ring-2 hover:bg-gray-200 border-gray-400 rounded-lg text-lg font-medium py-2.5 px-3 w-full">Wright
                                a review</button>
                        </div>
                    </div>


                    {/* <!-- Customar reviews comment --> */}
                    <div class="mx-auto space-y-16 py-12 md:py-0 md:w-1/2">

                        {/* <!-- cart --> */}
                        <div class="">
                            <div class="flex items-center pb-5">
                                <img class="w-20 h-20 md:w-16 md:h-16 object-cover rounded-full" src="https://cdn.pixabay.com/photo/2017/03/27/13/28/man-2178721_960_720.jpg" alt=""/>

                                    <div class="px-5">
                                        <h3 class="text-xl font-bold">Emily Selman</h3>
                                        <div class="flex py-2 text-gray-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                                class="w-6 h-6 text-[#f9cd14]">
                                                <path fill-rule="evenodd"
                                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                                class="w-6 h-6 text-[#f9cd14]">
                                                <path fill-rule="evenodd"
                                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                                class="w-6 h-6 text-[#f9cd14]">
                                                <path fill-rule="evenodd"
                                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                                class="w-6 h-6 text-[#f9cd14]">
                                                <path fill-rule="evenodd"
                                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                                class="w-6 h-6 text-[#cacac7]">
                                                <path fill-rule="evenodd"
                                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                            </div>
                            <i class=" text-lg md:text-base text-gray-600 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quasi mollitia tempore necessitatibus, quo reiciendis, odio velit ea, nostrum maxime explicabo inventore.
                                Blanditiis illum quis repellat tenetur eos nihil doloremque.
                            </i>
                        </div>
                        <hr class=""/>

                            {/* <!-- cart --> */}
                            <div class="">
                                <div class="flex items-center pb-5">
                                    <img class="w-20 h-20 md:w-16 md:h-16 object-cover rounded-full" src="https://cdn.pixabay.com/photo/2017/03/27/13/28/man-2178721_960_720.jpg" alt=""/>

                                        <div class="px-5">
                                            <h3 class="text-xl font-bold">Emily Selman</h3>
                                            <div class="flex py-2 text-gray-600">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                                    class="w-6 h-6 text-[#f9cd14]">
                                                    <path fill-rule="evenodd"
                                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                                    class="w-6 h-6 text-[#f9cd14]">
                                                    <path fill-rule="evenodd"
                                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                                    class="w-6 h-6 text-[#f9cd14]">
                                                    <path fill-rule="evenodd"
                                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                                    class="w-6 h-6 text-[#f9cd14]">
                                                    <path fill-rule="evenodd"
                                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                                    class="w-6 h-6 text-[#cacac7]">
                                                    <path fill-rule="evenodd"
                                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>
                                </div>
                                <i class=" text-lg md:text-base text-gray-600 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quasi mollitia tempore necessitatibus, quo reiciendis, odio velit ea, nostrum maxime explicabo inventore.
                                    Blanditiis illum quis repellat tenetur eos nihil doloremque.
                                </i>
                            </div>
                            <hr class=""/>

                                {/* <!-- cart --> */}
                                <div class="">
                                    <div class="flex items-center pb-5">
                                        <img class="w-20 h-20 md:w-16 md:h-16 object-cover rounded-full" src="https://cdn.pixabay.com/photo/2017/03/27/13/28/man-2178721_960_720.jpg" alt=""/>

                                            <div class="px-5">
                                                <h3 class="text-xl md:text-base font-bold">Emily Selman</h3>
                                                <div class="flex py-2 text-gray-600">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                                        class="w-6 h-6 text-[#f9cd14]">
                                                        <path fill-rule="evenodd"
                                                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                                        class="w-6 h-6 text-[#f9cd14]">
                                                        <path fill-rule="evenodd"
                                                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                                        class="w-6 h-6 text-[#f9cd14]">
                                                        <path fill-rule="evenodd"
                                                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                                        class="w-6 h-6 text-[#f9cd14]">
                                                        <path fill-rule="evenodd"
                                                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                                        class="w-6 h-6 text-[#cacac7]">
                                                        <path fill-rule="evenodd"
                                                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                </div>
                                            </div>
                                    </div>
                                    <i class=" text-lg md:text-base text-gray-600 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quasi mollitia tempore necessitatibus, quo reiciendis, odio velit ea, nostrum maxime explicabo inventore.
                                        Blanditiis illum quis repellat tenetur eos nihil doloremque.
                                    </i>
                                </div>





                            </div>


                    </div>
            </section>







        </div>
    )
}

export default Reviews;
