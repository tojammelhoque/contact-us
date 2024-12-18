import React from "react";
import { MdMessage } from "react-icons/md";
import { MdAddCall } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
function ContactUs() {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-between pt-20 w-[90vw]">
      {/* btn div */}
      <div>
        <div className="px-28 btn">
          <div className="btn-1 flex justify-between gap-4">
            <button className="btn-1 flex justify-center items-center gap-2 px-[120px] py-4 bg-black text-white rounded-md text-[16px]">
              <MdMessage className="text-[24px]" />
              VIA SUPPORT CHAT
            </button>
            <button className="btn-2 flex justify-center items-center gap-2 px-[120px]  py-4 bg-black text-white rounded-md text-[16px]">
              <MdAddCall className="text-[24px]" />
              VIA CALL
            </button>
          </div>
          <div className="btn-2 mt-4">
            <button className=" flex justify-center items-center gap-2 w-[100%] py-4 border border-black rounded-md text-[16px]">
              <MdOutlineEmail className="text-[24px]" />
              VIA EMAIL
            </button>
          </div>
        </div>
        <form
          onSubmit={onSubmit}
          className="form px-28 mt-10 flex flex-col gap-5"
        >
          <div className="form-container flex flex-col w-full relative">
            <label
              className="absolute top-[-10px] left-[10px] bg-white px-1 text-xl rounded"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="border border-black h-[40px] py-2"
              type="text"
              name="name"
            />
          </div>
          <div className="form-container flex flex-col w-full relative">
            <label
              className="absolute top-[-10px] left-[10px] bg-white px-1 text-xl rounded"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="border border-black h-[40px] py-2"
              type="email"
              name="email"
            />
          </div>
          <div className="form-container flex flex-col w-full relative">
            <label
              className="absolute top-[-10px] left-[10px] bg-white px-1 text-xl rounded"
              htmlFor="text"
            >
              Text
            </label>
            <textarea
              className="resize-none border border-black h-[329px] py-2"
              name="text"
            />
          </div>
          <button className="px-[120px] py-4 bg-black text-white rounded-md">
            Submint
          </button>
        </form>
      </div>

      {/* image div */}
      <div>
        <img src="images/contactus.png" alt="contactus" />
      </div>
    </div>
  );
}

export default ContactUs;
