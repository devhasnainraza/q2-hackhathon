import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import FrameComponent from "../components/Frame-component";
import Content from "../components/Content";
import FeaturedImage from "../components/Featured-image";
import Running from "../components/Running";
import TopImageContainer from "../components/Top-image-container";
import FooterLinks from "../components/Footer-links";

const HomePage: NextPage = () => {
  return (
    <div className="w-full relative bg-white flex flex-col items-start justify-start gap-12 leading-[normal] tracking-[normal] text-left text-[13px] text-gray-300 font-helvetica-neue mq750:gap-6">
      <div className="h-4 absolute !m-[0] top-[10px] left-[-14665.9px] leading-[26px] font-medium flex items-center min-w-[127.1px]">
        Skip to main content
      </div>
      <FrameComponent />
      <section className="self-stretch flex flex-row items-start justify-start py-0 px-12 box-border max-w-full mq750:pl-6 mq750:pr-6 mq750:box-border">
        <Image
          className="h-[700px] flex-1 relative max-w-full overflow-hidden object-cover"
          loading="lazy"
          width={1344}
          height={700}
          alt=""
          src="/image@2x.png"
        />
      </section>
      <Content />
      <FeaturedImage />
      <Running />
      <div className="absolute !m-[0] top-[-29px] left-[0px] text-[72px] leading-[60px] uppercase font-medium z-[2] mq450:text-24xl mq450:leading-[36px] mq1050:text-[58px] mq1050:leading-[48px]" />
      <div className="absolute !m-[0] top-[-11px] left-[0px] text-base leading-[24px] z-[3]" />
      <section className="self-stretch flex flex-col items-start justify-start gap-[27px] max-w-full text-left text-4xl text-gray-300 font-helvetica-neue">
        <div className="flex flex-row items-start justify-start py-0 pl-12 pr-[47px]">
          <h3 className="m-0 relative text-inherit leading-[28px] font-medium font-[inherit] inline-block min-w-[91.9px] mq450:text-lg mq450:leading-[22px]">
            Gear Up
          </h3>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start max-w-full text-mini">
          <div className="w-[1440px] flex flex-col items-start justify-start gap-[773px] max-w-full mq450:gap-[193px] mq750:gap-[386px]">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-12 pr-[54px] box-border max-w-full mq750:pl-6 mq750:pr-[27px] mq750:box-border">
              <div className="flex-1 flex flex-row items-start justify-start gap-[66px] max-w-full lg:flex-wrap mq450:gap-4 mq750:gap-[33px]">
                <div className="flex-1 flex flex-col items-start justify-start gap-[126px] min-w-[429px] max-w-full mq450:gap-[31px] mq750:gap-[63px] mq750:min-w-full">
                  <div className="self-stretch flex flex-row items-start justify-end max-w-full">
                    <div className="w-[612px] flex flex-row items-end justify-start gap-3 max-w-full lg:flex-1 mq750:flex-wrap">
                      <TopImageContainer
                        image="/image-6@2x.png"
                        nikeDriFITADVTechKnitUltra="Nike Dri-FIT ADV TechKnit Ultra"
                        prop="₹ 3 895"
                        mensShortSleeveRunningTop="Men's Short-Sleeve Running Top"
                      />
                      <div className="flex-1 flex flex-col items-start justify-start gap-[21px] min-w-[195px]">
                        <div className="self-stretch flex flex-col items-end justify-start gap-3">
                          <div className="flex flex-row items-start justify-end py-0 px-[42px] mq450:pl-5 mq450:pr-5 mq450:box-border">
                            <div className="flex flex-row items-start justify-start gap-[12.5px]">
                              <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
                                <div className="relative leading-[24px] font-medium inline-block min-w-[84px]">
                                  Shop Men's
                                </div>
                              </div>
                              <Image
                                className="h-12 w-12 relative rounded-3xl"
                                loading="lazy"
                                width={48}
                                height={48}
                                alt=""
                                src="/frame-7.svg"
                              />
                              <Image
                                className="h-12 w-12 relative rounded-3xl"
                                loading="lazy"
                                width={48}
                                height={48}
                                alt=""
                                src="/frame-8.svg"
                              />
                            </div>
                          </div>
                          <Image
                            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                            loading="lazy"
                            width={300}
                            height={300}
                            alt=""
                            src="/image-7@2x.png"
                          />
                        </div>
                        <div className="w-[284.2px] flex flex-row items-start justify-start gap-[31.7px] mq450:gap-4">
                          <div className="flex-1 flex flex-col items-start justify-start">
                            <div className="relative leading-[24px] font-medium">
                              Nike Dri-FIT Challenger
                            </div>
                            <div className="relative text-base leading-[24px] text-gray-200 z-[1]">
                              Men's 18cm (approx.) 2-in-1 Versatile Shorts
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 text-right">
                            <div className="self-stretch relative leading-[24px] font-medium inline-block min-w-[53.7px]">
                              ₹ 2 495
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="m-0 relative text-3xl leading-[28px] font-medium font-[inherit] inline-block min-w-[112.5px] mq450:text-lg mq450:leading-[22px]">
                    Don't Miss
                  </h3>
                </div>
                <div className="w-[612px] flex flex-row items-end justify-start gap-3 max-w-full lg:flex-1 mq750:flex-wrap mq750:min-w-full">
                  <TopImageContainer
                    image="/image-8@2x.png"
                    topNameGap="23.5px"
                    nikeDriFITADVTechKnitUltra="Nike Dri-FIT ADV Run Division"
                    nikeDriFITADVWidth="unset"
                    prop="₹ 5 295"
                    mensShortSleeveRunningTop="Women's Long-Sleeve Running Top"
                    mensShortSleeveRunningWidth="224.4px"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start gap-[21px] min-w-[195px]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-3">
                      <div className="flex flex-row items-start justify-start py-0 px-[30px]">
                        <div className="flex flex-row items-start justify-start gap-[12.9px]">
                          <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
                            <div className="relative leading-[24px] font-medium inline-block min-w-[107px]">
                              Shop Women's
                            </div>
                          </div>
                          <Image
                            className="h-12 w-12 relative rounded-3xl"
                            loading="lazy"
                            width={48}
                            height={48}
                            alt=""
                            src="/frame-7.svg"
                          />
                          <Image
                            className="h-12 w-12 relative rounded-3xl"
                            loading="lazy"
                            width={48}
                            height={48}
                            alt=""
                            src="/frame-8.svg"
                          />
                        </div>
                      </div>
                      <Image
                        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                        loading="lazy"
                        width={300}
                        height={300}
                        alt=""
                        src="/image-9@2x.png"
                      />
                    </div>
                    <div className="w-[284.2px] flex flex-col items-start justify-start">
                      <div className="self-stretch flex flex-row items-start justify-between gap-5">
                        <div className="relative leading-[24px] font-medium inline-block min-w-[67px]">
                          Nike Fast
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 text-right">
                          <div className="self-stretch relative leading-[24px] font-medium inline-block min-w-[53.7px]">
                            ₹ 3 795
                          </div>
                        </div>
                      </div>
                      <div className="w-[224.4px] relative leading-[24px] text-gray-200 flex items-center z-[1] mt-[-3px]">
                        Women's Mid-Rise 7/8 Running Leggings with Pockets
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[73px] max-w-full text-[52px] mq450:gap-[18px] mq750:gap-9">
              <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[22px] pr-5 box-border max-w-full text-center">
                <div className="flex flex-col items-start justify-start gap-[30px] max-w-full">
                  <div className="self-stretch flex flex-col items-start justify-start gap-6">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[9px] pr-2.5">
                      <h1 className="m-0 flex-1 relative text-inherit leading-[60px] uppercase font-medium font-[inherit] mq450:text-[31px] mq450:leading-[36px] mq1050:text-[42px] mq1050:leading-[48px]">
                        FLIGHT ESSENTIALS
                      </h1>
                    </div>
                    <div className="self-stretch relative text-mini leading-[24px]">
                      Your built-to-last, all-week wears—but with style only
                      Jordan Brand can deliver.
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[221px] pr-[230px] text-mini text-white mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[110px] mq750:pr-[115px] mq750:box-border">
                    <div className="flex-1 rounded-11xl bg-gray-300 overflow-hidden flex flex-row items-start justify-start py-[7.5px] px-[21px]">
                      <div className="flex-1 relative leading-[24px] font-medium">
                        Shop
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-[42px] box-border max-w-full text-4xl mq750:pl-[21px] mq750:pr-[21px] mq750:box-border">
                <div className="flex-1 flex flex-col items-start justify-start gap-[25px] max-w-full">
                  <div className="w-[169.6px] flex flex-row items-start justify-start py-0 pl-1.5 pr-[5px] box-border">
                    <h3 className="m-0 flex-1 relative text-inherit leading-[28px] font-medium font-[inherit] mq450:text-lg mq450:leading-[22px]">
                      The Essentials
                    </h3>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start py-0 px-1.5 box-border gap-3 max-w-full text-mini lg:justify-center lg:grid-cols-[repeat(2,_minmax(330px,_572px))] mq750:grid-cols-[minmax(330px,_1fr)]">
                    <div className="flex-1 flex flex-row items-start justify-start pt-[452.9px] px-12 pb-[48.1px] box-border bg-[url('/image1@2x.png')] bg-cover bg-no-repeat bg-[top] min-w-[330px] max-w-full mq750:pt-[294px] mq750:pb-[31px] mq750:box-border">
                      <Image
                        className="h-[540px] w-[440px] relative object-cover hidden max-w-full"
                        width={440}
                        height={540}
                        alt=""
                        src="/image1@2x.png"
                      />
                      <div className="rounded-11xl bg-white overflow-hidden flex flex-row items-start justify-start py-[7.5px] pl-[21px] pr-5 z-[1]">
                        <div className="relative leading-[24px] font-medium inline-block min-w-[44px]">
                          Men's
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-start justify-start pt-[452.9px] px-12 pb-[48.1px] box-border bg-[url('/image2@2x.png')] bg-cover bg-no-repeat bg-[top] min-w-[330px] max-w-full mq750:pt-[294px] mq750:pb-[31px] mq750:box-border">
                      <Image
                        className="h-[540px] w-[440px] relative object-cover hidden max-w-full"
                        width={440}
                        height={540}
                        alt=""
                        src="/image2@2x.png"
                      />
                      <div className="rounded-11xl bg-white overflow-hidden flex flex-row items-start justify-start py-[7.5px] px-[21px] z-[1]">
                        <div className="relative leading-[24px] font-medium inline-block min-w-[66px]">
                          Women's
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-start justify-start pt-[452.9px] px-12 pb-[48.1px] box-border bg-[url('/image3@2x.png')] bg-cover bg-no-repeat bg-[top] min-w-[330px] max-w-full text-sm mq750:pt-[294px] mq750:pb-[31px] mq750:box-border">
                      <Image
                        className="h-[540px] w-[440px] relative object-cover hidden max-w-full"
                        width={440}
                        height={540}
                        alt=""
                        src="/image3@2x.png"
                      />
                      <div className="rounded-11xl bg-white overflow-hidden flex flex-row items-start justify-start py-[7.5px] px-[21px] z-[1]">
                        <div className="relative leading-[24px] font-medium inline-block min-w-[34px]">
                          Kids'
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[1418.5px] h-[173px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-mini">
                <div className="w-[858.5px] flex flex-row items-start justify-start gap-[87.7px] max-w-full mq450:gap-[22px] mq750:flex-wrap mq1050:gap-11">
                  <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq450:flex-wrap mq450:min-w-full">
                    <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[31px] gap-[31px]">
                      <div className="relative leading-[24px] font-medium inline-block min-w-[39.5px]">
                        Icons
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[19px] text-gray-200">
                        <div className="relative leading-[24px] font-medium inline-block min-w-[79.4px]">
                          Air Force 1
                        </div>
                        <div className="relative leading-[24px] font-medium inline-block min-w-[70.6px]">
                          Huarache
                        </div>
                        <div className="relative leading-[24px] font-medium inline-block min-w-[77.7px]">
                          Air Max 90
                        </div>
                        <div className="relative leading-[24px] font-medium inline-block min-w-[77.7px]">
                          Air Max 95
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[31px]">
                      <div className="relative leading-[24px] font-medium inline-block min-w-[46.6px]">
                        Shoes
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[19px] text-gray-200">
                        <div className="relative leading-[24px] font-medium inline-block min-w-[68.8px]">
                          All Shoes
                        </div>
                        <div className="relative leading-[24px] font-medium inline-block min-w-[106.1px]">
                          Custom Shoes
                        </div>
                        <div className="relative leading-[24px] font-medium inline-block min-w-[99.9px]">
                          Jordan Shoes
                        </div>
                        <div className="relative leading-[24px] font-medium inline-block min-w-[110.6px]">
                          Running Shoes
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[31px]">
                      <div className="relative leading-[24px] font-medium inline-block min-w-[59.9px]">
                        Clothing
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[19px] text-gray-200">
                        <div className="relative leading-[24px] font-medium inline-block min-w-[82.1px]">
                          All Clothing
                        </div>
                        <div className="relative leading-[24px] font-medium inline-block min-w-[96.1px]">
                          Modest Wear
                        </div>
                        <div className="relative leading-[24px] font-medium">{`Hoodies & Pullovers`}</div>
                        <div className="relative leading-[24px] font-medium inline-block min-w-[95.2px]">{`Shirts & Tops`}</div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[162.5px] flex flex-col items-start justify-start gap-[31px] text-sm">
                    <div className="relative leading-[24px] font-medium inline-block min-w-[35.4px]">
                      Kids'
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[19px] text-mini text-gray-200">
                      <div className="self-stretch relative leading-[24px] font-medium">{`Infant & Toddler Shoes`}</div>
                      <div className="relative leading-[24px] font-medium inline-block min-w-[85.2px]">
                        Kids' Shoes
                      </div>
                      <div className="relative leading-[24px] font-medium">
                        Kids' Jordan Shoes
                      </div>
                      <div className="relative leading-[24px] font-medium">
                        Kids' Basketball Shoes
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <footer className="self-stretch bg-gray-300 flex flex-row items-start justify-between pt-10 pb-px pl-10 pr-12 box-border max-w-full gap-5 text-left text-3xs text-white font-helvetica-neue mq750:pr-6 mq750:box-border mq1050:flex-wrap mq1050:justify-center">
                <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border min-w-[585.4px] max-w-full mq750:min-w-full mq1050:flex-1">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[76.3px] max-w-full mq450:gap-[19px] mq750:gap-[38px] mq750:flex-wrap">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[55px] min-w-[285px] max-w-full mq450:gap-[27px]">
                      <div className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
                        <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                          <div className="flex flex-col items-start justify-start gap-[2.7px]">
                            <div className="relative leading-[32.7px] uppercase inline-block min-w-[68.6px]">
                              Find A Store
                            </div>
                            <div className="relative leading-[32.7px] uppercase">
                              Become A Member
                            </div>
                            <div className="flex flex-col items-start justify-start gap-[15.6px]">
                              <div className="h-4 relative leading-[32.7px] uppercase flex items-center shrink-0 min-w-[99.2px]">
                                Sign Up for Email
                              </div>
                              <div className="flex flex-col items-start justify-start gap-[7px] text-center">
                                <div className="w-[94.5px] relative leading-[24px] flex items-center justify-center">
                                  Send Us Feedback
                                </div>
                                <div className="h-4 relative text-[9px] leading-[32.7px] uppercase text-left flex items-center shrink-0 min-w-[105.4px]">
                                  Student Discounts
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-[180.9px] flex flex-col items-start justify-start gap-[3px] text-2xs text-gray-100">
                          <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[3px] text-3xs text-white">
                            <div className="relative tracking-[0.5px] leading-[24px] uppercase">
                              Get Help
                            </div>
                          </div>
                          <div className="relative leading-[28px] inline-block min-w-[68.2px]">
                            Order Status
                          </div>
                          <div className="relative text-xs leading-[28px] inline-block min-w-[44.5px]">
                            Delivery
                          </div>
                          <div className="relative text-xs leading-[28px]">
                            Returns
                          </div>
                          <div className="relative leading-[28px] inline-block min-w-[92.2px]">
                            Payment Options
                          </div>
                          <div className="self-stretch relative leading-[28px]">
                            Contact Us On Nike.com Inquiries
                          </div>
                          <div className="self-stretch h-3.5 relative leading-[28px] flex items-center shrink-0">
                            Contact Us On All Other Inquiries
                          </div>
                        </div>
                      </div>
                      <div className="w-[280.5px] flex flex-row items-start justify-start py-0 px-0.5 box-border text-xs">
                        <div className="flex-1 flex flex-row items-end justify-start gap-6">
                          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-px">
                            <div className="flex flex-row items-end justify-start gap-2">
                              <Image
                                className="h-[15px] w-[18px] relative overflow-hidden shrink-0"
                                loading="lazy"
                                width={18}
                                height={15}
                                alt=""
                                src="/frame-11.svg"
                              />
                              <div className="relative leading-[12px]">
                                India
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 relative text-2xs leading-[12px] text-gray-100">
                            © 2023 Nike, Inc. All Rights Reserved
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[3px] text-xs text-gray-100">
                      <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[3px] text-3xs text-white">
                        <div className="relative tracking-[0.5px] leading-[24px] uppercase inline-block min-w-[66px]">
                          About Nike
                        </div>
                      </div>
                      <div className="relative leading-[28px] inline-block min-w-[32px]">
                        News
                      </div>
                      <div className="relative leading-[28px] inline-block min-w-[43.9px]">
                        Careers
                      </div>
                      <div className="relative text-2xs leading-[28px] inline-block min-w-[48.9px]">
                        Investors
                      </div>
                      <div className="h-3.5 relative text-2xs leading-[28px] flex items-center shrink-0 min-w-[71.9px]">
                        Sustainability
                      </div>
                    </div>
                  </div>
                </div>
                <FooterLinks />
              </footer>
            </div>
          </div>
          <div className="w-[1344px] flex flex-col items-start justify-start pt-[631px] px-0 pb-0 box-border max-w-full ml-[-1392px] lg:pt-[631px] lg:box-border">
            <Image
              className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
              loading="lazy"
              width={1344}
              height={700}
              alt=""
              src="/image-10@2x.png"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
