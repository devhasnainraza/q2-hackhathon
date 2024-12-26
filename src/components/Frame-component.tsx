import type { NextPage } from "next";
import Image from "next/image";
import Frame from "./frame";
import Link from "next/link";
const CartPage = "/cartpage";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start pt-[0px] px-[0px] pb-[24px] box-border max-w-full text-center text-mini text-gray-300 font-helvetica-neue ${className}`}
    >
      <div className="self-stretch h-[96px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-white border-black border-[1px] border-solid box-border max-w-full">
        <div className="absolute top-[57px] left-[500.1px] leading-[24px] font-medium flex items-center justify-center w-[116.8px] h-[24px] min-w-[116.8px]">{`New & Featured`}</div>
        <div className="absolute top-[57px] left-[639.7px] leading-[24px] font-medium flex items-center justify-center w-[32.3px] h-[24px] min-w-[32.3px]">
          Men
        </div>
        <div className="absolute top-[57px] left-[694.8px] leading-[24px] font-medium flex items-center justify-center w-[56px] h-[24px] min-w-[56px]">
          Women
        </div>
        <div className="absolute top-[57px] left-[773.6px] leading-[24px] font-medium flex items-center justify-center w-[32.3px] h-[24px] min-w-[32.3px]">
          Kids
        </div>
        <div className="absolute top-[57px] left-[828.8px] text-base leading-[24px] font-medium flex items-center justify-center w-[33.2px] h-[24px] min-w-[33.2px]">
          Sale
        </div>
        <div className="absolute top-[57px] left-[884.8px] text-base leading-[24px] font-medium flex items-center justify-center w-[56.3px] h-[24px] min-w-[56.3px]">
          SNKRS
        </div>
       <div className="absolute top-[46px] left-[1118px] rounded-81xl bg-whitesmoke w-[180px] flex flex-row items-start justify-start p-[2px] box-border gap-[6px] text-left text-lightgray">
          <div className="rounded-81xl overflow-hidden flex flex-row items-start justify-start py-[6px] px-[8px] z-[1]">
            <Image
              className="h-[24px] w-[24px] relative overflow-hidden shrink-0"
              loading="lazy"
              width={24}
              height={24}
              alt=""
              src="/frame.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-start pt-[9px] px-[0px] pb-[0px]">
            <div className="relative font-medium inline-block min-w-[51.9px]">
              Search
            </div>
          </div>
        </div>
        <div className="absolute top-[48px] left-[1318px] rounded-81xl w-[36px] h-[36px] overflow-hidden flex flex-row items-start justify-start p-[6px] box-border">
          <Image
            className="h-[24px] w-[24px] relative overflow-hidden shrink-0"
            loading="lazy"
            width={24}
            height={24}
            alt=""
            src="/frame-1.svg"
          />
        </div>
       <Link href={CartPage} className="no-underline"> <div className="absolute top-[48px] left-[1366px] rounded-81xl w-[36px] h-[36px] overflow-hidden flex flex-row items-start justify-start p-[6px] box-border">
          <Image
            className="h-[24px] w-[24px] relative overflow-hidden shrink-0"
            width={24}
            height={24}
            alt=""
            src="/frame-2.svg"
          />
        </div></Link>
        <Image
          className="absolute top-[27.3px] left-[38.3px] w-[78.5px] h-[78.5px] overflow-hidden"
          width={79}
          height={79}
          alt=""
          src="/frame-3.svg"
        />
        <div className="absolute w-full top-[0px] right-[0px] left-[0px] bg-whitesmoke flex flex-row items-start justify-start max-w-full z-[1]">
          <Frame />
        </div>
      </div>
      <div className="self-stretch shadow-[0px_-1px_0px_#e5e5e5_inset] bg-whitesmoke overflow-hidden flex flex-col items-end justify-start pt-[9px] px-[569px] pb-[5px] gap-[3px] mq450:pl-[20px] mq450:pr-[20px] mq450:box-border mq750:pl-[284px] mq750:pr-[284px] mq750:box-border">
        <div className="self-stretch flex flex-row items-start justify-end py-[0px] pl-[99px] pr-[97px] mq450:pl-[20px] mq450:pr-[20px] mq450:box-border">
          <div className="flex-1 relative leading-[16px] font-medium">
            Hello Nike App
          </div>
        </div>
        <div className="self-stretch relative text-2xs leading-[24px]">
          <span>{`Download the app to access everything Nike. `}</span>
          <span className="[text-decoration:underline] font-medium">
            Get Your Great
          </span>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
