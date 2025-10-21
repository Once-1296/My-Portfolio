// frontend/src/pages/ContactPage.tsx
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      user_name: form.name,
      user_email: form.email,
      user_message: form.message,
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("❌ EmailJS Error:", err);
      setStatus("error");
    }
  };

  return (
    <main className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-semibold mb-8 text-center">Contact Me</h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
          <ul className="space-y-2">
            <li>
              📧 Email:{" "}
              <a target="_blank" href="mailto:awwab.wadekar@gmail.com" className="underline">
                awwab.wadekar@gmail.com
              </a>
            </li>
            <li>📞 Phone: +91-9987965492</li>
            <li>
              💻 GitHub:{" "}
              <a target="_blank" href="https://github.com/Once-1296" className="underline">
                github.com/Once-1296
              </a>
            </li>
            <li>
              🔗 LinkedIn:{" "}
              <a target="_blank" href="https://www.linkedin.com/in/awwab-wadekar-a42a65330/" className="underline">
                linkedin.com/in/awwab-wadekar
              </a>
            </li>
          </ul>
        </div>

        
      </div>
    </main>
  );
};

export default Contact;
