export const Header = () => {
  return (
    <div className="flex flex-col xl:flex-row xl:divide-x dark:xl:divide-slate-700 xl:divide-gray-300 justify-between border-b dark:border-slate-700 border-gray-300">
      <div className="pl-10 pt-16">
        <div className="text-6xl xl:text-7xl font-bold">Our work</div>
      </div>

      <div className="flex md:w-[65vw] h-auto pt-20 lg:pt-0 lg:h-[500px] pb-16 px-10 xl:pl-20 items-end">
        <div className="max-w-[1000px] text-2xl lg:text-3xl">
          We work closely with homeowners and businesses, offering our expertise
          in painting both exterior and interior spaces. As a trusted partner,
          we collaborate with our clients throughout every stage of their
          project, helping them achieve their vision and goals. Explore some of
          our most notable residential and commercial painting projects to date.
        </div>
      </div>
    </div>
  );
};
