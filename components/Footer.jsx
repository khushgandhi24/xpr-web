import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer
      className="lg:flex lg:items-center lg:justify-between relative z-30 lg:py-8 lg:px-12
      flex-row py-4"
    >
      <div className="flex-row">
        <h3 className="text-center italic font-semibold pb-1">Powered By</h3>
        <a href="https://busisoft.in" target="_blank">
          <Image
            src="/Busisoft.png"
            width={160}
            height={120}
            alt="Busisoft Logo"
            priority={true}
            className="mx-auto"
          />
        </a>
      </div>
      <div className="lg:flex gap-6 font-semibold text-center flex-row">
        <h3>Email: info@busisoft.in</h3>
        <h3>Phone: +919998979695</h3>
      </div>
      <h2 className="font-semibold text-center">
        {new Date().getFullYear()} &copy; All Rights Reserved.
      </h2>
    </footer>
  );
};

export default Footer;
