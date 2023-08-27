import Logo from '../../assets/logo/logo.png';
import { SECTION_ID } from '../../utils/constants';

const navList = [
  { title: 'Why choose us', id: SECTION_ID.WHY_CHOOSE },
  { title: 'How it works?', id: SECTION_ID.HOW_WORK },
  { title: 'How to Rent?', id: SECTION_ID.HOW_RENT },
  { title: 'Catch Our Deals', id: SECTION_ID.CATCH_DEAL }
] as const;

const Header = () => {
  return (
    <header className="ct-container flex justify-between items-center h-[88px] py-2">
      <button>
        <img src={Logo} alt="Car Mania" />
      </button>
      <div className="flex">
        <ul className="flex gap-8 mr-8">
          {navList.map(item => (
            <li key={item.id} className="ct-button">
              {item.title}
            </li>
          ))}
        </ul>
        <div className="pl-8 border-l-2">
          <button className="ct-button">Login</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
