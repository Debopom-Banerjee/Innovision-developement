import React, { useContext } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { addToSingleEvent } from "../config/firebase";
import { UserContext } from "../context/User.context";

// import { collection, addDoc } from "firebase/firestore";
// import { db } from "../../Config/Firebase";

const schema = yup
  .object()
  .shape({
    name: yup.string().required("This is a required field"),
    year: yup.string().required("This is a required field"),
    college_roll: yup.string().required("This is a required field"),
    mobile_no: yup.string().required("This is a required field"),
    department: yup.string().required("This is a required field"),
  })
  .required();

function Forms({ title, setModalState1 }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { currUser } = useContext(UserContext);
  const submitForm = async (data) => {
    const { name, mobile_no, college_roll, year, department } = data;
    const email = currUser.email;
    const eventName = title.replace(/ /g, "").toLowerCase();
    try {
      await addToSingleEvent(currUser, eventName, {
        name,
        mobile_no,
        college_roll,
        year,
        department,
        email,
      });
    } catch (e) {
      console.log(e);
    }
    setModalState1(false);
  };

  return (
    <div className=" ">
      <h4 className="text-3xl mb-1 text-purple-500 p-3 uppercase">Register for {title}</h4>
      <form onSubmit={handleSubmit(submitForm)} className="flex row gap-1 px-8 pb-4">
        <input
          className="p-2 border mb-2 border-white rounded-lg !bg-transparent"
          type="name"
          placeholder="Name"
          {...register("name")}
        />
        {errors.name && <span className="text-red-600">Name required</span>}
        <input
          placeholder="mobile no."
          {...register("mobile_no")}
          className="p-2 border mb-2  border-white rounded-lg !bg-transparent"
        />
        {errors.mobile_no && <span className="text-red-600">Mobile no. required</span>}
        <input
          placeholder="College roll no."
          {...register("college_roll")}
          className="p-2 border mb-2 border-white rounded-lg !bg-transparent"
        />
        {errors.college_roll && <span className="text-red-600">College Roll required</span>}
        <input
          placeholder="year"
          {...register("year")}
          className="p-2  border mb-2 border-white rounded-lg !bg-transparent"
        />
        {errors.year && <span className="text-red-600">Year required</span>}
        <input
          placeholder="department"
          {...register("department")}
          className="p-2 border mb-2 border-white rounded-lg !bg-transparent"
        />
        {errors.department && <span className="text-red-600">Department required</span>}
        <button
          type="submit"
          className="mt-3 inline-flex justify-center rounded-md  bg-gradient-to-r from-violet-500 to-fuchsia-500 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm ring-1 ring-inset focus:from-purple-800 focus:to-blue-950  sm:mt-0 sm:w-auto absolute bottom-1 right-32 w-auto "
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Forms;
