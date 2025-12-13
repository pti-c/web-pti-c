import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { useCurrentName } from "../state/_Init";
import { Alert } from "../component/Alert";
import { BadWords } from "../../data/BadWords";

const KontakPage = () => {
  /**cache name */
  const name = useCurrentName((s: any) => s.name);

  const [message, setMessage] = useState("");

  const sendTelegram = async (cb: any) => {
    const pesan = `Pesan dari ${name}, masukan dari saya ${message}`;
    await fetch(
      `https://api.telegram.org/bot${
        import.meta.env.VITE_TOKEN
      }/sendMessage?parse_mode=markdown&chat_id=${
        import.meta.env.VITE_CHAT_ID
      }&text=${pesan}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => cb(res))
      .catch((err) => cb(err));
  };
  return (
    <MainLayout>
      <div className="pt-20 flex justify-center items-center">
        {" "}
        <form className=" mx-auto relative p-4 text-white max-w-sm md:max-w-lg w-full">
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block mb-2.5 text-sm font-medium text-heading"
            >
              Nama
            </label>
            <input
              type="text"
              id="name"
              value={name}
              disabled
              required
              className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand  w-full px-3 py-2.5 shadow-xs placeholder:text-body placeholder:text-xs"
              placeholder="nama beranda..."
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="text"
              className="block mb-2.5 text-sm font-medium text-heading"
            >
              Pesan
            </label>
            <textarea
              id="message"
              rows={4}
              className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand  w-full p-3.5 shadow-xs placeholder:text-body placeholder:text-xs"
              placeholder="Tulis pesanmu disini..."
              value={message}
              onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
                setMessage(event.target.value)
              }
            ></textarea>
          </div>
          <button
            style={{ backgroundSize: "300% 300%" }}
            type="button"
            onClick={(e) => {
              e.preventDefault();
              if (message.trim() === "") {
                Alert("Pesan Harus Diisi");
                return;
              } else if (BadWords.includes(message.trim().toLowerCase())) {
                Alert("Pesan mengandung kata-kata kasar.");
                return;
              }
              sendTelegram((cb: any) => {
                if (cb.status === 200) {
                  Alert("Berhasil Mengirim Pesan.", "success");
                  setMessage("");
                } else {
                  Alert("Gagal Terkoneksi.");
                }
              });
            }}
            className="cursor-pointer rounded-lg mt-4 px-4 py-2 bg-white text-black
                border border-white drop-shadow-white shadow-[0_0_12px_#00eaff] text-outline w-full uppercase"
          >
            Kirim
          </button>
        </form>
      </div>
    </MainLayout>
  );
};

export default KontakPage;
