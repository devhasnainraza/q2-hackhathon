import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
const AllProductsPage = "/allproductspage";
const LoginPage = "/sign-in";
const  ContactUsPage = "/Contact-Us";

const JoinUsPage: NextPage = () => {
  return (
    <div className="w-full relative bg-white h-[1260px] overflow-hidden text-center text-mini text-gray-300 font-[Inter]">
      <div className="absolute w-full top-[0px] right-[0px] left-[0px] h-[96px]">
        <div className="absolute w-full top-[36px] right-[0px] left-[0px] bg-white h-[60px]">
          <div className="absolute top-[4px] left-[calc(50%_-_360.5px)] w-[721px] h-[60px] overflow-hidden">
            <div className="absolute top-[14px] left-[135px] leading-[24px] font-medium flex items-center justify-center w-[120.8px] h-[24px]">{`New & Featured`}</div>
            <div className="absolute top-[14px] left-[279.6px] leading-[24px] font-medium flex items-center justify-center w-[32.5px] h-[24px]">
              Men
            </div>
            <div className="absolute top-[14px] left-[335.9px] leading-[24px] font-medium flex items-center justify-center w-[56.7px] h-[24px]">
              Women
            </div>
            <div className="absolute top-[14px] left-[416.5px] leading-[24px] font-medium flex items-center justify-center w-[33.5px] h-[24px]">
              Kids
            </div>
            <div className="absolute top-[14px] left-[473.7px] text-base leading-[24px] font-medium flex items-center justify-center w-[33.2px] h-[24px]">
              Sale
            </div>
            <div className="absolute top-[14px] left-[530.8px] text-base leading-[24px] font-medium flex items-center justify-center w-[55.4px] h-[24px]">
              SNKRS
            </div>
          </div>
          <div className="absolute h-full top-[0px] bottom-[0px] left-[calc(50%_-_705.5px)] w-[1411px] text-left text-base">
            <div className="absolute w-[calc(100%_-_229px)] top-[0px] right-[122px] left-[107px] h-[60px] overflow-hidden">
              <div className="absolute h-[calc(100%_-_20px)] top-[10px] right-[20px] bottom-[10px] w-[180px]">
                <div className="absolute top-[0px] right-[0px] rounded-81xl bg-whitesmoke w-[180px] h-[40px]">
                  <div className="absolute top-[8px] left-[48px] leading-[24px] font-medium flex items-center w-[84.2px] h-[24px]">
                    Search
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
            <div className="absolute top-[0px] left-[1289px] flex flex-row items-start justify-start py-[12px] px-[0px] gap-[12px]">
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
              className="absolute h-[calc(100%_+_18.5px)] w-[calc(100%_-_1332.5px)] top-[-8.7px] right-[1294.2px] bottom-[-9.8px] left-[38.3px] max-w-full overflow-hidden max-h-full"
              width={79}
              height={79}
              alt=""
              src="/frame-3.svg"
            />
          </div>
        </div>
        <div className="absolute w-full top-[0px] right-[0px] left-[0px] bg-whitesmoke h-[36px] text-left text-2xs">
          <div className="absolute h-full top-[0px] bottom-[0px] left-[calc(50%_-_705.5px)] w-[1411px]">
            <Image
              className="absolute top-[calc(50%_-_12px)] left-[48px] w-[24px] h-[24px] overflow-hidden"
              width={24}
              height={24}
              alt=""
              src="/frame-4.svg"
            />
            <div className="absolute top-[0px] left-[1093.2px] flex flex-row items-center justify-start">
              <div className="flex flex-row items-start justify-start py-[8px] pl-[12px] pr-[5.2px] gap-[17px]">
                <div className="relative leading-[18px] font-medium">
                <Link href={AllProductsPage} className="no-underline"> Find a Store</Link>
                </div>
                <div className="relative text-xs leading-[18px]">|</div>
              </div>
              <div className="flex flex-row items-start justify-start py-[9px] pl-[8px] pr-[3.2px] gap-[12.8px]">
                <div className="relative leading-[18px] font-medium">Help</div>
                <div className="relative text-xs leading-[18px]">|</div>
              </div>
              <div className="w-[125.7px] relative h-[36px] text-xs">
                <div className="absolute top-[9px] left-[8px] text-2xs leading-[18px] font-medium">
                 <Link href="/join-us" className="no-underline"> Join Us </Link>
                </div>
                <div className="absolute top-[9px] left-[61.8px] leading-[18px]">
                  |
                </div>
                <div className="absolute top-[9px] left-[77px] leading-[18px] font-medium text-center">
                <Link href={LoginPage} className="no-underline">Sign In</Link>  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[calc(50%_-_534px)] left-[calc(50%_-_190px)] bg-white w-[380px] h-[833px] text-lg text-[#8d8d8d]">
        <div className="absolute top-[28px] left-[28px] w-[324px] h-[182px] text-gray-300">
          <Image
            className="absolute top-[0px] left-[calc(50%_-_162px)] w-[324px] h-[17px] object-cover"
            width={324}
            height={17}
            alt=""
            src="/image.png"
          />
          <b className="absolute top-[46px] left-[46.5px] leading-[26px] flex items-center justify-center w-[231.2px] h-[31px]">
            BECOME A NIKE MEMBER
          </b>
          <div className="absolute top-[104px] left-[21.1px] text-sm leading-[22px] text-[#8d8d8d] flex items-center justify-center w-[282.1px] h-[60px]">
            Create your Nike Member profile and get first access to the very
            best of Nike products, inspiration and community.
          </div>
        </div>
        <div className="absolute top-[210px] left-[28px] w-[324px] h-[561px] overflow-hidden text-left text-sm">
          <div className="absolute top-[452px] left-[0px] w-[324px] h-[59px] text-center text-xs">
            <div className="absolute top-[4px] left-[7.4px] leading-[16px] flex items-center w-[309.3px] h-[30px]">
              <span className="w-full">
                <span>{`By creating an account, you agree to Nike's `}</span>
                <span className="[text-decoration:underline] font-medium">
                  Privacy Policy
                </span>
                <span>{` and `}</span>
                <span className="[text-decoration:underline] font-medium">
                  Terms of Use
                </span>
                <span>.</span>
              </span>
            </div>
          </div>
          <div className="absolute w-full top-[5px] right-[0px] left-[0px] rounded-[3px] bg-white border-[#e5e5e5] border-[1px] border-solid box-border h-[40px]">
            <div className="absolute top-[12px] left-[17px] leading-[17px] flex items-center w-[290.2px] h-[16px]">
              Email address
            </div>
          </div>
          <div className="absolute w-full top-[58px] right-[0px] left-[0px] rounded-[3px] bg-white border-[#e5e5e5] border-[1px] border-solid box-border h-[40px]">
            <div className="absolute top-[12px] left-[17px] leading-[17px] flex items-center w-[261.2px] h-[16px]">
              Password
            </div>
          </div>
          <div className="absolute w-full top-[111px] right-[0px] left-[0px] rounded-[3px] bg-white border-[#e5e5e5] border-[1px] border-solid box-border h-[40px]">
            <div className="absolute top-[12px] left-[17px] leading-[17px] flex items-center w-[290.2px] h-[16px]">
              First Name
            </div>
          </div>
          <div className="absolute w-full top-[164px] right-[0px] left-[0px] rounded-[3px] bg-white border-[#e5e5e5] border-[1px] border-solid box-border h-[40px]">
            <div className="absolute top-[12px] left-[17px] leading-[17px] flex items-center w-[290.2px] h-[16px]">
              Last Name
            </div>
          </div>
          <div className="absolute w-full top-[217px] right-[0px] left-[0px] h-[69px] text-2xs">
            <div className="absolute top-[47px] left-[11.4px] text-center flex items-center justify-center w-[301.5px] h-[14px]">
              Get a Nike Member Reward every year on your Birthday.
            </div>
            <div className="absolute top-[12px] left-[16px] text-[13px] flex items-center w-[78px] h-[16px]">
              Date of Birth
            </div>
            <div className="absolute w-full top-[0px] right-[0px] left-[0px] rounded-[3px] border-[#e5e5e5] border-[1px] border-solid box-border h-[40px] overflow-hidden text-sm text-[transparent]">
              <div className="absolute top-[10.5px] left-[17px] leading-[17px] flex items-center w-[288.2px] h-[19px]">
                dd/mm/yyyy
              </div>
            </div>
          </div>
          <div className="absolute w-full top-[296px] right-[0px] left-[0px] rounded-[3px] bg-white border-[#e5e5e5] border-[1px] border-solid box-border h-[40px]">
            <Image
              className="absolute top-[17px] right-[7px] w-[10px] h-[7.1px] overflow-hidden"
              width={10}
              height={7}
              alt=""
              src="/dropdown.svg"
            />
            <div className="absolute top-[11.5px] left-[17px] leading-[17px] flex items-center w-[290.2px] h-[17px]">
              India
            </div>
          </div>
          <div className="absolute w-full top-[346px] right-[0px] left-[0px] h-[40px] text-center text-[13px]">
            <div className="absolute h-[calc(100%_+_3px)] w-[calc(100%_-_170.1px)] top-[0px] right-[170.1px] bottom-[-3px] left-[0px]">
              <div className="absolute top-[0px] left-[calc(50%_-_76.95px)] rounded-[3px] bg-white border-[#e5e5e5] border-[1px] border-solid box-border w-[153.9px] h-[40px]" />
              <div className="absolute top-[12px] left-[61.8px] flex items-center justify-center w-[30.6px] h-[16px]">
                Male
              </div>
            </div>
            <div className="absolute h-[calc(100%_+_3px)] w-[calc(100%_-_170.1px)] top-[0px] right-[0px] bottom-[-3px] left-[170.1px]">
              <div className="absolute top-[0px] left-[calc(50%_-_76.95px)] rounded-[3px] bg-white border-[#e5e5e5] border-[1px] border-solid box-border w-[153.9px] h-[40px]" />
              <div className="absolute top-[12px] left-[53.6px] flex items-center justify-center w-[46.9px] h-[16px]">
                Female
              </div>
            </div>
          </div>
          <div className="absolute top-[calc(50%_+_125.8px)] left-[calc(50%_-_162px)] flex flex-row items-start justify-start py-[0px] pl-[34px] pr-[43px] text-2xs">
            <div className="w-[20px] absolute !m-[0] top-[4px] left-[0px] rounded-[3px] border-[#bcbcbc] border-[1px] border-solid box-border h-[20px] z-[0]" />
            <div className="w-[247px] relative leading-[14px] flex items-center shrink-0 z-[1]">
              Sign up for emails to get updates from Nike on products, offers
              and your Member benefits
            </div>
          </div>
          <div className="absolute top-[calc(50%_+_235.5px)] left-[calc(50%_-_162px)] rounded-[3px] bg-black border-black border-[1px] border-solid box-border w-[324px] h-[40px] text-center text-mini text-white">
            <div className="absolute top-[11px] left-[132.5px] leading-[17px]">
              JOIN US
            </div>
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_56px)] top-[776px] right-[28px] left-[28px] h-[24px] text-2xs">
          <div className="absolute top-[10px] left-[87.6px] leading-[14px] flex items-center w-[148.9px] h-[14px]">
            <span className="w-full">
              <span>{`Already a Member? `}</span>
              <span className="[text-decoration:underline] font-medium text-gray-300">
                Sign In.
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="absolute w-full top-[929px] right-[0px] left-[0px] bg-gray-300 h-[331px] text-left text-2xs text-gray-100">
        <div className="absolute top-[0px] left-[calc(50%_-_705.5px)] w-[1411px] h-[331px]">
          <div className="absolute top-[40px] left-[34px] w-[1343px] h-[213px]">
            <div className="absolute top-[0px] left-[0px] w-[1007.3px] h-[213px]">
              <div className="absolute top-[0px] left-[6px] w-[239.8px] h-[169.6px] overflow-hidden text-3xs text-white">
                <div className="absolute top-[0px] left-[0px] w-[239.8px] h-[166.6px]">
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
              <div className="absolute top-[0px] left-[257.8px] w-[239.8px] h-[213px] overflow-hidden">
                <div className="absolute top-[0px] left-[0px] w-[239.8px] h-[210px]">
                  <div className="absolute top-[4px] left-[0px] text-3xs tracking-[0.5px] leading-[24px] uppercase text-white flex items-center w-[51.6px] h-[16px]">
                    Get Help
                  </div>
                  <div className="absolute top-[32px] left-[0px] text-xs leading-[28px] flex items-center w-[72.1px] h-[17px]">
                    Order Status
                  </div>
                  <div className="absolute top-[63px] left-[0px] leading-[28px] flex items-center w-[46px] h-[17px]">
                    Delivery
                  </div>
                  <div className="absolute top-[94px] left-[0px] text-xs leading-[28px] flex items-center w-[44.3px] h-[17px]">
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
              <div className="absolute top-[0px] left-[509.6px] w-[239.8px] h-[151px] overflow-hidden">
                <div className="absolute top-[0px] left-[0px] w-[239.8px] h-[148px]">
                  <div className="absolute top-[4px] left-[0px] text-[9px] tracking-[0.5px] leading-[24px] uppercase text-white flex items-center w-[64.3px] h-[16px]">
                    About Nike
                  </div>
                  <div className="absolute top-[32px] left-[0px] leading-[28px] flex items-center w-[31.1px] h-[17px]">
                    News
                  </div>
                  <div className="absolute top-[63px] left-[0px] text-xs leading-[28px] flex items-center w-[44.7px] h-[17px]">
                    Careers
                  </div>
                  <div className="absolute top-[94px] left-[0px] leading-[28px] flex items-center w-[51.8px] h-[17px]">
                    Investors
                  </div>
                  <div className="absolute top-[125px] left-[0px] text-xs leading-[28px] flex items-center w-[76.5px] h-[17px]">
                    Sustainability
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[0px] left-[1007.3px] w-[329.8px] h-[37px]">
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
          <div className="absolute top-[269px] left-[34px] w-[1343px] h-[62px] text-xs text-white">
            <div className="absolute top-[12px] left-[8px] w-[657.5px] h-[32px]">
              <div className="absolute bottom-[0px] left-[0px] flex flex-row items-end justify-start py-[0px] pl-[0px] pr-[7.3px] gap-[8px]">
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
            <div className="absolute top-[16px] left-[671.5px] w-[665.5px] h-[46px] text-right text-2xs text-gray-100">
              <div className="absolute top-[15px] left-[277.2px] text-xs leading-[28px] text-center flex items-center justify-center w-[40.3px] h-[17px]">
                Guides
              </div>
              <div className="absolute top-[15px] left-[345.2px] leading-[28px] flex items-center w-[76.8px] h-[17px]">
                Terms of Sale
              </div>
              <div className="absolute top-[15px] left-[449.8px] leading-[28px] flex items-center w-[73.7px] h-[17px]">
                Terms of Use
              </div>
              <div className="absolute top-[15px] left-[551.3px] leading-[28px] flex items-center w-[106.4px] h-[17px]">
                Nike Privacy Policy
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUsPage;
