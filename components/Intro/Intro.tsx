"use client";

import styles from "@/components/Intro/Intro.module.scss";
import { motion } from "framer-motion";
import ArrowDown from "@/svg/ArrowDown";
import Link from "next/link";
import Header from "../Header/Header";

const Intro = () => {
  return (
    <main className={`container ${styles.section}`}>
      <Header />
      <div className={styles.new__container}>
        <div className={styles.head__details}>
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5, type: "tween" }}
            className={styles.head_name}
          >
            <span className={styles.head_name_MainText}>Syed_Qader</span>
            <span className={styles.head_name_OutlineText}>Syed Qader</span>
            <p className={styles.head_desc}>
              Experienced Developer, delivering solutions using React, NextJs,
              TypeScript, Javascript, Firebase, and MongoDB.
            </p>
          </motion.h3>
          <div className={styles.arrowDownDiv}>
            <Link href="/#projects">
              <ArrowDown />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Intro;
