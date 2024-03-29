import React, { ReactNode } from "react";
import { createPortal } from "react-dom";

import styled from "styled-components";
import { motion } from "framer-motion";

interface OverlayProps {
  children: ReactNode;
  hideOverlay: () => void;
}
const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const Overlay = ({ children, hideOverlay }: OverlayProps) => {
  return createPortal(
    <Container
      onClick={hideOverlay}
      transition={{ type: "just" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {children}
    </Container>,
    document.getElementById("overlay")!
  );
};
