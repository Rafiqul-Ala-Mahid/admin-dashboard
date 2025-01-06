"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/icons/sidebar/logo.svg"
import Overview from "../../../public/icons/sidebar/overview.svg"
import Tasks from "../../../public/icons/sidebar/task.svg";
import Products from "../../../public/icons/sidebar/Product.svg";
import Orders from "../../../public/icons/sidebar/orders.svg";
import Customers from "../../../public/icons/sidebar/Customer.svg";
import Help from "../../../public/icons/sidebar/Help.svg";
import Setting from "../../../public/icons/sidebar/Setting.svg";
import LogOut from "../../../public/icons/sidebar/logout.svg";
import { Button } from "../ui/button";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen h-[100%]">
      {/* Sidebar */}
      <div
        className={` ${
          isOpen ? "block" : "hidden md:block "
        } bg-[#1D1D1D] text-white w-64`}
      >
        <div className="p-4 flex items-center justify-center gap-4">
          <Image src={Logo} alt={""} className="w-[35px] h-[35px]" />
          <h2 className="text-2xl font-bold">Logo</h2>
        </div>
        <div className="flex flex-col px-8">
          <Link
            href="/"
            className="flex gap-4 items-center justify-left my-[20px] px-4 py-2 rounded hover:bg-gray-700"
          >
            <Image src={Overview} alt={""} className="w-[25px] h-[25px]" />
            Overview
          </Link>
          <Link
            href="/"
            className="flex gap-4 items-center justify-left my-[20px] px-4 py-2 rounded hover:bg-gray-700"
          >
            <Image src={Tasks} alt={""} className="w-[25px] h-[25px]" />
            My Tasks
          </Link>
          <Link
            href="/"
            className="flex gap-4 items-center justify-left my-[20px] px-4 py-2 rounded hover:bg-gray-700"
          >
            <Image src={Products} alt={""} className=" w-[25px] h-[25px]" />
            Products
          </Link>
          <Link
            href="/"
            className="flex gap-4 items-center justify-left my-[20px] px-4 py-2 rounded hover:bg-gray-700"
          >
            <Image src={Orders} alt={""} className="w-[25px] h-[25px]" />
            Orders
          </Link>
          <Link
            href="/"
            className="flex gap-4 items-center justify-left my-[20px] px-4 py-2 rounded hover:bg-gray-700"
          >
            <Image src={Customers} alt={""} className="w-[25px] h-[25px]" />
            Customers
          </Link>
          <Link
            href="/"
            className="flex gap-4 items-center justify-left my-[20px] px-4 py-2 rounded hover:bg-gray-700"
          >
            <Image src={Help} alt={""} className="w-[25px] h-[25px]" />
            Help
          </Link>
          <Link
            href="/"
            className="flex gap-4 items-center justify-left my-[20px] px-4 py-2 rounded hover:bg-gray-700"
          >
            <Image src={Setting} alt={""} className="w-[25px] h-[25px]" />
            Setting
          </Link>
          <Link
            href="/"
            className="flex gap-4 items-center justify-left my-[20px] px-4 py-2 rounded hover:bg-gray-700"
          >
            <Image src={LogOut} alt={""} className="w-[25px] h-[25px]" />
            Log Out
          </Link>
        </div>
      </div>
      {/* Main Content */}
      <div className=" bg-gray-100">
        <Button
          className="m-4 p-2 bg-gray-800 text-white rounded md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          Toggle
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
