import styled from "styled-components";
// start in components
import Button from "./shared/button";
// start in transition
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  return (
    <Section>
      <div className="container mx-auto lg:px-36 px-8">
        <div className="grid grid-cols-12 items-center justify-center relative">
          <div className="lg:col-span-4 col-span-12">
            <AboutContent className="aboutContent">
              <h1 className="mb-8 text-4xl capitalize">
                {t("aboutH1s1")} <br /> {t("aboutH1s2")}
              </h1>
              <P className="text-lg font-medium">{t("aboutP")}</P>
              <div className="mt-8">
                <Button text={t("aboutButton")} />
              </div>
            </AboutContent>
          </div>
          {/* start in big image */}
          <div className="lg:col-span-7 col-span-12">
            <img src={`${process.env.PUBLIC_URL}/image/about-img.jpg`} alt="" />
          </div>
          {/* start in small image */}
          <Div className="lg:block hidden absolute right-0 -bottom-[70px] p-5 z-10">
            <img
              src={`${process.env.PUBLIC_URL}/image/about-img2.jpg`}
              alt=""
            />
          </Div>
        </div>
      </div>
    </Section>
  );
}

export default About;

const Section = styled.section`
  padding-top: 120px;
  margin-bottom: 20px;
`;

const AboutContent = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.8);
  padding: 60px 0px 60px 0px;
  min-width: 480px;
  z-index: 5;

  &::after {
    content: "";
    position: absolute;
    left: 100%;
    top: 0;
    z-index: 3;
    background: rgba(255, 255, 255, 0.8);
    width: 70px;
    height: 100%;
  }

  /* Media query for mobile devices */
  @media (max-width: 768px) {
    min-width: 100%;

    &::after {
      width: 0;
    }
  }
`;

const P = styled.p`
  color: ${(props) => props.theme.color.gray};
`;

const Div = styled.div`
  border: 1px dashed ${(props) => props.theme.color.blue};
`;
