import React, { useState } from 'react';
import PayBadge from './PayBadge';
import PayBadgeInline from './PayBadgeInline';
import { type CardConfig, type CardId, HIGHLIGHT_COLOR_HEX, HIGHLIGHT_LIGHT_HEX, defaultConfig, clamp } from './config';

// Vertical delta when UPI/Netbanking flips between collapsed and expanded.
// UPI expanded section height ≈ 134px (lavender area + padding).
const EXPANDED_DELTA = 134;
// Extra height for cards whose subtext wraps to a second line (Cards, EMI).
const WRAP_DELTA = 14;

const imgChunkWallet = "/images/pm_imgChunkWallet.png";
const imgP = "/images/pm_imgP.png";
const imgNetbanking = "/images/pm_imgNetbanking.png";
const imgCard = "/images/pm_imgCard.png";
const imgUpi = "/images/pm_imgUpi.png";
const imgImage = "/images/pm_imgImage.png";
const imgImage1 = "/images/pm_imgImage1.png";
const imgImage2 = "/images/pm_imgImage2.png";
const imgImage3 = "/images/pm_imgImage3.png";
const imgIcon = "/images/pm_imgIcon.png";
const imgVector = "/images/pm_imgVector.png";
const imgIcon1 = "/images/pm_imgIcon1.png";
const imgStarGlass = "/images/pm_imgStarGlass.png";
const imgIcon2 = "/images/pm_imgIcon2.png";
const imgImage4 = "/images/pm_imgImage4.png";
const imgImage5 = "/images/pm_imgImage5.png";
const imgImage6 = "/images/pm_imgImage6.png";
const imgImage7 = "/images/pm_imgImage7.png";
const imgFrame = "/images/pm_imgFrame.png";
const imgChunkCircleCheckmark = "/images/pm_imgChunkCircleCheckmark.png";
const imgChunkScribble = "/images/pm_imgChunkScribble.png";
const imgEllipse2122 = "/images/pm_imgEllipse2122.png";
const imgEllipse2123 = "/images/pm_imgEllipse2123.png";
const imgEllipse2124 = "/images/pm_imgEllipse2124.png";
const img = "/images/pm_img.png";
const img1 = "/images/pm_img1.png";
const imgGroup1321316150 = "/images/pm_imgGroup1321316150.png";
const imgSubtract = "/images/pm_imgSubtract.png";
const imgSubtract1 = "/images/pm_imgSubtract1.png";
const imgGroup1321316133 = "/images/pm_imgGroup1321316133.png";
const imgGroup1321316135 = "/images/pm_imgGroup1321316135.png";
const imgGroup1321316146 = "/images/pm_imgGroup1321316146.png";
const imgGroup1321316151 = "/images/pm_imgGroup1321316151.png";
const imgSubtract2 = "/images/pm_imgSubtract2.png";
const imgSubtract3 = "/images/pm_imgSubtract3.png";
const imgShield = "/images/pm_imgShield.png";
const imgRzpLogo = "/images/pm_imgRzpLogo.png";
const imgRtbLogo = "/images/pm_imgRtbLogo.png";
const imgImage8 = "/images/pm_imgImage8.png";
const imgImage9 = "/images/pm_imgImage9.png";
const imgImage10 = "/images/pm_imgImage10.png";
const imgImage11 = "/images/pm_imgImage11.png";
const imgImage24563 = "/images/pm_imgImage24563.png";
const imgVector1 = "/images/pm_imgVector1.png";
const imgVector2 = "/images/pm_imgVector2.png";
const imgBase = "/images/pm_imgBase.png";
const imgHome = "/images/pm_imgHome.png";
const imgLock = "/images/pm_imgLock.png";
const imgMore = "/images/pm_imgMore.png";
const imgVector3 = "/images/pm_imgVector3.png";
const imgMavenshop = "/images/pm_imgMavenshop.png";
const imgVector4 = "/images/pm_imgVector4.png";
const imgGroup = "/images/pm_imgGroup.png";
const imgVector5 = "/images/pm_imgVector5.png";
const imgVector6 = "/images/pm_imgVector6.png";
const imgVector7 = "/images/pm_imgVector7.png";
const imgVector8 = "/images/pm_imgVector8.png";
const imgGroup1 = "/images/pm_imgGroup1.png";
const imgVector9 = "/images/pm_imgVector9.png";
const imgVector10 = "/images/pm_imgVector10.png";

type ProvidersIconsProps = {
  className?: string;
  icon?: "Yes";
  type?: "Card" | "EMI" | "Netbanking" | "UPI" | "WAllet";
};

function ProvidersIcons({ className, icon = "Yes", type = "WAllet" }: ProvidersIconsProps) {
  const isCardAndYes = type === "Card" && icon === "Yes";
  const isEmiAndYes = type === "EMI" && icon === "Yes";
  const isNetbankingAndYes = type === "Netbanking" && icon === "Yes";
  const isUpiAndYes = type === "UPI" && icon === "Yes";
  return (
    <div className={className || "relative size-[24px]"} id={isUpiAndYes ? "node-5_9129" : isCardAndYes ? "node-5_9125" : isNetbankingAndYes ? "node-5_9122" : isEmiAndYes ? "node-5_9118" : "node-5_9113"}>
      {type === "WAllet" && icon === "Yes" && (
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-node-id="5:9114" data-name="chunk/wallet">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChunkWallet} />
        </div>
      )}
      {isEmiAndYes && (
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-node-id="5:9119" data-name="P">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgP} />
        </div>
      )}
      {isNetbankingAndYes && (
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-node-id="5:9123" data-name="Netbanking">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgNetbanking} />
        </div>
      )}
      {isCardAndYes && (
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-node-id="5:9126" data-name="Card">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCard} />
        </div>
      )}
      {isUpiAndYes && (
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-node-id="5:9130" data-name="UPI">
          <div className="absolute inset-[0_-0.19%_0_0]">
            <img alt="" className="block max-w-none size-full" src={imgUpi} />
          </div>
        </div>
      )}
    </div>
  );
}

type ProviderIconProps = {
  className?: string;
  type?: "Google Pay" | "PhonePe" | "PayTM";
};

function ProviderIcon({ className, type = "Google Pay" }: ProviderIconProps) {
  const isPayTm = type === "PayTM";
  const isPhonePe = type === "PhonePe";
  return (
    <div className={className || "bg-[white] border border-[rgba(108,132,157,0.18)] border-solid relative rounded-[32px] size-[26px]"} id={isPayTm ? "node-107_32959" : isPhonePe ? "node-107_32957" : "node-107_32955"}>
      <div className={`absolute ${isPayTm ? "h-[15px] left-px top-[5px] w-[22px]" : isPhonePe ? "-translate-x-1/2 -translate-y-1/2 left-1/2 size-[18px] top-1/2" : "left-[4px] mix-blend-darken size-[16px] top-[4px]"}`} id={isPayTm ? "node-107_32960" : isPhonePe ? "node-107_32958" : "node-107_32956"} data-name="Image">
        {["Google Pay", "PhonePe"].includes(type) && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className={`absolute max-w-none ${isPhonePe ? "left-0 size-full top-0" : "left-[-15.64%] size-[131.28%] top-[-15.64%]"}`} src={isPhonePe ? imgImage1 : imgImage} />
          </div>
        )}
        {isPayTm && <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />}
      </div>
    </div>
  );
}

type ProviderIcon1Props = {
  className?: string;
  type?: "HDFC" | "Google Pay";
};

function ProviderIcon1({ className, type = "HDFC" }: ProviderIcon1Props) {
  const isGooglePay = type === "Google Pay";
  return (
    <div className={className || "bg-[white] border border-[rgba(108,132,157,0.18)] border-solid relative rounded-[32px] size-[26px]"} id={isGooglePay ? "node-114_12726" : "node-114_12714"}>
      <div className={`absolute ${isGooglePay ? "left-[4px] mix-blend-darken size-[16px] top-[4px]" : "left-[5px] size-[14px] top-[5px]"}`} id={isGooglePay ? "node-114_12727" : "node-114_12715"} data-name="Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className={`absolute max-w-none ${isGooglePay ? "left-[-15.64%] size-[131.28%] top-[-15.64%]" : "h-[131.29%] left-0 top-0 w-full"}`} src={isGooglePay ? imgImage : imgImage3} />
        </div>
      </div>
    </div>
  );
}

type DeliveryProps = {
  className?: string;
  type?: ">1 delivery type";
};

