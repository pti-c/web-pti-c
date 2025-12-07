import { tw } from "../utils/Tw";

const Btn = ({ children, ...props }: any) => {
  return (
    <button
      {...props}
      type="button"
      className={tw(
        `bg-[#00eaff] px-4 py-2 rounded-md border border-black`,
        props.className
      )}
    >
      {children}
    </button>
  );
};

export default Btn;
