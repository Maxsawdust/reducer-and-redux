import { useContext } from "react";
import { InputRefContext } from "../context/AppContext";

/* creating a custom hook to use the InputRefContext while checking that it's 
   called in an appropriate provider */
export default function useInputRef() {
  const context = useContext(InputRefContext);

  if (!context) {
    throw new Error("useInputRef must be used within AppContext");
  }
  return context;
}
