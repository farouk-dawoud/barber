import styled from "styled-components";
// start in fontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// start in react router
import { NavLink } from "react-router-dom";

function Header({ PathTo }) {
  return (
    <Section>
      <Div className="banner relative h-[40vh]">
        <img
          src={`${process.env.PUBLIC_URL}/image/banner-bg.jpg`}
          className="w-full h-full object-cover"
          alt=""
        />
        <Section>
          <div className="absolute top-2/4 left-2/4 -translate-x-2/4 text-white">
            <div className="flex gap-2 items-center">
              <h1 className="capitalize">
                <NavLink to="/">Home</NavLink>
              </h1>
              <span>
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
              <h1 className="capitalize">
                <NavLink to={PathTo}></NavLink> {PathTo}
              </h1>
            </div>
            <h1 className="capitalize text-5xl">{PathTo}</h1>
          </div>
        </Section>
      </Div>
    </Section>
  );
}

export default Header;

const Div = styled.div`
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 15px;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    width: 0;
    height: 0;
    border-right: 80px solid transparent;
    border-left: 80px solid transparent;
    border-top: 30px solid #ffffff;
  }
`;

const Section = styled.section`
  background-color: red;
  width: 100%;
`;
