import * as React from "react";
import { useRouter } from "app/hooks/router";
import { login } from "services/login";

import { setToken } from "utils/cookie";
import { DefaultLayout } from "app/components/layout";

export const Login = () => {
  const router = useRouter();

  const prosesOnLogin = async () => {
    const response = await login({
      username: "odhiahmadgg",
      password: "admin123",
    });

    setToken("tes123");
    window.location.reload();
  };

  return (
    <DefaultLayout>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Login</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
              Tes
            </div>
          </div>
        </div>
      </main>
    </DefaultLayout>
  );
};
