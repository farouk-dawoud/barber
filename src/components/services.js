// start in component
import Title from "./shared/title";
import CardServices from "./cardServices";
// start in styled component
import styled from "styled-components";
// start in transition
import { useTranslation } from "react-i18next";

function Services() {
  const { t } = useTranslation();
  return (
    <Section>
      <Title textMain={t("servicesH1")} textPar={t("servicesP")} />
      <div className="container mx-auto lg:px-36 px-8 mt-10">
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4">
          <CardServices
            srcImg={`${process.env.PUBLIC_URL}/image/services/service1.jpg`}
            textImg={t("cardServicesOne")}
          />

          <CardServices
            srcImg={`${process.env.PUBLIC_URL}/image/services/service2.jpg`}
            textImg={t("cardServicesTow")}
          />

          <CardServices
            srcImg={`${process.env.PUBLIC_URL}/image/services/service3.jpg`}
            textImg={t("cardServicesThree")}
          />

          <CardServices
            srcImg={`${process.env.PUBLIC_URL}/image/services/service4.jpg`}
            textImg={t("cardServicesFour")}
          />
        </div>
      </div>
    </Section>
  );
}

export default Services;

const Section = styled.section`
  padding-top: 120px;
`;
