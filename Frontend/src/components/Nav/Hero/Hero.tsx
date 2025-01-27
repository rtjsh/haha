const Hero = () => {
  return (
    <div className="min-h-screen flex items-center flex-col justify-center gap-10 py-[200px]">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-5xl font-medium">
          Accelerate your account-based sales pipeline
        </h1>
        <span className="text-gray-500 text-xl">
          Aomni enables AEs to work deals like experts without getting lost in
          the weeds.
        </span>
      </div>
      <div className="flex items-center gap-6">
        <button className="btn border-[2px] border-[#6568f2] hover:bg-gray-200 px-6 py-2 rounded-lg cursor-pointer">
          Get a Demo
        </button>
        <button className="btn bg-[#6568f2] hover:border-[2px] border-[#5558f6] text-white px-6 py-2 rounded-lg border-[2px] cursor-pointer">
          Try Aomni for free
        </button>
      </div>
      <img
        src="https://www.aomni.com/landing/_next/image?url=%2Flanding%2Fassets%2Fscreenshots%2Faccount.png&w=1920&q=85"
        alt=""
        className="border-[1px] border-violet-300 shadow-sm"
      />
    </div>
  );
};

export default Hero;
