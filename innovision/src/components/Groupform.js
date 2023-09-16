import React, { useContext, useState } from "react";

import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { UserContext } from "../context/User.context";
import { addToSingleEvent } from "../config/firebase";

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
  });

  const { currUser } = useContext(UserContext);
  const submitForm = async (data) => {
    const eventName = title.replace(/ /g, "").toLowerCase();
    try {
      await addToSingleEvent(currUser, eventName, {
        ...data,
      });
    } catch (e) {
      console.log(e);
    }
    setModalState1(false);
    console.log(data);
  };

  return (
    <div className="max-h-[400px] overflow-y-auto">
      <h4 className=" text-black text-base">Enter details for {title}</h4>
      <form onSubmit={handleSubmit(submitForm)}>
        {fields.map((item, index) => (
          <>
            <div key={index}>
              <p className="text-black">Member {index + 1} details</p>
              <input
                type="text"
                placeholder={`Team Member ${index + 1} Name`}
                {...register(`participants.${index}.name`)}
                className="text-black w-full border rounded-lg p-3"
              />
              <input
                type="text"
                placeholder={`Team Member ${index + 1} Email`}
                {...register(`participants.${index}.personal_email`)}
                className="text-black w-full border rounded-lg p-3"
              />
              <input
                type="text"
                placeholder={`Team Member ${index + 1} Mobile no.`}
                {...register(`participants.${index}.mobile_no`)}
                className="text-black w-full border rounded-lg p-3"
              />
              <input
                type="text"
                placeholder={`Team Member ${index + 1} College roll no.`}
                {...register(`participants.${index}.college_roll`)}
                className="text-black w-full border rounded-lg p-3"
              />
              <input
                type="text"
                placeholder={`Team Member ${index + 1} Year`}
                {...register(`participants.${index}.year`)}
                className="text-black w-full border rounded-lg p-3"
              />
              <input
                type="text"
                placeholder={`Team Member ${index + 1} Department`}
                {...register(`participants.${index}.department`)}
                className="text-black w-full border rounded-lg p-3"
              />
              <button
                className="text-white border-[5px] px-4 py-2 rounded-xl bg-red-700 border-red-400"
                type="button"
                onClick={() => remove(index)}
              >
                Delete
              </button>
              {/* Add more input fields for other details like email, year, etc. */}
            </div>
          </>
        ))}
        <button
          className="text-white border-[5px] px-4 py-2 rounded-xl bg-purple-700 border-purple-400"
          type="button"
          onClick={() => append()}
        >
          Add new Member
        </button>
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

export default Groupform;
