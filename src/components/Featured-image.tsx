import type { NextPage } from "next";
import Image from "next/image";

export type FeaturedImageType = {
  className?: string;
};

const FeaturedImage: NextPage<FeaturedImageType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start py-0 px-12 box-border max-w-full text-left text-4xl text-gray-300 font-helvetica-neue mq750:pl-6 mq750:pr-6 mq750:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[25px] max-w-full">
        <h3 className="m-0 relative text-inherit leading-[28px] font-medium font-[inherit] inline-block min-w-[97.3px] mq450:text-lg mq450:leading-[22px]">
          Featured
        </h3>
        <Image
          className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
          loading="lazy"
          width={1344}
          height={700}
          alt=""
          src="/image-5@2x.png"
        />
      </div>
    </section>
  );
};

export default FeaturedImage;
