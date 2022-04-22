import { createContext, useCallback, useContext, useState } from "react";
import { Alert, Snackbar } from "@mui/material";

export type ToastType = "success" | "warning" | "info" | "error";

const ToastContext = createContext<{
  toggleToast: (type: ToastType, text: string, duration?: number) => void;
}>({
  toggleToast: () => {},
});

const ToastProvider: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  const [toastOpen, setToastOpen] = useState(false);
  const [toastType, setToastType] = useState<ToastType>("info");
  const [toastText, setToastText] = useState("");
  const [toastDuration, setToastDuration] = useState(3000);

  const handleToast = useCallback(
    (type: ToastType, text: string, duration?: number) => {
      setToastType(type);
      if (text) {
        setToastText(text);
      }
      setToastDuration(
        duration ??
          (type === "success" || type === "info"
            ? 3000
            : type === "warning"
            ? 4000
            : 5000)
      );
      setToastOpen(text ? true : false);
    },
    []
  );

  const handleClose = () => {
    handleToast(toastType, "");
  };

  return (
    <ToastContext.Provider
      value={{
        toggleToast: handleToast,
      }}
    >
      {children}
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={toastOpen}
        autoHideDuration={toastDuration}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={toastType}>
          {toastText}
        </Alert>
      </Snackbar>
    </ToastContext.Provider>
  );
};

const useToast = () => {
  const context = useContext(ToastContext);
  return context.toggleToast;
};

export { ToastProvider, useToast };
