import Link from "next/link";

type props = {
  text: string;
  filled?: boolean;
  link: string;
};

const filledClasses =
  "h-[4rem] w-[15rem] py-6 bg-red-500 text-[16px] text-black hover:bg-red-400 flex items-center justify-center";
const normalClasses =
  "h-[4rem] w-[15rem] py-6 px-10 text-[16px] hover:text-red-300 flex items-center justify-start";

const NavBarLink = ({ text, filled = false, link }: props) => {
  return (
    <Link className={filled ? filledClasses : normalClasses} href={link}>
      {text}
    </Link>
  );
};

export default NavBarLink;
