import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

// Use a string path instead of importing the component
const AllProductsPage = "/allproductspage";
const ContactUsPage = "/Contact-Us";
const LoginPage = "/sign-in";
const JoinUsPage = "/join-us";


export type FrameType = {
  className?: string;
};

const Frame: NextPage<FrameType> = ({ className = "" }) => {
  return (
    <header
      className={`h-[36px] w-[1440px] flex flex-row items-start justify-start py-[0px] pl-[48px] pr-[38px] box-border gap-[1057.2px] ${className}`}
    >
      <div className="h-[30px] w-[24px] flex flex-col items-start justify-start pt-[6px] px-[0px] pb-[0px] box-border">
        <Image
          className="w-[24px] h-[24px] relative overflow-hidden shrink-0"
          loading="lazy"
          width={24}
          height={24}
          alt=""
          src="/frame-4.svg"
        />
      </div>
      <nav className="m-[0px] h-[36px] w-[272.8px] flex flex-row items-start justify-start text-left text-2xs text-gray-300 font-helvetica-neue">
        <div className="h-[35px] w-[98.5px] flex flex-col items-start justify-start pt-[1px] px-[0px] pb-[0px] box-border">
          <div className="w-[98.5px] h-[34px] flex flex-row items-start justify-start py-[10px] pl-[12px] pr-[6.1px] box-border gap-[15.4px]">
            <div className="h-[14px] w-[63px] relative leading-[14px] font-medium flex items-center shrink-0">
              <Link href={AllProductsPage} className="no-underline"> Find a Store</Link>
            </div>
            <div className="h-[14px] w-[4px] relative text-xs leading-[14px] flex items-center shrink-0">
              |
            </div>
          </div>
        </div>
        <div className="h-[36px] w-[51.8px] flex flex-row items-start justify-start py-[11px] pl-[8px] pr-[4.1px] box-border gap-[12.7px]">
          <div className="h-[14px] w-[25px] relative leading-[14px] font-medium flex items-center shrink-0">
    <Link href={ContactUsPage} className="no-underline"> Help</Link>       
          </div>
          <div className="h-[14px] w-[4px] relative text-xs leading-[14px] flex items-center shrink-0">
            |
          </div>
        </div>
        <nav className="m-[0px] h-[36px] w-[122.5px] flex flex-row items-start justify-start py-[11px] px-[8px] box-border gap-[12.6px] text-left text-2xs text-gray-300 font-helvetica-neue">
          <div className="h-[14px] w-[40px] relative leading-[14px] font-medium flex items-center shrink-0">
         <Link href={JoinUsPage} className="no-underline"> Join Us</Link>  
          </div>
          <div className="h-[14px] w-[4px] relative text-xs leading-[14px] flex items-center shrink-0">
            |
          </div>
          <div className="h-[14px] w-[37px] relative leading-[14px] font-medium text-center flex items-center justify-center shrink-0">
       <Link href={LoginPage} className="no-underline"> Sign In</Link>    
          </div>
        </nav>
      </nav>
    </header>
  );
};

export default Frame;
