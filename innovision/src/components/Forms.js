import React from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// import { collection, addDoc } from "firebase/firestore";
// import { db } from "../../Config/Firebase";

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

function Forms() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div>
      <div className="col mb-4">
        <div className="card shadow-sm">
          <div className="card-body d-flex flex-column align-items-center">
            <p className="card-text">
              <h4>
                {" "}
                Click the button below to add club members details in the member
                section
              </h4>
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  data-bs-toggle="modal"
                  data-bs-target="#AddMember"
                >
                  Add Member Details
                </button>
                {/* <!-- Modal --> */}
                <div
                  className="modal fade"
                  id="AddMember"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabindex="-1"
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1
                          className="modal-title fs-5"
                          id="staticBackdropLabel"
                        >
                          RCCTechz Member Information Collection
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
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
                          <div className="form-floating mt-3">
                            <input
                              type="text"
                              className="form-control"
                              id="floatingInput"
                              placeholder="name@example.com"
                              {...register("name")}
                            />
                            <label htmlFor="floatingInput">Full Name</label>
                            <p>{errors.name?.message}</p>
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forms;
