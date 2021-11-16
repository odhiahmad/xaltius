import * as React from "react";
import { useRouter } from "app/hooks/router";

import { setToken } from "utils/cookie";
import { DefaultLayout } from "app/components/layout";
import { LockClosedIcon } from "@heroicons/react/solid";
import { FormRegistration } from "./regisform";
export const Registration = () => {
  const router = useRouter();

  const prosesOnRegistration = async () => {};

  return (
    <DefaultLayout>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Registration</h1>
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
                Registration Your Profile
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                Let's Create Account
              </p>
            </div>

            <FormRegistration />
          </div>
        </div>
      </main>
    </DefaultLayout>
  );
};
