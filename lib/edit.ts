import { useEffect } from "react";

export const useBeforeUnloadAlert = (enabled: boolean) => {
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "";
    };

    if (enabled) {
      window.addEventListener("beforeunload", handleBeforeUnload);
    }

    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [enabled]);
};
