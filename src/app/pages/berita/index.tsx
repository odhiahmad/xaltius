import React, { useEffect, useState } from "react";
import { useRouter } from "app/hooks/router";

import { setToken } from "utils/cookie";
import { DefaultLayout } from "app/components/layout";
import { LockClosedIcon } from "@heroicons/react/solid";
import { berita } from "services/berita";

export const Berita = () => {
  const router = useRouter();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getDataBerita();
  }, []);

  const getDataBerita = async () => {
    setLoading(true);
    const beritaTemp = await berita();
    setData(beritaTemp["data"]["articles"]);
    setLoading(false);
    console.log(beritaTemp["data"]["articles"]);
  };

  return (
    <DefaultLayout>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Berita</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
            {loading === true ? (
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
                <div className="bg-white overflow-hidden border-b-4 border-blue-500 w-full">
                  <img
                    src={
                      item["urlToImage"] === ""
                        ? "https://images.unsplash.com/photo-1573748240263-a4e9c57a7fcd"
                        : item["urlToImage"]
                    }
                    alt="People"
                    className="w-full object-cover h-32 sm:h-48 md:h-64"
                  />
                  <div className="p-4 md:p-6">
                    <p className="text-blue-500 font-semibold text-xs mb-1 leading-none">
                      {item["author"]}
                    </p>
                    <h3 className="truncate font-semibold mb-2 text-xl leading-tight sm:leading-normal">
                      {item["title"]}
                    </h3>
                    <div className="text-sm flex items-center">
                      <svg
                        className="opacity-75 mr-2"
                        version="1.1"
                        id="Capa_1"
                        x="0px"
                        y="0px"
                        width="12"
                        height="12"
                        viewBox="0 0 97.16 97.16"
                      >
                        <path d="M48.58,0C21.793,0,0,21.793,0,48.58s21.793,48.58,48.58,48.58s48.58-21.793,48.58-48.58S75.367,0,48.58,0z M48.58,86.823    c-21.087,0-38.244-17.155-38.244-38.243S27.493,10.337,48.58,10.337S86.824,27.492,86.824,48.58S69.667,86.823,48.58,86.823z" />
                        <path d="M73.898,47.08H52.066V20.83c0-2.209-1.791-4-4-4c-2.209,0-4,1.791-4,4v30.25c0,2.209,1.791,4,4,4h25.832    c2.209,0,4-1.791,4-4S76.107,47.08,73.898,47.08z" />
                      </svg>
                      <p className="leading-none">21 Oct 2019</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </DefaultLayout>
  );
};
