import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const SettingButton = styled.button``;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const overlay = {
  hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
  visible: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
  exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
};

const Box = styled(motion.div)`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  color: black;
  height: 200px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

export default function Setting() {
  const [showSettings, setShowSettings] = useState(false);
  const toggleSettings = () => {
    setShowSettings((prev) => !prev);
  };

  return (
    <>
      <SettingButton onClick={toggleSettings}>설정</SettingButton>
      {showSettings && (
        <Overlay
          onClick={toggleSettings}
          variants={overlay}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <Box style={{ width: 400, height: 200 }}>구현 예정입니다.</Box>
        </Overlay>
      )}
    </>
  );
}
