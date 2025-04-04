import React from "react";
import { toast, ToastContainer } from "react-toastify";

export const showToast = (message, type="info") => {
    toast(message, {type:type});
}

export const ToastManager = () => {
  <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick={true}
    rtl={false}
    pauseOnFocusLoss={false}
    draggable={true}
    pauseOnHover={false}
  />;
};
