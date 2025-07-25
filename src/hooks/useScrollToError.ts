import { useEffect } from "react";
import { type FieldErrors } from "react-hook-form";

export function useScrollToError(errors: FieldErrors) {
  useEffect(() => {
    const firstErrorField = Object.keys(errors)[0];
    if (firstErrorField) {
      const errorElement = document.querySelector(
        `[id="${firstErrorField}Wrapper"]`
      );
      if (errorElement) {
        errorElement.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [errors]);
}
