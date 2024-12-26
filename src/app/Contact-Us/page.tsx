import type { NextPage } from "next";
import Image from "next/image";
const LoginPage ="/sign-in";
const HomePage ="/";
const JoinUsPage ="/join-us";
const FindAStore = "/allproductspage";
import Link from "next/link";
const CartPage= "/cartpage";


const ContactUsPage: NextPage = () => {
  return (
    <div className="w-full relative bg-white h-[1705px] overflow-hidden text-center text-mini text-gray-300 font-helvetica-neue">
      <div className="absolute w-full top-[0px] right-[0px] left-[0px] h-[96px]">
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
        <div className="absolute w-full top-[0px] right-[0px] left-[0px] bg-whitesmoke h-[36px] text-left text-2xs">
          <div className="absolute h-full top-[0px] bottom-[0px] left-[calc(50%_-_720px)] w-[1440px]">
            <Image
              className="absolute top-[calc(50%_-_12px)] left-[48px] w-[24px] h-[24px] overflow-hidden"
              width={24}
              height={24}
              alt=""
              src="/frame-4.svg"
            />
            <div className="absolute top-[0px] left-[1129.2px] flex flex-row items-center justify-start">
              <div className="flex flex-row items-start justify-start py-[10px] pl-[12px] pr-[6.1px] gap-[15.4px]">
                <div className="relative leading-[14px] font-medium">
                <Link href={FindAStore} className="no-underline">  Find a Store</Link>
                </div>
                <div className="relative text-xs leading-[14px]">|</div>
              </div>
              <div className="flex flex-row items-start justify-start py-[11px] pl-[8px] pr-[4.1px] gap-[12.7px]">
                <div className="relative leading-[14px] font-medium"> <Link href="#" className="no-underline">Help</Link></div>
                <div className="relative text-xs leading-[14px]">|</div>
              </div>
              <div className="w-[122.5px] relative h-[36px]">
                <div className="absolute top-[11px] left-[8px] leading-[14px] font-medium">
              <Link href={JoinUsPage} className="no-underline"> Join Us</Link>   
                </div>
                <div className="absolute top-[11px] left-[60px] text-xs leading-[14px]">
                  |
                </div>
                <div className="absolute top-[11px] left-[75.1px] leading-[14px] font-medium text-center">
                <Link href={LoginPage} className="no-underline">Sign In</Link>  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[144px] left-[6px] w-[1428px] h-[1230px] text-13xl">
        <div className="absolute top-[0px] left-[-6px] w-[1440px] h-[132px]">
          <div className="absolute top-[0px] left-[641.2px] leading-[36px] font-medium flex items-center justify-center w-[157.9px] h-[36px]">
            GET HELP
          </div>
          <div className="absolute w-[calc(100%_-_982.7px)] top-[56px] right-[491.4px] left-[491.3px] rounded-[8px] h-[56px] text-mini text-gray-200">
            <Image
              className="absolute top-[calc(50%_-_9px)] left-[calc(50%_+_192.65px)] w-[24px] h-[18px] overflow-hidden"
              width={24}
              height={18}
              alt=""
              src="/frame.svg"
            />
            <div className="absolute top-[19px] left-[12px] leading-[24px] flex items-center justify-center w-[199.4px] h-[17px]">
              What can we help you with?
            </div>
            <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[8px] border-gray-200 border-[1px] border-solid box-border" />
          </div>
        </div>
        <div className="absolute top-[132px] left-[calc(50%_-_654.5px)] bg-white w-[1309px] h-[1098px] text-left text-[28px]">
          <div className="absolute top-[28px] left-[28px] w-[1253px] h-[1042px]">
            <div className="absolute w-[calc(100%_-_313.2px)] top-[0px] right-[313.2px] left-[0px] h-[1042px]">
              <div className="absolute top-[0px] left-[0px] leading-[32px] font-medium flex items-center w-[766.2px] h-[31px]">
                WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
              </div>
              <div className="absolute top-[64px] left-[0px] w-[923.8px] h-[958px] text-mini">
                <div className="absolute top-[5px] left-[0px] leading-[28px] flex items-center w-[905px] h-[17px]">
                  We want to make buying your favourite Nike shoes and gear
                  online fast and easy, and we accept the following payment
                  options:
                </div>
                <div className="absolute top-[48px] left-[16px] w-[907.8px] h-[108px] text-base">
                  <div className="absolute top-[5px] left-[16px] leading-[28px] flex items-center w-[590.1px] h-[17px]">
                    Visa, Mastercard, Diners Club, Discover, American Express,
                    Visa Electron, Maestro
                  </div>
                  <div className="absolute top-[45px] left-[16px] text-mini leading-[28px] flex items-center w-[870.9px] h-[17px]">
                    If you enter your PAN information at checkout, you'll be
                    able to pay for your order with PayTM or a local credit or
                    debit card.
                  </div>
                  <div className="absolute top-[85px] left-[16px] leading-[28px] flex items-center w-[73.1px] h-[17px]">
                    Apple Pay
                  </div>
                </div>
                <div className="absolute top-[176px] left-[0px] w-[923.8px] h-[115px] text-center text-base text-white">
                  <div className="absolute top-[0px] left-[0px] w-[923.8px] h-[56px] text-left text-gray-300">
                    <div className="absolute top-[5px] left-[0px] leading-[28px] flex items-center w-[894.3px] h-[45px]">
                      <span className="w-full">
                        <span className="[text-decoration:underline] font-medium">
                          Nike Members
                        </span>
                        <span>{` can store multiple debit or credit cards in their profile for faster checkout. If you're not already a Member, `}</span>
                        <span className="[text-decoration:underline] font-medium">
                          join us
                        </span>
                        <span> today.</span>
                      </span>
                    </div>
                  </div>
                  <div className="absolute top-[72px] left-[0px] rounded-11xl bg-gray-300 flex flex-row items-start justify-start py-[7.5px] pl-[20.5px] pr-[21.6px]">
                    <div className="relative leading-[24px] font-medium">
                      JOIN US
                    </div>
                  </div>
                  <div className="absolute top-[72px] left-[122.1px] rounded-11xl bg-gray-300 flex flex-row items-start justify-start py-[7.5px] pl-[21.5px] pr-[21.3px]">
                    <div className="relative leading-[24px] font-medium">
                      SHOP NIKE
                    </div>
                  </div>
                </div>
                <div className="absolute top-[311px] left-[0px] w-[923.8px] h-[168px] text-[20px]">
                  <div className="absolute top-[1px] left-[0px] leading-[24px] font-medium flex items-center w-[50.2px] h-[22px]">
                    FAQs
                  </div>
                  <div className="absolute top-[40px] left-[0px] w-[923.8px] h-[128px] text-base">
                    <div className="absolute top-[0px] left-[0px] w-[923.8px] h-[84px]">
                      <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start py-[0px] pl-[0px] pr-[0.3px]">
                        <b className="relative leading-[28px]">
                          Does my card need international purchases enabled?
                        </b>
                      </div>
                      <div className="absolute top-[33px] left-[0px] leading-[28px] flex items-center w-[842.8px] h-[45px]">
                        Yes, we recommend asking your bank to enable
                        international purchases on your card. You will be
                        notified at checkout if international purchases need to
                        be enabled.
                      </div>
                    </div>
                    <div className="absolute top-[100px] left-[0px] w-[923.8px] h-[28px] text-mini">
                      <div className="absolute top-[5px] left-[0px] leading-[28px] flex items-center w-[601.4px] h-[17px]">
                        <span className="w-full">
                          <span>{`Please note, some banks may charge `}</span>
                          <span className="[text-decoration:underline] font-medium">
                            a small transaction fee
                          </span>
                          <span> for international orders.</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[499px] left-[0px] w-[923.8px] h-[56px]">
                  <div className="absolute top-[5px] left-[0px] leading-[28px] flex items-center w-[553.7px] h-[45px]">
                    <span className="w-full">
                      <p className="m-[0px]">
                        <b>Can I pay for my order with multiple methods?</b>
                      </p>
                      <p className="m-[0px]">
                        No, payment for Nike orders can't be split between
                        multiple payment methods.
                      </p>
                    </span>
                  </div>
                </div>
                <div className="absolute top-[575px] left-[0px] w-[923.8px] h-[56px]">
                  <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start py-[0px] pl-[0px] pr-[24.4px]">
                    <b className="relative leading-[28px]">
                      What payment method is accepted for SNKRS orders?
                    </b>
                  </div>
                  <div className="absolute top-[33px] left-[0px] leading-[28px] flex items-center w-[478.1px] h-[17px]">
                    You can use any accepted credit card to pay for your SNKRS
                    order.
                  </div>
                </div>
                <div className="absolute top-[651px] left-[0px] w-[923.8px] h-[112px] text-base">
                  <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start py-[0px] pl-[0px] pr-[0.4px]">
                    <b className="relative leading-[28px]">
                      Why don't I see Apple Pay as an option?
                    </b>
                  </div>
                  <div className="absolute top-[33px] left-[0px] leading-[28px] flex items-center w-[922px] h-[73px]">
                    To see Apple Pay as an option in the Nike App or on
                    Nike.com, you'll need to use a compatible Apple device
                    running the latest OS, be signed in to your iCloud account
                    and have a supported card in your Wallet. Additionally,
                    you'll need to use Safari to use Apple Pay on Nike.com.
                  </div>
                </div>
                <div className="absolute top-[783px] left-[0px] w-[923.8px] h-[175px]">
                  <div className="absolute top-[0px] left-[0px] w-[923.8px] h-[67px]">
                    <div className="absolute top-[5px] left-[0px] leading-[28px] flex items-center w-[177.5px] h-[17px]">
                      Was this answer helpful?
                    </div>
                    <Image
                      className="absolute top-[28px] left-[0px] w-[30px] h-[30px] overflow-hidden"
                      width={30}
                      height={30}
                      alt=""
                      src="/like.svg"
                    />
                    <Image
                      className="absolute top-[28px] left-[30px] w-[30px] h-[30px] overflow-hidden"
                      width={30}
                      height={30}
                      alt=""
                      src="/dislike.svg"
                    />
                  </div>
                  <div className="absolute top-[67px] left-[0px] w-[923.8px] h-[108px] text-base text-gray-200">
                    <div className="absolute top-[3px] left-[0px] leading-[24px] font-medium flex items-center w-[72.8px] h-[17px]">
                      RELATED
                    </div>
                    <div className="absolute top-[40px] left-[16px] w-[907.8px] h-[68px] text-gray-300">
                      <div className="absolute top-[5px] left-[16px] [text-decoration:underline] leading-[28px] font-medium flex items-center w-[306.2px] h-[17px]">
                        WHAT ARE NIKE'S DELIVERY OPTIONS?
                      </div>
                      <div className="absolute top-[45px] left-[16px] [text-decoration:underline] leading-[28px] font-medium flex items-center w-[395.8px] h-[17px]">
                        HOW DO I GET FREE DELIVERY ON NIKE ORDERS?
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute w-[calc(100%_-_939.7px)] top-[0px] right-[-0.1px] left-[939.8px] shadow-[1px_0px_0px_#ccc_inset] bg-[rgba(255,255,255,0)] h-[1042px] text-center">
              <div className="absolute top-[0px] left-[90.9px] leading-[32px] font-medium flex items-center justify-center w-[179.6px] h-[31px]">
                CONTACT US
              </div>
              <div className="absolute top-[52px] left-[48px] w-[265.3px] h-[836px] text-base">
                <div className="absolute top-[0px] left-[0px] w-[265.3px] h-[242px]">
                  <Image
                    className="absolute top-[calc(50%_-_108px)] left-[calc(50%_-_32.05px)] w-[64px] h-[64px] object-cover"
                    width={64}
                    height={64}
                    alt=""
                    src="/phone.png"
                  />
                  <div className="absolute top-[106px] left-[calc(50%_-_132.65px)] flex flex-col items-center justify-start py-[0px] pl-[1.1px] pr-[1px]">
                    <div className="relative leading-[24px] font-medium">
                      000 800 919 0566
                    </div>
                    <div className="flex flex-row items-start justify-start">
                      <div className="w-[263.2px] relative leading-[28px] flex items-center shrink-0">
                        <span className="w-full">
                          <p className="m-[0px]">{`Products & Orders: 24 hours a day, 7 days a week`}</p>
                          <p className="m-[0px]">{`Company Info & Enquiries: 07:30 - 16:30, Monday - Friday`}</p>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[282px] left-[0px] w-[265.3px] h-[158px] text-mini">
                  <Image
                    className="absolute top-[calc(50%_-_66px)] left-[calc(50%_-_32.05px)] w-[64px] h-[64px] object-cover"
                    width={64}
                    height={64}
                    alt=""
                    src="/message.png"
                  />
                  <div className="absolute top-[106px] left-[calc(50%_-_52.95px)] flex flex-col items-center justify-start py-[0px] pl-[2px] pr-[1.9px]">
                    <div className="relative leading-[24px] font-medium">
                      24 hours a day
                    </div>
                    <div className="relative leading-[28px]">7 days a week</div>
                  </div>
                </div>
                <div className="absolute top-[480px] left-[0px] w-[265.3px] h-[158px] text-mini">
                  <Image
                    className="absolute top-[calc(50%_-_66px)] left-[calc(50%_-_32.05px)] w-[64px] h-[64px] object-cover"
                    width={64}
                    height={64}
                    alt=""
                    src="/mail.png"
                  />
                  <div className="absolute top-[106px] left-[calc(50%_-_65.35px)] flex flex-col items-center justify-start py-[0px] pl-[3px] pr-[3.7px]">
                    <div className="relative leading-[24px] font-medium">
                      We'll reply within
                    </div>
                    <div className="relative leading-[28px]">
                      five business days
                    </div>
                  </div>
                </div>
                <div className="absolute top-[678px] left-[0px] w-[265.3px] h-[158px]">
                  <Image
                    className="absolute top-[calc(50%_-_66px)] left-[calc(50%_-_32.05px)] w-[64px] h-[64px] object-cover"
                    width={64}
                    height={64}
                    alt=""
                    src="/locator.png"
                  />
                  <div className="absolute top-[106px] left-[calc(50%_-_110.75px)] w-[221.4px] h-[52px]">
                    <div className="absolute top-[0px] left-[44.1px] leading-[24px] font-medium">
                      STORE LOCATOR
                    </div>
                    <div className="absolute top-[24px] left-[-1px] leading-[28px]">
                      Find Nike retail stores near you
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-full top-[1374px] right-[0px] left-[0px] bg-gray-300 h-[331px] text-left text-3xs text-gray-100">
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
    </div>
  );
};

export default ContactUsPage;
