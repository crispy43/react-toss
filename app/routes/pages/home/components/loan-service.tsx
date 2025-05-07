export default function LoanService() {
  return (
    <section>
      <div className="container flex">
        <div>
          <div className="mb-[210px]">
            <h1 className="mb-[20px] text-[28px] leading-[1.3] font-[700] text-[#3182f6]">
              대출
            </h1>
            <p className="text-[50px] leading-[1.4] font-[700] text-[#191f28]">
              여러 은행의 조건을
              <br />
              1분 만에
              <br />
              확인해보세요
            </p>
          </div>
          <div style={{ color: 'rgb(51, 61, 75)' }}>
            <h2 className="text-[48px] leading-[1.5] font-[700]">한도는 높게,</h2>
            <h2 className="text-[48px] leading-[1.5] font-[700]">
              금리는 <span className="text-[#8b96ab]">낮게,</span>
            </h2>
            <h2 className="mb-[30px] text-[48px] leading-[1.5] font-[700]">
              부담은 <span className="text-[#d1d6db]">적게.</span>
            </h2>
            <p className="text-[23px] leading-[1.5] font-[600]">
              앉은 자리에서 여러 은행의 한도와 금리를 비교하고
              <br />
              내게 꼭 맞는 대출을 찾아보세요.
              <br />
              신용, 비상금, 대환, 주택담보대출 모두 가능해요.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <div className="relative">
            <img
              className="absolute top-[95px] left-[197px] w-[345px]"
              src="/images/loan-service.png"
              alt="load-service"
            />
            <img
              className="relative left-[70px] w-[600px]"
              src="/images/iphone.png"
              alt="iphone"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
