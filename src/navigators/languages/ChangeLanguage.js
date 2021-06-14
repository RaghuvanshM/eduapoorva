import React from "react";
import { connect } from "react-redux";
import I18n from "../languages";

class ChangeLanguage extends React.Component {
  static updateLanguage=(lang)=> {
    switch (lang) {
      case "hi":
        return (I18n.locale = "hi");

      case "en":
        return (I18n.locale = "en");

      case "ja":
        return (I18n.locale = "ja");

      default:
        return (I18n.locale = "en");
    }
  }
}

const mapStateToProps = (state) => ({ selectedLang: state.selectedLang });
export default connect(mapStateToProps)(ChangeLanguage);
