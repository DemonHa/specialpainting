import Link from "next/link";

type props = {
    text: string;
    filled?: boolean;
    link: string;
}

const filledClasess = ' min-w-[10ch] py-6 px-10 ml-8 bg-red-600 text-black cursor-pointer hover:bg-red-400 flex items-center justify-center'
const normalClasess = ' min-w-[10ch] py-6 px-10 mx-8 cursor-pointer hover:text-red-300 flex items-center justify-center'

const NavBarLink = ({ text, filled = false, link }: props) => <Link href={link}><div className={filled ? filledClasess : normalClasess}>{text}</div></Link>

export default NavBarLink