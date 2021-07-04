import { MenuIcon } from "@heroicons/react/outline";

function Header() {
  return (
    <div className="flex items-center justify-between p-3 bg-primary">
      <div>
        <span className="text-white ml-4 text-lg lg:ml-36 font-mono">
          FOX ELECTRO
        </span>
      </div>

      <dir className="hidden md:inline-flex pr-5 lg:mr-36 space-x-12 text-white">
        <p className="link">Blog</p>
        <p className="link">About</p>
        <p className="link">Shop</p>
        <p className="link">Contact</p>
      </dir>

      <MenuIcon className="h-8 text-white mr-4 md:hidden" />
    </div>
  );
}

export default Header;
