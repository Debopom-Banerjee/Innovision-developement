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

  return (
    <div className="max-h-[400px] overflow-y-auto overflow-x-hidden">
      <h4 className="text-3xl mb-1 text-purple-500 p-3 uppercase">
        Enter details for {title}
      </h4>
      <p className="text-xl mb-1 text-purple-500 p-3 uppercase">
        Enter Team Name
      </p>
      <input
        type="text"
        placeholder="Team Name"
        {...register(`teamname`)}
        className="p-2 ml-5 px-5 border mb-4 border-white rounded-lg !bg-transparent"
      />
      <form
        onSubmit={handleSubmit(submitForm)}
        className="flex row gap-1 px-8 pb-4"
      >
        {fields.map((item, index) => (
          <>
            <div className="flex flex-col sm:pr-20" key={index}>
              <p className="text-xl mb-1 text-purple-500 p-3 uppercase">
                Member {index + 1} details
              </p>
              <input
                type="text"
                placeholder={`Team Member ${index + 1} Name`}
                {...register(`participants.${index}.name`)}
                className="p-2 px-5 border my-2 border-white rounded-lg !bg-transparent"
              />
              {errors.participants?.[index]?.name && (
                <span className="text-red-600 ml-3">Name required</span>
              )}
              <input
                type="text"
                placeholder={`Team Member ${index + 1} Email`}
                {...register(`participants.${index}.personal_email`)}
                className="p-2 px-5 border my-2  border-white rounded-lg !bg-transparent"
              />
              {errors.participants?.[index]?.personal_email && (
                <span className="text-red-600 ml-3">Email required</span>
              )}
              <input
                type="text"
                placeholder={`Team Member ${index + 1} Mobile no.`}
                {...register(`participants.${index}.mobile_no`)}
                className="p-2 px-5 border my-2  border-white rounded-lg !bg-transparent"
              />
              {errors.participants?.[index]?.mobile_no && (
                <span className="text-red-600 ml-3">Mobile no. required</span>
              )}
              <input
                type="text"
                placeholder={`Team Member ${index + 1} Roll no.`}
                {...register(`participants.${index}.college_roll`)}
                className="p-2 px-5 border my-2  border-white rounded-lg !bg-transparent"
              />
              {errors.participants?.[index]?.college_roll && (
                <span className="text-red-600 ml-3">College Roll required</span>
              )}
              <input
                type="text"
                placeholder={`Team Member ${index + 1} Year`}
                {...register(`participants.${index}.year`)}
                className="p-2 px-5 border my-2  border-white rounded-lg !bg-transparent"
              />
              {errors.participants?.[index]?.year && (
                <span className="text-red-600 ml-3">Year required</span>
              )}
              <input
                type="text"
                placeholder={`Team Member ${index + 1} Department`}
                {...register(`participants.${index}.department`)}
                className="p-2 px-5 border my-2  border-white rounded-lg !bg-transparent"
              />
              {errors.participants?.[index]?.department && (
                <span className="text-red-600 ml-3">Department required</span>
              )}
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
        <button
          className="text-white border-[5px] px-4 py-2 mt-4 rounded-xl bg-purple-700 border-purple-400"
          type="button"
          onClick={() => append()}
        >
          Add new Member
        </button>
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
