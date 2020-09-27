import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  text: PropTypes.string.isRequired,
  buttonStyle: PropTypes.string,
  icon: PropTypes.object,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default function Button(props) {
  const {
    buttonStyle = "text",
    text = "Button",
    onClick = undefined,
    icon: Icon,
    className = "",
  } = props;

  let style = "";

  switch (buttonStyle) {
    case Button.styles.text:
      {
        style = "material-button-text";
      }
      break;
    case Button.styles.outline:
      {
        style = "material-button-outline";
      }
      break;
    case Button.styles.contained:
      {
        style = "material-button-contained";
      }
      break;
    default:
      {
        style = "material-button-text";
      }
      break;
  }

  return (
    <button
      className={`flex items-center space-x-2 material-button ${style} ${className}`}
      onClick={onClick}
    >
      {Icon && <Icon className="h-5 w-5" />}
      <span className="w-full">{text}</span>
    </button>
  );
}

Button.propTypes = propTypes;
Button.styles = {
  text: "text",
  outline: "outline",
  contained: "contained",
};
