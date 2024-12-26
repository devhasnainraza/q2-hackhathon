import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
// import ProductDetailPage from "../productdetailpage/page";

const ProductDetailPage = "/productdetailpage";
const JoinUsPage = "/join-us";
const LoginPage = "/sign-in";
const HomePage ="/";
const ContactUsPage = "/Contact-Us"

const AllProductsPage: NextPage = () => {
  return (
    <div className="w-full relative bg-white h-[18582px] overflow-hidden text-left text-base text-gray-300 font-[Helvetica]">
      <div className="absolute w-full top-[0px] right-[0px] left-[0px] h-[96px] text-center">
        <div className="absolute w-full top-[36px] right-[0px] left-[0px] bg-white h-[60px]">
          <div className="absolute top-[4px] left-[calc(50%_-_380px)] w-[760px] h-[60px] overflow-hidden">
            <div className="absolute top-[14px] left-[154.53px] leading-[24px] flex items-center justify-center w-[120.8px] h-[24px]">{`New & Featured`}</div>
            <div className="absolute top-[14px] left-[299.09px] leading-[24px] flex items-center justify-center w-[32.5px] h-[24px]">
              Men
            </div>
            <div className="absolute top-[14px] left-[355.41px] leading-[24px] flex items-center justify-center w-[56.7px] h-[24px]">
              Women
            </div>
            <div className="absolute top-[14px] left-[435.95px] leading-[24px] flex items-center justify-center w-[33.5px] h-[24px]">
              Kids
            </div>
            <div className="absolute top-[14px] left-[493.23px] leading-[24px] flex items-center justify-center w-[33.2px] h-[24px]">
              Sale
            </div>
            <div className="absolute top-[14px] left-[550.28px] leading-[24px] flex items-center justify-center w-[55.4px] h-[24px]">
              SNKRS
            </div>
          </div>
          <div className="absolute h-full top-[0px] bottom-[0px] left-[calc(50%_-_720px)] w-[1440px] text-left text-lightgray">
            <div className="absolute w-[calc(100%_-_229px)] top-[0px] right-[122px] left-[107px] h-[60px] overflow-hidden">
              <div className="absolute h-[calc(100%_-_20px)] top-[10px] right-[20px] bottom-[10px] w-[180px]">
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
              className="absolute h-[calc(100%_+_18.5px)] w-[calc(100%_-_1361.5px)] top-[-8.74px] right-[1323.24px] bottom-[-9.76px] left-[38.26px] max-w-full overflow-hidden max-h-full"
              width={79}
              height={79}
              alt=""
              src="/frame-3.svg"
            />
          </div>
        </div>
        <div className="absolute w-full top-[0px] right-[0px] left-[0px] bg-whitesmoke h-[36px] text-left text-xs">
          <div className="absolute h-full top-[0px] bottom-[0px] left-[calc(50%_-_720px)] w-[1440px]">
        <Link href={HomePage} className="no-underline">    <Image
              className="absolute top-[calc(50%_-_12px)] left-[48px] w-[24px] h-[24px] overflow-hidden"
              width={24}
              height={24}
              alt=""
              src="/frame-4.svg"
            /></Link>
            <div className="absolute top-[0px] left-[1122.22px] flex flex-row items-center justify-start">
              <div className="flex flex-row items-start justify-start py-[8px] pl-[12px] pr-[5.2px] gap-[14px]">
                <div className="relative leading-[18px]"><Link href="#" className="no-underline">Find a Store</Link></div>
                <div className="relative leading-[18px]">|</div>
              </div>
              <div className="flex flex-row items-start justify-start py-[9px] pl-[8px] pr-[3.2px] gap-[12.8px]">
                <div className="relative leading-[18px]"> <Link href={ContactUsPage} className="no-underline">Help</Link> </div>
                <div className="relative leading-[18px]">|</div>
              </div>
              <div className="w-[125.7px] relative h-[36px]">
                <div className="absolute top-[9px] left-[8px] leading-[18px]">
                <Link href={JoinUsPage} className="no-underline" > Join Us</Link>  
                </div>
                <div className="absolute top-[9px] left-[61.8px] leading-[18px]">
                  |
                </div>
                <div className="absolute top-[9px] left-[76.95px] leading-[18px] text-center">
             <Link href={LoginPage} className="no-underline">     Sign In</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[156px] left-[calc(50%_-_720px)] w-[1440px] h-[18095px] text-mini font-helvetica-neue">
        <div className="absolute top-[82px] left-[0px] w-[1440px] h-[18013px]">
          <div className="absolute top-[0px] left-[0px] w-[260px] h-[849px]">
            <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] overflow-hidden">
              <div className="absolute top-[0px] left-[0px] w-[260px] h-[849px] overflow-hidden">
                <div className="absolute top-[0px] left-[48px] bg-white w-[192px] h-[2145.7px]">
                  <div className="absolute top-[0px] left-[0px] w-[192px] h-[400.7px]">
                    <div className="absolute top-[2px] left-[4px] leading-[21.6px] font-medium flex items-center w-[45.6px] h-[17px]">
                      Shoes
                    </div>
                    <div className="absolute top-[33.59px] left-[4px] leading-[21.6px] font-medium flex items-center w-[83.8px] h-[17px]">
                      Sports Bras
                    </div>
                    <div className="absolute top-[65.19px] left-[4px] leading-[21.6px] font-medium flex items-center w-[108.4px] h-[17px]">{`Tops & T-Shirts`}</div>
                    <div className="absolute top-[96.78px] left-[4px] leading-[21.6px] font-medium flex items-center w-[161.2px] h-[17px]">{`Hoodies & Sweatshirts`}</div>
                    <div className="absolute top-[128.38px] left-[4px] leading-[21.6px] font-medium flex items-center w-[54.5px] h-[17px]">
                      Jackets
                    </div>
                    <div className="absolute top-[159.97px] left-[4px] leading-[21.6px] font-medium flex items-center w-[125px] h-[17px]">{`Trousers & Tights`}</div>
                    <div className="absolute top-[191.56px] left-[4px] leading-[21.6px] font-medium flex items-center w-[46.5px] h-[17px]">
                      Shorts
                    </div>
                    <div className="absolute top-[223.16px] left-[4px] leading-[21.6px] font-medium flex items-center w-[72.5px] h-[17px]">
                      Tracksuits
                    </div>
                    <div className="absolute top-[254.75px] left-[4px] leading-[21.6px] font-medium flex items-center w-[156.7px] h-[17px]">{`Jumpsuits & Rompers`}</div>
                    <div className="absolute top-[286.34px] left-[4px] leading-[21.6px] font-medium flex items-center w-[118.4px] h-[17px]">{`Skirts & Dresses`}</div>
                    <div className="absolute top-[317.94px] left-[4px] leading-[21.6px] font-medium flex items-center w-[43.8px] h-[17px]">
                      Socks
                    </div>
                    <div className="absolute top-[349.53px] left-[4px] text-base leading-[21.6px] font-medium flex items-center w-[101.6px] h-[38.6px]">{`Accessories & Equipment`}</div>
                  </div>
                  <div className="absolute top-[440.72px] left-[0px] w-[192px] h-[1705px] text-base">
                    <div className="absolute w-full top-[0px] right-[0px] left-[0px] border-[#e5e5e5] border-t-[1px] border-solid border-[#e5e5e5] border-b-[1px] border-solid box-border h-[163px]">
                      <div className="absolute w-[calc(100%_-_3.8px)] top-[1px] right-[3.8px] left-[0px] h-[48px]">
                        <div className="absolute top-[15px] left-[0px] leading-[24px] font-medium flex items-center w-[58px] h-[17px]">
                          Gender
                        </div>
                        <div className="absolute top-[17px] right-[2.04px] w-[14px] h-[14px]">
                          <div className="absolute top-[9.54px] left-[0.65px] rounded-tl-[1px] rounded-tr-[0px] rounded-br-[0px] rounded-bl-[1px] bg-black w-[9px] h-[2px] [transform:_rotate(-46deg)] [transform-origin:0_0]" />
                          <div className="absolute top-[3.07px] left-[7.09px] rounded-tl-[0px] rounded-tr-[1px] rounded-br-[1px] rounded-bl-[0px] bg-black w-[9px] h-[2px] [transform:_rotate(46deg)] [transform-origin:0_0]" />
                        </div>
                      </div>
                      <div className="absolute top-[54px] left-[-4px] w-[196px] h-[108px] overflow-hidden">
                        <div className="absolute top-[4px] left-[0px] w-[196px] h-[80px]">
                          <div className="absolute w-[calc(100%_-_7.8px)] top-[0px] right-[5.8px] left-[2px] h-[24px] text-mini">
                            <div className="absolute top-[3px] left-[26px] leading-[24px] flex items-center w-[31.3px] h-[17px]">
                              Men
                            </div>
                            <div className="absolute top-[2px] left-[0px] rounded-[4px] border-lightgray border-[1px] border-solid box-border w-[20px] h-[20px]" />
                          </div>
                          <div className="absolute w-[calc(100%_-_7.8px)] top-[28px] right-[5.8px] left-[2px] h-[24px]">
                            <div className="absolute top-[3px] left-[26px] leading-[24px] flex items-center w-[55px] h-[17px]">
                              Women
                            </div>
                            <div className="absolute top-[2px] left-[0px] rounded-[4px] border-lightgray border-[1px] border-solid box-border w-[20px] h-[20px]" />
                          </div>
                          <div className="absolute w-[calc(100%_-_7.8px)] top-[56px] right-[5.8px] left-[2px] h-[24px]">
                            <div className="absolute top-[3px] left-[26px] leading-[24px] flex items-center w-[49.1px] h-[17px]">
                              Unisex
                            </div>
                            <div className="absolute top-[2px] left-[0px] rounded-[4px] border-lightgray border-[1px] border-solid box-border w-[20px] h-[20px]" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute w-full top-[163px] right-[0px] left-[0px] border-[#e5e5e5] border-b-[1px] border-solid box-border h-[134px]">
                      <div className="absolute w-[calc(100%_-_3.8px)] top-[0px] right-[3.8px] left-[0px] h-[48px]">
                        <div className="absolute top-[15px] left-[0px] leading-[24px] font-medium flex items-center w-[35.8px] h-[17px]">
                          Kids
                        </div>
                        <div className="absolute top-[17px] right-[2.04px] w-[14px] h-[14px]">
                          <div className="absolute top-[9.54px] left-[0.65px] rounded-tl-[1px] rounded-tr-[0px] rounded-br-[0px] rounded-bl-[1px] bg-black w-[9px] h-[2px] [transform:_rotate(-46deg)] [transform-origin:0_0]" />
                          <div className="absolute top-[3.07px] left-[7.09px] rounded-tl-[0px] rounded-tr-[1px] rounded-br-[1px] rounded-bl-[0px] bg-black w-[9px] h-[2px] [transform:_rotate(46deg)] [transform-origin:0_0]" />
                        </div>
                      </div>
                      <div className="absolute top-[53px] left-[-4px] w-[196px] h-[80px] overflow-hidden text-mini">
                        <div className="absolute top-[4px] left-[0px] w-[196px] h-[52px]">
                          <div className="absolute w-[calc(100%_-_7.8px)] top-[0px] right-[5.8px] left-[2px] h-[24px]">
                            <div className="absolute top-[3px] left-[26px] leading-[24px] flex items-center w-[35.8px] h-[17px]">
                              Boys
                            </div>
                            <div className="absolute top-[2px] left-[0px] rounded-[4px] border-lightgray border-[1px] border-solid box-border w-[20px] h-[20px]" />
                          </div>
                          <div className="absolute w-[calc(100%_-_7.8px)] top-[28px] right-[5.8px] left-[2px] h-[24px] text-base">
                            <div className="absolute top-[3px] left-[26px] leading-[24px] flex items-center w-[33.1px] h-[17px]">
                              Girls
                            </div>
                            <div className="absolute top-[2px] left-[0px] rounded-[4px] border-lightgray border-[1px] border-solid box-border w-[20px] h-[20px]" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute w-full top-[297px] right-[0px] left-[0px] border-[#e5e5e5] border-b-[1px] border-solid box-border h-[238px]">
                      <div className="absolute w-[calc(100%_-_3.8px)] top-[0px] right-[3.8px] left-[0px] h-[48px]">
                        <div className="absolute top-[15px] left-[0px] leading-[24px] font-medium flex items-center w-[106px] h-[17px]">
                          Shop By Price
                        </div>
                        <div className="absolute top-[17px] right-[2.04px] w-[14px] h-[14px]">
                          <div className="absolute top-[9.54px] left-[0.65px] rounded-tl-[1px] rounded-tr-[0px] rounded-br-[0px] rounded-bl-[1px] bg-black w-[9px] h-[2px] [transform:_rotate(-46deg)] [transform-origin:0_0]" />
                          <div className="absolute top-[3.07px] left-[7.09px] rounded-tl-[0px] rounded-tr-[1px] rounded-br-[1px] rounded-bl-[0px] bg-black w-[9px] h-[2px] [transform:_rotate(46deg)] [transform-origin:0_0]" />
                        </div>
                      </div>
                      <div className="absolute top-[53px] left-[-4px] w-[196px] h-[184px] overflow-hidden text-mini">
                        <div className="absolute top-[4px] left-[0px] w-[196px] h-[156px]">
                          <div className="absolute w-[calc(100%_-_7.8px)] top-[0px] right-[5.8px] left-[2px] h-[24px]">
                            <div className="absolute top-[3px] left-[26px] leading-[24px] flex items-center w-[122.9px] h-[17px]">
                              Under ₹ 2 500.00
                            </div>
                            <div className="absolute top-[2px] left-[0px] rounded-[4px] border-lightgray border-[1px] border-solid box-border w-[20px] h-[20px]" />
                          </div>
                          <div className="absolute w-[calc(100%_-_7.8px)] top-[28px] right-[5.8px] left-[2px] h-[48px] text-base">
                            <div className="absolute top-[3px] left-[26px] leading-[24px] flex items-center w-[110.5px] h-[41px]">
                              ₹ 2 501.00 - ₹ 7 500.00
                            </div>
                            <div className="absolute top-[2px] left-[0px] rounded-[4px] border-lightgray border-[1px] border-solid box-border w-[20px] h-[20px]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute h-full top-[0px] right-[0px] bottom-[0px] w-[11px] overflow-hidden">
              <div className="absolute top-[2px] left-[2px] rounded-[7px] bg-black w-[7px] h-[329px] opacity-[0.5]" />
            </div>
          </div>
          <div className="absolute top-[0px] left-[300px] w-[1092px] h-[18013px] text-[#9e3500]">
            <div className="absolute top-[0px] left-[0px] w-[1092px] h-[17706px]">
              <div className="absolute top-[0px] left-[8px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[3.3px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike Air Force 1 Mid '07
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Men's Shoes
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[60.7px] h-[17px]">
                    1 Colour
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[132.4px] h-[17px]">
                    MRP : ₹ 10 795.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle.png"
                />
              </div>
              <div className="absolute top-[0px] left-[372px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[6.9px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike Court Vision Low Next Nature
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Men's Shoes
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[60.7px] h-[17px]">
                    1 Colour
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 4 995.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle1.png"
                />
              </div>
            <Link href={ProductDetailPage} className="no-underline">  <div className="absolute top-[0px] left-[736px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[9.5px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike Air Force 1 PLT.AF.ORM
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Women's Shoes
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[60.7px] h-[17px]">
                    1 Colour
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 8 695.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (2).png"
                />
              </div></Link>
              <div className="absolute top-[551px] left-[8px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[5.1px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike Air Force 1 React
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Men's Shoes
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[60.7px] h-[17px]">
                    1 Colour
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[132.4px] h-[17px]">
                    MRP : ₹ 13 295.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (3).png"
                />
              </div>
              <div className="absolute top-[551px] left-[372px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Promo Exclusion
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[4.9px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Air Jordan 1 Elevate Low
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Women's Shoes
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[60.7px] h-[17px]">
                    1 Colour
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[132.4px] h-[17px]">
                    MRP : ₹ 11 895.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (4).png"
                />
              </div>
              <div className="absolute top-[551px] left-[736px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[10.7px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike Standard Issue
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Women's Basketball Jersey
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[60.7px] h-[17px]">
                    1 Colour
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 2 895.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (5).png"
                />
              </div>
              <div className="absolute top-[1102px] left-[8px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Promo Exclusion
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[7px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike Dunk Low Retro SE
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Men's Shoes
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[60.7px] h-[17px]">
                    1 Colour
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 9 695.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (6).png"
                />
              </div>
              <div className="absolute top-[1102px] left-[372px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Sustainable Materials
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[14.6px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike Dri-FIT UV Hyverse
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Men's Short-Sleeve Graphic Fitness Top
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[60.7px] h-[17px]">
                    1 Colour
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 2 495.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (7).png"
                />
              </div>
              <div className="absolute top-[1102px] left-[736px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[4.1px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike Court Vision Low
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Men's Shoes
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[60.7px] h-[17px]">
                    1 Colour
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 5 695.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (8).png"
                />
              </div>
              <div className="absolute top-[1653px] left-[8px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[11.1px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike Dri-FIT Ready
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Men's Short-Sleeve Fitness Top
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[68.7px] h-[17px]">
                    3 Colours
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 2 495.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (10).png"
                />
              </div>
              <div className="absolute top-[1653px] left-[372px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[18.1px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike One Leak Protection: Period
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Women's Mid-Rise 18cm (approx.) Biker Shorts
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[68.7px] h-[17px]">
                    2 Colours
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 3 395.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (11).png"
                />
              </div>
              <div className="absolute top-[1653px] left-[736px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[6.9px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike Air Force 1 LV8 3
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Older Kids' Shoe
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[60.7px] h-[17px]">
                    1 Colour
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 7 495.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (13).png"
                />
              </div>
              <div className="absolute top-[2204px] left-[8px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[3.6px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike Blazer Low Platform
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Women's Shoes
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[60.7px] h-[17px]">
                    1 Colour
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 8 195.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (14).png"
                />
              </div>
              <div className="absolute top-[2204px] left-[372px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[3.1px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike Air Force 1 '07
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Women's Shoe
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[68.7px] h-[17px]">
                    2 Colours
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 8 195.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (15).png"
                />
              </div>
              <div className="absolute top-[2204px] left-[736px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[10.2px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike Pro Dri-FIT
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Men's Tight-Fit Sleeveless Top
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[60.7px] h-[17px]">
                    1 Colour
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 1 495.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/rect.png"
                />
              </div>
              <div className="absolute top-[2755px] left-[8px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[4.2px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike Dunk Low Retro
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Men's Shoes
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[60.7px] h-[17px]">
                    1 Colour
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 8 695.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/rect (2).png"
                />
              </div>
              <div className="absolute top-[2755px] left-[372px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[3.5px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike Air Max SC
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Women's Shoes
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[68.7px] h-[17px]">
                    2 Colours
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 5 995.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (16).png"
                />
              </div>
              <div className="absolute top-[2755px] left-[736px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[12.1px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike Dri-FIT UV Miler
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Men's Short-Sleeve Running Top
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[60.7px] h-[17px]">
                    1 Colour
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 1 695.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (17).png"
                />
              </div>
              <div className="absolute top-[3306px] left-[8px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[5.4px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike Air Max SYSTM
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Older Kids' Shoes
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[60.7px] h-[17px]">
                    1 Colour
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 6 495.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (18).png"
                />
              </div>
              <div className="absolute top-[3306px] left-[372px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[29.3px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike Alate All U
                      </div>
                      <div className="w-[318.7px] relative text-base leading-[24px] text-gray-200 flex items-center">
                        Women's Light-Support Lightly Lined U-Neck Printed
                        Sports Bra
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[114px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[60.7px] h-[17px]">
                    1 Colour
                  </div>
                  <div className="absolute top-[150px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 2 195.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (19).png"
                />
              </div>
              <div className="absolute top-[3306px] left-[736px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[2.4px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike Court Legacy Lift
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Women's Shoes
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[68.7px] h-[17px]">
                    2 Colours
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 7 495.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (20).png"
                />
              </div>
              <div className="absolute top-[3857px] left-[8px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[22.2px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike Swoosh
                      </div>
                      <div className="w-[325.8px] relative text-base leading-[24px] text-gray-200 flex items-center">
                        Women's Medium-support Padded Sports Bra Tank
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[114px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[68.7px] h-[17px]">
                    2 Colours
                  </div>
                  <div className="absolute top-[150px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 3 095.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/mai.png"
                />
              </div>
              <div className="absolute top-[3857px] left-[372px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[6.5px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike SB Zoom Janoski OG+
                      </div>
                      <div className="relative text-base leading-[24px] text-gray-200">
                        Shoes
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[60.7px] h-[17px]">
                    1 Colour
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 8 595.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (22).png"
                />
              </div>
              <div className="absolute top-[3857px] left-[736px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[9.8px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike Dri-FIT Run Division Rise 365
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Men's Running Tank
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[68.7px] h-[17px]">
                    2 Colours
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 3 495.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (23).png"
                />
              </div>
              <div className="absolute top-[4408px] left-[8px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[17.1px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike Dri-FIT Challenger
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Men's 18cm (approx.) 2-in-1 Versatile Shorts
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[60.7px] h-[17px]">
                    1 Colour
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 2 495.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (24).png"
                />
              </div>
              <div className="absolute top-[4408px] left-[372px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[5.5px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Jordan Series ES
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Men's Shoes
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[68.7px] h-[17px]">
                    2 Colours
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 7 495.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (25).png"
                />
              </div>
              <div className="absolute top-[4408px] left-[736px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[13.9px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike Outdoor Play
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Older Kids' Oversized Woven Jacket
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[60.7px] h-[17px]">
                    1 Colour
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 3 895.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (26).png"
                />
              </div>
              <div className="absolute top-[4959px] left-[8px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[17.4px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike Sportswear Trend
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Older Kids' (Girls') High-waisted Woven Shorts
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[68.7px] h-[17px]">
                    2 Colours
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 2 495.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (27).png"
                />
              </div>
              <div className="absolute top-[4959px] left-[372px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[4.4px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike Blazer Low '77 Jumbo
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Women's Shoes
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[60.7px] h-[17px]">
                    1 Colour
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 8 595.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (28).png"
                />
              </div>
              <div className="absolute top-[4959px] left-[736px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[5.4px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike SB Force 58
                      </div>
                      <div className="relative text-base leading-[24px] text-gray-200">
                        Skate Shoe
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[60.7px] h-[17px]">
                    1 Colour
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 5 995.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (29).png"
                />
              </div>
              <div className="absolute top-[5510px] left-[8px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[47.7px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike Dri-FIT Run Division Challenger
                      </div>
                      <div className="w-[300.3px] relative text-base leading-[24px] text-gray-200 flex items-center">
                        Men's 13cm (approx.) Brief-Lined Running Shorts
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[114px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[68.7px] h-[17px]">
                    2 Colours
                  </div>
                  <div className="absolute top-[150px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 2 495.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (30).png"
                />
              </div>
              <div className="absolute top-[5510px] left-[372px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[9.4px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike Legend Essential 3 Next Nature
                      </div>
                      <div className="relative text-base leading-[24px] text-gray-200">
                        Men's Training Shoes
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[68.7px] h-[17px]">
                    2 Colours
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 4 995.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (31).png"
                />
              </div>
              <div className="absolute top-[5510px] left-[736px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[5.4px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike Air Max SYSTM
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Women's Shoes
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[60.7px] h-[17px]">
                    1 Colour
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 8 595.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (32).png"
                />
              </div>
              <div className="absolute top-[6061px] left-[8px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[13.6px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike Dri-FIT Totality
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Men's 23cm (approx.) Unlined Shorts
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[68.7px] h-[17px]">
                    2 Colours
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 1 795.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (33).png"
                />
              </div>
              <div className="absolute top-[6061px] left-[372px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[8.6px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Serena Williams Design Crew
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Women's Full-zip Top
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[60.7px] h-[17px]">
                    1 Colour
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 5 495.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (34).png"
                />
              </div>
              <div className="absolute top-[6061px] left-[736px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[5.4px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Jordan Why Not .6 PF
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Men's Shoes
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[68.7px] h-[17px]">
                    2 Colours
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[132.4px] h-[17px]">
                    MRP : ₹ 13 995.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (35).png"
                />
              </div>
              <div className="absolute top-[6612px] left-[8px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Promo Exclusion
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[2.1px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Air Jordan 1 Low
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Women's Shoes
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[60.7px] h-[17px]">
                    1 Colour
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 8 295.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (36).png"
                />
              </div>
              <div className="absolute top-[6612px] left-[372px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[12.1px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike Dri-FIT ADV TechKnit Ultra
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Men's Short-Sleeve Running Top
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[60.7px] h-[17px]">
                    1 Colour
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 3 895.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (37).png"
                />
              </div>
              <div className="absolute top-[6612px] left-[736px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[19.4px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike Dri-FIT Form
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Men's 18cm (approx.) Unlined Versatile Shorts
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[68.7px] h-[17px]">
                    2 Colours
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 2 395.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (38).png"
                />
              </div>
              <div className="absolute top-[7163px] left-[8px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Promo Exclusion
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[6px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Air Jordan 1 Mid
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Women's Shoes
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[60.7px] h-[17px]">
                    1 Colour
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[132.4px] h-[17px]">
                    MRP : ₹ 11 495.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (39).png"
                />
              </div>
              <div className="absolute top-[7163px] left-[372px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[14.2px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike Dri-FIT ADV Run Division
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Women's Long-Sleeve Running Top
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[60.7px] h-[17px]">
                    1 Colour
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 5 295.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (40).png"
                />
              </div>
              <div className="absolute top-[7163px] left-[736px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[12.9px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike Yoga
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Women's High-Waisted 7/8 Leggings
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[60.7px] h-[17px]">
                    1 Colour
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 3 795.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (41).png"
                />
              </div>
              <div className="absolute top-[7714px] left-[8px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[13.6px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike Dri-FIT Totality
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Men's 18cm (approx.) Unlined Shorts
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[68.7px] h-[17px]">
                    3 Colours
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 1 795.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (42).png"
                />
              </div>
              <div className="absolute top-[7714px] left-[372px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[12.4px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike Dri-FIT ADV Tour
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Women's Short-sleeve Golf Polo
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[68.7px] h-[17px]">
                    2 Colours
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 3 695.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (43).png"
                />
              </div>
              <div className="absolute top-[7714px] left-[736px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[6.7px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike Tanjun
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Women's Shoes
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[68.7px] h-[17px]">
                    2 Colours
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 4 995.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (44).png"
                />
              </div>
              <div className="absolute top-[8265px] left-[8px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Sustainable Materials
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[14.8px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike Go
                      </div>
                      <div className="w-[333.2px] relative text-base leading-[24px] text-gray-200 flex items-center">
                        Women's Firm-Support High-Waisted Leggings with Pockets
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[114px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[60.7px] h-[17px]">
                    1 Colour
                  </div>
                  <div className="absolute top-[150px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 5 795.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (45).png"
                />
              </div>
              <div className="absolute top-[8265px] left-[372px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        NikeCourt Victory
                      </div>
                      <div className="relative text-base leading-[24px] text-gray-200">
                        Women's Tennis Tank
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[60.7px] h-[17px]">
                    1 Colour
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 1 995.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (46).png"
                />
              </div>
              <div className="absolute top-[8265px] left-[736px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[13.3px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike Alpha
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Women's High-Support Padded Sports Bra
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[60.7px] h-[17px]">
                    1 Colour
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 3 695.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (47).png"
                />
              </div>
              <div className="absolute top-[8816px] left-[8px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Promo Exclusion
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[4.3px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Air Jordan 1 Mid SE
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Men's Shoes
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[60.7px] h-[17px]">
                    1 Colour
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[132.4px] h-[17px]">
                    MRP : ₹ 12 295.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (48).png"
                />
              </div>
              <div className="absolute top-[8816px] left-[372px] w-[348px] h-[533px] text-gray-300">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[12px] left-[0px] flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[12.5px]">
                    <div className="relative leading-[24px] font-medium">
                      Nike Air Max 270 GO
                    </div>
                    <div className="relative leading-[24px] text-gray-200">
                      Baby/Toddler Easy On/Off Shoes
                    </div>
                  </div>
                  <div className="absolute top-[65px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[60.7px] h-[17px]">
                    1 Colour
                  </div>
                  <div className="absolute top-[101px] left-[0px] leading-[28px] font-medium flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 6 995.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (49).png"
                />
              </div>
              <div className="absolute top-[8816px] left-[736px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[13.3px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike Invincible 3 By You
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Custom Men's Road Running Shoes
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[68.7px] h-[17px]">
                    6 Colours
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[132.4px] h-[17px]">
                    MRP : ₹ 19 295.00
                  </div>
                </div>
                <Image
                  className="absolute top-[0px] left-[0px] w-[348px] h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                 src="/Rectangle (50).png"                 />
              </div>
              <div className="absolute top-[9367px] left-[8px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Sustainable Materials
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[14px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike Air Max TW SE
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Men's Shoes
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[60.7px] h-[17px]">
                    1 Colour
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[132.4px] h-[17px]">
                    MRP : ₹ 15 995.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (51).png"
                />
              </div>
              <div className="absolute top-[9367px] left-[372px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[16px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike Invincible 3 By You
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Custom Women's Road Running Shoes
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[68.7px] h-[17px]">
                    6 Colours
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[132.4px] h-[17px]">
                    MRP : ₹ 19 295.00
                  </div>
                </div>
                <Image
                  className="absolute top-[0px] left-[0px] w-[348px] h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (52).png"
                />
              </div>
              <div className="absolute top-[9367px] left-[736px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[6px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike Air Max 90 Futura By You
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Custom Women's Shoes
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[68.7px] h-[17px]">
                    6 Colours
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[132.4px] h-[17px]">
                    MRP : ₹ 17 295.00
                  </div>
                </div>
                <Image
                  className="absolute top-[0px] left-[0px] w-[348px] h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (53).png"
                />
              </div>
              <div className="absolute top-[9918px] left-[8px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[13.3px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike React Infinity 3 By You
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Custom Men's Road Running Shoes
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[68.7px] h-[17px]">
                    5 Colours
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[132.4px] h-[17px]">
                    MRP : ₹ 16 995.00
                  </div>
                </div>
                <Image
                  className="absolute top-[0px] left-[0px] w-[348px] h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (54).png"
                />
              </div>
              <div className="absolute top-[9918px] left-[372px] w-[348px] h-[533px] text-gray-300">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[12px] left-[0px] flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[5.8px]">
                    <div className="relative leading-[24px] font-medium">
                      Nike Air Max 90 SE
                    </div>
                    <div className="relative leading-[24px] text-gray-200">
                      Men's Shoes
                    </div>
                  </div>
                  <div className="absolute top-[65px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[60.7px] h-[17px]">
                    1 Colour
                  </div>
                  <div className="absolute top-[101px] left-[0px] leading-[28px] font-medium flex items-center w-[132.4px] h-[17px]">
                    MRP : ₹ 12 795.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (55).png"
                />
              </div>
              <div className="absolute top-[9918px] left-[736px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[5.8px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike Blazer Mid '77 Unlocked By You
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Custom Men's Shoes
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[68.7px] h-[17px]">
                    9 Colours
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[132.4px] h-[17px]">
                    MRP : ₹ 13 295.00
                  </div>
                </div>
                <Image
                  className="absolute top-[0px] left-[0px] w-[348px] h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (56).png"
                />
              </div>
              <div className="absolute top-[10469px] left-[8px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[13.3px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike React Infinity 3 By You
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Custom Men's Road Running Shoes
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[60.7px] h-[17px]">
                    1 Colour
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[132.4px] h-[17px]">
                    MRP : ₹ 16 995.00
                  </div>
                </div>
                <Image
                  className="absolute top-[0px] left-[0px] w-[348px] h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (57).png"
                />
              </div>
              <div className="absolute top-[10469px] left-[372px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[5.8px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike Blazer Mid '77 Unlocked By You
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Custom Women's Shoes
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[68.7px] h-[17px]">
                    8 Colours
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[132.4px] h-[17px]">
                    MRP : ₹ 13 295.00
                  </div>
                </div>
                <Image
                  className="absolute top-[0px] left-[0px] w-[348px] h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (58).png"
                />
              </div>
              <div className="absolute top-[10469px] left-[736px] w-[348px] h-[533px] text-gray-300">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[12px] left-[0px] flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[15.6px]">
                    <div className="relative leading-[24px] font-medium">
                      Nike Pegasus Trail 4 GORE-TEX
                    </div>
                    <div className="relative leading-[24px] text-gray-200">
                      Men's Waterproof Trail-Running Shoes
                    </div>
                  </div>
                  <div className="absolute top-[65px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[60.7px] h-[17px]">
                    1 Colour
                  </div>
                  <div className="absolute top-[101px] left-[0px] leading-[28px] font-medium flex items-center w-[132.4px] h-[17px]">
                    MRP : ₹ 14 995.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (59).png"
                />
              </div>
              <div className="absolute top-[11020px] left-[8px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[16px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike React Infinity 3 By You
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Custom Women's Road Running Shoes
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[68.7px] h-[17px]">
                    6 Colours
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[132.4px] h-[17px]">
                    MRP : ₹ 16 995.00
                  </div>
                </div>
                <Image
                  className="absolute top-[0px] left-[0px] w-[348px] h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (60).png"
                />
              </div>
              <div className="absolute top-[11020px] left-[372px] w-[348px] h-[533px] text-gray-300">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[12px] left-[0px] flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[0.4px]">
                    <div className="relative leading-[24px] font-medium">
                      Nike Wildhorse 8
                    </div>
                    <div className="relative text-base leading-[24px] text-gray-200">
                      Women's Trail Running Shoes
                    </div>
                  </div>
                  <div className="absolute top-[65px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[68.7px] h-[17px]">
                    2 Colours
                  </div>
                  <div className="absolute top-[101px] left-[0px] leading-[28px] font-medium flex items-center w-[132.4px] h-[17px]">
                    MRP : ₹ 11 895.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (61).png"
                />
              </div>
              <div className="absolute top-[11020px] left-[736px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Member Access
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[5.4px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Air Jordan 1 Mid SE Craft
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Men's Shoes
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[60.7px] h-[17px]">
                    1 Colour
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[132.4px] h-[17px]">
                    MRP : ₹ 12 295.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (62).png"
                />
              </div>
              <div className="absolute top-[11571px] left-[8px] w-[348px] h-[533px] text-gray-300">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[12px] left-[0px] flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[8.6px]">
                    <div className="relative leading-[24px] font-medium">
                      Air Jordan XXXVII Low PF
                    </div>
                    <div className="relative leading-[24px] text-gray-200">
                      Men's Basketball Shoes
                    </div>
                  </div>
                  <div className="absolute top-[65px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[60.7px] h-[17px]">
                    1 Colour
                  </div>
                  <div className="absolute top-[101px] left-[0px] leading-[28px] font-medium flex items-center w-[132.4px] h-[17px]">
                    MRP : ₹ 16 295.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (63).png"
                />
              </div>
              <div className="absolute top-[11571px] left-[372px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Member Access
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[8.3px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Zion 2 PF
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Men's Basketball Shoes
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[60.7px] h-[17px]">
                    1 Colour
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[132.4px] h-[17px]">
                    MRP : ₹ 10 795.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (64).png"
                />
              </div>
              <div className="absolute top-[11571px] left-[736px] w-[348px] h-[533px] text-gray-300">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[12px] left-[0px] flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[11.3px]">
                    <div className="relative leading-[24px] font-medium">
                      Nike Gripknit Phantom GX Elite Fusion FG
                    </div>
                    <div className="relative leading-[24px] text-gray-200">
                      Firm-Ground Football Boot
                    </div>
                  </div>
                  <div className="absolute top-[65px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[60.7px] h-[17px]">
                    1 Colour
                  </div>
                  <div className="absolute top-[101px] left-[0px] leading-[28px] font-medium flex items-center w-[132.4px] h-[17px]">
                    MRP : ₹ 21 995.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (65).png"
                />
              </div>
              <div className="absolute top-[12122px] left-[8px] w-[348px] h-[533px] text-gray-300">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[12px] left-[0px] flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[5.8px]">
                    <div className="relative leading-[24px] font-medium">
                      Nike Air Max 97 SE
                    </div>
                    <div className="relative leading-[24px] text-gray-200">
                      Men's Shoes
                    </div>
                  </div>
                  <div className="absolute top-[65px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[60.7px] h-[17px]">
                    1 Colour
                  </div>
                  <div className="absolute top-[101px] left-[0px] leading-[28px] font-medium flex items-center w-[132.4px] h-[17px]">
                    MRP : ₹ 17 495.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (66).png"
                />
              </div>
              <div className="absolute top-[12122px] left-[372px] w-[348px] h-[533px] text-gray-300">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[12px] left-[0px] flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[10.6px]">
                    <div className="relative leading-[24px] font-medium">
                      Nike Pegasus Trail 4
                    </div>
                    <div className="relative leading-[24px] text-gray-200">
                      Men's Trail-Running Shoes
                    </div>
                  </div>
                  <div className="absolute top-[65px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[60.7px] h-[17px]">
                    1 Colour
                  </div>
                  <div className="absolute top-[101px] left-[0px] leading-[28px] font-medium flex items-center w-[132.4px] h-[17px]">
                    MRP : ₹ 11 595.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (67).png"
                />
              </div>
              <div className="absolute top-[12122px] left-[736px] w-[348px] h-[533px] text-gray-300">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[12px] left-[0px] flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[13.8px]">
                    <div className="relative leading-[24px] font-medium">
                      Nike Air Max 270 GO
                    </div>
                    <div className="relative leading-[24px] text-gray-200">
                      Younger Kids' Easy On/Off Shoes
                    </div>
                  </div>
                  <div className="absolute top-[65px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[60.7px] h-[17px]">
                    1 Colour
                  </div>
                  <div className="absolute top-[101px] left-[0px] leading-[28px] font-medium flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 7 995.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (68).png"
                />
              </div>
              <div className="absolute top-[12673px] left-[8px] w-[348px] h-[533px] text-gray-300">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[12px] left-[0px] flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[5.7px]">
                    <div className="relative leading-[24px] font-medium">
                      Jordan Delta 3 Low SE
                    </div>
                    <div className="relative leading-[24px] text-gray-200">
                      Women's Shoes
                    </div>
                  </div>
                  <div className="absolute top-[65px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[60.7px] h-[17px]">
                    1 Colour
                  </div>
                  <div className="absolute top-[101px] left-[0px] leading-[28px] font-medium flex items-center w-[132.4px] h-[17px]">
                    MRP : ₹ 12 795.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (69).png"
                />
              </div>
              <div className="absolute top-[12673px] left-[372px] w-[348px] h-[533px] text-gray-300">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[12px] left-[0px] flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[10.6px]">
                    <div className="relative leading-[24px] font-medium">
                      Nike Zegama
                    </div>
                    <div className="relative leading-[24px] text-gray-200">
                      Men's Trail-Running Shoes
                    </div>
                  </div>
                  <div className="absolute top-[65px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[68.7px] h-[17px]">
                    2 Colours
                  </div>
                  <div className="absolute top-[101px] left-[0px] leading-[28px] font-medium flex items-center w-[132.4px] h-[17px]">
                    MRP : ₹ 13 995.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (70).png"
                />
              </div>
              <div className="absolute top-[12673px] left-[736px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Member Access
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[9px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        NikeCourt Air Zoom Vapor 9.5 Tour Premium
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Men's Tennis Shoes
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[60.7px] h-[17px]">
                    1 Colour
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[132.4px] h-[17px]">
                    MRP : ₹ 15 995.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (71).png"
                />
              </div>
              <div className="absolute top-[13224px] left-[8px] w-[348px] h-[533px] text-gray-300">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[12px] left-[0px] flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[16.5px]">
                    <div className="relative leading-[24px] font-medium">
                      Nike Sportswear
                    </div>
                    <div className="relative leading-[24px] text-gray-200">
                      Women's Ribbed Jersey Short-Sleeve Top
                    </div>
                  </div>
                  <div className="absolute top-[65px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[68.7px] h-[17px]">
                    2 Colours
                  </div>
                  <div className="absolute top-[101px] left-[0px] leading-[28px] font-medium flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 3 295.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (72).png"
                />
              </div>
              <div className="absolute top-[13224px] left-[372px] w-[348px] h-[533px] text-gray-300">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[12px] left-[0px] flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[19.2px]">
                    <div className="relative leading-[24px] font-medium">
                      Nike Sportswear
                    </div>
                    <div className="relative leading-[24px] text-gray-200">
                      Women's High-Waisted Ribbed Jersey Trousers
                    </div>
                  </div>
                  <div className="absolute top-[65px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[60.7px] h-[17px]">
                    1 Colour
                  </div>
                  <div className="absolute top-[101px] left-[0px] leading-[28px] font-medium flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 3 995.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (73).png"
                />
              </div>
              <div className="absolute top-[13224px] left-[736px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Sustainable Materials
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[24px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike Air
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Women's Jumpsuit
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[60.7px] h-[17px]">
                    1 Colour
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 6 295.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (74).png"
                />
              </div>
              <div className="absolute top-[13775px] left-[8px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Sustainable Materials
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[9.5px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike Air
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Women's Woven Jacket
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[60.7px] h-[17px]">
                    1 Colour
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 7 295.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (75).png"
                />
              </div>
              <div className="absolute top-[13775px] left-[372px] w-[348px] h-[533px] text-gray-300">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[12px] left-[0px] flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[10.1px]">
                    <div className="relative leading-[24px] font-medium">
                      Nike Sportswear
                    </div>
                    <div className="relative leading-[24px] text-gray-200">
                      Older Kids' (Girls') T-Shirt
                    </div>
                  </div>
                  <div className="absolute top-[65px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[60.7px] h-[17px]">
                    1 Colour
                  </div>
                  <div className="absolute top-[101px] left-[0px] leading-[28px] font-medium flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 1 295.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (76).png"
                />
              </div>
              <div className="absolute top-[13775px] left-[736px] w-[348px] h-[533px] text-gray-300">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[12px] left-[0px] flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[16.2px]">
                    <div className="relative leading-[24px] font-medium">
                      Nike Sportswear
                    </div>
                    <div className="relative leading-[24px] text-gray-200">
                      Women's High-Waisted Ribbed Jersey Shorts
                    </div>
                  </div>
                  <div className="absolute top-[65px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[60.7px] h-[17px]">
                    1 Colour
                  </div>
                  <div className="absolute top-[101px] left-[0px] leading-[28px] font-medium flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 2 495.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (77).png"
                />
              </div>
              <div className="absolute top-[14326px] left-[8px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[6.7px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Jordan Series
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Women's Shoes
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[60.7px] h-[17px]">
                    1 Colour
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 7 495.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (78).png"
                />
              </div>
              <div className="absolute top-[14326px] left-[372px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[8.6px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike Brasilia JDI
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Kids' Mini Backpack (11L)
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[68.7px] h-[17px]">
                    2 Colours
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 1 595.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (79).png"
                />
              </div>
              <div className="absolute top-[14326px] left-[736px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[3.7px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike Air Max Excee
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Women's Shoes
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[60.7px] h-[17px]">
                    1 Colour
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 7 995.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (80).png"
                />
              </div>
              <div className="absolute top-[14877px] left-[8px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Promo Exclusion
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[5.2px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike Air Force 1 Low Retro
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Men's Shoes
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[60.7px] h-[17px]">
                    1 Colour
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[132.4px] h-[17px]">
                    MRP : ₹ 13 995.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (81).png"
                />
              </div>
              <div className="absolute top-[14877px] left-[372px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[4.7px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike Sunray Protect 2
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Baby/Toddler Sandals
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[68.7px] h-[17px]">
                    2 Colours
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 2 495.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (82).png"
                />
              </div>
              <div className="absolute top-[14877px] left-[736px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike City Rep TR
                      </div>
                      <div className="relative text-base leading-[24px] text-gray-200">
                        Men's Training Shoes
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[60.7px] h-[17px]">
                    1 Colour
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 4 995.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (83).png"
                />
              </div>
              <div className="absolute top-[15428px] left-[8px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[3.6px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike Dri-FIT AeroBill
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Women's Golf Visor
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[68.7px] h-[17px]">
                    2 Colours
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 1 295.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (84).png"
                />
              </div>
              <div className="absolute top-[15428px] left-[372px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[10.1px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike SuperRep Go 3 Next Nature Flyknit
                      </div>
                      <div className="relative text-base leading-[24px] text-gray-200">
                        Men's Training Shoes
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[60.7px] h-[17px]">
                    1 Colour
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 8 895.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (85).png"
                />
              </div>
              <div className="absolute top-[15428px] left-[736px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[5.4px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike Dri-FIT Academy 23
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Women's Football Shorts
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[60.7px] h-[17px]">
                    1 Colour
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 1 595.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (86).png"
                />
              </div>
              <div className="absolute top-[15979px] left-[8px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[5.4px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike Air Max SYSTM
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Men's Shoes
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[60.7px] h-[17px]">
                    1 Colour
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 8 595.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (87).png"
                />
              </div>
              <div className="absolute top-[15979px] left-[372px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[23.1px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike Dri-FIT Academy
                      </div>
                      <div className="w-[324.9px] relative text-base leading-[24px] text-gray-200 flex items-center">
                        Older Kids' Woven Football Tracksuit Bottoms (Stock)
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[114px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[60.7px] h-[17px]">
                    1 Colour
                  </div>
                  <div className="absolute top-[150px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 2 195.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (88).png"
                />
              </div>
              <div className="absolute top-[15979px] left-[736px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Sustainable Materials
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[29px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        NikeCourt Legacy
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Men's Shoes
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[68.7px] h-[17px]">
                    2 Colours
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 5 695.00
                  </div>
                </div>
                <Image
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[348px] object-cover"
                  width={348}
                  height={348}
                  alt=""
                  src="/Rectangle (89).png"
                />
              </div>
              <div className="absolute top-[16530px] left-[8px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[1.6px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike SB Kearny
                      </div>
                      <div className="relative text-base leading-[24px] text-gray-200">
                        Skate Cargo Trousers
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[60.7px] h-[17px]">
                    1 Colour
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 4 995.00
                  </div>
                </div>
                <div className="absolute w-full top-[0px] right-[0px] left-[0px] bg-whitesmoke h-[348px]" />
              </div>
              <div className="absolute top-[16530px] left-[372px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Promo Exclusion
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[6.6px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Jordan x A Ma Maniére
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Men's Jacquard Hoodie
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[68.7px] h-[17px]">
                    2 Colours
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 8 995.00
                  </div>
                </div>
                <div className="absolute w-full top-[0px] right-[0px] left-[0px] bg-whitesmoke h-[348px]" />
              </div>
              <div className="absolute top-[16530px] left-[736px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[7.1px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Heritage Waistpack
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[60.7px] h-[17px]">
                    1 Colour
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 1 395.00
                  </div>
                </div>
                <div className="absolute w-full top-[0px] right-[0px] left-[0px] bg-whitesmoke h-[348px]" />
              </div>
              <div className="absolute top-[17081px] left-[8px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[9.1px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike Indy
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Women's Bra Tank Top
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[68.7px] h-[17px]">
                    2 Colours
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 2 895.00
                  </div>
                </div>
                <div className="absolute w-full top-[0px] right-[0px] left-[0px] bg-whitesmoke h-[348px]" />
              </div>
              <div className="absolute top-[17081px] left-[372px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[8.3px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Jordan 23 Engineered Classic99
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Cap
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[60.7px] h-[17px]">
                    1 Colour
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 1 695.00
                  </div>
                </div>
                <div className="absolute w-full top-[0px] right-[0px] left-[0px] bg-whitesmoke h-[348px]" />
              </div>
              <div className="absolute top-[17081px] left-[736px] w-[348px] h-[533px]">
                <div className="absolute top-[348px] left-[0px] w-[348px] h-[185px]">
                  <div className="absolute top-[9px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium">
                      Just In
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[3.3px] text-gray-300">
                      <div className="relative leading-[24px] font-medium">
                        Nike Victori One
                      </div>
                      <div className="relative leading-[24px] text-gray-200">
                        Women's Slides
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[90px] left-[0px] leading-[24px] text-gray-200 text-center flex items-center justify-center w-[68.7px] h-[17px]">
                    2 Colours
                  </div>
                  <div className="absolute top-[126px] left-[0px] leading-[28px] font-medium text-gray-300 flex items-center w-[123.5px] h-[17px]">
                    MRP : ₹ 2 095.00
                  </div>
                </div>
                <div className="absolute w-full top-[0px] right-[0px] left-[0px] bg-whitesmoke h-[348px]" />
              </div>
              <div className="absolute h-[calc(100%_-_17642px)] w-full top-[17642px] right-[0px] bottom-[0px] left-[0px] bg-[rgba(255,255,255,0.5)]">
                <div className="absolute top-[17px] left-[530px] rounded-[32px] border-black border-[1px] border-solid box-border w-[32px] h-[32px]" />
              </div>
            </div>
            <div className="absolute top-[17754px] left-[0px] border-[#e5e5e5] border-t-[1px] border-solid box-border w-[1092px] h-[259px] text-center text-[19px] text-gray-300">
              <div className="absolute top-[62px] left-[0px] leading-[24px] font-medium flex items-center justify-center w-[171.4px] h-[22px]">
                Related Categories
              </div>
              <div className="absolute top-[85px] left-[calc(50%_-_546px)] w-[1092px] h-[174px] text-xs font-[Helvetica]">
                <div className="absolute top-[24px] left-[0px] shadow-[0px_1px_0px_#ccc_inset,_-1px_0px_0px_#ccc_inset,_0px_-1px_0px_#ccc_inset,_1px_0px_0px_#ccc_inset] rounded-[20px] bg-[rgba(255,255,255,0)] flex flex-row items-start justify-start py-[8px] pl-[23px] pr-[22.8px]">
                  <div className="relative leading-[18px]">
                    Best Selling Products
                  </div>
                </div>
                <div className="absolute top-[24px] left-[168.83px] shadow-[0px_1px_0px_#ccc_inset,_-1px_0px_0px_#ccc_inset,_0px_-1px_0px_#ccc_inset,_1px_0px_0px_#ccc_inset] rounded-[20px] bg-[rgba(255,255,255,0)] flex flex-row items-start justify-start py-[8px] pl-[21px] pr-[21.4px]">
                  <div className="relative leading-[18px]">Best Shoes</div>
                </div>
                <div className="absolute top-[24px] left-[281.19px] shadow-[0px_1px_0px_#ccc_inset,_-1px_0px_0px_#ccc_inset,_0px_-1px_0px_#ccc_inset,_1px_0px_0px_#ccc_inset] rounded-[20px] bg-[rgba(255,255,255,0)] flex flex-row items-start justify-start py-[8px] pl-[22px] pr-[22.3px]">
                  <div className="relative leading-[18px]">
                    New Basketball Shoes
                  </div>
                </div>
                <div className="absolute top-[24px] left-[454.5px] shadow-[0px_1px_0px_#ccc_inset,_-1px_0px_0px_#ccc_inset,_0px_-1px_0px_#ccc_inset,_1px_0px_0px_#ccc_inset] rounded-[20px] bg-[rgba(255,255,255,0)] flex flex-row items-start justify-start py-[8px] pl-[21px] pr-[22.6px]">
                  <div className="relative leading-[18px]">
                    New Football Shoes
                  </div>
                </div>
                <div className="absolute top-[24px] left-[614.06px] shadow-[0px_1px_0px_#ccc_inset,_-1px_0px_0px_#ccc_inset,_0px_-1px_0px_#ccc_inset,_1px_0px_0px_#ccc_inset] rounded-[20px] bg-[rgba(255,255,255,0)] flex flex-row items-start justify-start py-[8px] pl-[22px] pr-[20.8px]">
                  <div className="relative leading-[18px]">New Men's Shoes</div>
                </div>
                <div className="absolute top-[24px] left-[761.89px] shadow-[0px_1px_0px_#ccc_inset,_-1px_0px_0px_#ccc_inset,_0px_-1px_0px_#ccc_inset,_1px_0px_0px_#ccc_inset] rounded-[20px] bg-[rgba(255,255,255,0)] flex flex-row items-start justify-start py-[8px] pl-[21px] pr-[22.1px]">
                  <div className="relative leading-[18px]">
                    New Running Shoes
                  </div>
                </div>
                <div className="absolute top-[24px] left-[922.97px] shadow-[0px_1px_0px_#ccc_inset,_-1px_0px_0px_#ccc_inset,_0px_-1px_0px_#ccc_inset,_1px_0px_0px_#ccc_inset] rounded-[20px] bg-[rgba(255,255,255,0)] flex flex-row items-start justify-start py-[8px] pl-[22px] pr-[21.9px]">
                  <div className="relative leading-[18px]">
                    Best Men's Shoes
                  </div>
                </div>
                <div className="absolute top-[68px] left-[0px] shadow-[0px_1px_0px_#ccc_inset,_-1px_0px_0px_#ccc_inset,_0px_-1px_0px_#ccc_inset,_1px_0px_0px_#ccc_inset] rounded-[20px] bg-[rgba(255,255,255,0)] flex flex-row items-start justify-start py-[8px] pl-[21px] pr-[22.6px]">
                  <div className="relative leading-[18px]">
                    New Jordan Shoes
                  </div>
                </div>
                <div className="absolute top-[68px] left-[153.64px] shadow-[0px_1px_0px_#ccc_inset,_-1px_0px_0px_#ccc_inset,_0px_-1px_0px_#ccc_inset,_1px_0px_0px_#ccc_inset] rounded-[20px] bg-[rgba(255,255,255,0)] flex flex-row items-start justify-start py-[8px] pl-[22px] pr-[22.1px]">
                  <div className="relative leading-[18px]">
                    Best Women's Shoes
                  </div>
                </div>
                <div className="absolute top-[68px] left-[320.75px] shadow-[0px_1px_0px_#ccc_inset,_-1px_0px_0px_#ccc_inset,_0px_-1px_0px_#ccc_inset,_1px_0px_0px_#ccc_inset] rounded-[20px] bg-[rgba(255,255,255,0)] flex flex-row items-start justify-start py-[8px] pl-[22px] pr-[22.5px]">
                  <div className="relative leading-[18px]">{`Best Training & Gym`}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[16px] left-[0px] bg-white w-[1440px] h-[51px] text-[24px]">
          <div className="absolute top-[0px] left-[48px] w-[1344px] h-[36px]">
            <div className="absolute bottom-[-0.01px] left-[0px] flex flex-row items-start justify-start pt-[0.8px] pb-[0.4px] pl-[0px] pr-[1009.6px]">
              <div className="relative leading-[31.2px] font-medium">
                New (500)
              </div>
            </div>
            <div className="absolute bottom-[0px] left-[1119.63px] flex flex-row items-start justify-start text-center text-base">
              <div className="w-[137.9px] relative h-[28px]">
                <div className="absolute top-[0px] left-[0px] leading-[28px]">
                  Hide Filters
                </div>
                <Image
                  className="absolute top-[calc(50%_-_11px)] left-[88.91px] w-[24px] h-[24px] overflow-hidden"
                  width={24}
                  height={24}
                  alt=""
                  src="/filter.svg"
                />
              </div>
              <div className="bg-white flex flex-row items-start justify-start text-right text-mini">
                <div className="w-[86.5px] relative bg-white h-[28px]">
                  <div className="absolute top-[5px] left-[6px] leading-[28px] flex items-center w-[52.7px] h-[17px]">
                    Sort By
                  </div>
                  <div className="absolute top-[8px] left-[66.47px] w-[14px] h-[14px]">
                    <div className="absolute top-[3.07px] left-[2.09px] rounded-tl-[1px] rounded-tr-[0px] rounded-br-[0px] rounded-bl-[1px] bg-black w-[9px] h-[2px] [transform:_rotate(46deg)] [transform-origin:0_0]" />
                    <div className="absolute top-[9.54px] left-[5.65px] rounded-tl-[0px] rounded-tr-[1px] rounded-br-[1px] rounded-bl-[0px] bg-black w-[9px] h-[2px] [transform:_rotate(-46deg)] [transform-origin:0_0]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-full top-[18251px] right-[0px] left-[0px] bg-gray-300 h-[331px] text-xs text-gray-100">
        <div className="absolute top-[0px] left-[calc(50%_-_720px)] w-[1440px] h-[331px]">
          <div className="absolute top-[40px] left-[34px] w-[1372px] h-[213px]">
            <div className="absolute top-[0px] left-[0px] w-[1029px] h-[213px]">
              <div className="absolute top-[0px] left-[6px] w-[245.3px] h-[169.6px] overflow-hidden text-3xs text-white font-helvetica-neue">
                <div className="absolute top-[0px] left-[0px] w-[245.3px] h-[166.6px]">
                  <div className="absolute top-[8px] left-[0px] leading-[32.67px] uppercase flex items-center w-[68.6px] h-[16px]">
                    Find A Store
                  </div>
                  <div className="absolute top-[43.66px] left-[0px] leading-[32.67px] uppercase flex items-center w-[98.2px] h-[16px]">
                    Become A Member
                  </div>
                  <div className="absolute top-[79.31px] left-[0px] leading-[32.67px] uppercase flex items-center w-[98.2px] h-[16px]">
                    Sign Up for Email
                  </div>
                  <div className="absolute top-[110.97px] left-[0px] leading-[24px] text-center flex items-center justify-center w-[93.5px] h-[16px]">
                    Send Us Feedback
                  </div>
                  <div className="absolute top-[141.97px] left-[0px] text-[9px] leading-[32.67px] uppercase flex items-center w-[104.4px] h-[16px]">
                    Student Discounts
                  </div>
                </div>
              </div>
              <div className="absolute top-[0px] left-[263.25px] w-[245.3px] h-[213px] overflow-hidden">
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
              <div className="absolute top-[17px] left-[77.28px] leading-[12px] text-gray-100 flex items-center w-[213.6px] h-[17px]">
                © 2023 Nike, Inc. All Rights Reserved
              </div>
            </div>
            <div className="absolute top-[16px] left-[686px] w-[680px] h-[46px] text-right text-gray-100">
              <div className="absolute top-[15px] left-[291.64px] leading-[28px] text-center flex items-center justify-center w-[40.3px] h-[17px]">
                Guides
              </div>
              <div className="absolute top-[15px] left-[359.7px] leading-[28px] flex items-center w-[76.8px] h-[17px]">
                Terms of Sale
              </div>
              <div className="absolute top-[15px] left-[464.33px] leading-[28px] flex items-center w-[73.7px] h-[17px]">
                Terms of Use
              </div>
              <div className="absolute top-[15px] left-[565.84px] leading-[28px] flex items-center w-[106.4px] h-[17px]">
                Nike Privacy Policy
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProductsPage;