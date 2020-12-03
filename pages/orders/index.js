import useSWR from "swr";
import Header from '../../components/Header'
import { useEffect, useState } from "react";

export default function Orders() {
    const [notification, setNotification] = useState(false)
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("This will run every second!");
      setNotification(notification =>!notification)
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getRandomDog = url => fetch(url).then(_ => _.json());

  const { error, data } = useSWR(
    "https://fakestoreapi.com/users",
    getRandomDog
  );

  console.log(data);
  return (
    <>
    <Header/>
      <div class="justify-end bg-purple-100">
        {!!notification && (
          <div class="p-6 max-w-sm mx-auto bg-purple-900 rounded-xl shadow-md flex items-center space-x-4">
            <div class="flex-shrink-0">
              <img
                class="h-12 w-12"
                src={"https://randomuser.me/api/portraits/women/"+Math.floor(Math.random() * 33)+".jpg"}
                alt="Order Notification"
              />
            </div>
            <div>
              <div class="text-xl font-medium text-white">New Order</div>
              <p class="text-gray-500">You have a new order!</p>
            </div>
          </div>
        )}

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
