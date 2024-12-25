"use client";

import { motion } from "framer-motion";
import styles from "@/components/Header/Header.module.scss";
import GitHub from "@/svg/Github";
import Link from "next/link";

const Header = () => {
  return (
    <header className={`container ${styles.nav}`}>
      {/* <motion.div
        className="rounded-full bg-indigo-200 px-3 w-custom h-[80px]"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      ></motion.div> */}
      <Link href="/">
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8, type: "tween" }}
          className={styles.logoName}
        >
          SYED_QADER
        </motion.p>
      </Link>

      <motion.ul
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8, type: "tween" }}
        className={styles.navListParent}
      >
        {/* <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li> */}
        <li>
          <a target="_blank" href="#" rel="noreferrer">
            <GitHub />
          </a>
        </li>
      </motion.ul>
    </header>
  );
};
export default Header;
