// start in component
import Header from "../components/Header";
// start in styled component
import styled from "styled-components";
// start in fontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
// start in transition
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();
  return (
    <section>
      <Header PathTo="Contact" />
      <Div className="mt-12">
        <div className="container mx-auto lg:px-36 px-8">
          <div className="grid grid-cols-12">
            {/* start in contact */}
            <ul className="col-span-12 lg:col-span-4">
              <li className="flex gap-4 mb-5">
                <Span>
                  <FontAwesomeIcon icon={faHouse} />
                </Span>
                <div>
                  <h1 className="mb-2 font-semibold text-base">
                    Utrecht, Nederland
                  </h1>
                  <P>Amsterdamsestraatweg 310 3551 CT Utrecht</P>
                </div>
              </li>

              <li className="flex gap-4 mb-5">
                <Span>
                  <FontAwesomeIcon icon={faPhone} />
                </Span>
                <div>
                  <h1 className="mb-2 font-semibold text-base">
                    031 (06) 1670 4822
                  </h1>
                  <P>Ma 12:00 t/m 19:00</P>
                  <P className="mt-3">Di t/m Zat 10:00 t/m 19:00</P>
                </div>
              </li>

              <li className="flex gap-4 mb-5">
                <Span>
                  <FontAwesomeIcon icon={faEnvelope} />
                </Span>
                <div>
                  <h1 className="mb-2 font-semibold text-base">
                    support@colorlib.com
                  </h1>
                  <P>Send us your query anytime!</P>
                </div>
              </li>
            </ul>
            {/* start in form */}
            <form
              action="https://formspree.io/f/mgejyqrk"
              method="POST"
              className="col-span-12 lg:col-span-8 flex flex-col justify-end"
            >
              <div className="flex flex-wrap md:flex-nowrap gap-4">
                <div className="flex flex-col w-full">
                  <Input
                    type="text"
                    name="name"
                    placeholder={t("contact.placeHome")}
                    className="h-10 p-4"
                  />
                  <Input
                    type="text"
                    name="email"
                    placeholder={t("contact.placeEmail")}
                    className="my-5 h-10 p-4"
                  />
                  <Input
                    type="text"
                    name="subject"
                    placeholder={t("contact.placeSubject")}
                    className="h-10 p-4"
                  />
                </div>
                <TextArea
                  rows="4"
                  cols="50"
                  className="p-4 w-full"
                  name="message"
                  placeholder={t("contact.message")}
                ></TextArea>
              </div>
              <div className="flex justify-end mt-5">
                <Button className="cursor-pointer text-center outline-none text-white text-xs font-medium px-9 uppercase">
                  {t("contact.button")}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Div>
    </section>
  );
}

export default Contact;

const Div = styled.div`
  padding: 120px 0;
  background: #f9f9ff;
`;

const Span = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: ${(props) => props.theme.color.primary};
`;

const P = styled.p`
  color: ${(props) => props.theme.color.gray};
`;

const Input = styled.input`
  border: 1px solid #ced4da;
  outline: none;
`;

const TextArea = styled.textarea`
  border: 1px solid #ced4da;
  outline: none;
`;

const Button = styled.button`
  display: inline-block;
  background: linear-gradient(to right, #ec3d43 0%, #dc1a20 51%, #ec3d43 100%);
  background-size: 200% auto;
  font-family: "Roboto", sans-serif;
  line-height: 50px;
  border-radius: 50px;
  border: 0;
  box-shadow: 0px 10px 30px rgba(187, 146, 54, 0.3);
  transition: all 0.3s ease 0s;
  &:hover {
    background: linear-gradient(
      to right,
      #dc1a20 0%,
      #ec3d43 51%,
      #dc1a20 100%
    );
  }
`;
