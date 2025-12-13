import Swal from "sweetalert2";
type SwalIcon = "success" | "error" | "warning" | "info" | "question";
export const Alert = (text: string, icon: SwalIcon = "error") => {
  Swal.fire({
    icon: icon,
    title: icon,
    text: text,
    showClass: {
      popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
    },
    hideClass: {
      popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
    },
  });
};
