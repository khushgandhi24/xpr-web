"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import { motion } from "framer-motion";

const Navbar = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative z-30 py-8 border-b-4 border-primary px-12 flex items-center justify-between">
      <Link href="/">
        <Image
          className="cursor-pointer"
          src="/Xpr_Red.png"
          alt="Xpresion Logo"
          width={160}
          height={80}
          priority={true}
          onClick={isOpen ? handleClick : null}
        />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex items-center">
        <Link
          className={`${
            pathname === "/"
              ? "underline decoration-2 decoration-error underline-offset-2 font-semibold"
              : ""
          }`}
          href="/"
        >
          {" "}
          Home{" "}
        </Link>
        <Link
          className={`${
            pathname === "/module"
              ? "underline decoration-2 decoration-error underline-offset-2 font-semibold"
              : ""
          }`}
          href="/module"
        >
          Modules
        </Link>
        <Link
          className={`${
            pathname === "/about"
              ? "underline decoration-2 decoration-error underline-offset-2 font-semibold"
              : ""
          }`}
          href="/about"
        >
          About
        </Link>
        <Link
          className={`${
            pathname === "/news"
              ? "underline decoration-2 decoration-error underline-offset-2 font-semibold"
              : ""
          }`}
          href="/news"
        >
          News
        </Link>
        <a target="_blank" href="https://www.xpresion.in/contact.html">
          Contact
        </a>
        <Button
          title={"Book A Demo"}
          bgColor={"bg-primary"}
          textColor={"text-onPrimary"}
          borderColor={"border-primary"}
          className={
            "hover:bg-gradient-to-b from-surface to-primaryContainer hover:text-primary"
          }
        />
      </ul>
      <button
        className="flex flex-col items-center justify-center lg:hidden"
        onClick={handleClick}
      >
        <span
          className={`bg-onPrimaryContainer transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-onPrimaryContainer transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-onPrimaryContainer transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1, x: "-50%", y: "-80%" }}
          transition={{ type: "spring", duration: 0.75 }}
          className="min-w-[80vw] rounded-xl border-4 border-outline backdrop-blur-md flex flex-col justify-between items-center absolute top-[27rem] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-primaryContainer py-12"
        >
          <nav className="flex items-center flex-col text-lg justify-around gap-6 text-onPrimaryContainer font-semibold">
            <Link
              href="/"
              onClick={handleClick}
              className={`${
                pathname === "/"
                  ? "underline decoration-2 decoration-error underline-offset-4 font-semibold"
                  : ""
              }`}
            >
              Home
            </Link>
            <Link
              href="/module"
              onClick={handleClick}
              className={`${
                pathname === "/module"
                  ? "underline decoration-2 decoration-error underline-offset-4 font-semibold"
                  : ""
              }`}
            >
              Modules
            </Link>
            <Link
              href="/about"
              onClick={handleClick}
              className={`${
                pathname === "/about"
                  ? "underline decoration-2 decoration-error underline-offset-4 font-semibold"
                  : ""
              }`}
            >
              About
            </Link>
            <Link
              href="/news"
              onClick={handleClick}
              className={`${
                pathname === "/news"
                  ? "underline decoration-2 decoration-error underline-offset-4 font-semibold"
                  : ""
              }`}
            >
              News
            </Link>
            <a href="https://www.xpresion.in/contact.html">Contact</a>
          </nav>
          <Button
            title={"Book A Demo"}
            bgColor={"bg-surface"}
            textColor={"text-onSurface"}
            borderColor={"border-onPrimaryContainer"}
            className={"mt-6"}
          />
        </motion.div>
      ) : null}
    </nav>
  );
};

export default Navbar;
