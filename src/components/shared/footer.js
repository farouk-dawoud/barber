// start in styled component
import styled from "styled-components";
// start in fontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
// start in transition
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <Foot>
      <div className="container mx-auto lg:px-36 px-8 ">
        <div className="grid md:grid-cols-3 grid-cols-1">
          {/* 1 */}
          <div className="md:mt-0 mt-8">
            <H1 className=" text-white capitalize">contact:</H1>
            <div className="mt-4">
              <H2 className="capitalize font-bold">{t("footer.address")}</H2>
              <P>Amsterdamsestraatweg 310</P>
              <P>3551 CT Utrecht</P>
            </div>
            <div className="mt-4">
              <H2 className="capitalize font-bold">tel:</H2>
              <P>(06) 1670 4822</P>
            </div>
          </div>
          {/* 2 */}
          <div className="md:mt-0 mt-8">
            <H1 className=" text-white capitalize">{t("footer.h1Tow")}</H1>
            <div className="mt-4">
              <H2 className="capitalize font-bold">Facebook</H2>
              <Icon className="text-white">
                <FontAwesomeIcon icon={faFacebookF} />
              </Icon>
            </div>
            <div className="mt-4">
              <H2 className="capitalize font-bold">instagram</H2>
              <Icon className="text-white">
                <FontAwesomeIcon icon={faInstagram} />
              </Icon>
            </div>
          </div>
          {/* 3 */}
          <div className="md:mt-0 mt-8">
            <H1 className=" text-white capitalize">{t("footer.h1Three")}</H1>
            <div className="mt-4">
              <H2 className="capitalize font-bold">ma:</H2>
              <P>12:00 t/m 19:00</P>
            </div>
            <div className="mt-4">
              <H2 className="capitalize font-bold">Di t/m Zat :</H2>
              <P>10:00 t/m 19:00</P>
            </div>
          </div>
        </div>
      </div>
    </Foot>
  );
}

export default Footer;

const Foot = styled.footer`
  background-color: #fff;
  padding: 120px 0;
  position: relative;

  &::before {
    content: "";
    background-image: url("image/BLUERedLine.png");
    background-repeat: no-repeat;
    width: 100%;
    height: 50px;
    position: absolute;
    top: 0;
    left: 0;
    filter: drop-shadow(0px 10px 8px rgb(0, 0, 0, 0.5));
  }
`;

const H1 = styled.h1`
  color: ${(props) => props.theme.color.blue};
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 0.8px;
`;

const H2 = styled.h2`
  color: ${(props) => props.theme.color.primary};
`;

const P = styled.p`
  color: ${(props) => props.theme.color.gray};
`;

const Icon = styled.p`
  transition: all 0.3s;
  cursor: pointer;
  color: ${(props) => props.theme.color.blue};
  &:hover {
    color: ${(props) => props.theme.color.blue};
  }
`;
