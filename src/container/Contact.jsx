import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const submitFrom = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_pqfl0pp',
        'template_s7hhwu4',
        form.current,
        `${process.env.REACT_APP_EMAILJS_API_key}`
      )
      .then(
        () => {
          window.location.reload();
        },
        () => {
          alert('Failed To Send Message');
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
        <form ref={form} onSubmit={submitFrom}>
          <div className="flex flex-col md:flex-row w-full md:space-x-2 space-x-0 md:mb-0 mb-2">
            <input
              type="text"
              placeholder="Name"
              name="user_name"
              className="py-2 px-10 md:my-3 focus:outline-none rounded-lg mb-2 bg-slate-100"
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="user_email"
              className="py-2 px-10 md:my-3 focus:outline-none rounded-lg bg-slate-100"
              required
            />
          </div>
          <div className="w-full">
            <textarea
              className="focus:outline-none rounded-lg p-4 w-full h-48 bg-slate-100"
              name="message"
              id=""
              placeholder="Messege"
              required
            ></textarea>
          </div>
          <div className="my-6 grid md:place-items-end w-full">
            <input
              type="submit"
              value="Send"
              className="bg-yellow-400 text-gray-700 font-semibold py-2 px-12 text-xl rounded-md cursor-pointer hover:bg-blue-400 hover:text-white duration-300"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
