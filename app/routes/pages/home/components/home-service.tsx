export default function HomeService() {
  return (
    <section className="h-[1687px] bg-amber-100">
      <div className="container flex h-full bg-white">
        <div className="flex-1 bg-blue-300">
          <div>1-1</div>
          <div className="relative">
            <img
              className="absolute top-[83px] left-[110px] w-[303px]"
              src="/images/home-service-1.png"
              alt="home-service-1"
            />
            <img className="relative w-[600px]" src="/images/iphone.png" alt="iphone" />
          </div>
        </div>
        <div className="flex-1 bg-red-300">
          <div className="relative">
            <img
              className="absolute top-[83px] left-[110px] w-[303px]"
              src="/images/home-service-2.png"
              alt="home-service-2"
            />
            <img className="relative w-[600px]" src="/images/iphone.png" alt="iphone" />
          </div>
          <div>2-2</div>
        </div>
      </div>
    </section>
  );
}
