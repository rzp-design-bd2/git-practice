const imgChunkMoney = "/images/pmd_imgChunkMoney.png";
const imgP = "/images/pmd_imgP.png";
const imgNetbanking = "/images/pmd_imgNetbanking.png";
const imgCard = "/images/pmd_imgCard.png";
const imgUpi = "/images/pmd_imgUpi.png";
const imgImage = "/images/pmd_imgImage.png";
const imgImage1 = "/images/pmd_imgImage1.png";
const imgIcon = "/images/pmd_imgIcon.png";
const imgVector = "/images/pmd_imgVector.png";
const imgIcon1 = "/images/pmd_imgIcon1.png";
const imgStarGlass = "/images/pmd_imgStarGlass.png";
const imgIcon2 = "/images/pmd_imgIcon2.png";
const imgImage2 = "/images/pmd_imgImage2.png";
const imgImage3 = "/images/pmd_imgImage3.png";
const imgImage4 = "/images/pmd_imgImage4.png";
const imgImage5 = "/images/pmd_imgImage5.png";
const imgFrame = "/images/pmd_imgFrame.png";
const imgChunkCircleCheckmark = "/images/pmd_imgChunkCircleCheckmark.png";
const imgChunkScribble = "/images/pmd_imgChunkScribble.png";
const imgEllipse2122 = "/images/pmd_imgEllipse2122.png";
const imgEllipse2123 = "/images/pmd_imgEllipse2123.png";
const imgEllipse2124 = "/images/pmd_imgEllipse2124.png";
const img = "/images/pmd_img.png";
const img1 = "/images/pmd_img1.png";
const imgGroup1321316150 = "/images/pmd_imgGroup1321316150.png";
const imgSubtract = "/images/pmd_imgSubtract.png";
const imgSubtract1 = "/images/pmd_imgSubtract1.png";
const imgGroup1321316133 = "/images/pmd_imgGroup1321316133.png";
const imgGroup1321316135 = "/images/pmd_imgGroup1321316135.png";
const imgGroup1321316146 = "/images/pmd_imgGroup1321316146.png";
const imgGroup1321316151 = "/images/pmd_imgGroup1321316151.png";
const imgSubtract2 = "/images/pmd_imgSubtract2.png";
const imgSubtract3 = "/images/pmd_imgSubtract3.png";
const imgShield = "/images/pmd_imgShield.png";
const imgRzpLogo = "/images/pmd_imgRzpLogo.png";
const imgRtbLogo = "/images/pmd_imgRtbLogo.png";
const imgImage6 = "/images/pmd_imgImage6.png";
const imgImage7 = "/images/pmd_imgImage7.png";
const imgImage8 = "/images/pmd_imgImage8.png";
const imgImage24552 = "/images/pmd_imgImage24552.png";
const imgImage9 = "/images/pmd_imgImage9.png";
const imgImage10 = "/images/pmd_imgImage10.png";
const imgImage11 = "/images/pmd_imgImage11.png";
const imgImage24550 = "/images/pmd_imgImage24550.png";
const imgImage24551 = "/images/pmd_imgImage24551.png";
const imgImage12 = "/images/pmd_imgImage12.png";
const imgVector1 = "/images/pmd_imgVector1.png";
const imgVector2 = "/images/pmd_imgVector2.png";
const imgBase = "/images/pmd_imgBase.png";
const imgHome = "/images/pmd_imgHome.png";
const imgLock = "/images/pmd_imgLock.png";
const imgMore = "/images/pmd_imgMore.png";
const imgVector3 = "/images/pmd_imgVector3.png";
const imgMavenshop = "/images/pmd_imgMavenshop.png";
const imgVector4 = "/images/pmd_imgVector4.png";
const imgGroup = "/images/pmd_imgGroup.png";
const imgVector5 = "/images/pmd_imgVector5.png";
const imgVector6 = "/images/pmd_imgVector6.png";
const imgGroup1 = "/images/pmd_imgGroup1.png";

type ProvidersIconsProps = {
  className?: string;
  icon?: "Yes";
  type?: "Card" | "EMI" | "Netbanking" | "UPI" | "COD";
};

