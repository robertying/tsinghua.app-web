import React, { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";

const Portal: React.FC<{ parentId: string }> = ({ children, parentId }) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.getElementById(parentId);
    setMounted(true);
  }, [parentId]);

  return mounted ? createPortal(children, ref.current!) : null;
};

export default Portal;
