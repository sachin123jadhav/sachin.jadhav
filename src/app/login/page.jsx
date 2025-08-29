"use client"; // This is a client component 👈🏽
import React from "react";
import Link from "next/link";
import Switcher from "../component/switcher";
import Image from "next/image";


export default function Login() {
    return (
        <>
            <section style={{ backgroundImage: `url(/images/bg/auth.jpg)` }} className="position-relative bg-center bg-cover">
                <div className="absolute inset-0 bg-slate-900/90"></div>
                <div className="container-fluid relative">
                    <div className="grid grid-cols-1">
                        <div className="lg:col-span-4">
                            <div className="flex flex-col min-h-screen md:px-12 py-12 px-3">

                                <div className="text-center mx-auto">
                                    <Link href="/"><Image  src={"/images/logo-light.png"} width={105} height={24} alt=""/></Link>
                                  
                                </div>
                                <div className=" my-auto">
                                    <div className="mt-5 w-full max-w-sm m-auto px-6 py-8 bg-white dark:bg-slate-900 rounded-md shadow-lg shadow-slate-500 dark:shadow-slate-800">
                                        <div className="grid grid-cols-1">
                                            <h5 className="mb-8 text-xl dark:text-white font-semibold text-center">Login</h5>
                                            <form className="ltr:text-left rtl:text-right">
                                                <div className="grid grid-cols-1">
                                                    <div className="mb-4">
                                                        <label className="dark:text-white" htmlFor="LoginEmail">Email Address:</label>
                                                        <input id="LoginEmail" type="email" className="form-input w-full py-2 px-3 border border-gray-200 dark:border-gray-800 focus:ring-0 focus:border-orange-600/50 dark:bg-slate-900 dark:text-slate-200 rounded h-10 outline-none mt-3" placeholder="name@example.com" />
                                                    </div>

                                                    <div className="mb-4">
                                                        <label className="dark:text-white" htmlFor="LoginPassword">Password:</label>
                                                        <input id="LoginPassword" type="password" className="form-input w-full py-2 px-3 border border-gray-200 dark:border-gray-800 focus:ring-0 focus:border-orange-600/50 dark:bg-slate-900 dark:text-slate-200 rounded h-10 outline-none mt-3" placeholder="Password:" />
                                                    </div>

                                                    <div className="flex justify-between mb-4">
                                                        <div className="inline-flex items-center">
                                                            <input className="form-checkbox size-4 appearance-none rounded border border-gray-200 dark:border-gray-800 accent-orange-600 checked:appearance-auto dark:accent-orange-600 focus:border-orange-300 focus:ring focus:ring-offset-0 focus:ring-orange-200 focus:ring-opacity-50 me-2" type="checkbox" value="" id="RememberMe" />
                                                            <label className="form-check-label text-slate-400" htmlFor="RememberMe">Remember me</label>
                                                        </div>

                                                        <p className="text-slate-400 mb-0"><Link href="/reset-password" className="text-slate-400">Forgot password ?</Link></p>
                                                    </div>

                                                    <div className="mb-4">
                                                        <Link href="#" className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md w-full">Login / Sign in</Link>
                                                    </div>

                                                    <div className="text-center">
                                                        <span className="text-slate-400 dark:text-slate-300 me-2">Dont have an Accounts</span> <Link href="/signup" className="text-dark dark:text-white fw-bold">Sign Up</Link>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Start Footer --> */}
                                <div className="text-center">
                                    <p className="text-gray-400">© {new Date().getFullYear()} Upwind. Design & Develop with <i className="mdi mdi-heart text-orange-700"></i> by <Link href="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</Link>.</p>
                                </div>
                                {/* <!-- End Footer --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Switcher section */}
            <Switcher />
        </>
    )

}
