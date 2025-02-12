"use client";
import { useState } from "react";
import { Menu, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { key: "1", label: "首頁" },
    { key: "2", label: "服務" },
    { key: "3", label: "關於我們" },
    { key: "4", label: "聯絡我們" },
  ];

  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-xl font-bold">MyLogo</h1>

        {/* 桌面版選單 */}
        <div className="hidden md:block">
          <Menu onClick={onClick} mode="horizontal" items={menuItems} className="border-none" />
        </div>

        {/* 漢堡選單按鈕（行動版） */}
        <Button type="text" icon={<MenuOutlined className="text-xl" />} className="md:hidden" onClick={() => setOpen(true)} />

        {/* 側邊欄（行動版） */}
        <Drawer title="選單" placement="right" onClose={() => setOpen(false)} open={open}>
          <Menu onClick={onClick} mode="vertical" items={menuItems} />
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
