import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const formRef = useRef();

  const submitFrom = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pqfl0pp",
        "template_s7hhwu4",
        formRef.current,
        `${process.env.REACT_APP_EMAILJS_API_KEY}`
      )
      .then(
        () => {
          formRef.current.reset();
          toast.success("Message was send successfully!");
        },
        () => {
          formRef.current.reset();
          toast.error("Faild to send message!");
        }
      );
  };

  return (
    <section
      id="contact"
      className="grid items-center justify-center py-16 z-50"
    >
      <h1 className="text-center mb-12 text-2xl md:text-4xl text-white font-mono">
        <span className="text-yellow-400">Contact</span> Me
      </h1>
      <div className="grid grid-row-3 place-items-center gap-2 md:gap-0">
        <form ref={formRef} onSubmit={submitFrom}>
          <div className="flex flex-col md:flex-row w-full md:space-x-2 space-x-0 md:mb-0 mb-2">
            <input
              type="text"
              placeholder="Name"
              name="user_name"
              className="py-3 px-[20px] md:my-3 focus:outline-none text-[#8d8d8d] placeholder:text-[#8d8d8d] mb-2 bg-[#2b2b2b]"
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="user_email"
              className="py-3 px-[20px] md:my-3 focus:outline-none text-[#8d8d8d] placeholder:text-[#8d8d8d] bg-[#2b2b2b]"
              required
            />
          </div>
          <div className="w-full">
            <textarea
              className="focus:outline-none px-[20px] text-[#8d8d8d] placeholder:text-[#8d8d8d] p-4 w-full h-48 bg-[#2b2b2b]"
              name="message"
              id=""
              placeholder="Messege"
              required
            ></textarea>
          </div>
          <div className="w-full my-6 grid place-items-center md:place-items-end">
            <input
              type="submit"
              value="Send message!"
              className="text-[#ffd700] border border-[#ffd700] h-[50px] w-[220px] tracking-[4px] cursor-pointer hover:bg-[#ffd700] hover:text-black duration-200"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
