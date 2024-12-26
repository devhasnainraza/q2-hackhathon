import type { NextPage } from "next";
import Image from "next/image";
import ProductImages from "./Product-images";

export type ContentType = {
  className?: string;
};

const Content: NextPage<ContentType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start relative max-w-full text-left text-mini text-gray-300 font-helvetica-neue ${className}`}
    >
      <Image
        className="h-[48px] w-[48px] absolute !m-[0] top-[304px] right-[47.6px] rounded-[24px]"
        loading="lazy"
        width={48}
        height={48}
        alt=""
        src="/frame-5.svg"
      />
      <div className="flex-1 flex flex-col items-start justify-start pt-[0px] px-[0px] pb-[24px] box-border gap-[13px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-center pt-[0px] pb-[62px] pl-[20px] pr-[22px] box-border max-w-full text-center">
          <div className="flex flex-col items-start justify-start gap-[30px] max-w-full">
            <div className="self-stretch flex flex-col items-end justify-start gap-[24px]">
              <div className="self-stretch flex flex-col items-end justify-start gap-[4px]">
                <div className="self-stretch flex flex-row items-start justify-end py-[0px] pl-[252px] pr-[251px]">
                  <div className="flex-1 relative leading-[24px] font-medium inline-block min-w-[71px]">
                    First Look
                  </div>
                </div>
                <h1 className="m-[0px] self-stretch relative text-37xl leading-[60px] uppercase font-medium font-[inherit]">
                  Nike Air Max Pulse
                </h1>
              </div>
              <div className="flex flex-row items-start justify-end py-[0px] pl-[32px] pr-[30px]">
                <div className="relative leading-[24px]">
                  <p className="m-[0px]">
                    Extreme comfort. Hyper durable. Max volume. Introducing the
                    Air Max Pulse
                  </p>
                  <p className="m-[0px]">
                    —designed to push you past your limits and help you go to
                    the max.
                  </p>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center py-[0px] pl-[20px] pr-[25px] text-white">
              <div className="flex flex-row items-start justify-start gap-[6px]">
                <div className="rounded-11xl bg-gray-300 overflow-hidden flex flex-row items-start justify-start py-[7.5px] px-[21px]">
                  <div className="flex-1 relative leading-[24px] font-medium inline-block min-w-[68px]">
                    Notify Me
                  </div>
                </div>
                <div className="flex-1 rounded-11xl bg-gray-300 overflow-hidden flex flex-row items-start justify-start py-[7.5px] px-[21px]">
                  <div className="flex-1 relative leading-[24px] font-medium inline-block min-w-[95px]">
                    Shop Air Max
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1380px] flex flex-row items-start justify-start py-[0px] px-[48px] box-border max-w-full text-3xl lg:pl-[24px] lg:pr-[24px] lg:box-border">
          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px]">
            <div className="w-[161.6px] flex flex-col items-start justify-start pt-[10px] px-[0px] pb-[0px] box-border">
              <h3 className="m-[0px] self-stretch relative text-inherit leading-[28px] font-medium font-[inherit]">
                Best of Air Max
              </h3>
            </div>
            <div className="flex flex-row items-start justify-start gap-[12.4px] text-mini">
              <div className="flex flex-col items-start justify-start pt-[12px] px-[0px] pb-[0px]">
                <div className="relative leading-[24px] font-medium inline-block min-w-[38px]">
                  Shop
                </div>
              </div>
              <Image
                className="h-[48px] w-[48px] relative rounded-[24px]"
                loading="lazy"
                width={48}
                height={48}
                alt=""
                src="/frame-6.svg"
              />
            </div>
          </div>
        </div>
        <div className="overflow-x-auto flex flex-row items-start justify-start pt-[0px] pb-[30px] pl-[48px] pr-[0px] box-border gap-[12px] max-w-full">
          <ProductImages
            image="/image-1@2x.png"
            nikeAirMaxPulse="Nike Air Max Pulse"
            womensShoes="Women's Shoes"
            prop="₹ 13 995"
          />
          <ProductImages
            image="/image-2@2x.png"
            nikeAirMaxPulse="Nike Air Max Pulse"
            womensShoes="Men's Shoes"
            womensShoesWidth="unset"
            prop="₹ 13 995"
          />
          <ProductImages
            image="/image-3@2x.png"
            nikeAirMaxPulse="Nike Air Max 97 SE"
            womensShoes="Men's Shoes"
            womensShoesWidth="unset"
            prop="₹ 16 995"
          />
          <div className="self-stretch w-[31.9px] shrink-0 flex flex-row items-end justify-start py-[0px] px-[0px] box-border">
            <div className="self-stretch flex flex-col items-start justify-start max-w-[1384%]">
              <Image
                className="w-[441.4px] relative max-h-full object-cover shrink-0"
                loading="lazy"
                width={441}
                height={441}
                alt=""
                src="/image-4@2x.png"
              />
            </div>
            <div className="flex flex-col items-start justify-start shrink-0 ml-[-441.4px]">
              <div className="relative leading-[24px] font-medium whitespace-nowrap">
                Nike Air Max SYSTM
              </div>
              <div className="relative leading-[24px] text-gray-200 z-[1]">
                Women's Shoes
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
