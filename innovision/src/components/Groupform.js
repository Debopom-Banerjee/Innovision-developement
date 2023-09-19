import React, { useContext, useState } from "react";

import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { UserContext } from "../context/User.context";
import { addToSingleEvent } from "../config/firebase";
import toast from "react-hot-toast";

// import { collection, addDoc } from "firebase/firestore";
// import { db } from "../../Config/Firebase";

const formSchema = yup
  .object()
  .shape({
    name: yup.string().required("This is a required field"),
    personal_email: yup.string().email().required("This is a required field"),
    year: yup.string().required("This is a required field"),
    college_roll: yup.string().required("This is a required field"),
    mobile_no: yup.string().required("This is a required field"),
    department: yup.string().required("This is a required field"),
  })
  .required();
const schema = yup.object({
  teamname: yup.string().required("This is a required field"),
  participants: yup.array().of(formSchema),
});

function Groupform({ title, setModalState1 }) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "participants",
    rules: {
      required: {
        value: true,
        name_message: "At least one is required",
      },
    },
  });
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

  const { currUser } = useContext(UserContext);
  const submitForm = async (data) => {
    const eventName = title.replace(/ /g, "").toLowerCase();
    try {
      await addToSingleEvent(currUser, eventName, {
        ...data,
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
  const mulEventTitle = title.replace(/ /g, "").toLowerCase();
  return (
    <div className="max-h-[400px] overflow-y-auto overflow-x-hidden">
      <h4 className="text-3xl mb-1 text-purple-500 p-3 uppercase">
        Enter details for {title}
      </h4>
      <p className="text-xl mb-1 text-purple-500 p-3 uppercase">
        Enter Team Name
      </p>
      <div className="field-container flex flex-col ml-5 !w-5/6">
        <input
          type="text"
          onFocus={handleInputFocus}
          {...register(`teamname`, {
            onBlur: handleInputBlur,
          })}
          className="p-2 !w-5/6 px-3 border my-2 border-white rounded-lg !bg-transparent"
        />
        <label>Team Name</label>
        {errors.teamname && (
          <span className="text-red-600 ml-3">Team Name required</span>
        )}
      </div>
      <form
        onSubmit={handleSubmit(submitForm)}
        className="flex row gap-1 px-8 pb-4"
      >
        {fields.map((item, index) => (
          <>
            <div className="relative flex flex-col sm:pr-20" key={index}>
              <p className="text-xl mb-1 text-purple-500 p-3 uppercase">
                Member {index + 1} details
              </p>
              <div className="field-container flex flex-col">
                <input
                  type="text"
                  onFocus={handleInputFocus}
                  {...register(`participants.${index}.name`, {
                    onBlur: handleInputBlur,
                  })}
                  className="p-2 px-3 border my-2 border-white rounded-lg !bg-transparent"
                />
                <label>{` Member ${index + 1} Name`}</label>
                {errors.participants?.[index]?.name && (
                  <span className="text-red-600 ml-3">Name required</span>
                )}
              </div>
              <div className="field-container flex flex-col">
                <input
                  type="text"
                  onFocus={handleInputFocus}
                  {...register(`participants.${index}.personal_email`, {
                    onBlur: handleInputBlur,
                  })}
                  className="p-2 px-3 border my-2  border-white rounded-lg !bg-transparent"
                />
                <label>{` Member ${index + 1} Email`}</label>
                {errors.participants?.[index]?.personal_email && (
                  <span className="text-red-600 ml-3">Email required</span>
                )}
              </div>
              <div className="field-container flex flex-col">
                <input
                  type="text"
                  onFocus={handleInputFocus}
                  {...register(`participants.${index}.mobile_no`, {
                    onBlur: handleInputBlur,
                  })}
                  className="p-2 px-3 border my-2  border-white rounded-lg !bg-transparent"
                />
                <label>{` Member ${index + 1} Mobile no.`}</label>
                {errors.participants?.[index]?.mobile_no && (
                  <span className="text-red-600 ml-3">Mobile no. required</span>
                )}
              </div>
              <div className="field-container flex flex-col">
                <input
                  type="text"
                  onFocus={handleInputFocus}
                  {...register(`participants.${index}.college_roll`, {
                    onBlur: handleInputBlur,
                  })}
                  className="p-2 px-3 border my-2  border-white rounded-lg !bg-transparent"
                />
                <label>{` Member ${index + 1} Roll no.`}</label>
                {errors.participants?.[index]?.college_roll && (
                  <span className="text-red-600 ml-3">
                    College Roll required
                  </span>
                )}
              </div>
              <div className="field-container flex flex-col">
                <input
                  type="text"
                  onFocus={handleInputFocus}
                  {...register(`participants.${index}.year`, {
                    onBlur: handleInputBlur,
                  })}
                  className="p-2 px-3 border my-2  border-white rounded-lg !bg-transparent"
                />
                <label>{` Member ${index + 1} Year`}</label>
                {errors.participants?.[index]?.year && (
                  <span className="text-red-600 ml-3">Year required</span>
                )}
              </div>
              <div className="field-container flex flex-col">
                <input
                  type="text"
                  onFocus={handleInputFocus}
                  {...register(`participants.${index}.department`, {
                    onBlur: handleInputBlur,
                  })}
                  className="p-2 px-3 border my-2  border-white rounded-lg !bg-transparent"
                />
                <label>{` Member ${index + 1} Department`}</label>
                {errors.participants?.[index]?.department && (
                  <span className="text-red-600 ml-3">Department required</span>
                )}
              </div>
            </div>
            <button
              className="text-white border-[5px] px-8 py-2 rounded-xl bg-red-700 hover:bg-red-300 sm:w-5/6"
              type="button"
              onClick={() => remove(index)}
            >
              Delete
            </button>
          </>
        ))}
        {mulEventTitle === "quiztime" && (
          <button
            className="text-white border-[5px] px-4 py-2 mt-4 rounded-xl bg-purple-700 border-purple-400"
            type="button"
            onClick={() => append()}
            disabled={fields.length === 2}
          >
            Add new Member
          </button>
        )}
        {mulEventTitle === "valorant" && (
          <button
            className="text-white border-[5px] px-4 py-2 mt-4 rounded-xl bg-purple-700 border-purple-400"
            type="button"
            onClick={() => append()}
            disabled={fields.length === 5}
          >
            Add new Member
          </button>
        )}
        {mulEventTitle === "bgmi" && (
          <button
            className="text-white border-[5px] px-4 py-2 mt-4 rounded-xl bg-purple-700 border-purple-400"
            type="button"
            onClick={() => append()}
            disabled={fields.length === 2}
          >
            Add new Member
          </button>
        )}
        <button
          type="submit"
          className="mt-3 inline-flex justify-center rounded-md  bg-gradient-to-r from-violet-500 to-fuchsia-500 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm ring-1 ring-inset focus:from-purple-800 focus:to-blue-950  sm:mt-0 sm:w-auto absolute bottom-1 right-32 w-auto"
          disabled={fields.length === 0}
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Groupform;
