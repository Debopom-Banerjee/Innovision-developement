import React, { useContext } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { addToSingleEvent } from "../config/firebase";
import { UserContext } from "../context/User.context";
import toast from "react-hot-toast";

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
    hack_id: yup.string(),
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
    const { name, mobile_no, college_roll, year, department, hack_id } = data;
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
        hack_id,
      });
      toast.success("Form submitted Successfully!!!", {
        duration: 4000,
        className: "text-white",
        style: {
          background: "#d11aff",
        },
      });
    } catch (e) {
      toast.error("Error please check Form again.", {
        duration: 4000,
        className: "text-white",
        style: {
          background: "#ff6666",
        },
      });
      console.log(e);
    }
    setModalState1(false);
  };
  const handleInputFocus = (e) => {
    e.target.classList.add("focused");
    e.target.classList.add("pt-3");
  };
  const handleInputBlur = (e) => {
    if (e.target.value === "") {
      e.target.classList.remove("focused");
      e.target.classList.remove("pt-3");
    }
  };

  return (
    <div className=" ">
      <h4 className="text-3xl mb-1 text-purple-500 p-3 uppercase">
        Register for {title}
      </h4>
      <form
        onSubmit={handleSubmit(submitForm)}
        className=" relative flex row gap-1 px-8 pb-4"
      >
        <div className="field-container flex flex-col">
          <input
            className="p-2 px-3 border my-2 border-white rounded-lg !bg-transparent"
            type="name"
            onFocus={handleInputFocus}
            {...register("name", {
              onBlur: handleInputBlur,
            })}
          />
          <label className="!left-7">Name</label>
          {errors.name && <span className="text-red-600">Name required</span>}
        </div>
        <div className="field-container flex flex-col">
          <input
            onFocus={handleInputFocus}
            {...register("mobile_no", {
              onBlur: handleInputBlur,
            })}
            className="p-2 px-3 border my-2 border-white rounded-lg !bg-transparent"
          />
          <label className="!left-7">Mobile no.</label>
          {errors.mobile_no && (
            <span className="text-red-600">Mobile no. required</span>
          )}
        </div>
        <div className="field-container flex flex-col">
          <input
            onFocus={handleInputFocus}
            {...register("college_roll", {
              onBlur: handleInputBlur,
            })}
            className="p-2 px-3 border my-2 border-white rounded-lg !bg-transparent"
          />
          <label className="!left-7">College roll no.</label>
          {errors.college_roll && (
            <span className="text-red-600">College Roll required</span>
          )}
        </div>
        <div className="field-container flex flex-col">
          <input
            onFocus={handleInputFocus}
            {...register("year", {
              onBlur: handleInputBlur,
            })}
            className="p-2 px-2 !pl-4 border my-2 border-white rounded-lg !bg-transparent"
          />
          <label className="!left-7">Year</label>
          {errors.year && <span className="text-red-600">Year required</span>}
        </div>
        <div className="field-container flex flex-col">
          <input
            onFocus={handleInputFocus}
            {...register("department", {
              onBlur: handleInputBlur,
            })}
            className="p-2 px-3 border my-2 border-white rounded-lg !bg-transparent"
          />
          <label className="!left-7">Department</label>
          {errors.department && (
            <span className="text-red-600">Department required</span>
          )}
        </div>
        {title === "Codathon" && (
          <div className="field-container flex flex-col">
            <input
              onFocus={handleInputFocus}
              {...register("hack_id", {
                onBlur: handleInputBlur,
              })}
              className="p-2 px-3 border my-2 border-white rounded-lg !bg-transparent"
            />
            <label className="!left-7">HackerRank id </label>
            {errors.hack_id && (
              <span className="text-red-600">HackerRank Id required</span>
            )}
          </div>
        )}
        <button
          type="submit"
          className="mt-3 inline-flex justify-center rounded-md  bg-gradient-to-r from-violet-500 to-fuchsia-500 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm ring-1 ring-inset focus:from-purple-800 focus:to-blue-950  sm:mt-0 sm:w-auto absolute bottom-[-40px] right-32 w-auto "
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Forms;
