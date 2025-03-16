import React, { useState } from "react";
import { MdOutlineMail, MdCall } from "react-icons/md";
import { PiCertificateDuotone } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";

const Header = ({ servicesRef, teamRef, contactRef }) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleScrollTo = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const handleDropdown = () => {
        setShowDropdown((prev) => !prev);
    };

    return (
        <header className="header text-lg md:text-2xl py-5 px-5">
            <nav>
                <ul className="nav-list" style={{ display: "flex", alignItems: "center" }}>
                    <div className="flex w-[50%]">
                        <img src="images/klGoldLogo.png" className="w-[35%] md:w-[15%]" />
                    </div>
                    <div className="relative flex flex-col items-center">
                        <li onClick={handleDropdown} className="cursor-pointer">
                            Kontakt
                        </li>
                        {showDropdown && (
                            <div
                                className={`bg-[#ab9b82] flex flex-col gap-5 text-white absolute mt-10 p-4 rounded shadow-lg text-start dropdown`}
                                style={{ zIndex: 9999 }}
                            >
                                <p className="flex gap-3 items-center"><MdOutlineMail /> cerovicljiljana@gmail.com</p>
                                <p className="flex gap-3 items-center"><MdOutlineMail /> kreditlinks@office.com </p>
                                <p className="flex gap-3 items-center"><MdCall /> +381 642502283</p>
                                <p className="flex gap-3 items-center"><PiCertificateDuotone /> Maticni Broj: 67889134</p>
                                <p className="flex gap-3 items-center"><PiCertificateDuotone /> PIB: 114834045</p>
                                <p className="flex gap-3 items-center"><FaLocationDot /> Bulevar Heroja sa Košara 8, Beograd</p>
                            </div>
                        )}
                    </div>

                    <li onClick={() => handleScrollTo(servicesRef)}>Usluge</li>
                    <li onClick={() => handleScrollTo(teamRef)}>Tim</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
