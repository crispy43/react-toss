import InDropUp from '~/components/animation/in-drop-up';

export default function PaymentService() {
  return (
    <section className="h-auto bg-[#f9fafb] desktop:h-[1687px]">
      <div className="container flex flex-col py-[100px] desktop:flex-row desktop:pt-[250px]">
        <div className="flex-1">
          <InDropUp>
            <h2 className="mb-[10px] text-[18px] leading-[1.3] font-[700] text-[#3182f6] desktop:mb-[30px] desktop:text-[28px]">
              결제
            </h2>
            <p className="mb-[20px] text-[28px] leading-[1.4] font-[700] text-[#191f28] desktop:mb-[60px] desktop:text-[50px]">
              결제는 간편하게,
              <br />
              할인과 적립은 두둑히
            </p>
            <p
              className="text-[18px] leading-[1.5] font-[600] text-[#333d4b] desktop:text-[19px]"
              style={{ color: 'rgb(51, 61, 75)' }}
            >
              온라인과 오프라인 모두
              <br />
              국내는 물론, 해외에서도
              <br />
              토스로 간편하게 결제해요.
            </p>
          </InDropUp>
          <InDropUp className="relative w-[430px] desktop:w-auto">
            <img
              className="absolute top-[60px] left-[88px] w-[250px] desktop:top-[87px] desktop:left-[50px] desktop:w-[300px]"
              src="/images/payment-01.png"
              alt="payment-01"
            />
            <img
              className="relative w-[600px] desktop:left-[-63px]"
              src="/images/iphone.png"
              alt="iphone"
            />
          </InDropUp>
        </div>
        <div className="flex-1">
          <InDropUp className="relative w-[430px] desktop:w-auto">
            <img
              className="absolute top-[60px] left-[88px] w-[250px] desktop:top-[87px] desktop:left-[80px] desktop:w-[300px]"
              src="/images/payment-02.png"
              alt="payment-02"
            />
            <img
              className="relative w-[600px] desktop:left-[-30px]"
              src="/images/iphone.png"
              alt="iphone"
            />
          </InDropUp>
          <InDropUp>
            <p
              className="text-[18px] leading-[1.5] font-[600] text-[#333d4b] desktop:text-[19px]"
              style={{ color: 'rgb(51, 61, 75)' }}
            >
              결제할 땐, 혜택이 빠질 수 없죠.
              <br />
              쿠폰과 포인트 써서 할인 받고
              <br />
              토스프라임 적립까지 또 받아요.
            </p>
          </InDropUp>
        </div>
      </div>
    </section>
  );
}
