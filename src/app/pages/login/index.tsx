import * as React from "react";
import { useRouter } from "app/hooks/router";
import { login } from "services/login";
import { FormLogin } from "./loginform";
import { setToken } from "utils/cookie";
import { DefaultLayout } from "app/components/layout";

export const Login = () => {
  const router = useRouter();

  return (
    <DefaultLayout>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Login</h1>
        </div>
      </header>
      <main>
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <img
                className="mx-auto h-12 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
              />
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Login Your Profile
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                Let's login your Account
              </p>
            </div>

            <FormLogin />
          </div>
        </div>
      </main>
    </DefaultLayout>
  );
};
