import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const FindAStore = "/allproductspage"
const JoinUsPage = "join-us";
const ContactUsPage = "/Contact-Us"

const LoginPage: NextPage = () => {
  return (
    <div className="w-full relative bg-white h-[966px] overflow-hidden text-center text-base text-gray-300 font-[Helvetica]">
      <div className="absolute w-full top-[0px] right-[0px] left-[0px] h-[96px]">
        <div className="absolute w-full top-[36px] right-[0px] left-[0px] bg-white h-[60px]">
          <div className="absolute top-[4px] left-[calc(50%_-_380px)] w-[760px] h-[60px] overflow-hidden">
            <div className="absolute top-[14px] left-[154.5px] leading-[24px] flex items-center justify-center w-[120.8px] h-[24px]">{`New & Featured`}</div>
            <div className="absolute top-[14px] left-[299.1px] leading-[24px] flex items-center justify-center w-[32.5px] h-[24px]">
              Men
            </div>
            <div className="absolute top-[14px] left-[355.4px] leading-[24px] flex items-center justify-center w-[56.7px] h-[24px]">
              Women
            </div>
            <div className="absolute top-[14px] left-[436px] leading-[24px] flex items-center justify-center w-[33.5px] h-[24px]">
              Kids
            </div>
            <div className="absolute top-[14px] left-[493.2px] leading-[24px] flex items-center justify-center w-[33.2px] h-[24px]">
              Sale
            </div>
            <div className="absolute top-[14px] left-[550.3px] leading-[24px] flex items-center justify-center w-[55.4px] h-[24px]">
              SNKRS
            </div>
          </div>
          <div className="absolute h-full top-[0px] bottom-[0px] left-[calc(50%_-_720px)] w-[1440px] text-left text-lightgray">
            <div className="absolute h-[calc(100%_-_20px)] top-[10px] right-[142px] bottom-[10px] w-[180px]">
              <div className="absolute top-[0px] right-[0px] rounded-81xl bg-whitesmoke w-[180px] h-[40px]">
                <div className="absolute top-[8px] left-[48px] w-[84px] h-[24px] overflow-hidden">
                  <div className="absolute top-[0px] left-[0px] flex items-center w-[53.3px] h-[24px]">
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
        <div className="absolute w-full top-[0px] right-[0px] left-[0px] bg-whitesmoke h-[36px] text-left text-xs">
          <div className="absolute h-full top-[0px] bottom-[0px] left-[calc(50%_-_720px)] w-[1440px]">
            <Image
              className="absolute top-[calc(50%_-_12px)] left-[48px] w-[24px] h-[24px] overflow-hidden"
              width={24}
              height={24}
              alt=""
              src="/frame-4.svg"
            />
            <div className="absolute top-[0px] left-[1122.2px] flex flex-row items-center justify-start">
              <div className="flex flex-row items-start justify-start py-[8px] pl-[12px] pr-[5.2px] gap-[14px]">
                <div className="relative leading-[18px]"><Link href={FindAStore} className="no-underline"> Find a Store</Link></div>
                <div className="relative leading-[18px]">|</div>
              </div>
              <div className="flex flex-row items-start justify-start py-[9px] pl-[8px] pr-[3.2px] gap-[12.8px]">
                <div className="relative leading-[18px]"> <Link href={ContactUsPage} className="no-underline">Help</Link></div>
                <div className="relative leading-[18px]">|</div>
              </div>
              <div className="w-[125.7px] relative h-[36px]">
                <div className="absolute top-[9px] left-[8px] leading-[18px]">
                <Link href={JoinUsPage} className="no-underline">  Join Us</Link>
                </div>
                <div className="absolute top-[9px] left-[61.8px] leading-[18px]">
                  |
                </div>
                <div className="absolute top-[9px] left-[77px] leading-[18px] text-center">
               <Link href="#" className="no-underline">   Sign In</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[calc(50%_-_387px)] left-[calc(50%_-_190px)] bg-white w-[380px] h-[489px] text-lg">
        <div className="absolute top-[28px] left-[28px] w-[324px] h-[128px]">
          <Image
            className="absolute top-[0px] left-[calc(50%_-_162px)] w-[324px] h-[17px] object-cover"
            width={324}
            height={17}
            alt=""
            src="/image.png"
          />
          <b className="absolute top-[46px] left-[68.8px] leading-[26px] flex items-center justify-center w-[186.5px] h-[57px]">
            YOUR ACCOUNT FOR EVERYTHING NIKE
          </b>
        </div>
        <div className="absolute top-[156px] left-[28px] w-[324px] h-[305px] overflow-hidden text-left text-xs text-[#8d8d8d]">
          <div className="absolute w-full top-[5px] right-[0px] left-[0px] rounded-[3px] bg-white border-[#e5e5e5] border-[1px] border-solid box-border h-[40px] text-sm">
            <div className="absolute top-[12px] left-[17px] w-[290px] h-[16px] overflow-hidden">
              <div className="absolute top-[0px] left-[0px] flex items-center w-[88.9px] h-[16px]">
                Email address
              </div>
            </div>
          </div>
          <div className="absolute w-full top-[58px] right-[0px] left-[0px] rounded-[3px] bg-white border-[#e5e5e5] border-[1px] border-solid box-border h-[40px] text-sm">
            <div className="absolute top-[12px] left-[17px] w-[290px] h-[16px] overflow-hidden">
              <div className="absolute top-[0px] left-[0px] flex items-center w-[61.7px] h-[16px]">
                Password
              </div>
            </div>
          </div>
          <div className="absolute w-[calc(100%_-_162px)] top-[121px] right-[162px] left-[0px] h-[20px]">
            <div className="absolute top-[4.3px] left-[34px] leading-[14px] flex items-center w-[99.6px] h-[14px]">
              Keep me signed in
            </div>
            <Image
              className="absolute top-[0px] left-[0px] rounded-[3px] w-[20px] h-[20px]"
              width={20}
              height={20}
              alt=""
              src="/tick.svg"
            />
          </div>
          <div className="absolute top-[125px] left-[184.6px] text-[#bcbcbc] text-right flex items-center w-[139.6px] h-[14px]">
            Forgotten your password?
          </div>
          <div className="absolute top-[162px] left-[0px] w-[324px] h-[59px] text-center">
            <div className="absolute top-[4px] left-[22.4px] leading-[16px] flex items-center w-[279.3px] h-[30px]">
              <span className="w-full">
                {`By logging in, you agree to Nike's `}
                <span className="[text-decoration:underline]">
                  Privacy Policy
                </span>
                {` and `}
                <span className="[text-decoration:underline]">
                  Terms of Use
                </span>
                .
              </span>
            </div>
          </div>
          <div className="absolute top-[calc(50%_+_73.5px)] left-[calc(50%_-_162px)] rounded-[3px] bg-black border-black border-[1px] border-solid box-border w-[324px] h-[40px] text-center text-2xs text-white">
            <div className="absolute top-[10.5px] left-[141.6px] leading-[17px] flex items-center justify-center w-[41px] h-[18px]">
              SIGN IN
            </div>
          </div>
          <div className="absolute w-full top-[276px] right-[0px] left-[0px] h-[24px] text-center">
            <div className="absolute top-[10px] left-[97.3px] leading-[14px] flex items-center w-[129.6px] h-[14px]">
              <span className="w-full">
                <span>{`Not a Member? `}</span>
                <span className="[text-decoration:underline] text-gray-300">
                  Join Us.
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-full top-[635px] right-[0px] left-[0px] bg-gray-300 h-[331px] text-left text-xs text-gray-100">
        <div className="absolute top-[0px] left-[calc(50%_-_720px)] w-[1440px] h-[331px]">
          <div className="absolute top-[40px] left-[34px] w-[1372px] h-[213px]">
            <div className="absolute top-[0px] left-[0px] w-[1029px] h-[213px]">
              <div className="absolute top-[0px] left-[6px] w-[245.3px] h-[169.6px] overflow-hidden text-3xs text-white font-helvetica-neue">
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
              <div className="absolute top-[0px] left-[263.3px] w-[245.3px] h-[213px] overflow-hidden">
                <div className="absolute top-[0px] left-[0px] w-[245.3px] h-[210px]">
                  <div className="absolute top-[4px] left-[0px] text-3xs tracking-[0.5px] leading-[24px] uppercase font-helvetica-neue text-white flex items-center w-[51.6px] h-[16px]">
                    Get Help
                  </div>
                  <div className="absolute top-[32px] left-[0px] leading-[28px] flex items-center w-[72.1px] h-[17px]">
                    Order Status
                  </div>
                  <div className="absolute top-[63px] left-[0px] leading-[28px] flex items-center w-[46px] h-[17px]">
                    Delivery
                  </div>
                  <div className="absolute top-[94px] left-[0px] leading-[28px] flex items-center w-[44.3px] h-[17px]">
                    Returns
                  </div>
                  <div className="absolute top-[125px] left-[0px] leading-[28px] flex items-center w-[96.6px] h-[17px]">
                    Payment Options
                  </div>
                  <div className="absolute top-[156px] left-[0px] leading-[28px] flex items-center w-[188.4px] h-[17px]">
                    Contact Us On Nike.com Inquiries
                  </div>
                  <div className="absolute top-[187px] left-[0px] leading-[28px] flex items-center w-[186.2px] h-[17px]">
                    Contact Us On All Other Inquiries
                  </div>
                </div>
              </div>
              <div className="absolute top-[0px] left-[520.5px] w-[245.3px] h-[151px] overflow-hidden">
                <div className="absolute top-[0px] left-[0px] w-[245.3px] h-[148px]">
                  <div className="absolute top-[4px] left-[0px] text-3xs tracking-[0.5px] leading-[24px] uppercase font-helvetica-neue text-white flex items-center w-[64.3px] h-[16px]">
                    About Nike
                  </div>
                  <div className="absolute top-[32px] left-[0px] leading-[28px] flex items-center w-[31.1px] h-[17px]">
                    News
                  </div>
                  <div className="absolute top-[63px] left-[0px] leading-[28px] flex items-center w-[44.7px] h-[17px]">
                    Careers
                  </div>
                  <div className="absolute top-[94px] left-[0px] leading-[28px] flex items-center w-[51.8px] h-[17px]">
                    Investors
                  </div>
                  <div className="absolute top-[125px] left-[0px] leading-[28px] flex items-center w-[76.5px] h-[17px]">
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
          <div className="absolute top-[269px] left-[34px] w-[1372px] h-[62px] text-white">
            <div className="absolute top-[12px] left-[8px] w-[672px] h-[32px]">
              <div className="absolute bottom-[0px] left-[0px] flex flex-row items-end justify-start py-[0px] pl-[0px] pr-[8.3px] gap-[8px]">
                <Image
                  className="w-[18px] relative h-[15px] overflow-hidden shrink-0"
                  width={18}
                  height={15}
                  alt=""
                  src="/frame-11.svg"
                />
                <div className="relative leading-[12px]">India</div>
              </div>
              <div className="absolute top-[17px] left-[77.3px] leading-[12px] text-gray-100 flex items-center w-[213.6px] h-[17px]">
                © 2023 Nike, Inc. All Rights Reserved
              </div>
            </div>
            <div className="absolute top-[16px] left-[686px] w-[680px] h-[46px] text-right text-gray-100">
              <div className="absolute top-[15px] left-[291.6px] leading-[28px] text-center flex items-center justify-center w-[40.3px] h-[17px]">
                Guides
              </div>
              <div className="absolute top-[15px] left-[359.7px] leading-[28px] flex items-center w-[76.8px] h-[17px]">
                Terms of Sale
              </div>
              <div className="absolute top-[15px] left-[464.3px] leading-[28px] flex items-center w-[73.7px] h-[17px]">
                Terms of Use
              </div>
              <div className="absolute top-[15px] left-[565.8px] leading-[28px] flex items-center w-[106.4px] h-[17px]">
                Nike Privacy Policy
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
