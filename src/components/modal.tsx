import React, { useRef, useEffect, MutableRefObject } from "react";
import { createPortal } from "react-dom";

interface modal {
  children: React.ReactNode;
}

function Modal({ children }: modal) {
  const elRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById('modal');
    if (!modalRoot || !elRef.current) return; // Null Check
    modalRoot.appendChild(elRef.current);

    return () => {
      if (elRef.current) modalRoot.removeChild(elRef.current); //Checks for null first before cleaning up
    }
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
}

export default Modal;