function Delivery({ className, type = ">1 delivery type" }: DeliveryProps) {
  return (
    <div className={className || "content-stretch drop-shadow-[0px_0.5px_8px_rgba(25,40,57,0.02)] flex flex-col items-start overflow-clip relative rounded-[12px] w-[343px]"} data-node-id="305:5462">
      <div className="bg-[white] content-stretch flex items-center justify-between overflow-clip px-[16px] py-[12px] relative shrink-0 w-full" data-node-id="305:5418" data-name="Address Card">
        <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-w-px pr-[8px] relative" data-node-id="305:5420" data-name="Icon">
          <div className="h-[18px] relative shrink-0 w-[16px]" data-node-id="305:5421" data-name="Pad">
            <div className="absolute left-0 size-[16px] top-[2px]" data-node-id="305:5422" data-name="Address icons">
              <div className="-translate-x-1/2 absolute h-[15px] left-1/2 top-0 w-[14px]" data-node-id="I305:5422;3977:39988;38:16024" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start justify-center min-w-px relative text-[13px] tracking-[0px] whitespace-nowrap" data-node-id="305:5423" data-name="Text">
            <p className="font-['Inter'] font-semibold leading-[18px] min-w-full overflow-hidden relative shrink-0 text-[color:#192839] text-ellipsis w-[min-content]" data-node-id="305:5424">
              5th Floor, Razorpay Arena Office, Adugodi, Koramangala, Bangalore - 560012. Karnataka, India
            </p>
            <p className="font-['Inter'] font-normal leading-[0] not-italic overflow-hidden relative shrink-0 text-[color:#40566d] text-ellipsis" data-node-id="305:5425">
              <span className="font-['Inter'] font-normal leading-[18px]">{`Viraj Duvedi, 9866743121 `}</span>
              <span className="font-['Inter'] font-normal leading-[18px] text-[rgba(108,132,157,0.32)]">•</span>
              <span className="font-['Inter'] font-normal leading-[18px]">{` Office`}</span>
            </p>
          </div>
        </div>
        <div className="overflow-clip relative shrink-0 size-[16px]" data-node-id="305:5426" data-name="arrow-right">
          <div className="absolute inset-[23.49%_33.33%_23.48%_34.26%]" data-node-id="I305:5426;65:835" data-name="Vector">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
          </div>
        </div>
      </div>
      <div className="bg-white border-[rgba(108,132,157,0.18)] border-solid border-t content-stretch flex flex-col gap-[12px] items-start pl-[16px] py-[12px] relative shrink-0 w-full" data-node-id="305:5427">
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="305:5428" data-name="Top">
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-node-id="305:5429" data-name="Top">
            <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0" data-node-id="305:5431">
              <div className="relative shrink-0 size-[16px]" data-node-id="305:5432" data-name="Delivery">
                <div className="absolute h-[13px] left-0 top-[2px] w-[16px]" data-node-id="I305:5432;3977:59986;47:50982" data-name="Icon">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon1} />
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium justify-center leading-[0] relative shrink-0 text-[13px] text-[color:#40566d] tracking-[0px] whitespace-nowrap" data-node-id="305:5433">
                <p className="leading-[18px]">Delivery options</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[8px] items-start px-[32px] relative shrink-0 w-full" data-node-id="305:5435" data-name="Delivery ooptions">
          <div className="border-2 border-[rgba(48,94,255,0.18)] border-solid content-stretch flex flex-col items-start relative rounded-[8px] shrink-0" data-node-id="305:5436" data-name="Delivery options">
            <div className="bg-[white] border border-[#305eff] border-solid content-stretch flex flex-col gap-[6px] items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="305:5437" data-name="Delivery options">
              <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="305:5438" data-name="Top">
                <div className="content-stretch flex items-center relative rounded-tl-[12px] rounded-tr-[12px] shrink-0" data-node-id="305:5439" data-name="Login">
                  <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium justify-center leading-[0] overflow-hidden relative shrink-0 text-[13px] text-[color:#192839] text-ellipsis tracking-[0px] whitespace-nowrap" data-node-id="305:5440">
                    <p className="leading-[18px] overflow-hidden text-ellipsis">Thu, Jul 18</p>
                  </div>
                </div>
                <div className="content-stretch flex h-[18px] items-center justify-center px-[4px] py-px relative rounded-[4px] shrink-0" data-node-id="305:5443" data-name="Cost">
                  <p className="[word-break:break-word] font-['Inter'] font-semibold leading-[17px] relative shrink-0 text-[#006c36] text-[length:12px] tracking-[-0.156px] whitespace-nowrap" data-node-id="305:5444">
                    FREE
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative rounded-[8px] shrink-0" data-node-id="305:5446" data-name="Delivery options">
            <div className="bg-[white] border border-[#cbd5e2] border-solid content-stretch flex flex-col gap-[6px] items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-node-id="305:5447" data-name="Delivery options">
              <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="305:5448" data-name="Top">
                <div className="content-stretch flex items-center relative rounded-tl-[12px] rounded-tr-[12px] shrink-0" data-node-id="305:5449" data-name="Login">
                  <div className="[word-break:break-word] flex flex-col font-['Inter'] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[13px] text-[color:#40566d] text-ellipsis tracking-[0px] whitespace-nowrap" data-node-id="305:5450">
                    <p className="leading-[18px] overflow-hidden text-ellipsis">Tue, Jul 16</p>
                  </div>
                </div>
                <div className="bg-[#2950da] content-stretch flex h-[18px] items-start pt-[2px] px-[6px] relative rounded-[4px] shrink-0" data-node-id="305:5453" data-name="Cost">
                  <p className="[word-break:break-word] font-['Inter'] font-semibold leading-[14px] relative shrink-0 text-[length:10px] text-white tracking-[0px] whitespace-nowrap" data-node-id="I305:5453;2034:19043">
                    ₹129
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative rounded-[8px] shrink-0" data-node-id="458:4903" data-name="Delivery options">
            <div className="bg-[white] border border-[#cbd5e2] border-solid content-stretch flex flex-col gap-[6px] items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-node-id="458:4904" data-name="Delivery options">
              <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="458:4905" data-name="Top">
                <div className="content-stretch flex items-center relative rounded-tl-[12px] rounded-tr-[12px] shrink-0" data-node-id="458:4906" data-name="Login">
                  <div className="[word-break:break-word] flex flex-col font-['Inter'] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[13px] text-[color:#40566d] text-ellipsis tracking-[0px] whitespace-nowrap" data-node-id="458:4907">
                    <p className="leading-[18px] overflow-hidden text-ellipsis">Wed, Jul 16</p>
                  </div>
                </div>
                <div className="bg-[var(--checkout-surface-blue,#2950da)] content-stretch flex h-[18px] items-start pt-[2px] px-[6px] relative rounded-[4px] shrink-0" data-node-id="458:4910" data-name="Cost">
                  <p className="[word-break:break-word] font-['Inter'] font-semibold leading-[14px] relative shrink-0 text-[length:10px] text-white tracking-[0px] whitespace-nowrap" data-node-id="I458:4910;2034:19043">
                    ₹129
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type CouponsProps = {
  className?: string;
  type?: "1";
};

function Coupons({ className, type = "1" }: CouponsProps) {
  return (
    <div className={className || "content-stretch drop-shadow-[0px_0.5px_8px_rgba(25,40,57,0.02)] flex flex-col items-start overflow-clip relative rounded-[12px] w-[343px]"} data-node-id="305:5246">
      <div className="bg-white content-stretch flex items-center justify-center overflow-clip pl-[16px] py-[12px] relative shrink-0 w-full" data-node-id="305:5202" data-name="Coupons">
        <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="305:5203" data-name="Body">
          <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px relative" data-node-id="305:5204" data-name="LHS">
            <div className="relative shrink-0 size-[15.959px]" data-node-id="305:5205" data-name="Star glass">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStarGlass} />
              <div className="absolute left-[3.4px] size-[9.063px] top-[3.45px]" data-node-id="305:5213" data-name="chunk/checkmark">
                <div className="absolute inset-[18.56%_9.19%_21.5%_9.19%]" data-node-id="I305:5213;43:50041" data-name="Icon">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon2} />
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-node-id="305:5214" data-name="Text">
              <div className="[word-break:break-word] flex flex-col font-['Inter'] font-semibold justify-center leading-[0] min-w-full overflow-hidden relative shrink-0 text-[13px] text-[color:#192839] text-ellipsis tracking-[0px] w-[min-content] whitespace-nowrap" data-node-id="305:5215">
                <p className="leading-[18px] overflow-hidden text-ellipsis">Save ₹400 with BINGE50</p>
              </div>
              <div className="content-stretch flex items-center relative shrink-0" data-node-id="305:5216" data-name="Frame">
                <div className="[word-break:break-word] flex flex-col font-['Inter'] font-normal justify-center leading-[0] relative shrink-0 text-[13px] text-[color:#40566d] tracking-[0px] whitespace-nowrap" data-node-id="305:5217">
                  <p className="leading-[18px]">{`View all coupons & offers`}</p>
                </div>
                <div className="overflow-clip relative shrink-0 size-[16px]" data-node-id="305:5218" data-name="arrow-right">
                  <div className="absolute inset-[23.49%_33.33%_23.48%_34.26%]" data-node-id="I305:5218;65:835" data-name="Vector">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center self-stretch">
          <div className="content-stretch flex h-full items-center px-[16px] py-[4px] relative rounded-[8px] shrink-0" data-node-id="305:5219" data-name="Apply">
            <div className="[word-break:break-word] flex flex-col font-['Inter'] font-semibold justify-center leading-[0] relative shrink-0 text-[13px] text-[color:var(--checkout-surface-blue,#2950da)] text-center tracking-[0px] whitespace-nowrap" data-node-id="305:5220">
              <p className="leading-[18px]">Apply</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type OrderSummaryProps = {
  className?: string;
  noOfItems?: "5";
};

function OrderSummary({ className, noOfItems = "5" }: OrderSummaryProps) {
  return (
    <div className={className || "bg-[#e6ecfc] content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shadow-[0px_0.5px_16px_0px_rgba(25,40,57,0.02)] w-[343px]"} data-node-id="305:6447">
      <div className="bg-white content-stretch flex flex-col gap-[12px] items-start px-[16px] py-[12px] relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full" data-node-id="571:4467">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="305:6448">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="305:6449" data-name="Title">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="305:6450" data-name="Frame">
              <div className="content-stretch flex items-center relative shrink-0" data-node-id="305:6451">
                <div className="[word-break:break-word] content-stretch flex gap-[4px] items-center relative shrink-0 w-[253.5px] whitespace-nowrap" data-node-id="305:6452" data-name="LHS">
                  <p className="font-['Inter'] font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:#40566d]" data-node-id="305:6453">{`Order Summary `}</p>
                  <div className="flex flex-col font-['Inter'] font-medium justify-center leading-[0] relative shrink-0 text-[color:#768ea7] text-[length:12px] tracking-[-0.156px]" data-node-id="305:6454">
                    <p className="leading-[17px]">•</p>
                  </div>
                  <div className="flex flex-col font-['Inter'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-[color:#768ea7]" data-node-id="305:6455">
                    <p className="leading-[18px]">6 Items</p>
                  </div>
                </div>
              </div>
              <div className="overflow-clip relative shrink-0 size-[16px]" data-node-id="305:6456" data-name="arrow-right">
                <div className="absolute inset-[23.49%_33.33%_23.48%_34.26%]" data-node-id="I305:6456;65:835" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="305:6457" data-name="+Price">
            <div className="content-stretch flex items-start relative shrink-0" data-node-id="305:6458" data-name="Frame">
              <div className="bg-[white] border-[1.114px] border-[rgba(108,132,157,0.18)] border-solid mr-[-7.459px] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-node-id="305:6459" data-name="Frame">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[27.843px] left-[calc(50%+0.21px)] top-[calc(50%+0.05px)] w-[24.832px]" data-node-id="305:6460" data-name="Image">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-full left-[-45.77%] max-w-none top-0 w-[179.41%]" src={imgImage4} />
                  </div>
                </div>
              </div>
              <div className="bg-[white] border-[1.114px] border-[rgba(108,132,157,0.18)] border-solid mr-[-7.459px] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-node-id="305:6461" data-name="Frame">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.05px)] size-[23.389px] top-[calc(50%+0.05px)]" data-node-id="305:6462" data-name="Image">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
                </div>
              </div>
              <div className="bg-[white] border-[1.114px] border-[rgba(108,132,157,0.18)] border-solid mr-[-7.459px] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-node-id="305:6463" data-name="Frame">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[30.628px] left-1/2 top-[calc(50%-0.79px)] w-[29.976px]" data-node-id="305:6464" data-name="Image">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-[99.74%] left-[-19.57%] max-w-none top-0 w-[139.13%]" src={imgImage6} />
                  </div>
                </div>
              </div>
              <div className="bg-[white] border-[1.114px] border-[rgba(108,132,157,0.18)] border-solid mr-[-7.459px] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-node-id="305:6465" data-name="Frame">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.05px)] size-[27.843px] top-[calc(50%+0.05px)]" data-node-id="305:6466" data-name="Image">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage7} />
                </div>
              </div>
              <div className="bg-[white] border-[1.114px] border-[rgba(108,132,157,0.18)] border-solid overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-node-id="305:6467" data-name="Frame">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[4.455px] left-[calc(50%+0.05px)] top-[calc(50%+0.05px)] w-[15.592px]" data-node-id="305:6468" data-name="Frame">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
                </div>
              </div>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-end relative shrink-0 w-[89px] whitespace-nowrap" data-node-id="305:6472">
              <div className="content-stretch flex gap-[4px] items-center justify-end leading-[0] relative shrink-0 tracking-[0px] w-full" data-node-id="305:6473">
                <div className="flex flex-col font-['Inter'] font-normal justify-center relative shrink-0 text-[11px] text-[color:#768ea7]" data-node-id="305:6474">
                  <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[18px] line-through">₹4560</p>
                </div>
                <div className="flex flex-col font-['Inter'] font-semibold justify-center relative shrink-0 text-[14px] text-[color:#192839]" data-node-id="305:6475">
                  <p className="leading-[18px]">₹4560</p>
                </div>
              </div>
              <p className="font-['Inter'] font-medium leading-[18px] not-italic relative shrink-0 text-[11px] text-[color:#006c36]" data-node-id="305:6476">
                Saved ₹100
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[12px] items-start pt-[4px] relative shrink-0 w-full" data-node-id="305:6479">
          <div className="bg-[#f8fafc] border border-[#cbd5e2] border-solid content-stretch flex gap-[6px] h-[34px] items-center px-[8px] relative rounded-[8px] shrink-0" data-node-id="305:6480" data-name="Pills">
            <div className="relative rounded-[27.991px] shrink-0 size-[12px]" data-node-id="305:6563" data-name="Coupon icon">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[11.663px] top-1/2" data-node-id="305:6564" data-name="chunk/circle-checkmark">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChunkCircleCheckmark} />
              </div>
            </div>
            <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium justify-center leading-[0] overflow-hidden relative shrink-0 text-[11px] text-[color:#40566d] text-ellipsis tracking-[0px] whitespace-nowrap" data-node-id="305:6483">
              <p className="leading-[18px] overflow-hidden text-ellipsis">GSTIN 22AAAAA0000A1Z5</p>
            </div>
          </div>
          <div className="bg-[#f8fafc] border border-[#cbd5e2] border-solid content-stretch flex gap-[6px] h-[34px] items-center px-[8px] relative rounded-[8px] shrink-0" data-node-id="305:6484" data-name="Pills">
            <div className="relative rounded-[27.991px] shrink-0 size-[12px]" data-node-id="305:6485" data-name="Coupon icon">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[11.663px] top-1/2" data-node-id="305:6486" data-name="chunk/scribble">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChunkScribble} />
              </div>
            </div>
            <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium justify-center leading-[0] overflow-hidden relative shrink-0 text-[11px] text-[color:#40566d] text-ellipsis tracking-[0px] whitespace-nowrap" data-node-id="305:6487">
              <p className="[text-decoration-skip-ink:none] decoration-[10%] decoration-dotted leading-[18px] overflow-hidden text-ellipsis underline">Please leave the pa...</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#e6ecfc] content-stretch flex flex-col gap-[8px] items-start px-[16px] py-[8px] relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-[343px]" data-node-id="571:4752" data-name="Coupon Widget">
        <div className="content-stretch flex h-[20px] items-center relative shrink-0 w-full" data-node-id="571:4753" data-name="Body">
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[312px]" data-node-id="571:4754">
            <div className="overflow-clip relative shrink-0 size-[16.097px]" data-node-id="571:4755" data-name="Offer">
              <div className="absolute inset-[8.33%]" data-node-id="571:4756" data-name="Glyph">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-1/2 top-1/2" data-node-id="571:4757">
                  <div className="absolute contents left-0 top-0" data-node-id="571:4758">
                    <div className="absolute contents left-0 top-0" data-node-id="571:4759">
                      <div className="absolute left-0 size-[13.414px] top-0" data-node-id="571:4760">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse2122} />
                      </div>
                      <div className="absolute left-0 size-[13.414px] top-0" data-node-id="571:4761">
                        <div className="absolute bottom-0 left-1/2 right-0 top-0">
                          <img alt="" className="block max-w-none size-full" src={imgEllipse2123} />
                        </div>
                      </div>
                    </div>
                    <div className="absolute contents left-[1.29px] top-[1.29px]" data-node-id="571:4762">
                      <div className="absolute contents left-[1.29px] top-[1.29px]" data-node-id="571:4763">
                        <div className="absolute flex items-center justify-center left-[1.29px] size-[10.838px] top-[1.29px]">
                          <div className="-scale-y-100 flex-none rotate-180">
                            <div className="relative size-[10.838px]" data-node-id="571:4764">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse2124} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute contents left-[4.09px] top-[1.69px]" data-node-id="571:4765">
                    <div className="absolute contents left-[4.42px] top-[4.12px]" data-node-id="571:4766">
                      <div className="absolute contents left-[4.42px] top-[4.12px]" data-node-id="571:4767">
                        <div className="absolute h-[6.986px] left-[4.54px] top-[4.12px] w-[4.887px]" data-node-id="571:4768" data-name="₹">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={img} />
                        </div>
                        <div className="absolute h-[6.6px] left-[4.42px] top-[4.5px] w-[4.454px]" data-node-id="571:4769" data-name="₹">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={img1} />
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-[12.58%_27.87%_64.97%_30.46%]" data-node-id="571:4770">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1321316150} />
                    </div>
                  </div>
                  <div className="absolute h-[10.838px] left-[1.24px] top-[1.33px] w-[5.768px]" data-node-id="571:4773" data-name="Subtract">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSubtract} />
                  </div>
                  <div className="absolute flex h-[10.838px] items-center justify-center left-[6.52px] top-[1.33px] w-[5.644px]">
                    <div className="-scale-y-100 flex-none rotate-180">
                      <div className="h-[10.838px] relative w-[5.644px]" data-node-id="571:4776" data-name="Subtract">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSubtract1} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[15.704px] top-1/2" data-node-id="571:4779" data-name="Glyph">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-1/2 top-1/2" data-node-id="571:4780">
                  <div className="absolute contents left-0 top-0" data-node-id="571:4781">
                    <div className="absolute left-0 size-[15.704px] top-0" data-node-id="571:4782">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1321316133} />
                    </div>
                    <div className="absolute contents left-[1.51px] top-[1.51px]" data-node-id="571:4785">
                      <div className="absolute flex items-center justify-center left-[1.51px] size-[12.688px] top-[1.51px]">
                        <div className="-scale-y-100 flex-none rotate-180">
                          <div className="relative size-[12.688px]" data-node-id="571:4786">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1321316135} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute contents left-[4.78px] top-[1.98px]" data-node-id="571:4788">
                    <div className="absolute contents left-[5.17px] top-[4.82px]" data-node-id="571:4789">
                      <div className="absolute h-[8.178px] left-[5.17px] top-[4.82px] w-[5.867px]" data-node-id="571:4790">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1321316146} />
                      </div>
                    </div>
                    <div className="absolute inset-[12.58%_27.87%_64.97%_30.46%]" data-node-id="571:4793">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1321316151} />
                    </div>
                  </div>
                  <div className="absolute h-[12.688px] left-[1.46px] top-[1.56px] w-[6.747px]" data-node-id="571:4796" data-name="Subtract">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSubtract2} />
                  </div>
                  <div className="absolute flex h-[12.688px] items-center justify-center left-[7.64px] top-[1.56px] w-[6.591px]">
                    <div className="-scale-y-100 flex-none rotate-180">
                      <div className="h-[12.688px] relative w-[6.591px]" data-node-id="571:4799" data-name="Subtract">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSubtract3} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[20px] overflow-clip relative shrink-0 w-[272px]" data-node-id="571:4802" data-name="Animation 1 liner">
              <div className="absolute content-stretch flex flex-col h-[20px] items-start justify-center left-0 top-0" data-node-id="571:4803" data-name="Component 26/1">
                <div className="content-stretch flex items-center relative shrink-0" data-node-id="571:4804">
                  <div className="content-stretch flex items-center relative shrink-0" data-node-id="571:4805">
                    <p className="[word-break:break-word] font-['Inter'] font-medium leading-[0] not-italic relative shrink-0 text-[0px] text-[color:#192839] whitespace-nowrap" data-node-id="571:4806">
                      <span className="leading-[20px] text-[11px]">{`Razorpay `}</span>
                      <span className="[text-decoration-skip-ink:none] decoration-[10%] decoration-dotted leading-[20px] text-[11px] underline">Money Back Promise</span>
                      <span className="leading-[20px] text-[11px]">{` included`}</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute content-stretch flex flex-col h-[20px] items-start justify-center left-0 top-[110px]" data-node-id="571:4807" data-name="Component 26/3">
                <div className="content-stretch flex items-center relative shrink-0" data-node-id="I571:4807;7784:20662">
                  <div className="content-stretch flex items-center relative shrink-0" data-node-id="I571:4807;7784:20663">
                    <p className="[word-break:break-word] font-['Inter'] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:#192839] whitespace-nowrap" data-node-id="I571:4807;7784:20664">{`Money Back Promise at ₹100 `}</p>
                  </div>
                </div>
              </div>
              <div className="absolute content-stretch flex flex-col items-start justify-center left-0 top-[56px]" data-node-id="571:4808" data-name="Component 26/2">
                <div className="content-stretch flex items-center relative shrink-0" data-node-id="I571:4808;7784:20658">
                  <div className="content-stretch flex items-center relative shrink-0" data-node-id="I571:4808;7784:20659">
                    <p className="[word-break:break-word] font-['Inter'] font-medium leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:#192839] whitespace-nowrap" data-node-id="I571:4808;7784:20660">
                      Powered by Razorpay Club
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type RtbIconProps = {
  className?: string;
  size?: "16" | "24";
};

