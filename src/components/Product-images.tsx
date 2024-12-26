import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";



export type ProductImagesType = {
  className?: string;
  image: string;
  nikeAirMaxPulse?: string;
  womensShoes?: string;
  prop?: string;

  /** Style props */
  womensShoesWidth?: CSSProperties["width"];
};

const ProductImages: NextPage<ProductImagesType> = ({
  className = "",
  image,
  nikeAirMaxPulse,
  womensShoes,
  womensShoesWidth,
  prop,
}) => {
  const womensShoesStyle: CSSProperties = useMemo(() => {
    return {
      width: womensShoesWidth,
    };
  }, [womensShoesWidth]);

  return (
    <div
      className={`h-[510.4px] w-[441.4px] relative shrink-0 text-left text-mini text-gray-300 font-helvetica-neue ${className}`}
    >
      <Image
        className="absolute top-[0px] left-[0px] w-[441.4px] h-[441.4px] object-cover"
        loading="lazy"
        width={441}
        height={441}
        alt=""
        src={image}
      />
      <div className="absolute top-[462.4px] left-[0px] flex flex-col items-start justify-start">
        <div className="relative leading-[24px] font-medium">
          {nikeAirMaxPulse}
        </div>
        <div
          className="relative leading-[24px] text-gray-200"
          style={womensShoesStyle}
        >
          {womensShoes}
        </div>
      </div>
      <div className="absolute top-[465.4px] left-[364px] leading-[24px] font-medium text-right flex items-center w-[62.6px] h-6 min-w-[62.6px] whitespace-nowrap">
        {prop}
      </div>
    </div>
  );
};

export default ProductImages;
