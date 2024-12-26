import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type TopImageContainerType = {
  className?: string;
  image: string;
  nikeDriFITADVTechKnitUltra?: string;
  prop?: string;
  mensShortSleeveRunningTop?: string;

  /** Style props */
  topNameGap?: CSSProperties["gap"];
  nikeDriFITADVWidth?: CSSProperties["width"];
  mensShortSleeveRunningWidth?: CSSProperties["width"];
};

const TopImageContainer: NextPage<TopImageContainerType> = ({
  className = "",
  image,
  topNameGap,
  nikeDriFITADVTechKnitUltra,
  nikeDriFITADVWidth,
  prop,
  mensShortSleeveRunningTop,
  mensShortSleeveRunningWidth,
}) => {
  const topNameStyle: CSSProperties = useMemo(() => {
    return {
      gap: topNameGap,
    };
  }, [topNameGap]);

  const nikeDriFITADVStyle: CSSProperties = useMemo(() => {
    return {
      width: nikeDriFITADVWidth,
    };
  }, [nikeDriFITADVWidth]);

  const mensShortSleeveRunningStyle: CSSProperties = useMemo(() => {
    return {
      width: mensShortSleeveRunningWidth,
    };
  }, [mensShortSleeveRunningWidth]);

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[21px] min-w-[195px] text-left text-mini text-gray-300 font-helvetica-neue ${className}`}
    >
      <Image
        className="self-stretch h-[300px] relative max-w-full overflow-hidden shrink-0 object-cover"
        loading="lazy"
        width={300}
        height={300}
        alt=""
        src={image}
      />
      <div className="flex flex-col items-start justify-start">
        <div
          className="flex flex-row items-start justify-start gap-[12.5px]"
          style={topNameStyle}
        >
          <div
            className="relative leading-[24px] font-medium"
            style={nikeDriFITADVStyle}
          >
            {nikeDriFITADVTechKnitUltra}
          </div>
          <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 text-right">
            <div className="self-stretch relative leading-[24px] font-medium inline-block min-w-[53.7px]">
              {prop}
            </div>
          </div>
        </div>
        <div
          className="w-[203.4px] relative text-base leading-[24px] text-gray-200 flex items-center z-[1] mt-[-3px]"
          style={mensShortSleeveRunningStyle}
        >
          {mensShortSleeveRunningTop}
        </div>
      </div>
    </div>
  );
};

export default TopImageContainer;
