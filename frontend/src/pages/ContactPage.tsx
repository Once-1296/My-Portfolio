import React from "react";

const Contact: React.FC = () => {
  return (
    <main className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-semibold mb-8 text-center">Contact Me</h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
          <ul className="space-y-2">
            <li>📧 Email: <a target ="_blank" href="mailto:awwab.wadekar@gmail.com" className="underline">awwab.wadekar@gmail.com</a></li>
            <li>📞 Phone: +91-9987965492</li>
            <li>💻 GitHub: <a target ="_blank" href="https://github.com/Once-1296" className="underline">github.com/Once-1296</a></li>
            <li>🔗 LinkedIn: <a target ="_blank" href="https://www.linkedin.com/in/awwab-wadekar-a42a65330/" className="underline">linkedin.com/in/awwab-wadekar</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Send a Message</h3>
          <form id="contact-form" className="space-y-4">
            <input type="text" name="name" placeholder="Your Name" className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none" />
            <input type="email" name="email" placeholder="Your Email" className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none" />
            <textarea name="message" placeholder="Your Message" className="w-full p-2 rounded bg-gray-800 border border-gray-700 h-32 focus:outline-none" />
            <button type="submit" className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition">Send</button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
