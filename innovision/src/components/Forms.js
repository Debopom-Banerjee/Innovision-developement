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
    <div className="text-black ">
      <form onSubmit={handleSubmit(submitForm)} className="flex row gap-1">
        <h4 className="text-base">Enter details for {title}</h4>
        <input
          className="p-2 border border-black rounded-lg"
          type="name"
          placeholder="Name"
          {...register("name")}
        />
        {errors.name && <span>name required</span>}
        <input
          placeholder="mobile no."
          {...register("mobile_no")}
          className="p-2 border border-black rounded-lg"
        />
        <input
          placeholder="College roll no."
          {...register("college_roll")}
          className="p-2 border border-black rounded-lg"
        />
        <input
          placeholder="year"
          {...register("year")}
          className="p-2 border border-black rounded-lg"
        />
        <input
          placeholder="department"
          {...register("department")}
          className="p-2 border border-black rounded-lg"
        />
        <button
          type="submit"
          className="mt-3 inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto absolute bottom-4 right-32 w-auto"
        >
          submit
        </button>
      </form>
    </div>
  );
}

export default Forms;
