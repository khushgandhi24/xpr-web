import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="relative z-30 py-8 border-b-2 border-primary px-12 flex items-center justify-between">
      <Link href="/">
        <Image
          className="cursor-pointer"
          src="/Xpr_Cloud_Color.png"
          alt="Xpresion Logo"
          width={160}
          height={80}
          priority={true}
        />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex items-center">
        <Link href="/module">Modules</Link>
        <Link href="/about">About</Link>
        <Link href="/news">News</Link>
        <a href="https://www.xpresion.in/contact.html">Contact</a>
        <Button
          title={"Book A Demo"}
          bgColor={"bg-primary"}
          textColor={"text-onPrimary"}
          borderColor={"border-primary"}
        />
      </ul>
      <Image
        className="inline-block cursor-pointer lg:hidden"
        src="menu.svg"
        width={24}
        height={24}
        alt="Menu Icon"
      />
    </nav>
  );
};

export default Navbar;
