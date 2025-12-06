import Navbar from "../layouts/Navbar";
import tim from "../../data/tim.json";
import type { TypeTim, TypeTimMap } from "../Interface/_type";
import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { useForced } from "../state/_Init";

const TimPage = () => {
  const step = useForced((s: any) => s.step);
  const setStep = useForced((s: any) => s.setStep);
  const forcedRef = useRef(null);

  const [pos, setPos] = useState({ x: 0, y: 0 });

  const moveButton = () => {
    const randomX = Math.random() * 200 - 160; // -160 → 160 px
    const randomY = Math.random() * 200 - 160;

    setPos({ x: randomX, y: randomY });
  };

  let message = "";

  if (step === 1) {
    message =
      "Wahh Ada pengunjung nih... 🤗, Aku mau tanya nih... (●'◡'●),  apakah kamu setuju jika seluruh member pti-c 2025 pintar dan baik hati?";
  } else if (step === 2) {
    message = "Terima Kasih atas Konfirmasi nya 😍";
  } else if (step === 3) {
    message = "";
  }
  /** handle typed */
  useEffect(() => {
    const typed = new Typed(forcedRef.current, {
      strings: [message],
      loop: false,
      backDelay: 1000,
      typeSpeed: 70,
      showCursor: false,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, [forcedRef.current, message]);
  return (
    <div className="w-full h-screen pt-10">
      <Navbar />
      <div className="pt-20 pb-4">
        {/* forcedRef */}
        <span ref={forcedRef} className={``}></span>
        {step === 1 && (
          <div className="fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-50">
            <div className="flex flex-col justify-between min-w-xs md:min-w-xl md:max-w-xl bg-white rounded-md relative p-4">
              <span
                ref={forcedRef}
                className="text-xs md:text-base block max-w-full min-h-20 md:min-h-16"
              ></span>
              <div className="w-full min-h-32 relative z-10">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="absolute bottom-0 left-0 bg-[#00eaff] px-4 py-2 rounded-md shadow-[0_0_12px_#00eaff]"
                >
                  Ya
                </button>
                <button
                  type="button"
                  className="absolute bottom-0 right-0 bg-[#00eaff] px-4 py-2 rounded-md shadow-[0_0_12px_#00eaff]"
                  onClick={moveButton}
                  style={{
                    transform: `translate(${pos.x}px, ${pos.y}px)`,
                    transition: "0.2s ease",
                  }}
                >
                  Tidak
                </button>
              </div>
              <img
                src="/neco-melas.png"
                className="w-24 sm:w-32 relative left-1/2 -translate-x-1/2"
                alt=""
              />
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-50">
            <div className="flex flex-col justify-between min-w-xs md:min-w-xl md:max-w-xl bg-white rounded-md relative p-4">
              <span
                ref={forcedRef}
                className="text-base block max-w-full min-h-20 md:min-h-16"
              ></span>
              <div className="w-full flex justify-between items-center">
                <img src="/neco-resek.png" className="w-24 sm:w-32" alt="" />
                <button
                  onClick={() => setStep(3)}
                  className="bg-[#00eaff] px-4 py-2 rounded-md shadow-[0_0_12px_#00eaff] "
                >
                  Lanjut
                </button>
              </div>
            </div>
          </div>
        )}
        <div
          className={`${step === 1 && "blur-2xl"} ${step === 2 && "blur-md"} ${
            step === 3 && "blur-none"
          } flex flex-1 flex-wrap justify-center gap-4 `}
        >
          {(tim as TypeTim).data.map((t: TypeTimMap) => (
            <div
              key={t.id}
              className=" block max-w-xs rounded-base shadow-xs text-white"
            >
              {/* <div className="bg-sh absolute"></div> */}
              <div className="border">
                <a href="#">
                  <img
                    className="rounded-t-base w-full"
                    src={`${t.foto}`}
                    alt=""
                  />
                </a>
                <div className="p-6 text-center">
                  <a href="#">
                    <h5 className="mt-3 mb-6 text-xs sm:text-xl md:text-2xl font-semibold tracking-tight text-heading">
                      {t.nama}
                    </h5>
                  </a>

                  <a
                    href="#"
                    className="inline-flex items-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
                  >
                    Read more
                    {/* <span className="text-2xl animate-lambai">👋</span> */}
                    <svg
                      className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 12H5m14 0-4 4m4-4-4-4"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimPage;
