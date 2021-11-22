import React, { useEffect, useState } from "react";
import { useRouter } from "app/hooks/router";

import { setToken } from "utils/cookie";
import { DefaultLayout } from "app/components/layout";
import { LockClosedIcon } from "@heroicons/react/solid";
import { tasks } from "services/tasks";

export const Tasks = () => {
  const router = useRouter();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getDataBerita();
  }, []);

  const getDataBerita = async () => {
    setLoading(true);
    // const beritaTemp = await tasks();
    // setData(beritaTemp["list"]);
    setLoading(false);
    // console.log(beritaTemp["list"]);
  };

  return (
    <DefaultLayout>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
            {/* {loading === true ? (
              <div>
                <div className="bg-white overflow-hidden border-b-4 border-blue-500 w-full">
                  <div className="h-20 bg-gray-200 rounded animate-pulse"></div>
                  <div className="p-4 md:p-6">
                    <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-20 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </div>
              </div>
            ) : (
              data.map((item, index) => (
                <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
                  <div className="flex justify-center md:justify-end -mt-16">
                    <img
                      className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
                      src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                    />
                  </div>
                  <div>
                    <h2 className="text-gray-800 text-3xl font-semibold">
                      Design Tools
                    </h2>
                    <p className="mt-2 text-gray-600">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quae dolores deserunt ea doloremque natus error, rerum
                      quas odio quaerat nam ex commodi hic, suscipit in a
                      veritatis pariatur minus consequuntur!
                    </p>
                  </div>
                  <div className="flex justify-end mt-4">
                    <a href="#" className="text-xl font-medium text-indigo-500">
                      John Doe
                    </a>
                  </div>
                </div>
              ))
            )} */}
          </div>
        </div>
      </main>
    </DefaultLayout>
  );
};
