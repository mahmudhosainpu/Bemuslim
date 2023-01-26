

import React from "react";

const OrderHistory = ({onScroll}) => {

  return (
    <div>


<section className="p-3">
    <div className=" mx-auto border rounded-lg">
        <div className="px-4 py-14 space-y-3 border-b ">
            <h1 className="text-xl sm:text-3xl font-bold">Order history</h1>
            <h3 className="text-sm sm:text-base font-medium text-gray-600">Check the status of recent orders,manage returns,and
                discover similar products.</h3>
        </div>


        
        <div className="">

            <div className="shadow-md">
                <div className="p-4 w-full flex mx-auto justify-between border-b">
                    <div className="">
                        <h3 className="text-sm sm:text-lg font-medium">Order number</h3>
                        <h3 className="text-sm sm:text-base text-gray-600 font-medium">WU283283848</h3>
                    </div>
                    <div className="hidden md:block">
                        <h3 className="text-sm sm:text-lg font-medium">Date placed</h3>
                        <h3 className="font-medium text-gray-500">jul 6, 2022</h3>
                    </div>
                    <div className="">
                        <h3 className="text-sm sm:text-lg font-medium">Total amount</h3>
                        <h3 className="text-sm sm:text-base font-bold">$160.00</h3>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        className="bi bi-three-dots-vertical w-6 h-6 mt-3 text-gray-500 md:hidden" viewBox="0 0 16 16">
                        <path
                            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                    </svg>
                    <div className="hidden md:block my-auto space-x-3">
                        <a className=" px-4 py-2 border-2 rounded-md shadow-sm focus:ring-2 hover:bg-gray-100 font-medium"
                            href="">View Order</a>
                        <a className=" px-4 py-2 border-2 rounded-md shadow-sm focus:ring-2 hover:bg-gray-100 font-medium"
                            href="">View Invoice</a>
                    </div>
                </div>
                {/* <!-- cart --> */}
                <div className="">
                    <div className="p-4 flex">
                        <div className="">
                            <img className="w-32 bg-gray-100"
                                src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
                                alt=""/>
                        </div>
                        <div className="my-auto ml-10 md:flex justify-between md:w-full">
                            <h3 className="font-medium text-sm sm:text-base">Micro Backpack</h3>
                            <h3 className="font-medium text-sm sm:text-base">$70.00</h3>
                        </div>


                    </div>
                    <div className="md:flex border-b md:border-b md:pb-4 md:justify-between">
                        <div className="px-4 md:w-full pb-4 border-b md:border-0 flex space-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" className="w-5 h-6 sm:w-6 sm:h-6 text-blue-600">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                            </svg>
                            <h1 className="text-sm sm:text-base text-gray-500 font-medium">Delivery on julay 12, 2022</h1>
                        </div>
                        <div className="p-4 md:p-0 md:w-full flex justify-between">
                            <a className="w-full text-sm sm:text-base text-center text-blue-600 font-medium px-4 sm:px-6 border-r" href="View">View
                                product</a>
                            <a className="w-full text-sm sm:text-base text-center text-blue-600 font-medium px-4 sm:px-6" href="View">Buy again</a>
                        </div>
                    </div>
                </div>

                {/* <!-- cart --> */}
                <div className="">
                    <div className="p-4 flex">
                        <div className="">
                            <img className="w-32 bg-gray-100"
                                src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
                                alt=""/>
                        </div>
                        <div className="my-auto ml-10 md:flex justify-between md:w-full">
                            <h3 className="font-medium text-sm sm:text-base">Micro Backpack</h3>
                            <h3 className="font-medium text-sm sm:text-base">$70.00</h3>
                        </div>


                    </div>
                    <div className="md:flex border-b md:border-b md:pb-4 md:justify-between">
                        <div className="px-4 md:w-full pb-4 border-b md:border-0 flex space-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                            </svg>
                            <h1 className="text-sm sm:text-base text-gray-500 font-medium">Delivery on julay 12, 2022</h1>
                        </div>
                        <div className="p-4 md:p-0 md:w-full flex justify-between">
                            <a className="text-sm sm:text-base w-full text-center text-blue-600 font-medium px-4 sm:px-6 border-r" href="View">View
                                product</a>
                            <a className="text-sm sm:text-base w-full text-center text-blue-600 font-medium px-4 sm:px-6" href="View">Buy again</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-16 border-t shadow-md">
                <div className="p-4 w-full flex mx-auto justify-between border-b">
                    <div className="">
                        <h3 className="text-sm sm:text-lg font-medium">Order number</h3>
                        <h3 className="text-sm sm:text-base text-gray-600 font-medium">WU283283848</h3>
                    </div>
                    <div className="hidden md:block">
                        <h3 className="text-lg font-medium">Date placed</h3>
                        <h3 className="font-medium text-gray-500">jul 6, 2022</h3>
                    </div>
                    <div className="">
                        <h3 className="text-sm sm:text-lg font-medium">Total amount</h3>
                        <h3 className="text-sm sm:text-base font-bold">$160.00</h3>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        className="bi bi-three-dots-vertical w-6 h-6 mt-3 text-gray-500 md:hidden" viewBox="0 0 16 16">
                        <path
                            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                    </svg>
                    <div className="hidden md:block my-auto space-x-3">
                        <a className="px-4 py-2 border-2 rounded-md shadow-sm focus:ring-2 hover:bg-gray-100 font-medium"
                            href="">View Order</a>
                        <a className="px-4 py-2 border-2 rounded-md shadow-sm focus:ring-2 hover:bg-gray-100 font-medium"
                            href="">View Invoice</a>
                    </div>
                </div>
                {/* <!-- cart2 --> */}
                <div className="">
                    <div className="p-4 flex">
                        <div className="">
                            <img className="w-32 bg-gray-100"
                                src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
                                alt=""/>
                        </div>
                        <div className="my-auto ml-10 md:flex justify-between md:w-full">
                            <h3 className="font-medium text-sm sm:text-base">Micro Backpack</h3>
                            <h3 className="font-medium text-sm sm:text-base">$70.00</h3>
                        </div>


                    </div>
                    <div className="md:flex border-b md:border-b md:pb-4 md:justify-between">
                        <div className="px-4 md:w-full pb-4 border-b md:border-0 flex space-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                            </svg>
                            <h1 className="text-sm sm:text-base text-gray-500 font-medium">Delivery on julay 12, 2022</h1>
                        </div>
                        <div className="p-4 md:p-0 md:w-full flex justify-between">
                            <a className="text-sm sm:text-base w-full text-center text-blue-600 font-medium px-4  sm:px-6 border-r" href="View">View
                                product</a>
                            <a className="text-sm sm:text-base w-full text-center text-blue-600 font-medium px-4  sm:px-6" href="View">Buy again</a>
                        </div>
                    </div>
                </div>
            </div>

        
        
        
        
        </div>

    </div>
</section>
      
    </div>
  )
}

export default OrderHistory;
