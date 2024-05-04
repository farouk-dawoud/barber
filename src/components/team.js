import styled from "styled-components";
// start in component
import Title from "./shared/title";
import CardTeam from "./shared/cardTeam";
// start in transition
import { useTranslation } from "react-i18next";

function Team() {
  const { t } = useTranslation();
  return (
    <Section>
      <Title textMain={t("teamH1")} textPar={t("teamP")} />
      <div className="container mx-auto lg:px-36 px-8 mt-10">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          <CardTeam
            srcImg={`${process.env.PUBLIC_URL}/image/team/a.jpeg`}
            name={t("teamPersonOne")}
            position={t("teamPositionOne")}
          />
          <CardTeam
            srcImg={`${process.env.PUBLIC_URL}/image/team/molham.jpeg`}
            name={t("teamPersonTow")}
            position={t("teamPositionTow")}
          />
          <CardTeam
            srcImg={`${process.env.PUBLIC_URL}/image/team/person3.jpg`}
            name={t("teamPersonThree")}
            position={t("teamPositionThree")}
          />
        </div>
      </div>
    </Section>
  );
}

export default Team;

const Section = styled.section`
  padding: 120px 0;
`;
