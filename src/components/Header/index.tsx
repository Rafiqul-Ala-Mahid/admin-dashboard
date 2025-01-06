
import Link from "next/link";
import { Input } from "../ui/input";
import Search from "../../../public/icons/navbar/search.svg"
import Notification from "../../../public/icons/navbar/Frame 327.svg"
import Messages from "../../../public/icons/navbar/Frame 328.svg"

import Image from "next/image";

const Navbar = () => {
  return (
    <header className="">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Search Bar */}
        <div className="relative flex items-center mx-4 w-full">
          {/* Search Icon */}
          <div className="absolute left-3">
            <Image src={Search} alt="Search" width={20} height={20} />
          </div>
          {/* Input Field */}
          <Input
            type="text"
            placeholder="Search products, order..."
            className="pl-[50px] w-[80%] bg-gray-200 border border-gray-300 py-2 rounded-lg"
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex w-[350px] items-center space-x-4">
          <Link
            href="/"
            className="flex items-center gap-4 text-white font-bold"
          >
            <div className="w-[50px] h-[50px] bg-gray-400 rounded-full"></div>
            Alex Fox
          </Link>
          <Link href="/">
            <Image
              src={Notification}
              alt="Search"
              width={20}
              height={20}
              className="w-[25px] h-[25px]"
            />
          </Link>
          <Link href="/">
            <Image
              src={Messages}
              alt="Search"
              width={20}
              height={20}
              className="w-[25px] h-[25px]"
            />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
