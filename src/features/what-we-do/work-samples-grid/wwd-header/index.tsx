export const WwdHeader = () => {
  return (
    <div className="flex flex-col xl:flex-row xl:divide-x xl:divide-slate-700 justify-between border-b border-slate-700">
      <div className="pl-10 pt-16">
        <div className="text-6xl xl:text-7xl font-bold">Our work</div>
      </div>

      <div className="flex w-[65vw] pt-56 xl:pt-96 pb-16 pl-10 xl:pl-20">
        <div className="max-w-[1000px] text-2xl lg:text-3xl xl:line-clamp-3">
          We collaborate with innovative companies at every stage, acting as a
          partner as they accelerate and meet their goals. Take a look at some
          of our favorite projects to date.
        </div>
      </div>
    </div>
  );
};
