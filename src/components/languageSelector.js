import React, { useEffect, useState } from "react";
import i18n from "../i18n";
// start in styled component
import styled from "styled-components";

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // i18n.language contains the language assigned to lng in i18n.js file.

  useEffect(() => {
    document.documentElement.lang = selectedLanguage; // Update lang attribute of the HTML element
  }, [selectedLanguage]);

  const chooseLanguage = (e) => {
    e.preventDefault();
    i18n.changeLanguage(e.target.value); // i18n.changeLanguage() is used to change the language assigned to lng in i18n.js file.
    setSelectedLanguage(e.target.value);
  };

  return (
    <Select
      defaultValue={selectedLanguage}
      onChange={chooseLanguage}
      className="capitalize"
    >
      <option value="en">english</option>
      <option value="nl">netherland</option>
    </Select>
  );
};

export default LanguageSelector;

const Select = styled.select`
  border: 1px solid #000;
  padding: 5px;
  border-radius: 4px;
  outline: none;
`;
