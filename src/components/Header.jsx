import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const mainNav = [
  {
    display: "Trang chủ",
    path: "/",
  },
  {
    display: "Sản phẩm",
    path: "/catalog",
  },
  {
    display: "Bài viết",
    path: "/blog",
  },
  {
    display: "Liên hệ",
    path: "/contact",
  },
];

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const navActive = mainNav.findIndex((i) => i.path == pathname);

  const menuRef = useRef(null);
  const menuToggle = () => {
    menuRef.current.classList.toggle("active");
  };

  const headerRef = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  const { user, logOut } = useUserAuth();
  {
    console.log(user);
  }

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {}
  };

  return (
    <div className="header" ref={headerRef}>
      <div className="container">
        <div className="header__logo">
          <span>D</span>
          <span>N</span>
          <span>S</span>
        </div>
        <div className="header__menu">
          <div className="header__menu__mobile--toggle" onClick={menuToggle}>
            <i className="bx bx-menu-alt-left"></i>
          </div>
          <div className="header__menu__left" ref={menuRef}>
            <div className="header__menu__left__close" onClick={menuToggle}>
              <i className="bx bx-chevron-left"></i>
            </div>
            {mainNav.map((item, index) => (
              <div
                key={index}
                className={`header__menu__item header__menu__left__item ${
                  index === navActive ? "active" : ""
                }`}
                onClick={menuToggle}
              >
                <Link to={item.path}>{item.display}</Link>
              </div>
            ))}
          </div>
          <div className="header__menu__right">
            <div
              className="header__menu__item header__menu__right__item"
              title="Giỏ hàng"
            >
              <Link to="/cart">
                <i className="bx bx-shopping-bag"></i>
              </Link>
            </div>
            {user ? (
              <div className="header__user">
                <div className="header__user__email">{user.email}</div>
                <div
                  className="header__user__logout"
                  title="Đăng xuất"
                  onClick={handleLogOut}
                >
                  <i className="bx bx-log-out"></i>
                </div>
              </div>
            ) : (
              <div className="header__menu__item header__menu__right__item">
                <Link to="/login">
                  <i className="bx bx-user"></i>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
