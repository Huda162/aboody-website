"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const { t, i18n } = useTranslation();

  return (
    <header className="header">
      <nav className="nav px-4 lg:px-6 py-2.5">
        <div className="flex flex-nowrap lg:flex-wrap justify-between items-center mx-auto">
          {/* Logo + Language */}
          <div className="flex items-center justify-between lg:justify-start w-full lg:w-fit">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 mx-1 text-sm text-white rounded-lg lg:hidden focus:outline-none"
              aria-controls="mobile-menu-drawer"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
            {/* <img
              src="/assets/images/logo.png"
              className="mr-3 h-6 sm:h-16 hidden md:block"
              alt="Aboody Logo"
            /> */}
            <img
              src="/assets/images/logo-mobile.png"
              className="mr-3 h-6 sm:h-16 hidden md:block"
              alt="Aboody Logo Mobile"
            />
          </div>

          {/* Right side: Phone + Mobile Toggle */}
          <div className="flex items-center lg:order-2 gap-5 md:text-">
            <img
              src="/assets/images/logo.png"
              className="mr-3 h-10 sm:h-16 block md:hidden"
              alt="Aboody Logo"
            />
            <span className="hidden lg:block flex items-center flex-row">
              <i className="ri-phone-fill"></i>
              0595555699
            </span>
            <div className="language-menu relative hidden lg:block">
              <button type="button" className="simple-icon">
                <i className="ri-global-line"></i>
              </button>
              <ul className="sub-menu">
                <li onClick={() => i18n.changeLanguage("ar")}>AR</li>
                <li onClick={() => i18n.changeLanguage("en")}>EN</li>
              </ul>
            </div>
          </div>

          {/* Desktop nav (always visible on lg+) */}
          <div className="hidden lg:flex lg:order-1 lg:w-auto">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a href="/" className="nav-link">
                  {t("home")}
                </a>
              </li>
              <li>
                <a href="/about" className="nav-link">
                  {t("about")}
                </a>
              </li>
              <li>
                <a href="/products" className="nav-link">
                  {t("products")}
                </a>
              </li>
              <li>
                <a href="/contact" className="nav-link">
                  {t("contact")}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer (shown only on small screens) */}
      <div
        className={`fixed top-0 start-0 h-full w-64 bg-[#ffffff] text-gray-500 z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen
            ? "translate-x-0"
            : `${
                i18n.language === "ar"
                  ? "translate-x-200"
                  : "-translate-x-full"
              }`
        }`}
        id="mobile-menu-drawer"
      >
        <div className="flex items-center justify-between">
          <button onClick={toggleMenu} className="bg-black/20 rounded p-1 m-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="language-menu relative bg-black/20 rounded p-1 m-2">
            <button
              type="button"
              className="simple-icon simple-icon-mobile w-[24px] h-[24px] flex items-center justify-center"
            >
              <i className="ri-global-line"></i>
            </button>
            <ul className="sub-menu">
              <li onClick={() => i18n.changeLanguage("ar")}>AR</li>
              <li onClick={() => i18n.changeLanguage("en")}>EN</li>
            </ul>
          </div>
        </div>
        <ul className="flex flex-col p-6 space-y-4 font-medium ">
          <li>
            <a href="/" onClick={toggleMenu} className="nav-link">
              {t("home")}
            </a>
          </li>
          <li>
            <a href="/about" onClick={toggleMenu} className="nav-link">
              {t("about")}
            </a>
          </li>
          <li>
            <a href="/products" onClick={toggleMenu} className="nav-link">
              {t("products")}
            </a>
          </li>
          <li>
            <a href="/contact" onClick={toggleMenu} className="nav-link">
              {t("contact")}
            </a>
          </li>
        </ul>
        <div className="flex gap-3 items-center justify-start m-2">
          <button
            type="button"
            data-twe-ripple-init
            data-twe-ripple-color="light"
            className="mb-2 inline-block rounded-full bg-white p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
          >
            <span className="[&>svg]:h-4 [&>svg]:w-4 [&>svg]:fill-[#00a1f1]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </span>
          </button>
          <button
            type="button"
            data-twe-ripple-init
            data-twe-ripple-color="light"
            className="mb-2 inline-block rounded-full bg-white p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
          >
            <span className="[&>svg]:h-4 [&>svg]:w-4 [&>svg]:fill-[#00a1f1]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
              </svg>
            </span>
          </button>
          <button
            type="button"
            data-twe-ripple-init
            data-twe-ripple-color="light"
            className="mb-2 inline-block rounded-full bg-white p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
          >
            <span className="[&>svg]:h-4 [&>svg]:w-4 [&>svg]:fill-[#00a1f1]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 512 512"
              >
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Optional: dark overlay when drawer is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 bg-opacity-50 z-40 lg:hidden transition-all duration-300"
          onClick={toggleMenu}
        />
      )}
    </header>
  );
}
