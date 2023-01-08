import Link from "next/link";
import Logo from "./logo";
import Navigator from "./navigator";
import SearchBar from "./searchBar";

function Header() {
  return (
    <div className="fixed z-50 flex h-16 w-full items-center justify-between  bg-orange-400 p-8 ">
      <Link href="/" passHref>
        <Logo />
      </Link>
      <SearchBar />
      <Navigator />
    </div>
  );
}

export default Header;
