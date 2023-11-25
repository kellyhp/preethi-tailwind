import React from "react";
import Image from "next/image";
import { Center, Button, Text } from "@mantine/core";
import Link from "next/link";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      {/* <Image
        src={require("../assets/preethi_logo.png")}
        className="preethi"
        alt="Preethi Logo"
        width={50} // Set the actual width of your image
        height={50} // Set the actual height of your image
      ></Image> */}
      <div id="links">
        <Link href="/home">Home</Link>
        <Link href="/catering">Catering</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/orderonline">Order Online</Link>
      </div>
      <Text id="copyright">&copy; 2023 | All Rights Reserved</Text>
      {/* <div id="socials">
        <Link href="https://www.facebook.com">
          <Image
            src={require("../assets/FB/Facebook/Negative.png")}
            alt="Facebook Logo"
            width={50} // Set the actual width of your image
            height={50} // Set the actual height of your image
          ></Image>
        </Link>
        <Link href="https://www.instagram.com">
          <Image
            src={require("../assets/Draft/Instagram/Negative.png")}
            alt="Instagram Logo"
            width={50} // Set the actual width of your image
            height={50} // Set the actual height of your image
          ></Image>
        </Link>
      </div> */}
    </div>
  );
};
export default Footer;
