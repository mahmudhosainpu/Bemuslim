import React from "react";

const OrderSummaries = ({ onScroll }) => {

  return (
    <div className="">





      <div className="  mx-auto p-4">

        {/* <!-- Order cart --> */}
        <div className="md:flex md:justify-betwee bg-gray-100 px-4 py-8 space-y-3 border-t border-l border-r rounded-t-lg">
          <h1 className="w-[270px] text-3xl font-bold">Order #23456</h1>
          <div className="w-full md:flex md:flex-row-reverse md:justify-between md:space-x-2 ">
            <div className="w-fit flex space-x-3">
              <h3 className="text-lg text-gray-600">Order place</h3>
              <h3 className="text-lg font-medium">March 22, 2022</h3>
            </div>
            <div className="w-fit md:-ml-2">
              <a className=" flex text-lg md:text-base font-medium text-blue-600 hover:text-blue-400"
                href="invoice">View invoice <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 my-auto ml-1">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
              </a>
            </div>
          </div>

        </div>


        <div className="space-y-10 bg-gray-100 md:bg-white">
          {/* <!-- items cart --> */}
          <div className="bg-white px-6 py-10 border shadow-md ">

            <div className="md:flex md:space-x-6 md:pb-10">
              <div className="bg-gray-100 p-6 md:p-4 rounded-lg">
                <img className="sm:w-72 sm:h-72 md:w-32 md:h-32 lg:w-60 lg:h-60 aspect-video mx-auto "
                  src="https://cdn.pixabay.com/photo/2017/12/06/10/43/tank-3001438_960_720.png" alt="" />
              </div>
              <div className="md:space-y-2 pt-4 md:flex">
                <div className="">
                  <h1 className="text-xl md:text-base lg:text-lg font-medium">Tadibeer</h1>
                  <h1 className="text-xl md:text-base lg:text-lg font-medium">$35.00</h1>
                  <h2 className="md:w-60 lg:w-96 text-base md:text-sm lg:text-base text-gray-600">Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Voluptates quae accusamus consequatur atque rerum
                    incidunt animi aliquid quis temporibus, repellat libero quos.
                  </h2>
                </div>

                <div
                  className="py-8 md:py-0 md:pl-4 flex flex-col sm:flex-row space-y-3 sm:space-y-0 justify-between lg:ml-2 xl:ml-20 xl:space-x-20 md:space-x-8">
                  <div className="md:w-full ">
                    <h1 className="text-base md:text-sm lg:text-base font-medium">Delivery address</h1>
                    <h2 className="text-base md:text-sm lg:text-base text-gray-500">Mirpur 1 Rode-2</h2>
                    <h2 className="text-base md:text-sm lg:text-base text-gray-500">Dhaka</h2>
                    <h2 className="text-base md:text-sm lg:text-base text-gray-500">Bangladesh</h2>
                  </div>
                  <div className="md:w-full">
                    <h1 className="text-base md:text-sm lg:text-base font-medium">Shiping updates</h1>
                    <h2 className="text-base md:text-sm lg:text-base text-gray-500">mohammad@gmail.com</h2>
                    <h2 className="text-base md:text-sm lg:text-base text-gray-500">+88011234567</h2>
                  </div>
                </div>
              </div>
            </div>

            <div className=" border-t space-y-5 pt-4">
              <h1 className="text-lg font-medium">Preparing to shiping on March 24, 2022</h1>
              <div className="bg-gray-300 h-2.5 rounded-full">
                <div className="bg-blue-700 h-2.5 rounded-full"></div>
              </div>
              <div className="hidden sm:block">
                <div className=" sm:flex text-center justify-between px-4">
                  <h3 className=" font-medium text-blue-600">Order place</h3>
                  <h3 className=" font-medium text-blue-600">Processing</h3>
                  <h3 className=" font-medium text-gray-500">Shiping</h3>
                  <h3 className=" font-medium text-gray-500">Delivery</h3>
                </div>
              </div>
            </div>

          </div>


          {/* <!-- items cart --> */}
          <div className="bg-white px-6 py-10 border shadow-md ">

            <div className="md:flex md:space-x-6 md:pb-10">
              <div className="bg-gray-100 p-6 md:p-4 rounded-lg">
                <img className="sm:w-72 sm:h-72 md:w-36 md:h-36 lg:w-60 lg:h-60 aspect-video mx-auto "
                  src="https://cdn.pixabay.com/photo/2017/12/06/10/43/tank-3001438_960_720.png" alt="" />
              </div>
              <div className="md:space-y-2 pt-4 md:flex">
                <div className="">
                  <h1 className="text-xl md:text-base lg:text-lg font-medium">Tadibeer</h1>
                  <h1 className="text-xl md:text-base lg:text-lg font-medium">$35.00</h1>
                  <h2 className="md:w-60 lg:w-96 text-base md:text-sm lg:text-base text-gray-600">Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Voluptates quae accusamus consequatur atque rerum
                    incidunt animi aliquid quis temporibus, repellat libero quos.
                  </h2>
                </div>

                <div
                  className="py-8 md:py-0 md:pl-4 flex flex-col sm:flex-row space-y-3 sm:space-y-0 justify-between lg:ml-2 xl:ml-20 xl:space-x-20 md:space-x-8">
                  <div className="md:w-full ">
                    <h1 className="text-base md:text-sm lg:text-base font-medium">Delivery address</h1>
                    <h2 className="text-base md:text-sm lg:text-base text-gray-500">Mirpur 1 Rode-2</h2>
                    <h2 className="text-base md:text-sm lg:text-base text-gray-500">Dhaka</h2>
                    <h2 className="text-base md:text-sm lg:text-base text-gray-500">Bangladesh</h2>
                  </div>
                  <div className="md:w-full">
                    <h1 className="text-base md:text-sm lg:text-base font-medium">Shiping updates</h1>
                    <h2 className="text-base md:text-sm lg:text-base text-gray-500"></h2>
                    <h2 className="text-base md:text-sm lg:text-base text-gray-500">mohammad@gmail.com</h2>
                    <h2 className="text-base md:text-sm lg:text-base text-gray-500">+88011234567</h2>
                  </div>
                </div>
              </div>
            </div>

            <div className=" border-t space-y-5 pt-4">
              <h1 className="text-lg font-medium">Preparing to shiping on March 24, 2022</h1>
              <div className="bg-gray-300 h-2.5 rounded-full">
                <div className="bg-blue-700 h-2.5 rounded-full"></div>
              </div>
              <div className="hidden sm:block">
                <div className=" sm:flex text-center justify-between px-4">
                  <h3 className=" font-medium text-blue-600">Order place</h3>
                  <h3 className=" font-medium text-blue-600">Processing</h3>
                  <h3 className=" font-medium text-gray-500">Shiping</h3>
                  <h3 className=" font-medium text-gray-500">Delivery</h3>
                </div>
              </div>
            </div>

          </div>





          {/* <!-- Payment infomation --> */}
          <div className="pt-10 md:pt-0 bg-gray-100/60 md:bg-white md:rounded-lg ">
            <div
              className=" px-4 py-10 md:shadow-md bg-gray-200/40 rounded-b-lg md:rounded-lg md:flex md:justify-between">

              <div className="flex justify-between md:w-2/3 md:justify-start md:space-x-20 lg:space-x-40">
                <div className="">
                  <h1 className="py-2 text-xl md:text-lg font-medium">Billing address</h1>
                  <h2 className="text-lg md:text-base text-gray-500">Mirpur 1 ,Rode-2</h2>
                  <h2 className="text-lg md:text-base text-gray-500">Dhaka 1216</h2>
                  <h2 className="text-lg md:text-base text-gray-500">Bangladesh</h2>
                </div>
                <div className="">
                  <h1 className="py-2 text-xl md:text-lg font-medium">Payment infomation</h1>
                  <img className="w-10" src="https://cdn-icons-png.flaticon.com/512/5968/5968299.png" alt="" />
                  <h2 className="text-lg md:text-base text-gray-500">Ending with 4242</h2>
                  <h2 className="text-lg md:text-base text-gray-500">Expires 02 / 24</h2>
                </div>
              </div>


              <div className="pt-8 md:pt-0 md:w-1/2 md:-mt-4 md:px-10  divide-y divide-gray-400/30">
                <div className="py-6 md:py-3 px-1 flex text-lg md:text-base font-medium justify-between">
                  <h2 className="text-gray-600">Subtotal</h2>
                  <h2>$72</h2>
                </div>

                <div className="py-6 md:py-3 px-1 flex text-lg md:text-base font-medium justify-between">
                  <h2 className="text-gray-600">Shiping</h2>
                  <h2>$5</h2>
                </div>

                <div className="py-6 md:py-3 px-1 flex text-lg md:text-base font-medium justify-between">
                  <h2 className="text-gray-600">Tax</h2>
                  <h2>$6.16</h2>
                </div>

                <div className="pt-6 md:py-3 px-1 flex text-lg md:text-base font-medium justify-between">
                  <h2>Order total</h2>
                  <h2 className="text-blue-600">$83.16</h2>
                </div>
              </div>
            </div>

          </div>


        </div>


      </div>








    </div>
  )
}

export default OrderSummaries;
