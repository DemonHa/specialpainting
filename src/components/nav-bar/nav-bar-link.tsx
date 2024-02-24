import Link from "next/link";

type props = {
    text: string;
    filled?: boolean;
    link: string;
}

const filledClasess = 'h-[12dvh] w-[13ch] py-6 px-2 ml-8 bg-red-600 text-black cursor-pointer hover:bg-red-400 flex items-center justify-center'
const normalClasess = 'h-[12dvh] w-[12ch] py-6 px-2 mx-8 cursor-pointer hover:text-red-300 flex items-center justify-center'

const NavBarLink = ({ text, filled = false, link }: props) => <Link href={link}><div className={filled ? filledClasess : normalClasess}>{text}</div></Link>

export default NavBarLink