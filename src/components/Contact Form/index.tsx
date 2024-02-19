import React from "react";
import { ParentFlex } from "./style";

const ContactForm = () => {
  return (
    <>
      <ParentFlex>
        <div>
          <input placeholder="Full Name" type="text" />
        </div>
        <div>
          <input placeholder="Your Email" type="email" />
        </div>
        <div>
          <select name="" id="">
            <option value="option" disabled selected hidden>
              Query Related{" "}
            </option>
            <option value="option">option 1</option>
            <option value="option">option 1</option>
            <option value="option">option 1</option>
          </select>
        </div>
        <div>
          <textarea
            placeholder="Message"
            name=""
            id=""
            cols={30}
            rows={10}
          ></textarea>
        </div>
        <div>
          <button>Send Message</button>
        </div>
      </ParentFlex>
    </>
  );
};
export default ContactForm;
