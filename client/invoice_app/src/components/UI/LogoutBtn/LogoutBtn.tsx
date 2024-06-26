import { motion } from "framer-motion";
import { LogoutBtnProps } from "./types";
import { useIsMobile } from "../../../hooks/useIsMobile";

const LogoutBtn = ({ logoutFunc }: LogoutBtnProps) => {
  const isMobile = useIsMobile(600);
  const isTablet = useIsMobile(1024);
  return (
    <motion.div
      initial={{
        bottom: !isMobile && !isTablet ? "2rem" : "1.5rem",
        opacity: 0,
      }}
      animate={{
        bottom: !isMobile && !isTablet ? "4rem" : "1.5rem",
        left: !isMobile && !isTablet ? "" : "-2.5rem",
        opacity: 1,
      }}
      transition={{ duration: 0.3 }}
      className="absolute"
    >
      <button
        className="p-2 bg-white dark:bg-dark_bg rounded-lg hover:text-purple"
        onClick={logoutFunc}
      >
        Logout
      </button>
    </motion.div>
  );
};

export default LogoutBtn;
