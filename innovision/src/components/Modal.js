import { Fragment, useContext, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { UserContext } from '../context/User.context'

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const schema = yup
    .object()
    .shape({
        name: yup.string().required("This is a required field"),
        personal_email: yup.string().email().required("This is a required field"),
        year: yup.string().required("This is a required field"),
        college_roll: yup.string().required("This is a required field"),
        mobile_no: yup.string().required("This is a required field"),
    })
    .required();

export default function Modal() {

    const { modalState, setModalState } = useContext(UserContext);

    // const [modalState, setModalState] = useState(modalState)

    const cancelButtonRef = useRef(null)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    return (
        <Transition.Root show={modalState} as={Fragment}>
            <Dialog as="div" className="relative z-20" initialFocus={cancelButtonRef} onClose={setModalState}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-20 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <form
                                    onSubmit={handleSubmit((d) => {
                                        console.log(d);
                                        // addMember(
                                        //   d.name,
                                        //   d.personal_email,
                                        //   d.year,
                                        //   d.college_roll,
                                        //   d.mobile_no
                                        // );
                                        alert("Members details are collected");
                                    })}
                                >
                                    <h1 className="h3 mb-3 fw-normal">
                                        Add Details about the club-member here
                                    </h1>
                                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                        <div className="sm:col-span-4">
                                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                                Username
                                            </label>
                                            <div className="mt-2">
                                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                    <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span>
                                                    <input
                                                        type="text"
                                                        name="username"
                                                        id="username"
                                                        autoComplete="username"
                                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                        placeholder="janesmith"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-floating mt-3">
                                        <input
                                            type="e-mail"
                                            className="form-control"
                                            id="floatingTimeAndDate"
                                            placeholder="Password"
                                            {...register("personal_email")}
                                        />
                                        <label htmlFor="floatingPassword">
                                            Personal E-mail ID
                                        </label>
                                        <p>{errors.personal_email?.message}</p>
                                    </div>
                                    <div className="form-floating mt-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="floatingTimeAndDate"
                                            placeholder="Password"
                                            {...register("year")}
                                        />
                                        <label htmlFor="floatingPassword">Year:</label>
                                        <p>{errors.year?.message}</p>
                                    </div>
                                    <div className="form-floating mt-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="floatingTimeAndDate"
                                            placeholder="Password"
                                            {...register("college_roll")}
                                        />
                                        <label htmlFor="floatingPassword">
                                            College Roll No:
                                        </label>
                                        <p>{errors.college_roll?.message}</p>
                                    </div>
                                    <div className="form-floating mt-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="floatingTimeAndDate"
                                            placeholder="Password"
                                            {...register("mobile_no")}
                                        />
                                        <label htmlFor="floatingPassword">Mobile No:</label>
                                        <p>{errors.mobile_no?.message}</p>
                                    </div>
                                    <div className="mt-4 mb-3 d-flex flex-row align-items-center justify-content-center">
                                        <button
                                            className="w-50 btn btn-lg btn-primary"
                                            type="submit"
                                        >
                                            Add Member details
                                        </button>
                                    </div>
                                </form>
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">

                                    <button
                                        type="button"
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                        onClick={() => setModalState(false)}
                                        ref={cancelButtonRef}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
