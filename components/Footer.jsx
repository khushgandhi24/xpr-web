import Image from "next/image";

const Footer = () => {
  return (
    <footer
      className="lg:flex lg:items-center lg:flex-row lg:justify-between relative z-30 lg:px-12 border-t-4 bg-gradient-to-b from-surface to-primaryContainer border-primary
      flex flex-col py-4 gap-4"
    >
      <div className="flex-row">
        <h3 className="text-center italic font-semibold pl-11 font-slab">
          powered by
        </h3>
        <a href="https://busisoft.in" target="_blank">
          <Image
            src="./Busisoft.png"
            width={160}
            height={120}
            alt="Busisoft Logo"
            className="mx-auto"
          />
        </a>
      </div>
      <div className="lg:flex lg:flex-row text-onPrimaryContainer font-sans lg:pl-20 gap-4 font-semibold text-center text-md flex flex-col">
        <h3>Email: info@busisoft.in</h3>
        <h3>Phone: +919998979695</h3>
      </div>
      <h2 className="font-semibold font-sans text-center text-onPrimaryContainer">
        {new Date().getFullYear()} &copy; All Rights Reserved.
      </h2>
    </footer>
  );
};

export default Footer;
