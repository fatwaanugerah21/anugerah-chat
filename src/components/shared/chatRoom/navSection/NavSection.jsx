import Contact from "./../../Contact/Contact";
import { AddContact, Search } from "./../../Shared";
import { useEffect } from "react";
import "./NavSection.css";

const NavSection = () => {
  useEffect(() => {
    const contactListsDom = document.getElementById("contact-lists");
    let firstPosition = contactListsDom.scrollTop;
    function scrollHandler() {
      const chatAppDOM = document.querySelector(".chat-app");
      const currentPosition = contactListsDom.scrollTop;

      if (firstPosition < currentPosition)
        chatAppDOM.scrollBy({ top: 50, behavior: "smooth" });
      if (firstPosition > currentPosition)
        chatAppDOM.scrollBy({ top: -50, behavior: "smooth" });
      firstPosition = currentPosition;
    }

    contactListsDom.addEventListener("scroll", () => scrollHandler());

    return contactListsDom.removeEventListener("scroll", () => scrollHandler());
  });

  return (
    <div className="nav-section soft-shadow bg-white">
      <div className="padding-sm fix-t-0">
        <AddContact />
        <div className="row f-sb">
          <h3>Chat</h3>
          <div className="menu">...</div>
        </div>
        <Search />
      </div>
      <div className="contact-lists no-scrollbar" id="contact-lists">
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
      </div>
    </div>
  );
};
export default NavSection;
