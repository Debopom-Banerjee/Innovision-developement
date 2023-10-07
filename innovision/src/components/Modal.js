import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";

import Forms from "./Forms";
import Groupform from "./Groupform";
const formEvents = [
  {
    reellens: "https://forms.gle/1hJubb9b2qNGKfBJ8",
    shutterbugs: "https://forms.gle/1jCZvET9Kj4QJB919",
    article: "https://forms.gle/J7NTXkPZ81jXGvfPA",
    artwork: "https://forms.gle/RNVQybgAgfBisL9t8",
    poetry: "https://forms.gle/ZQ62xYbPREes2UTFA",
  },
];
export default function Modal({ modalState1, setModalState1, title, hasForm }) {
  // const [isFormVisible, setFormVisible] = useState(false);
  const checkMultipleEvent = (str) => {
    const title1 = str.replace(/ /g, "").toLowerCase();
    const ismultipleEvents = /valorant|bgmi|quiztime/.test(title1);
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
  const cancelButtonRef = useRef(null);
  const formTitle = title.replace(/ /g, "").toLowerCase();
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
                  {checkMultipleEvent(title) && (
                    <Groupform title={title} setModalState1={setModalState1} />
                  )}
                  {!hasForm && !checkMultipleEvent(title) && (
                    <Forms title={title} setModalState1={setModalState1} />
                  )}
                  {hasForm && formTitle === "reellens" && (
                    <>
                      <h3 className="text-3xl mb-1 text-purple-500 p-3 uppercase">
                        Register for {title}
                      </h3>
                      <a
                        href={formEvents[0].reellens}
                        target="_blank"
                        className="mt-3 inline-flex justify-center rounded-md  bg-gradient-to-r from-violet-500 to-fuchsia-500 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm ring-1 ring-inset focus:from-purple-800 focus:to-blue-950  sm:mt-0 sm:w-auto absolute bottom-1 right-32 w-auto "
                        rel="noreferrer"
                      >
                        Register
                      </a>
                    </>
                  )}
                  {hasForm && formTitle === "shutterbugs" && (
                    <>
                      <h3 className="text-3xl mb-1 text-purple-500 p-3 uppercase">
                        Register for {title}
                      </h3>
                      <a
                        href={formEvents[0].shutterbugs}
                        target="_blank"
                        className="mt-3 inline-flex justify-center rounded-md  bg-gradient-to-r from-violet-500 to-fuchsia-500 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm ring-1 ring-inset focus:from-purple-800 focus:to-blue-950  sm:mt-0 sm:w-auto absolute bottom-1 right-32 w-auto "
                        rel="noreferrer"
                      >
                        Register
                      </a>
                    </>
                  )}
                  {hasForm && formTitle === "article" && (
                    <>
                      <h3 className="text-3xl mb-1 text-purple-500 p-3 uppercase">
                        Register for {title}
                      </h3>
                      <a
                        href={formEvents[0].article}
                        target="_blank"
                        className="mt-3 inline-flex justify-center rounded-md  bg-gradient-to-r from-violet-500 to-fuchsia-500 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm ring-1 ring-inset focus:from-purple-800 focus:to-blue-950  sm:mt-0 sm:w-auto absolute bottom-1 right-32 w-auto "
                        rel="noreferrer"
                      >
                        Register
                      </a>
                    </>
                  )}
                  {hasForm && formTitle === "artwork" && (
                    <>
                      <h3 className="text-3xl mb-1 text-purple-500 p-3 uppercase">
                        Register for {title}
                      </h3>
                      <a
                        href={formEvents[0].artwork}
                        target="_blank"
                        className="mt-3 inline-flex justify-center rounded-md  bg-gradient-to-r from-violet-500 to-fuchsia-500 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm ring-1 ring-inset focus:from-purple-800 focus:to-blue-950  sm:mt-0 sm:w-auto absolute bottom-1 right-32 w-auto "
                        rel="noreferrer"
                      >
                        Register
                      </a>
                    </>
                  )}
                  {hasForm && formTitle === "poetry" && (
                    <>
                      <h3 className="text-3xl mb-1 text-purple-500 p-3 uppercase">
                        Register for {title}
                      </h3>
                      <a
                        href={formEvents[0].poetry}
                        target="_blank"
                        className="mt-3 inline-flex justify-center rounded-md  bg-gradient-to-r from-violet-500 to-fuchsia-500 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm ring-1 ring-inset focus:from-purple-800 focus:to-blue-950  sm:mt-0 sm:w-auto absolute bottom-1 right-32 w-auto "
                        rel="noreferrer"
                      >
                        Register
                      </a>
                    </>
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