function RtbIcon({ className, size = "16" }: RtbIconProps) {
  const is16 = size === "16";
  const is24 = size === "24";
  return (
    <div className={className || `relative ${is24 ? "overflow-clip size-[24px]" : "size-[16px]"}`} id={is24 ? "node-5_8632" : "node-5_8629"}>
      {is16 && (
        <>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 top-1/2 w-[12.5px]" data-node-id="5:8630" data-name="Shield">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShield} />
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[8px] left-1/2 top-[calc(50%-1.18px)] w-[7px]" data-node-id="5:8631" data-name="RZP logo">
            <div className="absolute inset-[-21.86%_-24.98%]">
              <img alt="" className="block max-w-none size-full" src={imgRzpLogo} />
            </div>
          </div>
        </>
      )}
      {is24 && (
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[20px] left-1/2 top-1/2 w-[15.738px]" data-node-id="5:8633" data-name="RTB logo">
          <div className="absolute inset-[-1.25%_-1.67%_-1.25%_0]">
            <img alt="" className="block max-w-none size-full" src={imgRtbLogo} />
          </div>
        </div>
      )}
    </div>
  );
}

export default function Long({ config = defaultConfig }: { config?: CardConfig }) {
  const cfg = clamp(config);
  const isHighlighted = (id: CardId) => cfg.highlight?.cardId === id;
  const highlightFor = (id: CardId) =>
    isHighlighted(id) ? HIGHLIGHT_COLOR_HEX[cfg.highlight!.color] : undefined;
  // Fill the card background with the highlight color. Returns undefined when
  // the card isn't selected, so the existing white/transparent bg stays.
  const highlightStyle = (id: CardId): React.CSSProperties | undefined => {
    const c = highlightFor(id);
    return c ? { backgroundColor: c, borderColor: c } : undefined;
  };
  // For UPI's lavender embedded-providers area: light-gray when card=black, light-green when card=green.
  const upiTintStyle: React.CSSProperties | undefined = isHighlighted('upi')
    ? { backgroundColor: HIGHLIGHT_LIGHT_HEX[cfg.highlight!.color] }
    : undefined;
  const highlightDataAttr = (id: CardId): string | undefined =>
    isHighlighted(id) ? cfg.highlight!.color : undefined;

  // ─── Expand / collapse state for UPI and Netbanking ────────────────────
  // UPI starts expanded (shows embedded providers); Netbanking starts collapsed.
  const [upiExpanded, setUpiExpanded] = useState(true);
  const [netbankingExpanded, setNetbankingExpanded] = useState(false);
  // Offset for cards below UPI: 0 if UPI is open (default), -EXPANDED_DELTA if collapsed.
  const upiCollapseOffset = upiExpanded ? 0 : -EXPANDED_DELTA;
  // Offset for cards below Netbanking: 0 if collapsed (default), +EXPANDED_DELTA if expanded.
  const nbExpandOffset = netbankingExpanded ? EXPANDED_DELTA : 0;
  // Per-card top positions, recomputed whenever either state flips.
  // Cards and EMI each carry a 2-line subtext, so cards below them shift
  // down by WRAP_DELTA per wrapping card above.
  const cardTops = {
    cards: 225.72 + upiCollapseOffset,
    netbanking: 308.56 + upiCollapseOffset + WRAP_DELTA,
    emi: 386.87 + upiCollapseOffset + nbExpandOffset + WRAP_DELTA,
    cod: 470.56 + upiCollapseOffset + nbExpandOffset + WRAP_DELTA * 2,
  };
  // Badges hover 4px above their card.
  const badgeTops = {
    cards: cardTops.cards - 4,
    netbanking: cardTops.netbanking - 4,
    emi: cardTops.emi - 4,
    cod: cardTops.cod - 4,
  };
  // Container height: base 514 + expansion deltas + 2 wrapping cards (Cards & EMI).
  const containerHeight = 514 + nbExpandOffset + upiCollapseOffset + WRAP_DELTA * 2;
  return (
    <div className="overflow-clip relative rounded-[12px] size-full" data-node-id="3612:15568" style={{ backgroundImage: "linear-gradient(90deg, rgb(41, 80, 218) 0%, rgb(41, 80, 218) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Long" data-price-mode={cfg.priceMode} data-highlight-card={cfg.highlight?.cardId} data-highlight-color-global={cfg.highlight?.color}>
      <div className="absolute content-stretch flex flex-col h-[1497px] items-start left-0 top-[-731.28px] w-[375px]" data-node-id="3612:15569" data-name="Container">
        <div className="content-stretch flex h-[40px] items-end relative shrink-0 w-full" data-node-id="3612:15570" data-name="Status bar">
          <div className="content-stretch flex flex-[1_0_0] h-[40px] items-center justify-between min-w-px px-[16px] relative" data-node-id="I3612:15570;266:1499" data-name="Status">
            <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0 w-[128px]" data-node-id="I3612:15570;266:1499;266:1640" data-name="Time & Date">
              <div className="[word-break:break-word] flex flex-col font-['Inter'] font-normal font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[color:white] tracking-[0.25px] whitespace-nowrap" data-node-id="I3612:15570;266:1499;266:1641" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[20px]">9:30</p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-end relative shrink-0" data-node-id="I3612:15570;266:1499;266:1643" data-name="Status Icons">
              <div className="content-stretch flex items-start relative shrink-0" data-node-id="I3612:15570;266:1499;266:1644" data-name="Wi-Fi Network">
                <div className="mr-[-2px] overflow-clip relative shrink-0 size-[16px]" data-node-id="I3612:15570;266:1499;266:1645" data-name="Wifi">
                  <div className="absolute inset-[18.5%_4.17%_16.67%_4.17%]" data-node-id="I3612:15570;266:1499;266:1645;346:8257" data-name="Vector">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
                  </div>
                </div>
                <div className="overflow-clip relative shrink-0 size-[16px]" data-node-id="I3612:15570;266:1499;266:1646" data-name="Signal">
                  <div className="absolute inset-[8.33%]" data-node-id="I3612:15570;266:1499;266:1646;339:8061" data-name="Vector">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector2} />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[2px] h-[52px] items-center relative shrink-0" data-node-id="I3612:15570;266:1499;266:1647" data-name="Battery">
                <div className="overflow-clip relative shrink-0 size-[16px]" data-node-id="I3612:15570;266:1499;266:1648" data-name="Battery">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[14.167px] left-1/2 top-1/2 w-[8.5px]" data-node-id="I3612:15570;266:1499;266:1648;348:8871" data-name="Base">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBase} />
                  </div>
                </div>
              </div>
            </div>
            <div className="-translate-x-1/2 absolute left-1/2 size-[24px] top-[8px]" data-node-id="I3612:15570;266:1499;266:1650" data-name="Camera">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[var(--camera,#2e2e2e)] left-1/2 rounded-[100px] size-[24px] top-1/2" data-node-id="I3612:15570;266:1499;266:1651" data-name="Camera" />
            </div>
          </div>
        </div>
        <div className="bg-[#2950da] h-[66px] overflow-clip relative shrink-0 w-full" data-node-id="3612:15571" data-name="Chrome toolbar">
          <div className="-translate-y-1/2 absolute left-[12px] size-[24px] top-1/2" data-node-id="I3612:15571;3:169" data-name="Home">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHome} />
          </div>
          <div className="absolute inset-[43.94%_87.78%_43.94%_10%]" data-node-id="I3612:15571;3:171" data-name="Spacer - 8px" />
          <div className="absolute bg-[rgba(255,255,255,0.1)] content-stretch flex gap-[8px] items-center left-[44px] px-[11px] py-[9px] right-[84px] rounded-[17px] top-[16px]" data-node-id="I3612:15571;3:172" data-name="Address Field">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-node-id="I3612:15571;3:177" data-name="Lock">
              <div className="absolute h-[11px] left-[4px] top-[3px] w-[8px]" data-node-id="I3612:15571;3:178" data-name="Lock">
                <div className="absolute inset-[-3.18%_0_0_0]">
                  <img alt="" className="block max-w-none size-full" src={imgLock} />
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center self-stretch">
              <div className="[word-break:break-word] content-stretch flex font-['Inter'] font-medium font-medium h-full items-center leading-[0] relative shrink-0 text-[10px] whitespace-nowrap" data-node-id="I3612:15571;3:174" data-name="Address">
                <div className="flex flex-col justify-center relative shrink-0 text-white" data-node-id="I3612:15571;3:175" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[13px]">Razorpay.com</p>
                </div>
                <div className="flex flex-col justify-center relative shrink-0 text-[rgba(255,255,255,0.6)]" data-node-id="I3612:15571;3:176" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[13px]">/Viraj</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-[43.94%_18.89%_43.94%_76.67%]" data-node-id="I3612:15571;3:181" data-name="Spacer -  16px" />
          <div className="-translate-y-1/2 absolute overflow-clip right-[52px] size-[16px] top-1/2" data-node-id="I3612:15571;3:182" data-name="Tabs">
            <div className="absolute border-[1.5px] border-solid border-white inset-0 rounded-[5px]" data-node-id="I3612:15571;3:183" data-name="Rectangle" />
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter'] font-bold font-bold justify-center leading-[0] left-1/2 size-[16px] text-[10px] text-center text-white top-1/2" data-node-id="I3612:15571;3:184" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[normal]">1</p>
            </div>
          </div>
          <div className="absolute inset-[43.94%_10%_43.94%_85.56%]" data-node-id="I3612:15571;3:185" data-name="Spacer -  16px" />
          <div className="-translate-y-1/2 absolute right-[12px] size-[24px] top-1/2" data-node-id="I3612:15571;3:186" data-name="More">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
          </div>
        </div>
        <div className="content-stretch flex items-center justify-center overflow-clip pl-[24px] pr-[16px] py-[16px] relative shrink-0 w-full" data-node-id="3612:15572" data-name="Language change">
          <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="3612:15573" data-name="LHS">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="3612:15574" data-name="arrow-left">
              <div className="absolute inset-[17.59%_16.67%]" data-node-id="I3612:15574;65:825" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector3} />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-node-id="3612:15575" data-name="Logos">
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="I3612:15575;3:3900" data-name="Logo + RTB">
                <div className="h-[27px] relative shrink-0 w-[148.253px]" data-node-id="I3612:15575;294:7539" data-name="mavenshop">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMavenshop} />
                </div>
                <RtbIcon className="overflow-clip relative shrink-0 size-[24px]" size="24" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#173087] content-stretch flex flex-col h-[1332px] items-start overflow-clip relative rounded-[12px] shrink-0" data-node-id="3612:15576" data-name="Notification banner">
          <div className="content-stretch flex flex-col items-center justify-center px-[24px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[375px]" data-node-id="3612:15577" data-name="Container">
            <div className="content-stretch flex flex-col h-[36px] items-center justify-center overflow-clip px-[24px] py-[8px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-node-id="3612:15578" data-name="Banner">
              <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-node-id="3612:15579" data-name="Body">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter'] font-medium justify-end leading-[0] min-w-px not-italic relative text-[13px] text-center text-white" data-node-id="3612:15580">
                  <p className="leading-[18px]">🪔 Diwali sale Flat 10% Off</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[white] content-stretch flex flex-col h-[1296px] items-start overflow-clip relative rounded-tl-[12px] rounded-tr-[12px] shrink-0" data-node-id="3612:15581" data-name="White">
            <div className="bg-[#f5f5f5] flex-[1_0_0] min-h-px overflow-clip relative rounded-tl-[12px] rounded-tr-[12px] w-[375px]" data-node-id="3612:15582" data-name="Container">
              <div className="absolute content-stretch flex flex-col items-center left-0 py-[16px] top-[-3.29px] w-[375px]" data-node-id="3612:15583">
                <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-node-id="3612:15584">
                  <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[343px]" data-node-id="3612:15585" data-name="Multi ship">
                    <OrderSummary className="bg-[#e6ecfc] content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shadow-[0px_0.5px_16px_0px_rgba(25,40,57,0.02)] shrink-0 w-[343px]" />
                    <Coupons className="content-stretch drop-shadow-[0px_0.5px_8px_rgba(25,40,57,0.02)] flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-[343px]" />
                    <Delivery className="content-stretch drop-shadow-[0px_0.5px_8px_rgba(25,40,57,0.02)] flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-[343px]" />
                  </div>
                  <div className="content-stretch flex flex-col gap-[16px] items-start pb-[80px] relative shrink-0 w-full" data-node-id="3612:15589" data-name="All options">
                    <div className="content-stretch flex flex-col gap-[12px] items-start px-[16px] relative shrink-0 w-[375px]" data-node-id="3612:15590" data-name="Pad">
                      <p className="[word-break:break-word] font-['Inter'] font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:#40566d] whitespace-nowrap" data-node-id="3612:15591">
                        Payment offers
                      </p>
                      <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-node-id="3612:15592" data-name="Offer options">
                        <div className="bg-gradient-to-r content-stretch flex flex-[1_0_0] from-white gap-[8px] items-center min-w-px pl-[4px] pr-[12px] py-[4px] relative rounded-[32px] to-white" data-node-id="I3612:15592;343:19886" data-name="Pills">
                          <div className="bg-[white] border-[0.5px] border-[rgba(108,132,157,0.18)] border-solid relative rounded-[32px] shrink-0 size-[26px]" data-node-id="I3612:15592;343:19886;314:29919" data-name="Provider Icon">
                            <div className="absolute left-[4.5px] mix-blend-darken size-[16px] top-[4.5px]" data-node-id="I3612:15592;343:19886;314:29919;127:14129" data-name="Image">
                              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                <img alt="" className="absolute left-[-15.64%] max-w-none size-[131.28%] top-[-15.64%]" src={imgImage} />
                              </div>
                            </div>
                          </div>
                          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter'] font-medium justify-center leading-[0] min-w-px overflow-hidden relative text-[13px] text-[color:black] text-ellipsis tracking-[0px] whitespace-nowrap" data-node-id="I3612:15592;343:19886;314:29920">
                            <p className="leading-[18px] overflow-hidden text-ellipsis">Upto ₹350 off on Google Pay</p>
                          </div>
                        </div>
                        <div className="bg-[white] content-stretch flex gap-[8px] h-[34px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[32px] shrink-0" data-node-id="I3612:15592;314:29009" data-name="Offer 2">
                          <div className="content-stretch flex items-center relative shrink-0" data-node-id="I3612:15592;314:29010">
                            <div className="bg-[white] border-[0.5px] border-[rgba(108,132,157,0.18)] border-solid mr-[-12px] relative rounded-[32px] shrink-0 size-[26px]" data-node-id="I3612:15592;314:29011" data-name="Provider Icon">
                              <div className="absolute left-[3.5px] size-[18px] top-[3.5px]" data-node-id="I3612:15592;314:29011;153:13584" data-name="Image">
                                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                  <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[286.35%]" src={imgImage8} />
                                </div>
                              </div>
                            </div>
                            <div className="bg-[white] border-[0.5px] border-[rgba(108,132,157,0.18)] border-solid mr-[-12px] relative rounded-[32px] shrink-0 size-[26px]" data-node-id="I3612:15592;314:29012" data-name="Provider Icon">
                              <div className="absolute h-[15px] left-[1.5px] top-[5.5px] w-[22px]" data-node-id="I3612:15592;314:29012;133:13489" data-name="Image">
                                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
                              </div>
                            </div>
                            <div className="bg-[white] border-[0.5px] border-[rgba(108,132,157,0.18)] border-solid relative rounded-[32px] shrink-0 size-[26px]" data-node-id="I3612:15592;314:29013" data-name="Provider Icon">
                              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter'] font-semibold h-[9px] justify-center leading-[0] left-[12.5px] not-italic text-[10px] text-[color:#40566d] text-center top-[13px] w-[16px]" data-node-id="I3612:15592;314:29013;14577:41571">
                                <p className="leading-[14px]">+1</p>
                              </div>
                            </div>
                          </div>
                          <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#2950da] text-[13px] text-ellipsis whitespace-nowrap" data-node-id="I3612:15592;314:29014">
                            <p className="leading-[18px] overflow-hidden text-ellipsis">{`View all `}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[12px] items-start px-[16px] relative shrink-0 w-full" data-node-id="3612:15593" data-name="RECOMMENDED">
                      <p className="[word-break:break-word] font-['Inter'] font-medium leading-[18px] relative shrink-0 text-[13px] text-[color:#40566d] tracking-[0px] whitespace-nowrap" data-node-id="3612:15594">
                        Recommended
                      </p>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="3612:15595" data-name="RECOMMENDED">
                        <div className="content-stretch drop-shadow-[0px_0.5px_calc(16px/2)_rgba(25,40,57,0.02)] flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="3612:15596">
                          <div className="bg-white border-[rgba(108,132,157,0.18)] border-b border-solid content-stretch flex gap-[12px] items-center overflow-clip p-[12px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-node-id="3612:15597" data-name="Mobile Method">
                            <ProviderIcon1 className="bg-[white] border border-[rgba(108,132,157,0.18)] border-solid relative rounded-[32px] shrink-0 size-[26px]" type="Google Pay" />
                            <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-w-px relative" data-node-id="3612:15599" data-name="Name/Amount">
                              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-node-id="3612:15600">
                                <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium justify-center leading-[0] relative shrink-0 text-[13px] text-[color:#192839] tracking-[0px] whitespace-nowrap" data-node-id="3612:15601">
                                  <p className="leading-[18px]">Google Pay</p>
                                </div>
                                <div className="content-stretch flex items-center py-[2px] relative rounded-[24px] shrink-0" data-node-id="3612:15602" data-name="Tag">
                                  <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium justify-center leading-[0] overflow-hidden relative shrink-0 text-[#006c36] text-[11px] text-ellipsis tracking-[0px] whitespace-nowrap" data-node-id="I3612:15602;7495:55641">
                                    <p className="leading-[14px] overflow-hidden text-ellipsis">15% off on all transactions above ₹499</p>
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-col items-end justify-center relative self-stretch shrink-0" data-node-id="3612:15604" data-name="RHS">
                                <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0" data-node-id="3612:15605" data-name="Amount">
                                  <div className="flex items-center justify-center relative shrink-0 size-[16px]">
                                    <div className="-scale-y-100 flex-none rotate-90">
                                      <div className="overflow-clip relative size-[16px]" data-node-id="3612:15607" data-name="arrow-down">
                                        <div className="absolute inset-[34.26%_23.48%_33.33%_23.48%]" data-node-id="I3612:15607;65:837" data-name="Vector">
                                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector4} />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white content-stretch flex gap-[12px] items-center overflow-clip p-[12px] relative shrink-0 w-full" data-node-id="3612:15608" data-name="Mobile Method">
                            <ProviderIcon1 className="bg-[white] border border-[rgba(108,132,157,0.18)] border-solid relative rounded-[32px] shrink-0 size-[26px]" />
                            <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-w-px relative" data-node-id="3612:15610" data-name="Name/Amount">
                              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-node-id="3612:15611">
                                <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium justify-center leading-[0] relative shrink-0 text-[13px] text-[color:#192839] tracking-[0px] whitespace-nowrap" data-node-id="3612:15612">
                                  <p className="leading-[18px]">HDFC Credit ***5284</p>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-col gap-[8px] items-end justify-center relative self-stretch shrink-0" data-node-id="3612:15614" data-name="RHS">
                                <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0" data-node-id="3612:15615" data-name="Amount">
                                  <div className="flex items-center justify-center relative shrink-0 size-[16px]">
                                    <div className="-scale-y-100 flex-none rotate-90">
                                      <div className="overflow-clip relative size-[16px]" data-node-id="3612:15617" data-name="arrow-down">
                                        <div className="absolute inset-[34.26%_23.48%_33.33%_23.48%]" data-node-id="I3612:15617;65:837" data-name="Vector">
                                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector4} />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[12px] h-[495px] items-start px-[16px] relative shrink-0 w-full" data-node-id="3612:15620">
                      <p className="[word-break:break-word] font-['Inter'] font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:#40566d] whitespace-nowrap" data-node-id="3612:15621">
                        More ways to pay
                      </p>
                      <div className="relative shrink-0 w-[343px]" data-node-id="3612:15622" style={{ height: containerHeight }}>
                        <div className="absolute contents left-0 top-[-0.27px]" data-node-id="3612:15623">
                          <div className="absolute shadow-[0_1px_3px_rgba(25,40,57,0.05)] left-0 overflow-clip right-0 rounded-[12px] top-[3.56px]" data-node-id="3612:15624" data-card-id="upi" style={{ height: upiExpanded ? 210 : 77 }}>
                            <div className="absolute contents left-[-1px] right-[-1px] top-[-0.88px]" data-node-id="3612:15625">
                              <div className="absolute bg-[white] content-stretch flex h-[77px] items-center justify-between left-0 p-[12px] right-0 top-[0.12px]" data-node-id="3612:15626" data-name="Method dropdown" data-highlight-color={highlightDataAttr('upi')} style={highlightStyle('upi')}>
                                {cfg.badges.upi && cfg.badgeLayout === 'above-price' && (
                                  <div className="absolute top-[8px] right-[12px] z-[3]">
                                    <PayBadgeInline color={cfg.badges.upi.color} text={cfg.badges.upi.text} />
                                  </div>
                                )}
                                <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-node-id="3612:15627" data-name="Method">
                                  <ProvidersIcons className="relative shrink-0 size-[24px]" type="UPI" />
                                  <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[170px]" data-node-id="3612:15629" data-name="Text">
                                    <div className="content-stretch flex flex-col gap-[4px] h-[22px] items-start justify-center relative shrink-0 w-full" data-node-id="3612:15630" data-name="Middle">
                                      <div className="content-stretch flex gap-[4px] items-center leading-[0] relative shrink-0" data-node-id="3612:15631" data-name="Method name">
                                        <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium justify-center not-italic relative shrink-0 text-[14px] text-[color:#192839] whitespace-nowrap" data-node-id="3612:15632">
                                          <p className="leading-[20px]">UPI</p>
                                        </div>
                                        <div className="content-stretch flex items-center relative shrink-0" data-node-id="3612:15633" data-name="Providers">
                                          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid mr-[-6.704px] place-items-start relative shrink-0" data-node-id="3612:15634" data-name="Group">
                                            <div className="bg-[white] border-[0.917px] border-[#e3eaf3] border-solid col-start-1 ml-0 mt-0 relative rounded-[16.5px] row-start-1 size-[22px]" data-node-id="3612:15635" data-name="Rectangle" />
                                            <div className="col-start-1 ml-[5.12px] mt-[5.12px] relative row-start-1 size-[12.29px]" data-node-id="3612:15636" data-name="Image">
                                              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                                <img alt="" className="absolute left-[-15.64%] max-w-none size-[131.28%] top-[-15.64%]" src={imgImage} />
                                              </div>
                                            </div>
                                          </div>
                                          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid mr-[-6.704px] place-items-start relative shrink-0" data-node-id="3612:15637" data-name="Group">
                                            <div className="bg-[white] border-[0.917px] border-[#e3eaf3] border-solid col-start-1 ml-0 mt-0 relative rounded-[16.5px] row-start-1 size-[22px]" data-node-id="3612:15638" data-name="Rectangle" />
                                            <div className="col-start-1 ml-[4.79px] mt-[5.12px] relative row-start-1 size-[12.29px]" data-node-id="3612:15639" data-name="Image">
                                              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage1} />
                                              </div>
                                            </div>
                                          </div>
                                          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-node-id="3612:15640" data-name="Group">
                                            <div className="bg-[white] border-[0.917px] border-[#e3eaf3] border-solid col-start-1 ml-0 mt-0 relative rounded-[16.5px] row-start-1 size-[22px]" data-node-id="3612:15641" data-name="Rectangle" />
                                            <div className="col-start-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[4.87px] mt-[4.77px] place-items-start relative row-start-1" data-node-id="3612:15642" data-name="Group">
                                              <div className="col-start-1 ml-0 mt-0 relative row-start-1 size-[12.909px]" data-node-id="3612:15643" data-name="Rectangle" />
                                              <div className="col-start-1 h-[11.761px] ml-[2.3px] mt-[0.57px] relative row-start-1 w-[8.308px]" data-node-id="3612:15644" data-name="Group">
                                                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup} />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#006c36] text-[11px] w-full" data-node-id="3612:15648">
                                      <p className="leading-[18px]">Save ₹150 extra</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="content-stretch flex gap-[6px] items-center justify-end relative shrink-0 w-[67px]" data-node-id="3612:15649">
                                  <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-[color:rgba(67,75,81,0.32)] whitespace-nowrap" data-node-id="3612:15650">
                                    <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[20px] line-through">₹1249</p>
                                  </div>
                                  <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[color:#192839] w-[39.089px]" data-node-id="3612:15651">
                                    <p className="leading-[20px]">₹1249</p>
                                  </div>
                                  <div
                                    className="flex items-center justify-center relative shrink-0 size-[16px] cursor-pointer pointer-events-auto"
                                    onClick={(e) => { e.stopPropagation(); setUpiExpanded((v) => !v); }}
                                  >
                                    <div
                                      className="flex-none transition-transform duration-200"
                                      style={{ transform: upiExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                    >
                                      <div className="content-stretch flex gap-[4px] items-center relative" data-node-id="3612:15652" data-name="RHS">
                                        <div className="overflow-clip relative shrink-0 size-[16px]" data-node-id="3612:15654" data-name="arrow-down">
                                          <div className="absolute inset-[34.26%_23.48%_33.33%_23.48%]" data-node-id="I3612:15654;65:837" data-name="Vector">
                                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector5} />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {upiExpanded && (
                              <div className="absolute bg-[#f7f9ff] content-stretch flex flex-col gap-[12px] items-start left-0 p-[16px] right-0 top-[70.12px]" data-node-id="3612:15655" style={upiTintStyle}>
                                <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="3612:15656">
                                  <div className="bg-[white] border border-[rgba(108,132,157,0.18)] border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-[48px] items-center min-w-px overflow-clip pl-[8px] pr-[16px] py-[8px] relative rounded-[8px] shadow-[0px_0.5px_16px_0px_rgba(25,40,57,0.02)]" data-node-id="3612:15657">
                                    <ProviderIcon className="bg-[white] border border-[rgba(108,132,157,0.18)] border-solid relative rounded-[32px] shrink-0 size-[26px]" />
                                    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Inter'] font-medium items-start leading-[0] min-w-px not-italic relative" data-node-id="I3612:15657;133:13495" data-name="Body">
                                      <div className="flex flex-col justify-center relative shrink-0 text-[13px] text-[color:#192839] w-full" data-node-id="I3612:15657;133:13483">
                                        <p className="leading-[20px]">Google Pay</p>
                                      </div>
                                      <div className="flex flex-col justify-center overflow-hidden relative shrink-0 text-[#006c36] text-[11px] text-ellipsis w-full whitespace-nowrap" data-node-id="I3612:15657;133:13493">
                                        <p className="leading-[18px] overflow-hidden text-ellipsis">5% Cashback</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="bg-[white] border border-[rgba(108,132,157,0.18)] border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-[48px] items-center min-w-px overflow-clip pl-[8px] pr-[16px] py-[8px] relative rounded-[8px] shadow-[0px_0.5px_16px_0px_rgba(25,40,57,0.02)]" data-node-id="3612:15658">
                                    <ProviderIcon className="bg-[white] border border-[rgba(108,132,157,0.18)] border-solid relative rounded-[32px] shrink-0 size-[26px]" type="PayTM" />
                                    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="I3612:15658;133:13522" data-name="Body">
                                      <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[color:#192839] w-full" data-node-id="I3612:15658;133:13523">
                                        <p className="leading-[20px]">PayTM</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="3612:15659">
                                  <div className="bg-[white] border border-[rgba(108,132,157,0.18)] border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-[48px] items-center min-w-px overflow-clip pl-[8px] pr-[16px] py-[8px] relative rounded-[8px] shadow-[0px_0.5px_16px_0px_rgba(25,40,57,0.02)]" data-node-id="3612:15660">
                                    <ProviderIcon className="bg-[white] border border-[rgba(108,132,157,0.18)] border-solid relative rounded-[32px] shrink-0 size-[26px]" type="PhonePe" />
                                    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="I3612:15660;133:13507" data-name="Body">
                                      <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[color:#192839] w-full" data-node-id="I3612:15660;133:13508">
                                        <p className="leading-[20px]">PhonePe</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="bg-[white] border border-[rgba(108,132,157,0.18)] border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-[48px] items-center min-w-px overflow-clip pl-[8px] pr-[16px] py-[8px] relative rounded-[8px] shadow-[0px_0.5px_16px_0px_rgba(25,40,57,0.02)]" data-node-id="3612:15661">
                                    <div className="bg-[white] border border-[rgba(108,132,157,0.18)] border-solid relative rounded-[32px] shrink-0 size-[26px]" data-node-id="I3612:15661;133:13534" data-name="Type=More">
                                      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[16px] top-1/2" data-node-id="I3612:15661;133:13534;133:13546" data-name="more">
                                        <div className="absolute inset-[41.67%_12.5%]" data-node-id="I3612:15661;133:13534;133:13546;133:13542" data-name="Vector">
                                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector6} />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start leading-[0] min-w-px not-italic relative" data-node-id="I3612:15661;133:13535" data-name="Body">
                                      <div className="flex flex-col font-['Inter'] font-medium justify-center relative shrink-0 text-[13px] text-[color:#192839] w-full" data-node-id="I3612:15661;133:13536">
                                        <p className="leading-[20px]">More</p>
                                      </div>
                                      <div className="flex flex-col font-['Inter'] font-normal justify-center relative shrink-0 text-[11px] text-[color:#768ea7] w-full" data-node-id="I3612:15661;133:13537">
                                        <p className="leading-[18px]">{`Apps & UPI ID`}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              )}
                            </div>
                          </div>
                          {cfg.badges.upi && cfg.badgeLayout === 'centered' ? <PayBadge color={cfg.badges.upi.color} text={cfg.badges.upi.text} topPx={-0.88} /> : null}
                        </div>
                        <div className="absolute contents left-0 top-[225.72px]" data-node-id="3612:15668">
                          <div className="absolute contents left-0 top-[225.72px]" data-node-id="3612:15669">
                            <div className="absolute bg-[white] shadow-[0_1px_3px_rgba(25,40,57,0.05)] h-[84.444px] left-0 rounded-[12px] w-[343px]" data-node-id="3612:15670" data-name="Method dropdown" data-card-id="cards" data-highlight-color={highlightDataAttr('cards')} style={{ top: cardTops.cards, ...highlightStyle('cards') }}>
                              {cfg.badges.cards && cfg.badgeLayout === 'above-price' && (
                                <div className="absolute top-[8px] right-[12px] z-[3]">
                                  <PayBadgeInline color={cfg.badges.cards.color} text={cfg.badges.cards.text} />
                                </div>
                              )}
                              <div className="absolute content-stretch flex gap-[12px] items-center left-[11px] top-[16px]" data-node-id="3612:15671">
                                <ProvidersIcons className="relative shrink-0 size-[24px]" type="Card" />
                                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[170px]" data-node-id="3612:15673" data-name="Frame">
                                  <div className="content-stretch flex flex-col gap-[4px] h-[22px] items-start justify-center relative shrink-0 w-full" data-node-id="3612:15674" data-name="Middle">
                                    <div className="content-stretch flex gap-[4px] items-center leading-[0] relative shrink-0" data-node-id="3612:15675" data-name="Method name">
                                      <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium justify-center not-italic relative shrink-0 text-[14px] text-[color:#192839] whitespace-nowrap" data-node-id="3612:15676">
                                        <p className="leading-[20px]">Cards</p>
                                      </div>
                                      <div className="content-stretch flex items-start relative shrink-0" data-node-id="3612:15677" data-name="Providers">
                                        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid mr-[-6.704px] place-items-start relative shrink-0" data-node-id="3612:15678" data-name="Group">
                                          <div className="bg-[white] border-[0.917px] border-[#e3eaf3] border-solid col-start-1 ml-0 mt-0 relative rounded-[16.5px] row-start-1 size-[22px]" data-node-id="3612:15679" data-name="Rectangle" />
                                          <div className="col-start-1 h-[6.417px] ml-[2.75px] mt-[8.25px] relative row-start-1 w-[16.5px]" data-node-id="3612:15680" data-name="Image">
                                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                              <img alt="" className="absolute h-[210.28%] left-[-22.49%] max-w-none top-[-53.27%] w-[148.7%]" src={imgImage9} />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid mr-[-6.704px] place-items-start relative shrink-0" data-node-id="3612:15681" data-name="Group">
                                          <div className="bg-[white] border-[0.917px] border-[#e3eaf3] border-solid col-start-1 ml-0 mt-0 relative rounded-[16.5px] row-start-1 size-[22px]" data-node-id="3612:15682" data-name="Rectangle" />
                                          <div className="col-start-1 ml-[4.58px] mt-[4.58px] relative row-start-1 size-[12.833px]" data-node-id="3612:15683" data-name="Image">
                                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage10} />
                                          </div>
                                        </div>
                                        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-node-id="3612:15684" data-name="Group">
                                          <div className="bg-[white] border-[0.917px] border-[#e3eaf3] border-solid col-start-1 ml-0 mt-0 relative rounded-[16.5px] row-start-1 size-[22px]" data-node-id="3612:15685" data-name="Rectangle" />
                                          <div className="col-start-1 h-[4.583px] ml-[2.75px] mt-[9.17px] relative row-start-1 w-[17.417px]" data-node-id="3612:15686" data-name="Image">
                                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                              <img alt="" className="absolute h-[136.22%] left-[-10%] max-w-none top-[-18.11%] w-[115%]" src={imgImage11} />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium justify-center not-italic relative shrink-0 text-[#006c36] text-[11px] w-full" data-node-id="3612:15688">
                                    <p className="leading-[14px]">Get up to ₹500 cashback on every transaction</p>
                                  </div>
                                </div>
                              </div>
                              <div className="absolute content-stretch flex gap-[6px] items-center justify-end left-[263px] top-[27px] w-[67px]" data-node-id="3612:15689">
                                <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-[color:rgba(67,75,81,0.32)] whitespace-nowrap" data-node-id="3612:15690">
                                  <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[20px] line-through">₹1249</p>
                                </div>
                                <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[color:#192839] w-[39.089px]" data-node-id="3612:15691">
                                  <p className="leading-[20px]">₹1249</p>
                                </div>
                                <div className="flex items-center justify-center relative shrink-0 size-[16px]">
                                  <div className="-rotate-90 flex-none">
                                    <div className="content-stretch flex gap-[4px] items-center relative" data-node-id="3612:15692" data-name="RHS">
                                      <div className="overflow-clip relative shrink-0 size-[16px]" data-node-id="3612:15694" data-name="arrow-down">
                                        <div className="absolute inset-[34.26%_23.48%_33.33%_23.48%]" data-node-id="I3612:15694;65:837" data-name="Vector">
                                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector5} />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute bg-[white] shadow-[0_1px_3px_rgba(25,40,57,0.05)] content-stretch flex h-[66px] isolate items-center justify-between left-0 p-[12px] right-0 rounded-[12px]" data-node-id="3612:15695" data-name="Method dropdown" data-card-id="netbanking" data-highlight-color={highlightDataAttr('netbanking')} style={{ top: cardTops.netbanking, ...highlightStyle('netbanking') }}>
                          {cfg.badges.netbanking && cfg.badgeLayout === 'above-price' && (
                            <div className="absolute top-[8px] right-[12px] z-[3]">
                              <PayBadgeInline color={cfg.badges.netbanking.color} text={cfg.badges.netbanking.text} />
                            </div>
                          )}
                          <div className="content-stretch flex gap-[12px] items-center relative shrink-0 z-[2]" data-node-id="3612:15696">
                            <ProvidersIcons className="relative shrink-0 size-[24px]" type="Netbanking" />
                            <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] relative shrink-0 w-[170px]" data-node-id="3612:15698" data-name="Frame">
                              <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="3612:15699" data-name="Method name">
                                <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium justify-center not-italic relative shrink-0 text-[14px] text-[color:#192839] whitespace-nowrap" data-node-id="3612:15700">
                                  <p className="leading-[20px]">Netbanking</p>
                                </div>
                                <div className="content-stretch flex items-center relative shrink-0" data-node-id="3612:15701" data-name="Providers">
                                  <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid mr-[-6.704px] place-items-start relative shrink-0" data-node-id="3612:15702" data-name="Group">
                                    <div className="bg-[white] border-[0.917px] border-[#e3eaf3] border-solid col-start-1 ml-0 mt-0 relative rounded-[16.5px] row-start-1 size-[22px]" data-node-id="3612:15703" data-name="Rectangle" />
                                    <div className="col-start-1 ml-[5.12px] mt-[5.12px] relative row-start-1 size-[12.29px]" data-node-id="3612:15704" data-name="Image">
                                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                        <img alt="" className="absolute left-[-15.64%] max-w-none size-[131.28%] top-[-15.64%]" src={imgImage} />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid mr-[-6.704px] place-items-start relative shrink-0" data-node-id="3612:15705" data-name="Group">
                                    <div className="bg-[white] border-[0.917px] border-[#e3eaf3] border-solid col-start-1 ml-0 mt-0 relative rounded-[16.5px] row-start-1 size-[22px]" data-node-id="3612:15706" data-name="Rectangle" />
                                    <div className="col-start-1 ml-[4.79px] mt-[5.12px] relative row-start-1 size-[12.29px]" data-node-id="3612:15707" data-name="Image">
                                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage1} />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-node-id="3612:15708" data-name="Group">
                                    <div className="bg-[white] border-[0.917px] border-[#e3eaf3] border-solid col-start-1 ml-0 mt-0 relative rounded-[16.5px] row-start-1 size-[22px]" data-node-id="3612:15709" data-name="Rectangle" />
                                    <div className="col-start-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[4.87px] mt-[4.77px] place-items-start relative row-start-1" data-node-id="3612:15710" data-name="Group">
                                      <div className="col-start-1 ml-0 mt-0 relative row-start-1 size-[12.909px]" data-node-id="3612:15711" data-name="Rectangle" />
                                      <div className="col-start-1 h-[11.761px] ml-[2.3px] mt-[0.57px] relative row-start-1 w-[8.308px]" data-node-id="3612:15712" data-name="Group">
                                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1} />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium justify-center min-w-full not-italic relative shrink-0 text-[#006c36] text-[11px] w-[min-content]" data-node-id="3612:15715">
                                <p className="leading-[18px]">Extra 5% cashback</p>
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[6px] items-center justify-end relative shrink-0 w-[67px] z-[1]" data-node-id="3612:15716">
                            <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-[color:rgba(67,75,81,0.32)] whitespace-nowrap" data-node-id="3612:15717">
                              <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[20px] line-through">₹1286</p>
                            </div>
                            <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[color:#192839] w-[39.089px]" data-node-id="3612:15718">
                              <p className="leading-[20px]">₹1286</p>
                            </div>
                            <div
                              className="flex items-center justify-center relative shrink-0 size-[16px] cursor-pointer pointer-events-auto"
                              onClick={(e) => { e.stopPropagation(); setNetbankingExpanded((v) => !v); }}
                            >
                              <div
                                className="flex-none transition-transform duration-200"
                                style={{ transform: netbankingExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
                              >
                                <div className="content-stretch flex gap-[4px] items-center relative" data-node-id="3612:15719" data-name="RHS">
                                  <div className="overflow-clip relative shrink-0 size-[16px]" data-node-id="3612:15721" data-name="arrow-down">
                                    <div className="absolute inset-[34.26%_23.48%_33.33%_23.48%]" data-node-id="I3612:15721;65:837" data-name="Vector">
                                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector5} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute contents left-0 top-[387.85px]" data-node-id="3612:15722">
                          <div className="absolute bg-[white] shadow-[0_1px_3px_rgba(25,40,57,0.05)] h-[85.502px] left-0 right-0 rounded-[12px]" data-node-id="3612:15723" data-name="Method dropdown" data-card-id="emi" data-highlight-color={highlightDataAttr('emi')} style={{ top: cardTops.emi, ...highlightStyle('emi') }}>
                            {cfg.badges.emi && cfg.badgeLayout === 'above-price' && (
                              <div className="absolute top-[8px] right-[12px] z-[3]">
                                <PayBadgeInline color={cfg.badges.emi.color} text={cfg.badges.emi.text} />
                              </div>
                            )}
                            <div className="absolute content-stretch flex gap-[12px] items-center left-[11px] top-[17px]" data-node-id="3612:15724">
                              <ProvidersIcons className="relative shrink-0 size-[24px]" type="EMI" />
                              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[170px]" data-node-id="3612:15726" data-name="Frame">
                                <div className="h-[22px] relative shrink-0 w-[82px]" data-node-id="3612:15727" data-name="image 24563">
                                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage24563} />
                                  {/* The composite image bakes "EMI" + provider logos together.
                                      When the card is highlighted, the dark "EMI" text loses
                                      contrast. Cover it with a same-coloured tile and write a
                                      white "EMI" on top. Width matches roughly the EMI part of
                                      the image (~36px of the 82px width). */}
                                  {isHighlighted('emi') && (
                                    <div
                                      className="absolute left-0 top-0 h-[22px] w-[36px] flex items-center"
                                      style={{ backgroundColor: HIGHLIGHT_COLOR_HEX[cfg.highlight!.color] }}
                                    >
                                      <p className="font-['Inter'] font-medium text-[14px] leading-[20px] text-white">EMI</p>
                                    </div>
                                  )}
                                </div>
                                <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium justify-center not-italic relative shrink-0 text-[#006c36] text-[11px] w-full" data-node-id="3612:15728">
                                  <p className="leading-[14px]">No-cost EMI, save up to ₹250 on processing fees</p>
                                </div>
                              </div>
                            </div>
                            <div className="absolute content-stretch flex gap-[6px] items-center justify-end left-[263px] top-[28px] w-[67px]" data-node-id="3612:15729">
                              <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-[color:rgba(67,75,81,0.32)] whitespace-nowrap" data-node-id="3612:15730">
                                <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[20px] line-through">₹1267</p>
                              </div>
                              <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[color:#192839] w-[39.089px]" data-node-id="3612:15731">
                                <p className="leading-[20px]">₹1267</p>
                              </div>
                              <div className="flex items-center justify-center relative shrink-0 size-[16px]">
                                <div className="-rotate-90 flex-none">
                                  <div className="content-stretch flex gap-[4px] items-center relative" data-node-id="3612:15732" data-name="RHS">
                                    <div className="overflow-clip relative shrink-0 size-[16px]" data-node-id="3612:15734" data-name="arrow-down">
                                      <div className="absolute inset-[34.26%_23.48%_33.33%_23.48%]" data-node-id="I3612:15734;65:837" data-name="Vector">
                                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector5} />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {cfg.badges.emi && cfg.badgeLayout === 'centered' ? <PayBadge color={cfg.badges.emi.color} text={cfg.badges.emi.text} topPx={badgeTops.emi} /> : null}
                          {cfg.badges.netbanking && cfg.badgeLayout === 'centered' ? <PayBadge color={cfg.badges.netbanking.color} text={cfg.badges.netbanking.text} topPx={badgeTops.netbanking} /> : null}
                          {netbankingExpanded && (
                          <div
                            className="absolute bg-[#f7f9ff] content-stretch flex flex-col gap-[12px] items-start left-0 p-[16px] right-0 rounded-[12px] shadow-[0_1px_3px_rgba(25,40,57,0.05)]"
                            style={{ top: cardTops.netbanking + 66 }}
                          >
                            <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
                              <div className="bg-[white] border border-[rgba(108,132,157,0.18)] border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-[48px] items-center min-w-px overflow-clip pl-[8px] pr-[16px] py-[8px] relative rounded-[8px] shadow-[0px_0.5px_16px_0px_rgba(25,40,57,0.02)]" data-nb-inner="true">
                                <ProviderIcon className="bg-[white] border border-[rgba(108,132,157,0.18)] border-solid relative rounded-[32px] shrink-0 size-[26px]" />
                                <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative">
                                  <p className="font-['Inter'] font-medium text-[13px] text-[#192839] leading-[20px]">Google Pay</p>
                                  <p className="font-['Inter'] font-medium text-[11px] text-[#006c36] leading-[18px]">5% Cashback</p>
                                </div>
                              </div>
                              <div className="bg-[white] border border-[rgba(108,132,157,0.18)] border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-[48px] items-center min-w-px overflow-clip pl-[8px] pr-[16px] py-[8px] relative rounded-[8px] shadow-[0px_0.5px_16px_0px_rgba(25,40,57,0.02)]" data-nb-inner="true">
                                <ProviderIcon className="bg-[white] border border-[rgba(108,132,157,0.18)] border-solid relative rounded-[32px] shrink-0 size-[26px]" type="PayTM" />
                                <p className="font-['Inter'] font-medium text-[13px] text-[#192839] leading-[20px]">PayTM</p>
                              </div>
                            </div>
                            <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
                              <div className="bg-[white] border border-[rgba(108,132,157,0.18)] border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-[48px] items-center min-w-px overflow-clip pl-[8px] pr-[16px] py-[8px] relative rounded-[8px] shadow-[0px_0.5px_16px_0px_rgba(25,40,57,0.02)]" data-nb-inner="true">
                                <ProviderIcon className="bg-[white] border border-[rgba(108,132,157,0.18)] border-solid relative rounded-[32px] shrink-0 size-[26px]" type="PhonePe" />
                                <p className="font-['Inter'] font-medium text-[13px] text-[#192839] leading-[20px]">PhonePe</p>
                              </div>
                              <div className="bg-[white] border border-[rgba(108,132,157,0.18)] border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-[48px] items-center min-w-px overflow-clip pl-[8px] pr-[16px] py-[8px] relative rounded-[8px] shadow-[0px_0.5px_16px_0px_rgba(25,40,57,0.02)]" data-nb-inner="true">
                                <div className="bg-[white] border border-[rgba(108,132,157,0.18)] border-solid relative rounded-[32px] shrink-0 size-[26px] flex items-center justify-center">
                                  <img alt="" className="size-[16px]" src={imgVector6} />
                                </div>
                                <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative">
                                  <p className="font-['Inter'] font-medium text-[13px] text-[#192839] leading-[20px]">More</p>
                                  <p className="font-['Inter'] font-normal text-[11px] text-[#768ea7] leading-[18px]">Apps &amp; UPI ID</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          )}
                        </div>
                        <div className="absolute bg-[white] shadow-[0_1px_3px_rgba(25,40,57,0.05)] content-stretch flex h-[66px] isolate items-center justify-between left-0 p-[12px] right-0 rounded-[12px]" data-node-id="3612:15741" data-name="Method dropdown" data-card-id="cod" data-highlight-color={highlightDataAttr('cod')} style={{ top: cardTops.cod, ...highlightStyle('cod') }}>
                          {cfg.badges.cod && cfg.badgeLayout === 'above-price' && (
                            <div className="absolute top-[8px] right-[12px] z-[3]">
                              <PayBadgeInline color={cfg.badges.cod.color} text={cfg.badges.cod.text} />
                            </div>
                          )}
                          <div className="content-stretch flex gap-[12px] items-center relative shrink-0 z-[2]" data-node-id="3612:15742">
                            <ProvidersIcons className="relative shrink-0 size-[24px]" />
                            <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter'] font-medium gap-[4px] items-start leading-[0] relative shrink-0 w-[170px]" data-node-id="3612:15744" data-name="Frame">
                              <div className="flex flex-col justify-center not-italic relative shrink-0 text-[13px] text-[color:#192839] w-full" data-node-id="3612:15745">
                                <p className="leading-[20px]">Cash on Delivery</p>
                              </div>
                              <div className="flex flex-col justify-center relative shrink-0 text-[11px] text-[color:#d92d20] tracking-[0px] w-full" data-node-id="3612:15746">
                                <p className="leading-[14px]">+₹150 Extra</p>
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[6px] items-center justify-end relative shrink-0 w-[67px] z-[1]" data-node-id="3612:15747">
                            <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-[color:rgba(67,75,81,0.32)] whitespace-nowrap" data-node-id="3612:15748">
                              <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[20px] line-through">₹1249</p>
                            </div>
                            <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[color:#192839] w-[39.089px]" data-node-id="3612:15749">
                              <p className="leading-[20px]">₹1249</p>
                            </div>
                            <div className="flex items-center justify-center relative shrink-0 size-[16px]">
                              <div className="-rotate-90 flex-none">
                                <div className="content-stretch flex gap-[4px] items-center relative" data-node-id="3612:15750" data-name="RHS">
                                  <div className="overflow-clip relative shrink-0 size-[16px]" data-node-id="3612:15752" data-name="arrow-down">
                                    <div className="absolute inset-[34.26%_23.48%_33.33%_23.48%]" data-node-id="I3612:15752;65:837" data-name="Vector">
                                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector5} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {cfg.badges.cards && cfg.badgeLayout === 'centered' ? <PayBadge color={cfg.badges.cards.color} text={cfg.badges.cards.text} topPx={badgeTops.cards} /> : null}
                        {cfg.badges.cod && cfg.badgeLayout === 'centered' ? <PayBadge color={cfg.badges.cod.color} text={cfg.badges.cod.text} topPx={badgeTops.cod} /> : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}