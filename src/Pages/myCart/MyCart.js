import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const MyCart = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrder] = useState([]);

  useEffect(() => {
    fetch(
      `https://e-commerce-server-three.vercel.app/orders?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("eCommerce-token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [user?.email]);
  const handleDelete = (id) => {
    // console.log(id);
    const proceed = window.confirm(
      "Are you sure, you want to delete this order"
    );
    if (proceed) {
      fetch(`https://e-commerce-server-three.vercel.app/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Delete Successfully");
            const remaing = orders.filter((odr) => odr._id !== id);
            setOrder(remaing);
          }
        });
    }
  };
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-lg px-4 md:px-8 mx-auto">
        <div className="mb-6 sm:mb-10 lg:mb-16">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
            {orders.length === 0 ? (
              <p className="py-10">Your Cart is Empty</p>
            ) : (
              "YOUR CART"
            )}
          </h2>
        </div>
        {orders &&
          orders.map((order) => (
            <div
              key={order._id}
              className="flex flex-col sm:border-t sm:border-b sm:divide-y mb-5 sm:mb-8"
            >
              <div className="py-5 sm:py-8">
                <div className="flex flex-wrap gap-4 lg:gap-6 sm:py-2.5">
                  <div className="sm:-my-2.5">
                    <a
                      href="#"
                      className="group w-24 sm:w-40 h-40 sm:h-56 block bg-gray-100 rounded-lg overflow-hidden relative"
                    >
                      <img
                        className="border"
                        src={order.picture}
                        alt={order.name}
                      />
                    </a>
                  </div>

                  <div className="flex flex-col justify-between flex-1">
                    <div>
                      <a
                        href="#"
                        className="inline-block text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100 mb-1"
                      >
                        {order.productName}
                      </a>

                      <span className="block text-gray-500">Size: S</span>
                      <span className="block text-gray-500">Color: Black</span>
                    </div>

                    <div>
                      <span className="block text-gray-800 md:text-lg font-bold mb-1">
                        $49.99
                      </span>

                      <span className="flex items-center text-gray-500 text-sm gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 text-green-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        In stock
                      </span>
                    </div>
                  </div>

                  <div className="w-full sm:w-auto flex justify-between border-t sm:border-none pt-4 sm:pt-0">
                    <div className="flex flex-col items-start gap-2">
                      <button
                        onClick={() => handleDelete(order._id)}
                        className=" py-1 px-2 rounded-lg btn bg-yellow-500 active:text-indigo-700  text-sm font-semibold select-none transition duration-100"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MyCart;
