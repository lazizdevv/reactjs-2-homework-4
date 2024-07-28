import React from "react";

import { useForm } from "react-hook-form";
import { request } from "../../../config/request";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Register = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const submit = (data) => {
    request.post("/register", data).then((res) => {
      if (res.data) {
        navigate("/login");
      }

      toast.error("Email already exists!");
    });
  };

  return (
    <>
      <ToastContainer />
      <div className="container">
        <div className="flex justify-center items-center h-screen">
          <div class="w-full">
            <section class="rounded-lg p-3 w-full">
              <div class="flex items-center justify-center my-3">
                <div class="xl:mx-auto shadow-2xl p-4 xl:w-full xl:max-w-sm 2xl:max-w-md">
                  <div class="mb-2"></div>
                  <h2 class="text-2xl font-bold leading-tight text-[#3A4374]">
                    Register
                  </h2>
                  <p class="mt-2 text-base text-[#647196]">
                    Already have an account?{" "}
                    <Link
                      className="ml-2 text-lg text-[#AD1FEA] font-bold hover:underline"
                      to={"/login"}
                    >
                      Login
                    </Link>
                  </p>
                  <form onSubmit={handleSubmit(submit)} class="mt-5">
                    <div class="space-y-4">
                      <div>
                        <label class="text-base font-medium text-gray-900">
                          User Name
                        </label>
                        <div class="mt-2">
                          <input
                            {...register("name", { required: true })}
                            placeholder="Full Name"
                            type="text"
                            class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          />
                        </div>
                      </div>
                      <div>
                        <label class="text-base font-medium text-gray-900">
                          Email address
                        </label>
                        <div class="mt-2">
                          <input
                            {...register("email", { required: true })}
                            placeholder="Email"
                            type="email"
                            class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            name="email"
                          />
                        </div>
                      </div>
                      <div>
                        <div class="flex items-center justify-between">
                          <label class="text-base font-medium text-gray-900">
                            Password
                          </label>
                        </div>
                        <div class="mt-2">
                          <input
                            {...register("password", { required: true })}
                            placeholder="Password"
                            type="password"
                            class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            name="password"
                          />
                        </div>
                      </div>
                      <div>
                        <button
                          class="inline-flex w-full items-center justify-center rounded-md bg-[#AD1FEA] px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-[#AD1FEA]/80"
                          type="submit"
                        >
                          Create Account
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};