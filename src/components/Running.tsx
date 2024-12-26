import type { NextPage } from "next";

export type RunningType = {
  className?: string;
};

const Running: NextPage<RunningType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-6 pl-5 pr-[22px] box-border max-w-full text-center text-35xl text-gray-300 font-helvetica-neue ${className}`}
    >
      <div className="w-[806px] flex flex-col items-end justify-start gap-6 max-w-full">
        <h1 className="m-0 self-stretch relative text-inherit leading-[60px] uppercase font-medium font-[inherit] mq450:text-13xl mq450:leading-[36px] mq1050:text-24xl mq1050:leading-[48px]">
          STEP INTO WHAT FEELS GOOD
        </h1>
        <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[23px] pr-5 box-border max-w-full text-mini">
          <div className="flex flex-col items-start justify-start gap-[30px] max-w-full">
            <div className="self-stretch relative leading-[24px]">
              Cause everyone should know the feeling of running in that perfect
              pair.
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[156px] pr-[164px] text-white mq750:pl-[78px] mq750:pr-[82px] mq750:box-border">
              <div className="flex-1 rounded-11xl bg-gray-300 overflow-hidden flex flex-row items-start justify-start py-[7.5px] px-[22px]">
                <div className="flex-1 relative leading-[24px] font-medium">
                  Find Your Shoe
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Running;
