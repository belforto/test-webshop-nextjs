import useSWR from "swr";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Orders() {

  useEffect(() => {
    const interval = setInterval(() => {
     
      const Img = () => (
        <div style={{display:"flex"}}>
          <img
            width={48}
            src={
              "https://randomuser.me/api/portraits/women/" +
              Math.floor(Math.random() * 33) +
              ".jpg"
            }
          />
          🦄 New Order Woohoo!
        </div>
      );

      toast.success(<Img />, {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getRandomDog = url => fetch(url).then(_ => _.json());

  const { error, data } = useSWR(
    "https://fakestoreapi.com/users",
    getRandomDog
  );

  return (
    <>
    Client side Rendering
      <Header />
      <div class="justify-end bg-purple-100">
        <div>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover
          />
        </div>
       
        {error && <p>Error! {error}</p>}

        <div>
          <table class="min-w-full table-auto">
            <thead class="justify-between">
              <tr class="bg-gray-800">
                <th class="px-16 py-2">
                  <span class="text-gray-300"></span>
                </th>
                <th class="px-16 py-2">
                  <span class="text-gray-300">Name</span>
                </th>
                <th class="px-16 py-2">
                  <span class="text-gray-300">Invitation</span>
                </th>
                <th class="px-16 py-2">
                  <span class="text-gray-300">Date</span>
                </th>

                <th class="px-16 py-2">
                  <span class="text-gray-300">Time</span>
                </th>

                <th class="px-16 py-2">
                  <span class="text-gray-300">Status</span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-gray-200">
              {!!data &&
                data.map((x, i) => {
                  return (
                    <tr class="bg-white border-4 border-gray-200">
                      <td class="px-16 py-2 flex flex-row items-center">
                        <img
                          class="h-8 w-8 rounded-full object-cover "
                          src={`https://randomuser.me/api/portraits/men/${i}.jpg`}
                          alt=""
                        />
                      </td>
                      <td>
                        <span class="text-center ml-2 font-semibold">
                          {x.name.firstname + x.name.lastname}
                        </span>
                      </td>
                      <td class="px-16 py-2">
                        <button class="bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-indigo-500 hover:text-black ">
                          Open Link
                        </button>
                      </td>
                      <td class="px-16 py-2">
                        <span>05/06/2020</span>
                      </td>
                      <td class="px-16 py-2">
                        <span>{x.address.city}</span>
                      </td>

                      <td class="px-16 py-2">
                        <span class="text-green-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-5 h5 "
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="#2c3e50"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <path d="M5 12l5 5l10 -10" />
                          </svg>
                        </span>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
