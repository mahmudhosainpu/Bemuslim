import React from "react";

const CheckoutForms = ({ onScroll }) => {

    return (
        <div className="">

            <section class="my-5  px-3">
                <div class="border  rounded-lg grid grid-cols-1 md:grid-cols-2">

                    {/* <!-- All cart --> */}
                    <div class="lg:p-10 sm:px-6 bg-gray-50 rounded-t-lg md:rounded-none md:rounded-tl-lg md:rounded-bl-lg px-4 pt-2">

                        <div class="pt-5">
                            <h1 class="text-xl text-gray-600 font-medium">Order summary</h1>
                        </div>

                        {/* <!-- cart --> */}
                        <div class="flex space-x-6 border-b py-5">
                            <div class=" bg-white rounded-lg">
                                <img class="w-28 object-cover rounded-lg border " src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg" alt="" />
                            </div>
                            <div class="w-full">
                                <div class="flex justify-between ">
                                    <a class="text-base sm:text-lg md:text-base lg:text-lg font-medium hover:text-gray-500 duration-200" href="$$">Throwback Hip Bag</a>
                                    <a class="text-base sm:text-lg md:text-base lg:text-lg font-medium text-blue-700">$90.00</a>
                                </div>
                                <h3 class="text-sm font-medium text-gray-400">Salmon</h3>
                                <div class="flex justify-between mt-2">
                                    <h2 class="text-gray-500 text-sm font-medium">5XL</h2>
                                </div>
                            </div>
                        </div>

                        {/* <!-- cart --> */}
                        <div class="flex space-x-6 border-b py-5">
                            <div class=" bg-white rounded-lg">
                                <img class="w-28 object-cover rounded-lg border " src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg" alt="" />
                            </div>
                            <div class="w-full">
                                <div class="flex justify-between ">
                                    <a class="text-base sm:text-lg md:text-base lg:text-lg font-medium hover:text-gray-500 duration-200" href="$$">Throwback Hip Bag</a>
                                    <a class="text-base sm:text-lg md:text-base lg:text-lg font-medium text-blue-700">$90.00</a>
                                </div>
                                <h3 class="text-sm font-medium text-gray-400">Salmon</h3>
                                <div class="flex justify-between mt-2">
                                    <h2 class="text-gray-500 text-sm font-medium">5XL</h2>
                                </div>
                            </div>
                        </div>

                        {/* <!-- cart --> */}
                        <div class="flex space-x-6 border-b py-5 ">
                            <div class=" bg-white rounded-lg">
                                <img class="w-28 object-cover rounded-lg border " src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-03.jpg" alt="" />
                            </div>
                            <div class="w-full">
                                <div class="flex justify-between ">
                                    <a class="text-base sm:text-lg md:text-base lg:text-lg font-medium hover:text-gray-500 duration-200" href="$$">Throwback Hip Bag</a>
                                    <a class="text-base sm:text-lg md:text-base lg:text-lg font-medium text-blue-700">$90.00</a>
                                </div>
                                <h3 class="text-sm font-medium text-gray-400">Salmon</h3>
                                <div class="flex justify-between mt-2">
                                    <h2 class="text-gray-500 text-sm font-medium">5XL</h2>
                                </div>
                            </div>
                        </div>



                        <div class=" space-y-5 py-5 px-2">
                            <div class="flex justify-between ">
                                <a class="text-base sm:text-lg font-medium text-gray-500 " href="$$">Subtotal</a>
                                <a class="text-base sm:text-lg font-medium text-blue-700">$270.00</a>
                            </div>
                            <div class="flex justify-between ">
                                <a class="text-base sm:text-lg font-medium text-gray-500 " href="$$">Shipping</a>
                                <a class="text-base sm:text-lg font-medium text-blue-700">$10.00</a>
                            </div>
                            <div class="flex justify-between ">
                                <a class="text-base sm:text-lg font-medium text-gray-500 " href="$$">Texes</a>
                                <a class="text-base sm:text-lg font-medium text-blue-700">$20.00</a>
                            </div>
                            <hr class="" />
                            <div class="flex justify-between ">
                                <a class="text-base sm:text-lg font-medium text-gray-500 " href="$$">Total</a>
                                <a class="text-base sm:text-lg font-medium text-blue-700">$300.00</a>
                            </div>
                        </div>

                    </div>






                    {/* <!-- contact infomation --> */}
                    <div className="py-16 px-4">

                        <h1 className="text-lg text-center font-medium text-gray-600">Contact infomation</h1>

                        <div className="py-2 space-y-1">
                            <h4 className="text-gray-600 text-sm sm:text-base">Email Address</h4>
                            <input className="text-gray-600 shadow py-2 px-2 outline-none rounded-md w-full border-2 border-blue-300" />
                        </div>

                        <h1 className="pt-3 text-lg text-center font-medium text-gray-600">Payment Details</h1>
                        <div className="py-2 space-y-1">
                            <h4 className="text-gray-600 text-sm sm:text-base">Name on Card</h4>
                            <input className="text-gray-600 shadow py-2 px-2 outline-none rounded-md w-full border-2 border-blue-300" />
                        </div>


                        <div className="py-2 space-y-1">
                            <h4 className="text-gray-600 text-sm sm:text-base">Card Name</h4>
                            <input className="text-gray-600 shadow py-2 px-2 outline-none rounded-md w-full border-2 border-blue-300" />
                        </div>
 
                        <div className="flex space-x-4">
                            <div className="py-2 space-y-1">
                                <h4 className=" text-gray-600 text-sm sm:text-base">Expiration date (MM/YY)</h4>
                                <input className="text-gray-600 shadow py-2 px-2 outline-none rounded-md w-full border-2 border-blue-300" />
                            </div>
                            <div className="py-2 space-y-1">
                                <h4 className="text-gray-600 text-sm sm:text-base">CVC</h4>
                                <input className="text-gray-600 shadow py-2 px-2 outline-none rounded-md w-24 border-2 border-blue-300" />
                            </div>
                        </div>

                        <h1 className="pt-3 text-lg text-center font-medium text-gray-600">Shipping Address</h1>
                        <div className=" space-y-1">
                            <h4 className="text-gray-600 text-sm sm:text-base">Compani</h4>
                            <input className="text-gray-600 shadow py-2 px-2 outline-none rounded-md w-full border-2 border-blue-300" />
                        </div>
                        <div className="py-2 space-y-1">
                            <h4 className="text-gray-600 text-sm sm:text-base">Apartment, suit, etc</h4>
                            <input className="text-gray-600 shadow py-2 px-2 outline-none rounded-md w-full border-2 border-blue-300" />
                        </div>
                        <div className="py-2 space-y-1">
                            <h4 className="text-gray-600 text-sm sm:text-base">City</h4>
                            <input className="text-gray-600 shadow py-2 px-2 outline-none rounded-md w-full border-2 border-blue-300" />
                        </div>
                        <div className="py-2 space-y-1">
                            <h4 className="text-gray-600 text-sm sm:text-base">State / Province</h4>
                            <input className="text-gray-600 shadow py-2 px-2 outline-none rounded-md w-full border-2 border-blue-300" />
                        </div>
                        <div className="py-2 space-y-1">
                            <h4 className="text-gray-600 text-sm sm:text-base">Post Code</h4>
                            <input className="text-gray-600 shadow py-2 px-2 outline-none rounded-md w-full border-2 border-blue-300" />
                        </div>
                        





                    </div>






                </div>
            </section>


        </div>
    )
}

export default CheckoutForms;