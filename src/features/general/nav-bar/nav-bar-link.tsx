
type props = {
    text: string;
    filled?: boolean;
}

const filledClasess = 'py-6 px-20 bg-red-600 text-black cursor-pointer hover:bg-red-400'
const normalClasess = 'py-6 px-10 mx-10 cursor-pointer hover:text-red-300'

const NavBarLink = ({ text, filled = false }: props) => <div className={filled ? filledClasess : normalClasess}>{text}</div>

export default NavBarLink