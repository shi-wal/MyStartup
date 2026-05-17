import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pwsjmvp",
        "template_3revlvv",
        form.current,
        "CLGrFRvXih_8uP5mI",
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message.");
          console.log(error.text);
        },
      );
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif text-gray-800 mb-4">Contact Us</h1>

        <p className="text-gray-500 uppercase tracking-[0.3em] text-sm">
          We'd love to hear from you
        </p>
      </div>

      <div className="bg-white shadow-sm border rounded-lg p-8">
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full border rounded-md px-4 py-3 outline-none focus:border-[#B76E79]"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full border rounded-md px-4 py-3 outline-none focus:border-[#B76E79]"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full border rounded-md px-4 py-3 outline-none focus:border-[#B76E79]"
          ></textarea>

          <button
            type="submit"
            className="bg-[#B76E79] text-white px-8 py-3 rounded-md hover:bg-[#a85f6a] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
