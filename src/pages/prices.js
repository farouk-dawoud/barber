import Header from "../components/Header";
import CardPrice from "../components/cardPrice";
// start in styled component
import styled from "styled-components";
// start in transition
import { useTranslation } from "react-i18next";

function Prices() {
  const { t } = useTranslation();
  return (
    <div>
      <Header PathTo="Prijzen" />
      <Div className="mt-">
        <H1 className="mb-12 text-center text-4xl capitalize">
          {t("price.mainH1")}
        </H1>
        <div className="container mx-auto lg:px-36 px-8">
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
            <CardPrice
              main={t("price.main")}
              paragraph={t("price.paragraph")}
              price="€18,-"
              serviceOne={t("price.serviceOne")}
              serviceTow={t("price.serviceTow")}
              serviceThree={t("price.serviceThree")}
              serviceFour={t("price.serviceFour")}
              serviceFive={t("price.serviceFive")}
              colorText="#ec3d43"
              colorTextTow="#ec3d43"
            />
            <CardPrice
              main="Premium Hair Cut"
              paragraph="PREMIUM PAKKET"
              price="€18,-"
              serviceOne="Knippen"
              serviceTow="Fohnen"
              serviceThree="Haar wasse"
              serviceFour="Thee/koffie"
              serviceFive="Basis snacks"
              bg="#222"
              colorText="#1a4587"
              colorTextTow="#4073c0"
            />
            <CardPrice
              main="Premium Hair Cut"
              paragraph="PREMIUM PAKKET"
              price="€18,-"
              serviceOne="Knippen"
              serviceTow="Fohnen"
              serviceThree="Haar wasse"
              serviceFour="Thee/koffie"
              serviceFive="Basis snacks"
              colorText="#ec3d43"
              colorTextTow="#ec3d43"
            />

            <CardPrice
              main="Premium Hair Cut"
              paragraph="PREMIUM PAKKET"
              price="€18,-"
              serviceOne="Knippen"
              serviceTow="Fohnen"
              serviceThree="Haar wasse"
              serviceFour="Thee/koffie"
              serviceFive="Basis snacks"
              colorText="#ec3d43"
              colorTextTow="#ec3d43"
            />

            <CardPrice
              main="Premium Hair Cut"
              paragraph="PREMIUM PAKKET"
              price="€18,-"
              serviceOne="Knippen"
              serviceTow="Fohnen"
              serviceThree="Haar wasse"
              serviceFour="Thee/koffie"
              serviceFive="Basis snacks"
              bg="#222"
              colorText="#1a4587"
              colorTextTow="#4073c0"
            />
            <CardPrice
              main="Premium Hair Cut"
              paragraph="PREMIUM PAKKET"
              price="€18,-"
              serviceOne="Knippen"
              serviceTow="Fohnen"
              serviceThree="Haar wasse"
              serviceFour="Thee/koffie"
              serviceFive="Basis snacks"
              colorText="#ec3d43"
              colorTextTow="#ec3d43"
            />

            <CardPrice
              main="Premium Hair Cut"
              paragraph="PREMIUM PAKKET"
              price="€18,-"
              serviceOne="Knippen"
              serviceTow="Fohnen"
              serviceThree="Haar wasse"
              serviceFour="Thee/koffie"
              serviceFive="Basis snacks"
              colorText="#ec3d43"
              colorTextTow="#ec3d43"
            />
            <CardPrice
              main="Premium Hair Cut"
              paragraph="PREMIUM PAKKET"
              price="€18,-"
              serviceOne="Knippen"
              serviceTow="Fohnen"
              serviceThree="Haar wasse"
              serviceFour="Thee/koffie"
              serviceFive="Basis snacks"
              bg="#222"
              colorText="#1a4587"
              colorTextTow="#4073c0"
            />
            <CardPrice
              main="Premium Hair Cut"
              paragraph="PREMIUM PAKKET"
              price="€18,-"
              serviceOne="Knippen"
              serviceTow="Fohnen"
              serviceThree="Haar wasse"
              serviceFour="Thee/koffie"
              serviceFive="Basis snacks"
              colorText="#ec3d43"
              colorTextTow="#ec3d43"
            />
          </div>
        </div>
      </Div>
    </div>
  );
}

export default Prices;

const H1 = styled.h1`
  color: ${(props) => props.theme.color.blue};
`;

const Div = styled.div`
  padding: 120px 0;
`;
