"use client";


import { motion } from "framer-motion";
import { useState } from "react";


const Contact = () => {
 const [formData, setFormData] = useState({
   name: "",
   email: "",
   message: "",
 });


 const handleChange = (
   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
 ) => {
   setFormData({ ...formData, [e.target.name]: e.target.value });
 };

 const handleSubmit = async (e: React.FormEvent) => {
   e.preventDefault();


   try {
     const res = await fetch("/api/contact", {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify(formData),
     });


     const data = await res.json();
     if (!res.ok) throw new Error(data.message);


     alert("Your message has been sent!");
     setFormData({ name: "", email: "", message: "" });
   } catch (err) {
     alert("Failed to send message. Please try again later.");
     console.error(err);
   }
 };


 return (
   <section id="contact" className="py-20 bg-white">
     <div className="max-w-4xl mx-auto px-4">
       <motion.h2
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5 }}
         className="text-4xl font-bold text-center text-gray-900 mb-12"
       >
         Contact Me
       </motion.h2>


       <motion.form
         onSubmit={handleSubmit}
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6 }}
         className="space-y-6"
       >
         <div>
           <label
             htmlFor="name"
             className="block text-gray-700 font-medium mb-2"
           >
             Name
           </label>
           <input
             type="text"
             name="name"
             id="name"
             required
             value={formData.name}
             onChange={handleChange}
             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
           />
         </div>


         <div>
           <label
             htmlFor="email"
             className="block text-gray-700 font-medium mb-2"
           >
             Email
           </label>
           <input
             type="email"
             name="email"
             id="email"
             required
             value={formData.email}
             onChange={handleChange}
             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
           />
         </div>


         <div>
           <label
             htmlFor="message"
             className="block text-gray-700 font-medium mb-2"
           >
             Message
           </label>
           <textarea
             name="message"
             id="message"
             rows={5}
             required
             value={formData.message}
             onChange={handleChange}
             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
           />
         </div>


         <button
           type="submit"
           className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
         >
           Send Message
         </button>
       </motion.form>
     </div>
   </section>
 );
};


export default Contact;
