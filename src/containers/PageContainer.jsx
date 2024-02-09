import React from "react";

const PageContainer = ({ children }) => {
  return <div className="w-10/12 m-auto">{children}</div>;
};

export default PageContainer;

// ! PageContainer comp u bir parametre alir. sarmallama islemi yapsasi icn bir chilren parametresi almali. sayfa duzenini ayarlamak icin boyle yaptik. sayfanin 12 de 10 luk kaplandigini goreceksiniz.
