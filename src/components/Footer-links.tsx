import type { NextPage } from "next";
import Image from "next/image";

export type FooterLinksType = {
  className?: string;
};

const FooterLinks: NextPage<FooterLinksType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[368.3px] flex flex-row items-end justify-start gap-[27.4px] max-w-full text-right text-xs text-gray-100 font-helvetica-neue mq450:flex-wrap mq750:min-w-full mq1050:flex-1 ${className}`}
    >
      <div className="relative leading-[28px] text-center inline-block min-w-[40px]">
        Guides
      </div>
      <div className="relative leading-[28px] inline-block min-w-[74.6px]">
        Terms of Sale
      </div>
      <div className="flex-1 flex flex-col items-end justify-start gap-[232px] min-w-[131px]">
        <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[41px] pr-[38px] relative">
          <div className="flex-1 flex flex-row items-start justify-start gap-4">
            <Image
              className="h-[30px] w-[30px] relative overflow-hidden shrink-0"
              loading="lazy"
              width={30}
              height={30}
              alt=""
              src="/frame-12.svg"
            />
            <Image
              className="h-[30px] w-[30px] relative overflow-hidden shrink-0"
              loading="lazy"
              width={30}
              height={30}
              alt=""
              src="/frame-13.svg"
            />
            <Image
              className="h-[30px] w-[30px] relative overflow-hidden shrink-0"
              loading="lazy"
              width={30}
              height={30}
              alt=""
              src="/frame-14.svg"
            />
          </div>
          <Image
            className="h-full w-[30px] absolute !m-[0] top-[0px] right-[-7.8px] bottom-[0px] max-h-full overflow-hidden shrink-0"
            loading="lazy"
            width={30}
            height={30}
            alt=""
            src="/frame-15.svg"
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[27.7px]">
          <div className="relative leading-[28px] inline-block min-w-[72px]">
            Terms of Use
          </div>
          <div className="flex-1 relative text-2xs leading-[28px] inline-block min-w-[102.2px]">
            Nike Privacy Policy
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