function ProvidersIcons({ className, icon = "Yes", type = "COD" }: ProvidersIconsProps) {
  const isCardAndYes = type === "Card" && icon === "Yes";
  const isEmiAndYes = type === "EMI" && icon === "Yes";
  const isNetbankingAndYes = type === "Netbanking" && icon === "Yes";
  const isUpiAndYes = type === "UPI" && icon === "Yes";
  return (
    <div className={className || "relative size-[24px]"} id={isUpiAndYes ? "node-5_9129" : isCardAndYes ? "node-5_9125" : isNetbankingAndYes ? "node-5_9122" : isEmiAndYes ? "node-5_9118" : "node-5_9105"}>
      {type === "COD" && icon === "Yes" && (
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-node-id="5:9106" data-name="chunk/money">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChunkMoney} />
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
  type?: "HDFC" | "Google Pay";
};

function ProviderIcon({ className, type = "HDFC" }: ProviderIconProps) {
  const isGooglePay = type === "Google Pay";
  return (
    <div className={className || "bg-[white] border border-[rgba(108,132,157,0.18)] border-solid relative rounded-[32px] size-[26px]"} id={isGooglePay ? "node-114_12726" : "node-114_12714"}>
      <div className={`absolute ${isGooglePay ? "left-[4px] mix-blend-darken size-[16px] top-[4px]" : "left-[5px] size-[14px] top-[5px]"}`} id={isGooglePay ? "node-114_12727" : "node-114_12715"} data-name="Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className={`absolute max-w-none ${isGooglePay ? "left-[-15.64%] size-[131.28%] top-[-15.64%]" : "h-[131.29%] left-0 top-0 w-full"}`} src={isGooglePay ? imgImage1 : imgImage} />
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
                    <img alt="" className="absolute h-full left-[-45.77%] max-w-none top-0 w-[179.41%]" src={imgImage2} />
                  </div>
                </div>
              </div>
              <div className="bg-[white] border-[1.114px] border-[rgba(108,132,157,0.18)] border-solid mr-[-7.459px] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-node-id="305:6461" data-name="Frame">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.05px)] size-[23.389px] top-[calc(50%+0.05px)]" data-node-id="305:6462" data-name="Image">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
                </div>
              </div>
              <div className="bg-[white] border-[1.114px] border-[rgba(108,132,157,0.18)] border-solid mr-[-7.459px] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-node-id="305:6463" data-name="Frame">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[30.628px] left-1/2 top-[calc(50%-0.79px)] w-[29.976px]" data-node-id="305:6464" data-name="Image">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-[99.74%] left-[-19.57%] max-w-none top-0 w-[139.13%]" src={imgImage4} />
                  </div>
                </div>
              </div>
              <div className="bg-[white] border-[1.114px] border-[rgba(108,132,157,0.18)] border-solid mr-[-7.459px] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-node-id="305:6465" data-name="Frame">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.05px)] size-[27.843px] top-[calc(50%+0.05px)]" data-node-id="305:6466" data-name="Image">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
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

export default function Component2() {
  return (
    <div className="overflow-clip relative rounded-[12px] size-full" data-node-id="3624:20541" style={{ backgroundImage: "linear-gradient(90deg, rgb(41, 80, 218) 0%, rgb(41, 80, 218) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="2">
      <div className="absolute content-stretch flex flex-col h-[1497px] items-start left-0 top-[-731.28px] w-[375px]" data-node-id="3624:20542" data-name="Container">
        <div className="content-stretch flex h-[40px] items-end relative shrink-0 w-full" data-node-id="3624:20543" data-name="Status bar">
          <div className="content-stretch flex flex-[1_0_0] h-[40px] items-center justify-between min-w-px px-[16px] relative" data-node-id="I3624:20543;266:1499" data-name="Status">
            <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0 w-[128px]" data-node-id="I3624:20543;266:1499;266:1640" data-name="Time & Date">
              <div className="[word-break:break-word] flex flex-col font-['Inter'] font-normal font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[color:white] tracking-[0.25px] whitespace-nowrap" data-node-id="I3624:20543;266:1499;266:1641" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[20px]">9:30</p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-end relative shrink-0" data-node-id="I3624:20543;266:1499;266:1643" data-name="Status Icons">
              <div className="content-stretch flex items-start relative shrink-0" data-node-id="I3624:20543;266:1499;266:1644" data-name="Wi-Fi Network">
                <div className="mr-[-2px] overflow-clip relative shrink-0 size-[16px]" data-node-id="I3624:20543;266:1499;266:1645" data-name="Wifi">
                  <div className="absolute inset-[18.5%_4.17%_16.67%_4.17%]" data-node-id="I3624:20543;266:1499;266:1645;346:8257" data-name="Vector">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
                  </div>
                </div>
                <div className="overflow-clip relative shrink-0 size-[16px]" data-node-id="I3624:20543;266:1499;266:1646" data-name="Signal">
                  <div className="absolute inset-[8.33%]" data-node-id="I3624:20543;266:1499;266:1646;339:8061" data-name="Vector">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector2} />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[2px] h-[52px] items-center relative shrink-0" data-node-id="I3624:20543;266:1499;266:1647" data-name="Battery">
                <div className="overflow-clip relative shrink-0 size-[16px]" data-node-id="I3624:20543;266:1499;266:1648" data-name="Battery">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[14.167px] left-1/2 top-1/2 w-[8.5px]" data-node-id="I3624:20543;266:1499;266:1648;348:8871" data-name="Base">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBase} />
                  </div>
                </div>
              </div>
            </div>
            <div className="-translate-x-1/2 absolute left-1/2 size-[24px] top-[8px]" data-node-id="I3624:20543;266:1499;266:1650" data-name="Camera">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[var(--camera,#2e2e2e)] left-1/2 rounded-[100px] size-[24px] top-1/2" data-node-id="I3624:20543;266:1499;266:1651" data-name="Camera" />
            </div>
          </div>
        </div>
        <div className="bg-[#2950da] h-[66px] overflow-clip relative shrink-0 w-full" data-node-id="3624:20544" data-name="Chrome toolbar">
          <div className="-translate-y-1/2 absolute left-[12px] size-[24px] top-1/2" data-node-id="I3624:20544;3:169" data-name="Home">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHome} />
          </div>
          <div className="absolute inset-[43.94%_87.78%_43.94%_10%]" data-node-id="I3624:20544;3:171" data-name="Spacer - 8px" />
          <div className="absolute bg-[rgba(255,255,255,0.1)] content-stretch flex gap-[8px] items-center left-[44px] px-[11px] py-[9px] right-[84px] rounded-[17px] top-[16px]" data-node-id="I3624:20544;3:172" data-name="Address Field">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-node-id="I3624:20544;3:177" data-name="Lock">
              <div className="absolute h-[11px] left-[4px] top-[3px] w-[8px]" data-node-id="I3624:20544;3:178" data-name="Lock">
                <div className="absolute inset-[-3.18%_0_0_0]">
                  <img alt="" className="block max-w-none size-full" src={imgLock} />
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center self-stretch">
              <div className="[word-break:break-word] content-stretch flex font-['Inter'] font-medium font-medium h-full items-center leading-[0] relative shrink-0 text-[10px] whitespace-nowrap" data-node-id="I3624:20544;3:174" data-name="Address">
                <div className="flex flex-col justify-center relative shrink-0 text-white" data-node-id="I3624:20544;3:175" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[13px]">Razorpay.com</p>
                </div>
                <div className="flex flex-col justify-center relative shrink-0 text-[rgba(255,255,255,0.6)]" data-node-id="I3624:20544;3:176" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[13px]">/Viraj</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-[43.94%_18.89%_43.94%_76.67%]" data-node-id="I3624:20544;3:181" data-name="Spacer -  16px" />
          <div className="-translate-y-1/2 absolute overflow-clip right-[52px] size-[16px] top-1/2" data-node-id="I3624:20544;3:182" data-name="Tabs">
            <div className="absolute border-[1.5px] border-solid border-white inset-0 rounded-[5px]" data-node-id="I3624:20544;3:183" data-name="Rectangle" />
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter'] font-bold font-bold justify-center leading-[0] left-1/2 size-[16px] text-[10px] text-center text-white top-1/2" data-node-id="I3624:20544;3:184" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[normal]">1</p>
            </div>
          </div>
          <div className="absolute inset-[43.94%_10%_43.94%_85.56%]" data-node-id="I3624:20544;3:185" data-name="Spacer -  16px" />
          <div className="-translate-y-1/2 absolute right-[12px] size-[24px] top-1/2" data-node-id="I3624:20544;3:186" data-name="More">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
          </div>
        </div>
        <div className="content-stretch flex items-center justify-center overflow-clip pl-[24px] pr-[16px] py-[16px] relative shrink-0 w-full" data-node-id="3624:20545" data-name="Language change">
          <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="3624:20546" data-name="LHS">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="3624:20547" data-name="arrow-left">
              <div className="absolute inset-[17.59%_16.67%]" data-node-id="I3624:20547;65:825" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector3} />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-node-id="3624:20548" data-name="Logos">
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="I3624:20548;3:3900" data-name="Logo + RTB">
                <div className="h-[27px] relative shrink-0 w-[148.253px]" data-node-id="I3624:20548;294:7539" data-name="mavenshop">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMavenshop} />
                </div>
                <RtbIcon className="overflow-clip relative shrink-0 size-[24px]" size="24" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#173087] content-stretch flex flex-col h-[1332px] items-start overflow-clip relative rounded-[12px] shrink-0" data-node-id="3624:20549" data-name="Notification banner">
          <div className="content-stretch flex flex-col items-center justify-center px-[24px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[375px]" data-node-id="3624:20550" data-name="Container">
            <div className="content-stretch flex flex-col h-[36px] items-center justify-center overflow-clip px-[24px] py-[8px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-node-id="3624:20551" data-name="Banner">
              <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-node-id="3624:20552" data-name="Body">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter'] font-medium justify-end leading-[0] min-w-px not-italic relative text-[13px] text-center text-white" data-node-id="3624:20553">
                  <p className="leading-[18px]">🪔 Diwali sale Flat 10% Off</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[white] content-stretch flex flex-col h-[1296px] items-start overflow-clip relative rounded-tl-[12px] rounded-tr-[12px] shrink-0" data-node-id="3624:20554" data-name="White">
            <div className="bg-[#f5f5f5] flex-[1_0_0] min-h-px overflow-clip relative rounded-tl-[12px] rounded-tr-[12px] w-[375px]" data-node-id="3624:20555" data-name="Container">
              <div className="absolute content-stretch flex flex-col items-center left-0 py-[16px] top-[-3.29px] w-[375px]" data-node-id="3624:20556">
                <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-node-id="3624:20557">
                  <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[343px]" data-node-id="3624:20558" data-name="Multi ship">
                    <OrderSummary className="bg-[#e6ecfc] content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shadow-[0px_0.5px_16px_0px_rgba(25,40,57,0.02)] shrink-0 w-[343px]" />
                    <Coupons className="content-stretch drop-shadow-[0px_0.5px_8px_rgba(25,40,57,0.02)] flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-[343px]" />
                    <Delivery className="content-stretch drop-shadow-[0px_0.5px_8px_rgba(25,40,57,0.02)] flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-[343px]" />
                  </div>
                  <div className="content-stretch flex flex-col gap-[16px] items-start pb-[80px] relative shrink-0 w-full" data-node-id="3624:20562" data-name="All options">
                    <div className="content-stretch flex flex-col gap-[12px] items-start px-[16px] relative shrink-0 w-[375px]" data-node-id="3624:20563" data-name="Pad">
                      <p className="[word-break:break-word] font-['Inter'] font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:#40566d] whitespace-nowrap" data-node-id="3624:20564">
                        Payment offers
                      </p>
                      <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-node-id="3624:20565" data-name="Offer options">
                        <div className="bg-gradient-to-r content-stretch flex flex-[1_0_0] from-white gap-[8px] items-center min-w-px pl-[4px] pr-[12px] py-[4px] relative rounded-[32px] to-white" data-node-id="I3624:20565;343:19886" data-name="Pills">
                          <div className="bg-[white] border-[0.5px] border-[rgba(108,132,157,0.18)] border-solid relative rounded-[32px] shrink-0 size-[26px]" data-node-id="I3624:20565;343:19886;314:29919" data-name="Provider Icon">
                            <div className="absolute left-[4.5px] mix-blend-darken size-[16px] top-[4.5px]" data-node-id="I3624:20565;343:19886;314:29919;127:14129" data-name="Image">
                              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                <img alt="" className="absolute left-[-15.64%] max-w-none size-[131.28%] top-[-15.64%]" src={imgImage1} />
                              </div>
                            </div>
                          </div>
                          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter'] font-medium justify-center leading-[0] min-w-px overflow-hidden relative text-[13px] text-[color:black] text-ellipsis tracking-[0px] whitespace-nowrap" data-node-id="I3624:20565;343:19886;314:29920">
                            <p className="leading-[18px] overflow-hidden text-ellipsis">Upto ₹350 off on Google Pay</p>
                          </div>
                        </div>
                        <div className="bg-[white] content-stretch flex gap-[8px] h-[34px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[32px] shrink-0" data-node-id="I3624:20565;314:29009" data-name="Offer 2">
                          <div className="content-stretch flex items-center relative shrink-0" data-node-id="I3624:20565;314:29010">
                            <div className="bg-[white] border-[0.5px] border-[rgba(108,132,157,0.18)] border-solid mr-[-12px] relative rounded-[32px] shrink-0 size-[26px]" data-node-id="I3624:20565;314:29011" data-name="Provider Icon">
                              <div className="absolute left-[3.5px] size-[18px] top-[3.5px]" data-node-id="I3624:20565;314:29011;153:13584" data-name="Image">
                                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                  <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[286.35%]" src={imgImage6} />
                                </div>
                              </div>
                            </div>
                            <div className="bg-[white] border-[0.5px] border-[rgba(108,132,157,0.18)] border-solid mr-[-12px] relative rounded-[32px] shrink-0 size-[26px]" data-node-id="I3624:20565;314:29012" data-name="Provider Icon">
                              <div className="absolute h-[15px] left-[1.5px] top-[5.5px] w-[22px]" data-node-id="I3624:20565;314:29012;133:13489" data-name="Image">
                                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage7} />
                              </div>
                            </div>
                            <div className="bg-[white] border-[0.5px] border-[rgba(108,132,157,0.18)] border-solid relative rounded-[32px] shrink-0 size-[26px]" data-node-id="I3624:20565;314:29013" data-name="Provider Icon">
                              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter'] font-semibold h-[9px] justify-center leading-[0] left-[12.5px] not-italic text-[10px] text-[color:#40566d] text-center top-[13px] w-[16px]" data-node-id="I3624:20565;314:29013;14577:41571">
                                <p className="leading-[14px]">+1</p>
                              </div>
                            </div>
                          </div>
                          <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#2950da] text-[13px] text-ellipsis whitespace-nowrap" data-node-id="I3624:20565;314:29014">
                            <p className="leading-[18px] overflow-hidden text-ellipsis">{`View all `}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[12px] items-start px-[16px] relative shrink-0 w-full" data-node-id="3624:20566" data-name="RECOMMENDED">
                      <p className="[word-break:break-word] font-['Inter'] font-medium leading-[18px] relative shrink-0 text-[13px] text-[color:#40566d] tracking-[0px] whitespace-nowrap" data-node-id="3624:20567">
                        Recommended
                      </p>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="3624:20568" data-name="RECOMMENDED">
                        <div className="content-stretch drop-shadow-[0px_0.5px_calc(16px/2)_rgba(25,40,57,0.02)] flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="3624:20569">
                          <div className="bg-white border-[rgba(108,132,157,0.18)] border-b border-solid content-stretch flex gap-[12px] items-center overflow-clip p-[12px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-node-id="3624:20570" data-name="Mobile Method">
                            <ProviderIcon className="bg-[white] border border-[rgba(108,132,157,0.18)] border-solid relative rounded-[32px] shrink-0 size-[26px]" type="Google Pay" />
                            <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-w-px relative" data-node-id="3624:20572" data-name="Name/Amount">
                              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-node-id="3624:20573">
                                <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium justify-center leading-[0] relative shrink-0 text-[13px] text-[color:#192839] tracking-[0px] whitespace-nowrap" data-node-id="3624:20574">
                                  <p className="leading-[18px]">Google Pay</p>
                                </div>
                                <div className="content-stretch flex items-center py-[2px] relative rounded-[24px] shrink-0" data-node-id="3624:20575" data-name="Tag">
                                  <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium justify-center leading-[0] overflow-hidden relative shrink-0 text-[#006c36] text-[11px] text-ellipsis tracking-[0px] whitespace-nowrap" data-node-id="I3624:20575;7495:55641">
                                    <p className="leading-[14px] overflow-hidden text-ellipsis">15% off on all transactions above ₹499</p>
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-col items-end justify-center relative self-stretch shrink-0" data-node-id="3624:20577" data-name="RHS">
                                <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0" data-node-id="3624:20578" data-name="Amount">
                                  <div className="flex items-center justify-center relative shrink-0 size-[16px]">
                                    <div className="-scale-y-100 flex-none rotate-90">
                                      <div className="overflow-clip relative size-[16px]" data-node-id="3624:20580" data-name="arrow-down">
                                        <div className="absolute inset-[34.26%_23.48%_33.33%_23.48%]" data-node-id="I3624:20580;65:837" data-name="Vector">
                                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector4} />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white content-stretch flex gap-[12px] items-center overflow-clip p-[12px] relative shrink-0 w-full" data-node-id="3624:20581" data-name="Mobile Method">
                            <ProviderIcon className="bg-[white] border border-[rgba(108,132,157,0.18)] border-solid relative rounded-[32px] shrink-0 size-[26px]" />
                            <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-w-px relative" data-node-id="3624:20583" data-name="Name/Amount">
                              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-node-id="3624:20584">
                                <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium justify-center leading-[0] relative shrink-0 text-[13px] text-[color:#192839] tracking-[0px] whitespace-nowrap" data-node-id="3624:20585">
                                  <p className="leading-[18px]">HDFC Credit ***5284</p>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-col gap-[8px] items-end justify-center relative self-stretch shrink-0" data-node-id="3624:20587" data-name="RHS">
                                <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0" data-node-id="3624:20588" data-name="Amount">
                                  <div className="flex items-center justify-center relative shrink-0 size-[16px]">
                                    <div className="-scale-y-100 flex-none rotate-90">
                                      <div className="overflow-clip relative size-[16px]" data-node-id="3624:20590" data-name="arrow-down">
                                        <div className="absolute inset-[34.26%_23.48%_33.33%_23.48%]" data-node-id="I3624:20590;65:837" data-name="Vector">
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
                    <div className="content-stretch flex flex-col gap-[12px] h-[495px] items-start px-[16px] relative shrink-0 w-full" data-node-id="3624:20593">
                      <p className="[word-break:break-word] font-['Inter'] font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:#40566d] whitespace-nowrap" data-node-id="3624:20594">
                        More ways to pay
                      </p>
                      <div className="border border-[rgba(108,132,157,0.18)] border-solid h-[448px] overflow-clip relative rounded-[12px] shrink-0 w-[335px]" data-node-id="3624:21012" data-name="Section">
                        <div className="absolute bg-white border-[rgba(108,132,157,0.18)] border-b border-solid content-stretch flex h-[68px] items-center left-[-1px] px-[16px] py-[12px] right-[-1px] top-[-1px]" data-node-id="3624:21013" data-name="Mobile Method">
                          <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="3624:21014" data-name="Name/Amount">
                            <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="3624:21015" data-name="LHS">
                              <ProvidersIcons className="relative shrink-0 size-[24px]" type="UPI" />
                              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-[44px] items-start justify-center min-w-px relative" data-node-id="3624:21017">
                                <div className="content-stretch flex flex-col gap-[4px] h-[22px] items-start justify-center relative shrink-0 w-full" data-node-id="3624:21018" data-name="Middle">
                                  <div className="content-stretch flex gap-[4px] items-center leading-[0] relative shrink-0" data-node-id="3624:21019" data-name="Method name">
                                    <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium justify-center not-italic relative shrink-0 text-[14px] text-[color:#192839] whitespace-nowrap" data-node-id="3624:21020">
                                      <p className="leading-[20px]">UPI</p>
                                    </div>
                                    <div className="content-stretch flex items-center relative shrink-0" data-node-id="3624:21021" data-name="Providers">
                                      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid mr-[-6.704px] place-items-start relative shrink-0" data-node-id="3624:21022" data-name="Group">
                                        <div className="bg-[white] border-[0.917px] border-[#e3eaf3] border-solid col-start-1 ml-0 mt-0 relative rounded-[16.5px] row-start-1 size-[22px]" data-node-id="3624:21023" data-name="Rectangle" />
                                        <div className="col-start-1 ml-[5.12px] mt-[5.12px] relative row-start-1 size-[12.29px]" data-node-id="3624:21024" data-name="Image">
                                          <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                            <img alt="" className="absolute left-[-15.64%] max-w-none size-[131.28%] top-[-15.64%]" src={imgImage1} />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid mr-[-6.704px] place-items-start relative shrink-0" data-node-id="3624:21025" data-name="Group">
                                        <div className="bg-[white] border-[0.917px] border-[#e3eaf3] border-solid col-start-1 ml-0 mt-0 relative rounded-[16.5px] row-start-1 size-[22px]" data-node-id="3624:21026" data-name="Rectangle" />
                                        <div className="col-start-1 ml-[4.79px] mt-[5.12px] relative row-start-1 size-[12.29px]" data-node-id="3624:21027" data-name="Image">
                                          <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                            <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage8} />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-node-id="3624:21028" data-name="Group">
                                        <div className="bg-[white] border-[0.917px] border-[#e3eaf3] border-solid col-start-1 ml-0 mt-0 relative rounded-[16.5px] row-start-1 size-[22px]" data-node-id="3624:21029" data-name="Rectangle" />
                                        <div className="col-start-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[4.87px] mt-[4.77px] place-items-start relative row-start-1" data-node-id="3624:21030" data-name="Group">
                                          <div className="col-start-1 ml-0 mt-0 relative row-start-1 size-[12.909px]" data-node-id="3624:21031" data-name="Rectangle" />
                                          <div className="col-start-1 h-[11.761px] ml-[2.3px] mt-[0.57px] relative row-start-1 w-[8.308px]" data-node-id="3624:21032" data-name="Group">
                                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup} />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#006c36] text-[10px] w-full" data-node-id="3624:21036">
                                  <p className="leading-[18px]">Offer or Subtext</p>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex gap-[6px] items-center justify-end relative shrink-0 w-[100px]" data-node-id="3624:21037">
                              <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-[color:rgba(67,75,81,0.32)] whitespace-nowrap" data-node-id="3624:21038">
                                <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[20px] line-through">₹1249</p>
                              </div>
                              <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[color:#192839] w-[39.089px]" data-node-id="3624:21039">
                                <p className="leading-[20px]">₹1249</p>
                              </div>
                              <div className="flex items-center justify-center relative shrink-0 size-[16px]">
                                <div className="-rotate-90 flex-none">
                                  <div className="content-stretch flex gap-[4px] items-center relative" data-node-id="3624:21040" data-name="RHS">
                                    <div className="overflow-clip relative shrink-0 size-[16px]" data-node-id="3624:21042" data-name="arrow-down">
                                      <div className="absolute inset-[34.26%_23.48%_33.33%_23.48%]" data-node-id="I3624:21042;65:837" data-name="Vector">
                                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector5} />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute border-[#e8ecff] border-b border-solid content-stretch flex flex-col items-start left-[-1px] overflow-clip right-[-1px] top-[67px]" data-node-id="3624:21043" data-name="Frame">
                          <div className="bg-[#f1f5fa] content-stretch flex flex-col gap-[8px] items-start p-[8px] relative shrink-0 w-full" data-node-id="3624:21044">
                            <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-node-id="3624:21045">
                              <div className="bg-[white] border-0 border-[rgba(108,132,157,0.18)] border-solid content-stretch flex flex-[1_0_0] gap-[12px] h-[48px] items-center min-w-px overflow-clip px-[16px] py-[8px] relative rounded-[8px]" data-node-id="3624:21046">
                                <div className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip px-px py-[2px] relative shrink-0 size-[20px]" data-node-id="3624:21047" data-name="Logo">
                                  <div className="relative shrink-0 size-[18px]" data-node-id="3624:21048" data-name="Image">
                                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                      <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage8} />
                                    </div>
                                  </div>
                                </div>
                                <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="3624:21049" data-name="Body">
                                  <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[color:#192839] w-full" data-node-id="3624:21050">
                                    <p className="leading-[20px]">PhonePe</p>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-[white] border-0 border-[rgba(108,132,157,0.18)] border-solid content-stretch flex flex-[1_0_0] gap-[12px] h-[48px] items-center min-w-px overflow-clip px-[16px] py-[8px] relative rounded-[8px]" data-node-id="3624:21051">
                                <div className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip px-px py-[2px] relative shrink-0 size-[20px]" data-node-id="3624:21052" data-name="Logo">
                                  <div className="h-[15.429px] relative shrink-0 w-full" data-node-id="3624:21053" data-name="Image">
                                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                      <img alt="" className="absolute h-[102.27%] left-[-15.75%] max-w-none top-[-1.14%] w-[131.49%]" src={imgImage7} />
                                    </div>
                                  </div>
                                </div>
                                <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="3624:21054" data-name="Body">
                                  <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[color:#192839] whitespace-nowrap" data-node-id="3624:21055">
                                    <p className="leading-[20px]">PayTM</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-node-id="3624:21056">
                              <div className="bg-[white] border-0 border-[rgba(108,132,157,0.18)] border-solid content-stretch flex flex-[1_0_0] gap-[12px] h-[48px] items-center min-w-px overflow-clip px-[16px] py-[8px] relative rounded-[8px]" data-node-id="3624:21057">
                                <div className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip px-px py-[2px] relative shrink-0 size-[20px]" data-node-id="3624:21058" data-name="Logo">
                                  <div className="bg-[#020202] relative rounded-[52px] shrink-0 size-[18px]" data-node-id="3624:21059">
                                    <div className="absolute h-[11px] left-[4px] top-[4px] w-[10px]" data-node-id="3624:21060" data-name="image 24552">
                                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                        <img alt="" className="absolute h-[296.3%] left-[-119.49%] max-w-none top-[-74.81%] w-[338.98%]" src={imgImage24552} />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="3624:21061" data-name="Body">
                                  <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[color:#192839] w-full" data-node-id="3624:21062">
                                    <p className="leading-[20px]">CRED UPI</p>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-[white] border-0 border-[rgba(108,132,157,0.18)] border-solid content-stretch flex flex-[1_0_0] gap-[12px] h-[48px] items-center min-w-px overflow-clip px-[16px] py-[8px] relative rounded-[8px]" data-node-id="3624:21063">
                                <div className="overflow-clip relative shrink-0 size-[20px]" data-node-id="3624:21064" data-name="more">
                                  <div className="absolute inset-[41.67%_12.5%]" data-node-id="I3624:21064;133:13542" data-name="Vector">
                                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector6} />
                                  </div>
                                </div>
                                <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="3624:21065" data-name="Body">
                                  <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[color:#192839] whitespace-nowrap" data-node-id="3624:21066">
                                    <p className="leading-[20px]">{`Apps & UPI ID`}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute contents left-[-1px] right-[-1px] top-[187px]" data-node-id="3624:21067">
                          <div className="absolute bg-white border-0 border-[rgba(108,132,157,0.18)] border-solid h-[68px] left-0 right-0 top-[188px]" data-node-id="3624:21068" data-name="Mobile Method">
                            <div className="absolute content-stretch flex gap-[8px] items-center left-[16px] right-[16px] top-[12px]" data-node-id="3624:21069" data-name="Name/Amount">
                              <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="3624:21070" data-name="LHS">
                                <ProvidersIcons className="relative shrink-0 size-[24px]" type="Card" />
                                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-[44px] items-start justify-center min-w-px relative" data-node-id="3624:21072">
                                  <div className="content-stretch flex flex-col gap-[4px] h-[22px] items-start justify-center relative shrink-0 w-full" data-node-id="3624:21073" data-name="Middle">
                                    <div className="content-stretch flex gap-[4px] items-center leading-[0] relative shrink-0" data-node-id="3624:21074" data-name="Method name">
                                      <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium justify-center not-italic relative shrink-0 text-[14px] text-[color:#192839] whitespace-nowrap" data-node-id="3624:21075">
                                        <p className="leading-[20px]">Cards</p>
                                      </div>
                                      <div className="content-stretch flex items-start relative shrink-0" data-node-id="3624:21076" data-name="Providers">
                                        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid mr-[-6.704px] place-items-start relative shrink-0" data-node-id="3624:21077" data-name="Group">
                                          <div className="bg-[white] border-[0.917px] border-[#e3eaf3] border-solid col-start-1 ml-0 mt-0 relative rounded-[16.5px] row-start-1 size-[22px]" data-node-id="3624:21078" data-name="Rectangle" />
                                          <div className="col-start-1 h-[6.417px] ml-[2.75px] mt-[8.25px] relative row-start-1 w-[16.5px]" data-node-id="3624:21079" data-name="Image">
                                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                              <img alt="" className="absolute h-[210.28%] left-[-22.49%] max-w-none top-[-53.27%] w-[148.7%]" src={imgImage9} />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid mr-[-6.704px] place-items-start relative shrink-0" data-node-id="3624:21080" data-name="Group">
                                          <div className="bg-[white] border-[0.917px] border-[#e3eaf3] border-solid col-start-1 ml-0 mt-0 relative rounded-[16.5px] row-start-1 size-[22px]" data-node-id="3624:21081" data-name="Rectangle" />
                                          <div className="col-start-1 ml-[4.58px] mt-[4.58px] relative row-start-1 size-[12.833px]" data-node-id="3624:21082" data-name="Image">
                                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage10} />
                                          </div>
                                        </div>
                                        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-node-id="3624:21083" data-name="Group">
                                          <div className="bg-[white] border-[0.917px] border-[#e3eaf3] border-solid col-start-1 ml-0 mt-0 relative rounded-[16.5px] row-start-1 size-[22px]" data-node-id="3624:21084" data-name="Rectangle" />
                                          <div className="col-start-1 h-[4.583px] ml-[2.75px] mt-[9.17px] relative row-start-1 w-[17.417px]" data-node-id="3624:21085" data-name="Image">
                                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                              <img alt="" className="absolute h-[136.22%] left-[-10%] max-w-none top-[-18.11%] w-[115%]" src={imgImage11} />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#006c36] text-[10px] w-full" data-node-id="3624:21087">
                                    <p className="leading-[18px]">Offer or Subtext</p>
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex gap-[6px] items-center justify-end relative shrink-0 w-[100px]" data-node-id="3624:21088">
                                <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-[color:rgba(67,75,81,0.32)] whitespace-nowrap" data-node-id="3624:21089">
                                  <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[20px] line-through">₹1549</p>
                                </div>
                                <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[color:#192839] w-[39.089px]" data-node-id="3624:21090">
                                  <p className="leading-[20px]">₹1249</p>
                                </div>
                                <div className="flex items-center justify-center relative shrink-0 size-[16px]">
                                  <div className="-rotate-90 flex-none">
                                    <div className="content-stretch flex gap-[4px] items-center relative" data-node-id="3624:21091" data-name="RHS">
                                      <div className="overflow-clip relative shrink-0 size-[16px]" data-node-id="3624:21093" data-name="arrow-down">
                                        <div className="absolute inset-[34.26%_23.48%_33.33%_23.48%]" data-node-id="I3624:21093;65:837" data-name="Vector">
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
                        <div className="absolute bg-white border-[rgba(108,132,157,0.18)] border-b border-solid border-t content-stretch flex h-[64px] items-center left-[-1px] min-h-[64px] px-[16px] py-[12px] right-[-1px] top-[255px]" data-node-id="3624:21096" data-name="Mobile Method">
                          <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-w-px relative" data-node-id="3624:21097" data-name="Name/Amount">
                            <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="3624:21098" data-name="LHS">
                              <ProvidersIcons className="relative shrink-0 size-[24px]" type="Netbanking" />
                              <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-full items-start justify-center leading-[0] min-w-px relative" data-node-id="3624:21100" data-name="Middle">
                                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="3624:21101" data-name="Method name">
                                    <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium justify-center not-italic relative shrink-0 text-[14px] text-[color:#192839] whitespace-nowrap" data-node-id="3624:21102">
                                      <p className="leading-[20px]">Netbanking</p>
                                    </div>
                                    <div className="content-stretch flex items-center relative shrink-0" data-node-id="3624:21103" data-name="Providers">
                                      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid mr-[-6.704px] place-items-start relative shrink-0" data-node-id="3624:21104" data-name="Group">
                                        <div className="bg-[white] border-[0.917px] border-[#e3eaf3] border-solid col-start-1 ml-0 mt-0 relative rounded-[16.5px] row-start-1 size-[22px]" data-node-id="3624:21105" data-name="Rectangle" />
                                        <div className="col-start-1 ml-[5.12px] mt-[5.12px] relative row-start-1 size-[12.29px]" data-node-id="3624:21106" data-name="Image">
                                          <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                            <img alt="" className="absolute left-[-15.64%] max-w-none size-[131.28%] top-[-15.64%]" src={imgImage1} />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid mr-[-6.704px] place-items-start relative shrink-0" data-node-id="3624:21107" data-name="Group">
                                        <div className="bg-[white] border-[0.917px] border-[#e3eaf3] border-solid col-start-1 ml-0 mt-0 relative rounded-[16.5px] row-start-1 size-[22px]" data-node-id="3624:21108" data-name="Rectangle" />
                                        <div className="col-start-1 ml-[4.79px] mt-[5.12px] relative row-start-1 size-[12.29px]" data-node-id="3624:21109" data-name="Image">
                                          <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                            <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage8} />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-node-id="3624:21110" data-name="Group">
                                        <div className="bg-[white] border-[0.917px] border-[#e3eaf3] border-solid col-start-1 ml-0 mt-0 relative rounded-[16.5px] row-start-1 size-[22px]" data-node-id="3624:21111" data-name="Rectangle" />
                                        <div className="col-start-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[4.87px] mt-[4.77px] place-items-start relative row-start-1" data-node-id="3624:21112" data-name="Group">
                                          <div className="col-start-1 ml-0 mt-0 relative row-start-1 size-[12.909px]" data-node-id="3624:21113" data-name="Rectangle" />
                                          <div className="col-start-1 h-[11.762px] ml-[2.3px] mt-[0.57px] relative row-start-1 w-[8.308px]" data-node-id="3624:21114" data-name="Group">
                                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1} />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium justify-center min-w-full not-italic relative shrink-0 text-[#006c36] text-[10px] w-[min-content]" data-node-id="3624:21117">
                                    <p className="leading-[18px]">Offer or Subtext</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col items-end justify-center relative self-stretch shrink-0" data-node-id="3624:21118" data-name="RHS">
                              <div className="content-stretch flex gap-[6px] items-center justify-end relative shrink-0 w-[100px]" data-node-id="3624:21119">
                                <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-[color:rgba(67,75,81,0.32)] whitespace-nowrap" data-node-id="3624:21120">
                                  <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[20px] line-through">₹1249</p>
                                </div>
                                <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[color:#192839] w-[39.089px]" data-node-id="3624:21121">
                                  <p className="leading-[20px]">₹1249</p>
                                </div>
                                <div className="flex items-center justify-center relative shrink-0 size-[16px]">
                                  <div className="-rotate-90 flex-none">
                                    <div className="content-stretch flex gap-[4px] items-center relative" data-node-id="3624:21122" data-name="RHS">
                                      <div className="overflow-clip relative shrink-0 size-[16px]" data-node-id="3624:21124" data-name="arrow-down">
                                        <div className="absolute inset-[34.26%_23.48%_33.33%_23.48%]" data-node-id="I3624:21124;65:837" data-name="Vector">
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
                        <div className="absolute bg-white border-[rgba(108,132,157,0.18)] border-b border-solid h-[64px] left-[-1px] right-[-1px] top-[319px]" data-node-id="3624:21125" data-name="Mobile Method">
                          <div className="absolute content-stretch flex gap-[8px] items-center left-[16px] right-[16px] top-[11px]" data-node-id="3624:21126" data-name="Name/Amount">
                            <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="3624:21127" data-name="LHS">
                              <ProvidersIcons className="relative shrink-0 size-[24px]" type="EMI" />
                              <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-full items-start justify-center leading-[0] min-w-px relative" data-node-id="3624:21129" data-name="Middle">
                                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="3624:21130" data-name="Method name">
                                    <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium justify-center not-italic relative shrink-0 text-[14px] text-[color:#192839] whitespace-nowrap" data-node-id="3624:21131">
                                      <p className="leading-[20px]">EMI</p>
                                    </div>
                                    <div className="content-stretch flex items-start relative shrink-0" data-node-id="3624:21132" data-name="Providers">
                                      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid mr-[-6.704px] place-items-start relative shrink-0" data-node-id="3624:21133" data-name="Group">
                                        <div className="bg-[white] border-[0.917px] border-[#e3eaf3] border-solid col-start-1 ml-0 mt-0 relative rounded-[16.5px] row-start-1 size-[22px]" data-node-id="3624:21134" data-name="Rectangle" />
                                        <div className="col-start-1 ml-[6.14px] mt-[5.65px] relative row-start-1 size-[10.242px]" data-node-id="3624:21135" data-name="image 24550">
                                          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage24550} />
                                        </div>
                                      </div>
                                      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid mr-[-6.704px] place-items-start relative shrink-0" data-node-id="3624:21136" data-name="Group">
                                        <div className="bg-[white] border-[0.917px] border-[#e3eaf3] border-solid col-start-1 ml-0 mt-0 relative rounded-[16.5px] row-start-1 size-[22px]" data-node-id="3624:21137" data-name="Rectangle" />
                                        <div className="col-start-1 h-[7.489px] ml-[4.63px] mt-[7.38px] relative row-start-1 w-[13.314px]" data-node-id="3624:21138" data-name="image 24551">
                                          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage24551} />
                                        </div>
                                      </div>
                                      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-node-id="3624:21139" data-name="Group">
                                        <div className="bg-[white] border-[0.917px] border-[#e3eaf3] border-solid col-start-1 ml-0 mt-0 relative rounded-[16.5px] row-start-1 size-[22px]" data-node-id="3624:21140" data-name="Rectangle" />
                                        <div className="col-start-1 ml-[5.49px] mt-[6.14px] relative row-start-1 size-[10.242px]" data-node-id="3624:21141" data-name="Image">
                                          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage12} />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium justify-center min-w-full not-italic relative shrink-0 text-[#006c36] text-[10px] w-[min-content]" data-node-id="3624:21142">
                                    <p className="leading-[18px]">Offer or Subtext</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-row items-center self-stretch">
                              <div className="content-stretch flex flex-col h-full items-end justify-center relative shrink-0" data-node-id="3624:21143" data-name="RHS">
                                <div className="content-stretch flex gap-[6px] items-center justify-end relative shrink-0 w-[100px]" data-node-id="3624:21144">
                                  <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-[color:rgba(67,75,81,0.32)] whitespace-nowrap" data-node-id="3624:21145">
                                    <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[20px] line-through">₹1249</p>
                                  </div>
                                  <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[color:#192839] w-[39.089px]" data-node-id="3624:21146">
                                    <p className="leading-[20px]">₹1249</p>
                                  </div>
                                  <div className="flex items-center justify-center relative shrink-0 size-[16px]">
                                    <div className="-rotate-90 flex-none">
                                      <div className="content-stretch flex gap-[4px] items-center relative" data-node-id="3624:21147" data-name="RHS">
                                        <div className="overflow-clip relative shrink-0 size-[16px]" data-node-id="3624:21149" data-name="arrow-down">
                                          <div className="absolute inset-[34.26%_23.48%_33.33%_23.48%]" data-node-id="I3624:21149;65:837" data-name="Vector">
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
                        </div>
                        <div className="absolute bg-white border-[rgba(108,132,157,0.18)] border-b border-solid content-stretch flex h-[64px] items-center left-[-1px] min-h-[64px] px-[16px] py-[12px] right-[-1px] top-[383px]" data-node-id="3624:21153" data-name="Mobile Method">
                          <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-w-px relative" data-node-id="3624:21154" data-name="Name/Amount">
                            <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="3624:21155" data-name="LHS">
                              <ProvidersIcons className="relative shrink-0 size-[24px]" />
                              <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-full items-start justify-center min-w-px relative" data-node-id="3624:21157" data-name="Middle">
                                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="3624:21158" data-name="Method name">
                                    <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[color:#192839] whitespace-nowrap" data-node-id="3624:21159">
                                      <p className="leading-[20px]">Cash on Delivery</p>
                                    </div>
                                  </div>
                                  <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium justify-center leading-[0] overflow-hidden relative shrink-0 text-[color:#d92d20] text-[length:10px] text-ellipsis tracking-[0px] whitespace-nowrap" data-node-id="3624:21161">
                                    <p className="leading-[14px] overflow-hidden text-[10px] text-ellipsis">+₹150 Extra</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col items-end justify-center relative self-stretch shrink-0" data-node-id="3624:21162" data-name="RHS">
                              <div className="content-stretch flex gap-[6px] items-center justify-end relative shrink-0 w-[100px]" data-node-id="3624:21163">
                                <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-[color:rgba(67,75,81,0.32)] whitespace-nowrap" data-node-id="3624:21164">
                                  <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[20px] line-through">₹1249</p>
                                </div>
                                <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[color:#192839] w-[39.089px]" data-node-id="3624:21165">
                                  <p className="leading-[20px]">₹1249</p>
                                </div>
                                <div className="flex items-center justify-center relative shrink-0 size-[16px]">
                                  <div className="-rotate-90 flex-none">
                                    <div className="content-stretch flex gap-[4px] items-center relative" data-node-id="3624:21166" data-name="RHS">
                                      <div className="overflow-clip relative shrink-0 size-[16px]" data-node-id="3624:21168" data-name="arrow-down">
                                        <div className="absolute inset-[34.26%_23.48%_33.33%_23.48%]" data-node-id="I3624:21168;65:837" data-name="Vector">
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