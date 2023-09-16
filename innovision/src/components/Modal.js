import { Fragment, useContext, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { UserContext } from "../context/User.context";
import Forms from "./Forms";
import Groupform from "./Groupform";
export default function Modal({ modalState1, setModalState1, title }) {
  // const [isFormVisible, setFormVisible] = useState(false);
  const checkMultipleEvent = (str) => {
    const title1 = str.replace(/ /g, "").toLowerCase();
    const ismultipleEvents = /valorant|bgmi|quiztime|hackathon/.test(title1);
    return ismultipleEvents;
  };
  const checkGoogleFormEvent = (str) => {
    const title1 = str.replace(/ /g, "").toLowerCase();
    const isform = /shutterbugs|reellens|article|artwork|poetry/.test(title1);
    return isform;
  };
  //   const [newModalState, setNewModalState] = useState(true);
  const handleCloseModal = () => {
    setModalState1(false);
  };
  // if (checkGoogleFormEvent(title)) {
  //   setFormVisible(true);
  // }
  // const formEvents = [
  //   {
  //     reellens: "https://forms.gle/1hJubb9b2qNGKfBJ8",
  //     shutterbugs: "https://forms.gle/1jCZvET9Kj4QJB919",
  //     article: "https://forms.gle/J7NTXkPZ81jXGvfPA",
  //     artnetwork: "https://forms.gle/RNVQybgAgfBisL9t8",
  //     poetry: "https://forms.gle/ZQ62xYbPREes2UTFA",
  //   },
  // ];
  // console.log(formEvents);
  const cancelButtonRef = useRef(null);
  return (
    <Transition.Root show={modalState1} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 xs:px-0 md:px-8 py-3 overflow-y-auto max-h-screen z-[100000] "
        initialFocus={cancelButtonRef}
        onClose={() => setModalState1(false)}
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
                <div className="bg-white px-4 pb-1 pt-1 sm:p-6 sm:pb-4 bg-[url('./assets/img/footer-bg.png')]">
                  {checkMultipleEvent(title) ? (
                    <Groupform title={title} setModalState1={setModalState1} />
                  ) : (
                    <Forms title={title} setModalState1={setModalState1} />
                  )}
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
