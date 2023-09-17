import { Fragment, useContext, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
export default function ModalRules({
  modalRules,
  setModalRules,
  title,
  info,
  rules,
  theme,
  note,
  coordinators,
}) {
  const handleCloseModal = () => {
    setModalRules(false);
  };

  const cancelButtonRef = useRef(null);
  return (
    <Transition.Root show={modalRules} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 xs:px-0 md:px-8 py-3 overflow-y-auto max-h-screen z-[100000] "
        initialFocus={cancelButtonRef}
        onClose={() => setModalRules(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-black/75 transition-opacity" />
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
                <div className="overflow-y-auto max-h-[500px] bg-white px-4 pt-1 sm:p-6 sm:pb-4 bg-[url('./assets/img/footer-bg.png')]">
                  <h3 className="text-3xl mb-1 text-purple-500 p-3 uppercase">
                    Rules for {title}
                  </h3>
                  <p className="p-2">
                    {info &&
                      info.split("\n").map((subStr, i) => {
                        return (
                          <Fragment key={i}>
                            <span className="py-1.5">{subStr}</span>
                            <br />
                          </Fragment>
                        );
                      })}
                  </p>
                  <p className="p-2">
                    {rules &&
                      rules.split("\n").map((subStr, i) => {
                        return (
                          <Fragment key={i}>
                            <span className="py-1.5">{subStr}</span>
                            <br />
                          </Fragment>
                        );
                      })}
                  </p>
                  {theme &&
                    theme.split("\n").map((subStr, i) => {
                      return (
                        <Fragment key={i}>
                          <span className="py-1.5">{subStr}</span>
                          <br />
                        </Fragment>
                      );
                    })}
                  {note &&
                    note.split("\n").map((subStr, i) => {
                      return (
                        <Fragment key={i}>
                          <span className="py-1.5">{subStr}</span>
                          <br />
                        </Fragment>
                      );
                    })}
                  <p className="p-2">
                    {coordinators &&
                      coordinators.split("\n").map((subStr, i) => {
                        return (
                          <Fragment key={i}>
                            <span className="py-1.5">{subStr}</span>
                            <br />
                          </Fragment>
                        );
                      })}
                  </p>
                </div>
                <div className="bg-[url('./assets/img/footer-bg.png')] px-4 py-1 pt-1.5 h-10 flex flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="mt-0 inline-flex w-auto justify-center rounded-md bg-red-700 px-3 py-2 text-sm font-semibold text-white-600 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-red-300"
                    onClick={handleCloseModal}
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
  );
}
