import type { NextPage } from "next";
import Image from "next/image";

const ProductDetailPage: NextPage = () => {
  return (
    <div className="w-full relative bg-white h-[1600px] text-left text-mini text-gray-300 font-helvetica-neue">
      <div className="absolute w-full top-[0px] right-[0px] left-[0px] h-[96px] text-center">
        <div className="absolute w-full top-[36px] right-[0px] left-[0px] bg-white h-[60px]">
          <div className="absolute top-[4px] left-[calc(50%_-_380px)] w-[760px] h-[60px] overflow-hidden">
            <div className="absolute top-[17px] left-[160.1px] leading-[24px] font-medium flex items-center justify-center w-[115.8px] h-[17px]">{`New & Featured`}</div>
            <div className="absolute top-[17px] left-[299.7px] leading-[24px] font-medium flex items-center justify-center w-[31.3px] h-[17px]">
              Men
            </div>
            <div className="absolute top-[17px] left-[354.8px] leading-[24px] font-medium flex items-center justify-center w-[55px] h-[17px]">
              Women
            </div>
            <div className="absolute top-[17px] left-[433.6px] leading-[24px] font-medium flex items-center justify-center w-[31.3px] h-[17px]">
              Kids
            </div>
            <div className="absolute top-[17px] left-[488.8px] text-base leading-[24px] font-medium flex items-center justify-center w-[32.2px] h-[17px]">
              Sale
            </div>
            <div className="absolute top-[17px] left-[544.8px] text-base leading-[24px] font-medium flex items-center justify-center w-[55.3px] h-[17px]">
              SNKRS
            </div>
          </div>
          <div className="absolute h-full top-[0px] bottom-[0px] left-[calc(50%_-_720px)] w-[1440px] text-left text-lightgray">
            <div className="absolute w-[calc(100%_-_229px)] top-[0px] right-[122px] left-[107px] h-[60px] overflow-hidden">
              <div className="absolute h-[calc(100%_-_20px)] top-[10px] right-[20px] bottom-[10px] w-[180px]">
                <div className="absolute top-[0px] right-[0px] rounded-81xl bg-whitesmoke w-[180px] h-[40px]">
                  <div className="absolute top-[11px] left-[48px] w-[84px] h-[18px] overflow-hidden">
                    <div className="absolute top-[0px] left-[0px] font-medium flex items-center w-[50.9px] h-[17px]">
                      Search
                    </div>
                  </div>
                </div>
                <div className="absolute h-[calc(100%_-_4px)] w-[calc(100%_-_140px)] top-[2px] right-[138px] bottom-[2px] left-[2px] rounded-81xl overflow-hidden flex flex-row items-start justify-start py-[6px] px-[8px] box-border">
                  <Image
                    className="w-[24px] relative h-[24px] overflow-hidden shrink-0"
                    width={24}
                    height={24}
                    alt=""
                    src="/frame.svg"
                  />
                </div>
              </div>
            </div>
            <div className="absolute top-[0px] left-[1318px] flex flex-row items-start justify-start py-[12px] px-[0px] gap-[12px]">
              <div className="rounded-81xl overflow-hidden flex flex-row items-start justify-start p-[6px]">
                <Image
                  className="w-[24px] relative h-[24px] overflow-hidden shrink-0"
                  width={24}
                  height={24}
                  alt=""
                  src="/frame-1.svg"
                />
              </div>
              <div className="rounded-81xl overflow-hidden flex flex-row items-start justify-start p-[6px]">
                <Image
                  className="w-[24px] relative h-[24px] overflow-hidden shrink-0"
                  width={24}
                  height={24}
                  alt=""
                  src="/frame-2.svg"
                />
              </div>
            </div>
            <Image
              className="absolute h-[calc(100%_+_18.5px)] w-[calc(100%_-_1361.5px)] top-[-8.7px] right-[1323.2px] bottom-[-9.8px] left-[38.3px] max-w-full overflow-hidden max-h-full"
              width={79}
              height={79}
              alt=""
              src="/frame-3.svg"
            />
          </div>
        </div>
        <div className="absolute w-full top-[0px] right-[0px] left-[0px] bg-whitesmoke h-[36px]">
          <Image
            className="absolute top-[calc(50%_-_12px)] left-[48px] w-[24px] h-[24px] overflow-hidden"
            width={24}
            height={24}
            alt=""
            src="/frame-4.svg"
          />
        </div>
      </div>
      <div className="absolute top-[96px] left-[0px] w-[1440px] h-[1173px] font-[Poppins]">
        <div className="absolute top-[48px] left-[calc(50%_-_600px)] w-[1200px] h-[1125px]">
          <div className="absolute w-[calc(100%_-_824px)] top-[-26px] right-[56px] left-[768px] h-[1041px]">
            <div className="absolute top-[241px] left-[0px] flex flex-col items-start justify-start pt-[24px] px-[0px] pb-[1px] gap-[2px]">
              <div className="flex flex-col items-start justify-start">
                <div className="w-[374.9px] relative leading-[28px] flex items-center">
                  Turn style on its head with this crafted take on the Air
                  Jordan 1 Mid. Its "inside out"-inspired construction,
                  including unique layering and exposed foam accents, ups the
                  ante on this timeless Jordan Brand silhouette. Details like
                  the deco stitching on the Swoosh add coveted appeal, while the
                  unexpected shading, rich mixture of materials and aged midsole
                  aesthetic give this release an artisan finish.
                </div>
                <div className="flex flex-col items-start justify-start pt-[32px] pb-[24px] pl-[0px] pr-[65.4px] text-[36px]">
                  <div className="w-[229px] relative leading-[28px] font-medium flex items-center h-[34px] shrink-0">
                    ₹ 8 695.00
                  </div>
                </div>
              </div>
              <div className="rounded-11xl bg-gray-300 overflow-hidden flex flex-row items-start justify-start py-[7.5px] pl-[22.5px] pr-[23.9px] text-center text-white">
                <Image
                  className="w-[29px] relative h-[29px] overflow-hidden shrink-0"
                  width={29}
                  height={29}
                  alt=""
                  src="/Buy 2.svg"
                />
                <div className="w-[99px] relative leading-[24px] font-medium whitespace-pre-wrap flex items-center justify-center h-[29px] shrink-0">
                  {" "}
                  Add To Cart
                </div>
              </div>
            </div>
            <div className="absolute top-[135px] left-[0px] text-[48px] leading-[48px] font-medium">
              <p className="m-[0px]">{`Nike Air Force 1 `}</p>
              <p className="m-[0px]">PLT.AF.ORM</p>
            </div>
          </div>
          <Image
            className="absolute w-[calc(100%_-_547px)] top-[110px] right-[569px] left-[-22px] max-w-full overflow-hidden h-[653px] object-cover"
            width={653}
            height={653}
            alt=""
            src="/Rectangle (2).png"
          />
        </div>
      </div>
      <div className="absolute w-full top-[1269px] right-[0px] left-[0px] bg-gray-300 h-[331px] text-3xs text-gray-100">
        <div className="absolute top-[0px] left-[calc(50%_-_720px)] w-[1440px] h-[331px]">
          <div className="absolute top-[40px] left-[34px] w-[1372px] h-[213px]">
            <div className="absolute top-[0px] left-[0px] w-[1029px] h-[213px]">
              <div className="absolute top-[0px] left-[6px] w-[245.3px] h-[169.6px] overflow-hidden text-white">
                <div className="absolute top-[0px] left-[0px] w-[245.3px] h-[166.6px]">
                  <div className="absolute top-[8px] left-[0px] leading-[32.7px] uppercase flex items-center w-[68.6px] h-[16px]">
                    Find A Store
                  </div>
                  <div className="absolute top-[43.7px] left-[0px] leading-[32.7px] uppercase flex items-center w-[98.2px] h-[16px]">
                    Become A Member
                  </div>
                  <div className="absolute top-[79.3px] left-[0px] leading-[32.7px] uppercase flex items-center w-[98.2px] h-[16px]">
                    Sign Up for Email
                  </div>
                  <div className="absolute top-[111px] left-[0px] leading-[24px] text-center flex items-center justify-center w-[93.5px] h-[16px]">
                    Send Us Feedback
                  </div>
                  <div className="absolute top-[142px] left-[0px] text-[9px] leading-[32.7px] uppercase flex items-center w-[104.4px] h-[16px]">
                    Student Discounts
                  </div>
                </div>
              </div>
              <div className="absolute top-[0px] left-[263.3px] w-[245.3px] h-[213px] overflow-hidden text-2xs">
                <div className="absolute top-[0px] left-[0px] w-[245.3px] h-[210px]">
                  <div className="absolute top-[4px] left-[0px] text-3xs tracking-[0.5px] leading-[24px] uppercase text-white flex items-center w-[51.6px] h-[16px]">
                    Get Help
                  </div>
                  <div className="absolute top-[34px] left-[0px] leading-[28px] flex items-center w-[68.2px] h-[14px]">
                    Order Status
                  </div>
                  <div className="absolute top-[65px] left-[0px] text-xs leading-[28px] flex items-center w-[43.5px] h-[14px]">
                    Delivery
                  </div>
                  <div className="absolute top-[96px] left-[0px] text-xs leading-[28px] flex items-center w-[42.2px] h-[14px]">
                    Returns
                  </div>
                  <div className="absolute top-[127px] left-[0px] leading-[28px] flex items-center w-[92.2px] h-[14px]">
                    Payment Options
                  </div>
                  <div className="absolute top-[158px] left-[0px] leading-[28px] flex items-center w-[180.9px] h-[14px]">
                    Contact Us On Nike.com Inquiries
                  </div>
                  <div className="absolute top-[189px] left-[0px] leading-[28px] flex items-center w-[176.9px] h-[14px]">
                    Contact Us On All Other Inquiries
                  </div>
                </div>
              </div>
              <div className="absolute top-[0px] left-[520.5px] w-[245.3px] h-[151px] overflow-hidden text-xs">
                <div className="absolute top-[0px] left-[0px] w-[245.3px] h-[148px]">
                  <div className="absolute top-[4px] left-[0px] text-3xs tracking-[0.5px] leading-[24px] uppercase text-white flex items-center w-[64.3px] h-[16px]">
                    About Nike
                  </div>
                  <div className="absolute top-[34px] left-[0px] leading-[28px] flex items-center w-[30.2px] h-[14px]">
                    News
                  </div>
                  <div className="absolute top-[65px] left-[0px] leading-[28px] flex items-center w-[42.9px] h-[14px]">
                    Careers
                  </div>
                  <div className="absolute top-[96px] left-[0px] text-2xs leading-[28px] flex items-center w-[48.9px] h-[14px]">
                    Investors
                  </div>
                  <div className="absolute top-[127px] left-[0px] text-2xs leading-[28px] flex items-center w-[70.9px] h-[14px]">
                    Sustainability
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[0px] left-[1029px] w-[337px] h-[37px]">
              <Image
                className="absolute top-[0px] right-[138px] w-[30px] h-[30px] overflow-hidden"
                width={30}
                height={30}
                alt=""
                src="/frame-12.svg"
              />
              <Image
                className="absolute top-[0px] right-[92px] w-[30px] h-[30px] overflow-hidden"
                width={30}
                height={30}
                alt=""
                src="/frame-13.svg"
              />
              <Image
                className="absolute top-[0px] right-[46px] w-[30px] h-[30px] overflow-hidden"
                width={30}
                height={30}
                alt=""
                src="/frame-14.svg"
              />
              <Image
                className="absolute top-[0px] right-[0px] w-[30px] h-[30px] overflow-hidden"
                width={30}
                height={30}
                alt=""
                src="/frame-15.svg"
              />
            </div>
          </div>
          <div className="absolute top-[269px] left-[34px] w-[1372px] h-[62px] text-xs text-white">
            <div className="absolute top-[12px] left-[8px] w-[672px] h-[32px]">
              <div className="absolute bottom-[0px] left-[0px] flex flex-row items-end justify-start py-[0px] pl-[0px] pr-[8px] gap-[8px]">
                <Image
                  className="w-[18px] relative h-[15px] overflow-hidden shrink-0"
                  width={18}
                  height={15}
                  alt=""
                  src="/frame-11.svg"
                />
                <div className="relative leading-[12px]">India</div>
              </div>
              <div className="absolute top-[19px] left-[76px] text-2xs leading-[12px] text-gray-100 flex items-center w-[200.5px] h-[14px]">
                © 2023 Nike, Inc. All Rights Reserved
              </div>
            </div>
            <div className="absolute top-[16px] left-[686px] w-[680px] h-[46px] text-right text-gray-100">
              <div className="absolute top-[17px] left-[303.9px] leading-[28px] text-center flex items-center justify-center w-[38.2px] h-[14px]">
                Guides
              </div>
              <div className="absolute top-[17px] left-[369.9px] leading-[28px] flex items-center w-[73.6px] h-[14px]">
                Terms of Sale
              </div>
              <div className="absolute top-[17px] left-[471.3px] leading-[28px] flex items-center w-[70.9px] h-[14px]">
                Terms of Use
              </div>
              <div className="absolute top-[17px] left-[570px] text-2xs leading-[28px] flex items-center w-[102.2px] h-[14px]">
                Nike Privacy Policy
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-[calc(100%_-_1293.1px)] right-[15969px] bottom-[1569px] left-[-14675.9px] bg-white h-[26px] text-[13px]">
        <div className="absolute top-[5px] left-[10px] leading-[26px] font-medium flex items-center w-[127.1px] h-[16px]">
          Skip to main content
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
