import React from "react";

const ProductQuickviews = ({onScroll}) => {

  return (
    <div className="">





        
       <section class="p-4 ">
        <div class=" mx-auto md:w-4/5 p-4 border bg-white rounded-lg">
            <div class="">
                <div class="flex justify-between pb-4 px-1">
                    <h1 class="md:hidden text-lg font-medium text-blue-600 hover:text-blue-800 cursor-pointer">View full detalis</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-500 ">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>                      
                </div>

                <div class="md:flex space-x-3">
                    <div class="w-fit">
                        <img class="mx-auto object-cover p-2 bg-gray-100 rounded-lg" src="https://cdn.pixabay.com/photo/2018/03/02/09/19/flower-marigolds-3192686_960_720.png" alt=""/>
                    </div>
                    <div class="space-y-3 md:space-y-6 mt-3 md:-mt-1 md:pl-3 px-2 ">
                        <h2 class="text-3xl font-medium">Zip Tote Basket</h2>
                        <h2 class="text-3xl font-medium">$220</h2>
                        <h1 class="flex space-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-gray-400">
                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                              </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-gray-400">
                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                              </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-gray-400">
                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                              </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-gray-400">
                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                              </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-gray-300">
                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                              </svg>
                        </h1>
                        <h2 class="text-lg font-medium text-gray-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab omnis velit eaque officia blanditiis tempore atque praesentium cumque commodi quisquam
                             cum iusto vitae id, tenetur, corrupti quibusdam, animi tempora modi?</h2>
                        <div class=" space-x-3 ">
                            <button class="duration-300 w-10 rounded-full bg-blue-600 h-10 focus:outline-none focus:ring focus:ring-blue-900 focus:ring-offset-2"></button>
                            <button class="duration-300 w-10 rounded-full border border-gray-400 bg-white h-10 focus:outline-none focus:ring focus:ring-blue-900 focus:ring-offset-2"></button>
                            <button class="duration-300 w-10 rounded-full bg-gray-400 h-10 focus:outline-none focus:ring focus:ring-blue-900 focus:ring-offset-2"></button>
                        </div> 
                        <button class="bg-blue-800 hover:bg-blue-600 text-white font-medium mx-auto w-full py-2.5 rounded-md  duration-200 ">Add to beg</button>
                        <h1 class="text-center w-max mx-auto hidden md:block text-lg font-medium text-blue-600 hover:text-blue-800 cursor-pointer">View full detalis</h1>
                    </div>
                </div>
            </div>
        </div>
       </section>


    

        
      
    </div>
  )
}

export default ProductQuickviews;
