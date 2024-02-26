import Link from "next/link";

type props = {
  text: string;
  filled?: boolean;
  link: string;
};

const filledClasses =
  "h-[8dvh] w-[13ch] py-6 px-2 ml-8 bg-red-500 text-[16px] text-black hover:bg-red-400 flex items-center justify-center";
const normalClasses =
  "h-[8dvh] w-[12ch] py-6 px-2 mx-12 text-[16px] hover:text-red-300 flex items-center justify-start";

const NavBarLink = ({ text, filled = false, link }: props) => {
  if (filled) {
    return (
      <Link href={link}>
        <div className={filledClasses}>{text}</div>
      </Link>
    );
  } else {
    return (
      <div className={normalClasses}>
        <Link href={link}>{text}</Link>
      </div>
    );
  }
};

export default NavBarLink;
