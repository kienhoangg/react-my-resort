import React from "react";

export default function Hero({ heroClass, children }) {
  return <header className={heroClass}>{children}</header>;
}

Hero.defaultProps = {
  heroClass: "defaultHero",
};
