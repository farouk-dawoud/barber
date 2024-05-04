// start in styled component
import styled from "styled-components";
// start in react router
import { NavLink } from "react-router-dom";
// start in fontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
// start in hooks
import { useState } from "react";
// start in component
import LanguageSelector from "../languageSelector";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Section className="w-full h-full ">
      <div className="container mx-auto px-12 lg:px-44">
        <div className="grid grid-cols-12 items-center justify-start">
          {/* start in start Navbar */}
          <ul className="hidden lg:flex gap-6 uppercase col-span-4">
            <li>
              <StyledNavLink to="/">home</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/team">team</StyledNavLink>
            </li>
          </ul>
          {/* start in logo */}
          <div className="flex justify-center lg:items-center items-start col-span-6 lg:col-span-4 my-3 h-full mt-8">
            <NavLink to="/" className="flex justify-center">
              <img
                src={`${process.env.PUBLIC_URL}/image/logo.png`}
                className="lg:w-16 w-12"
                alt=""
              />
            </NavLink>
          </div>
          {/* start in end Navbar */}
          <div className="col-span-6 lg:col-span-4 uppercase overflow-hidden">
            {/* start in button close and open */}
            <div
              className="lg:hidden flex justify-center my-2 cursor-pointer"
              onClick={toggleNav}
            >
              <FontAwesomeIcon icon={faBarsStaggered} />
            </div>
            {/* start in Navbar */}
            <div>
              <Ul
                className={`flex flex-col lg:flex-row justify-end items-center gap-6 h-0 w-28 sm:w-full ${
                  isOpen ? "" : "lg:h-full h-[275px]"
                } overflow-hidden`}
              >
                <li className="lg:hidden">
                  <StyledNavLink to="/">home</StyledNavLink>
                </li>
                <li className="lg:hidden">
                  <StyledNavLink to="/team">team</StyledNavLink>
                </li>
                <li>
                  <StyledNavLink to="/photo">fotos</StyledNavLink>
                </li>
                <li>
                  <StyledNavLink to="/prices">prijzen</StyledNavLink>
                </li>
                <li>
                  <StyledNavLink to="/contact">contact</StyledNavLink>
                </li>
                <li>
                  <LanguageSelector />
                </li>
              </Ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Navbar;

const Section = styled.section`
  background-color: #fff;
`;

const StyledNavLink = styled(NavLink)`
  letter-spacing: 2px;
  font-size: 13px;
  font-weight: 500;

  &.active {
    color: ${(props) =>
      props.theme.color.primary}; /* Style for the active link */
  }
`;

const Ul = styled.ul`
  transition: height 0.3s;
`;
