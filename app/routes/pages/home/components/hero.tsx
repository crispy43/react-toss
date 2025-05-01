export default function Hero() {
  return (
    <section className="flex h-[calc(100vh-60px)] w-full flex-col items-center bg-[url('/images/new_main.png')] bg-cover bg-center pt-[120px]">
      <div className="hero-shadow absolute top-0 h-[500px] w-full" />
      <div className="absolute z-10">
        <h1 className="text-center text-[66px] leading-[1.4] font-[700]">
          금융의 모든 것<br />
          토스에서 쉽고 간편하게
        </h1>
        <div>스토어</div>
      </div>
    </section>
  );
}
