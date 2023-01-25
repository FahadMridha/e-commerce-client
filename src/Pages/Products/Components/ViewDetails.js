import React from "react";
import { Link, useLocation } from "react-router-dom";

const ViewDetails = () => {
  const location = useLocation();
  const { picture, name, price, details, _id } = location.state;
  return (
    <div class="bg-white py-6 sm:py-8 lg:py-12">
      <div class="max-w-screen-lg px-4 md:px-8 mx-auto">
        <div class="grid md:grid-cols-2 gap-8">
          <div class="space-y-4 border pt-5">
            <div class="bg-gray-100  rounded-lg overflow-hidden relative">
              <img className="h-full w-full" src={picture} alt={name} />

              <span class="bg-red-500 text-white text-sm tracking-wider uppercase rounded-br-lg absolute left-0 top-0 px-3 py-1.5">
                sale
              </span>
            </div>
          </div>

          <div class="md:py-8">
            <div class="mb-2 md:mb-3">
              <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold">
                {name}
              </h2>
            </div>

            <div class="flex items-center mb-6 md:mb-10">
              <div class="flex gap-0.5 -ml-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 text-gray-300"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>

              <span class="text-gray-500 text-sm ml-2">4.2</span>

              <a
                href="#"
                class="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 text-sm font-semibold transition duration-100 ml-4"
              >
                view all 47 reviews
              </a>
            </div>

            <div class="mb-4">
              <div class="flex items-end gap-2">
                <span class="text-gray-800 text-xl md:text-2xl font-bold">
                  {price}
                </span>
                <span class="text-red-500 line-through mb-0.5">$5.00</span>
              </div>

              <span class="text-gray-500 text-sm">incl. VAT plus shipping</span>
            </div>

            <div class="flex gap-2.5">
              <button className=" inline-block flex-1 sm:flex-none bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                <Link to={`/checkout/${_id}`}>Add to cart</Link>
              </button>
            </div>

            <div class="mt-10 md:mt-16 lg:mt-20">
              <div class="text-gray-800 text-lg font-semibold mb-3">
                Description
              </div>

              <p class="text-gray-500 text-justify">{details}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
