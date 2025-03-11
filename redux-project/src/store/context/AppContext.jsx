import { createContext, useRef } from "react";

export const InputRefContext = createContext();

export default function AppContext({ children }) {
  const inputRef = useRef(null);

  return (
    <InputRefContext.Provider value={inputRef}>
      {children}
    </InputRefContext.Provider>
  );
}
