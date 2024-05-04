// start in styled component
import styled from "styled-components";
// start in transition
import { useTranslation } from "react-i18next";

function Catalogue() {
  const { t } = useTranslation();
  return (
    <Section>
      <div className="container mx-auto lg:px-36 px-8 mt-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2">
          <div className="bg-white px-5 py-8">
            <h1 className="text-center">Kies je stijl</h1>
            <ul className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 mt-3">
              <Li className="active ">
                <img
                  src={`${process.env.PUBLIC_URL}/image/catalogueCard/icon1.png`}
                  className="h-full w-5"
                  alt=""
                />
              </Li>
              <Li>
                <img
                  src={`${process.env.PUBLIC_URL}/image/catalogueCard/icon2.png`}
                  className="h-full w-5"
                  alt=""
                />
              </Li>
              <Li style={{ backgroundColor: "#f9f9f9" }}>
                <img
                  src={`${process.env.PUBLIC_URL}/image/catalogueCard/icon3.png`}
                  className="h-full w-5"
                  alt=""
                />
              </Li>
              <Li>
                <img
                  src={`${process.env.PUBLIC_URL}/image/catalogueCard/icon4.png`}
                  className="h-full w-5"
                  alt=""
                />
              </Li>
            </ul>
            {/* start in text */}
            <div className="mt-3">
              <P className="font-normal text-lg px-2">{t("catalogueP")}</P>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Catalogue;

const Section = styled.section`
  background-image: url("/image/catalogue-bg.jpg");
  width: 100%;
  height: 100%;
  background-size: cover;
  padding: 120px 0;
`;

const Li = styled.li`
  padding: 18px 22px;
  background: #eeeeee;
  display: flex;
  justify-content: center;
  &.active {
    border-bottom: 1px solid #bb9236;
    box-shadow: 0px 5px 15px rgba(187, 146, 54, 0.3);
    background: #fff !important;
  }
`;

const P = styled.p`
  color: ${(props) => props.theme.color.gray};
`;
