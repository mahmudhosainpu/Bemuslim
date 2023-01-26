import React from "react";

const ProductOverviews = ({onScroll}) => {

  return (
    <div classNameName="">




 




    <section className="p-4">
        <div className=" mx-auto border rounded-lg bg-white flex flex-col md:flex-row">
           {/* <!-- Image --> */}
            <div className="md: mx-auto mt-6  p-4 rounded-lg ">
                <div className="bg-gray-100 rounded-lg">
                   <img className=" object-cover  rounded-md mx-auto p-2" src="https://cdn.pixabay.com/photo/2016/02/04/13/49/the-earth-1179212_960_720.png" alt=""/>
                </div>
                <div className="flex flex-row justify-between sm:px-4 mt-4 ">
                   <div className="  hover:ring-2 hover:ring-blue-500 hover:scale-105 duration-200 rounded-md">
                    <img className="sm:w-32 object-cover  rounded-md" src="https://cdn.pixabay.com/photo/2016/02/04/13/49/the-earth-1179212_960_720.png" alt=""/>               
                   </div>
                   <div className="  hover:ring-2 hover:ring-blue-500 hover:scale-105 duration-200 rounded-md">
                    <img className="sm:w-32 object-cover  rounded-md" src="https://cdn.pixabay.com/photo/2016/02/04/13/49/the-earth-1179212_960_720.png" alt=""/>               
                   </div>
                   <div className=" hover:ring-2 hover:ring-blue-500 hover:scale-105 duration-200 rounded-md">
                    <img className="sm:w-32 object-cover  rounded-md" src="https://cdn.pixabay.com/photo/2016/02/04/13/49/the-earth-1179212_960_720.png" alt=""/>               
                   </div>
                   <div className="  hover:ring-2 hover:ring-blue-500 hover:scale-105 duration-200 rounded-md">
                    <img className="sm:w-32 object-cover  rounded-md" src="https://cdn.pixabay.com/photo/2016/02/04/13/49/the-earth-1179212_960_720.png" alt=""/>               
                   </div>
                </div>
            </div>








            {/* <!-- Text and About --> */}
            <div className="left md:w-1/2 px-10 py-4 mt-5">
                <div className="space-y-5">
                    <h1 className="text-3xl sm:text-4xl font-bold">Zip Tote Basket</h1>
                    <h1 className="text-4xl font-medium">$140</h1>
                    {/* <!--star review --> */}
                    <h1 className="flex space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-blue-600">
                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                          </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-blue-600">
                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                          </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-blue-600">
                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                          </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-blue-600">
                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                          </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-400">
                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                          </svg>
                    </h1>
                    
                    <h4 className="text-lg font-medium text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam assumenda 
                        architecto tempora pariatur sapiente laborum atque, minima accusantium,
                        iure iste quas voluptatibus. Voluptate blanditiis sint sunt numquam debitis, 
                        provident eum.</h4>

                         {/* <!--color  --> */}
                        <div className="">
                            <h4 className="text-lg font-medium text-blue-700 py-2">Color</h4>
                            <div className=" space-x-3 ">
                                <button className="duration-300 w-10 rounded-full bg-blue-600 h-10 focus:outline-none focus:ring focus:ring-blue-900 focus:ring-offset-2"></button>
                                <button className="duration-300 w-10 rounded-full border border-gray-400 bg-white h-10 focus:outline-none focus:ring focus:ring-blue-900 focus:ring-offset-2"></button>
                                <button className="duration-300 w-10 rounded-full bg-gray-500 h-10 focus:outline-none focus:ring focus:ring-blue-900 focus:ring-offset-2"></button>
                            </div> 
                            <div className="flex border-b border-gray-400 py-10">
                            <button className="bg-blue-800 hover:bg-blue-600 outline-none text-white px-10 py-3 text-md font-medium rounded-md">Add to bag</button>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-7 h-7 text-red-700 mt-2.5 my-auto ml-6 cursor-pointer">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                              </svg>
                        </div>
                        </div>
                    
                        

                        <div className="pt-10 ">
                            <div className="flex flex-row justify-between">
                                <h1 className="text-blue-600 text-lg font-medium">Feature</h1>
                                <h1 className="w-6 h-0.5 bg-blue-700 rounded-md mt-4"></h1>
                            </div>
                                <ul className="list-disc pl-8 py-8 space-y-3 text-lg font-medium text-slate-600">
                                    <li>Multiple strap configarations</li>
                                    <li>Spacious interior with top zip</li>
                                    <li>Leather handle and tabs</li>
                                    <li>Interir dividers</li>
                                    <li>Stainless strap loops</li>
                                    <li>Double stitched construction</li>
                                    <li>Water-resistant</li>
                                </ul>
                        </div>
                        <hr/>
                        <div className="flex flex-row justify-between py-1 px-4">
                            <h1 className="text-lg font-medium">Care</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mt-1.5 text-gray-600 hover:text-blue-800 cursor-pointer">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                              </svg>                              
                        </div>
                        <hr/>

                        <div className="flex flex-row justify-between py-1 px-4">
                            <h1 className="text-lg font-medium">Shoping</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mt-1.5 text-gray-600 hover:text-blue-800 cursor-pointer">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                              </svg>                              
                        </div>
                        <hr/>

                        <div className="flex flex-row justify-between pt-4 px-4 pb-20">
                            <h1 className="text-lg font-medium">Returns</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mt-1.5 text-gray-600 hover:text-blue-800 cursor-pointer">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                              </svg>                              
                        </div>
                        
                </div>
            </div>
        </div>
    </section>
    








        
      
    </div>
  )
}

export default ProductOverviews;
