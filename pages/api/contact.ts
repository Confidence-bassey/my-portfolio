// import type { NextApiRequest, NextApiResponse } from "next";
// import nodemailer from "nodemailer";


// export default async function handler(
//  req: NextApiRequest,
//  res: NextApiResponse
// ) {
//  if (req.method !== "POST") {
//    return res.status(405).json({ message: "Method Not Allowed" });
//  }


//  const { name, email, message } = req.body;


//  if (!name || !email || !message) {
//    return res.status(400).json({ message: "Missing fields" });
//  }


//  try {
//    const transporter = nodemailer.createTransport({
//      service: "gmail",
//      auth: {
//        user: process.env.EMAIL_USER,
//        pass: process.env.EMAIL_PASS,
//      },
//    });


//    await transporter.sendMail({
//      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
//      to: process.env.EMAIL_RECEIVER,
//      subject: `Portfolio Message from ${name}`,
//      html: `
//        <p><strong>Name:</strong> ${name}</p>
//        <p><strong>Email:</strong> ${email}</p>
//        <p><strong>Message:</strong><br/>${message}</p>
//      `,
//    });


//    return res.status(200).json({ message: "Message sent successfully!" });
//  } catch (error) {
//    console.error("Error sending email:", error);
//    return res.status(500).json({ message: "Server error. Try again later." });
//  }
// }



// Using resend
import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";


const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing fields" });
  }

  try {
    const emailResponse = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // Update after domain verification
      to: process.env.EMAIL_RECEIVER as string,
      subject: `Portfolio Message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
      replyTo: email,
    });

    return res.status(200).json({ message: "Message sent successfully!", emailResponse });
  } catch (error) {
    console.error("Error sending email via Resend:", error);
    return res.status(500).json({ message: "Server error. Try again later." });
  }
}
