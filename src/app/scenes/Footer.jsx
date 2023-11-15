import React from "react";

export default function Footer() {
  return (
    <div className="bg-purple py-4">
      <img src="../../../../public/img/preethi_logo.png" className="preethi" />
      <div id="links">
        <a href="home">Home</a>
        <a href="catering">Catering</a>
        <a href="menu">Menu</a>
        <a href="contact">Contact</a>
        <a href="orderonline">Order Online</a>
      </div>
      <div id="copyright">&copy 2023 | All Rights Reserved</div>
      <div id="socials">
        <a href="www.facebook.com">
          <img src="../../../../public/img/FB/Facebook/Negative.png" />
        </a>
        <a href="www.instagram.com">
          <img src="../../../../public/img//Draft/Instagram/Negative.png" />
        </a>
      </div>
    </div>
  );
}