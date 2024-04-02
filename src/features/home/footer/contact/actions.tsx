"use server";

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function sendEmail({
  subject,
  text,
}: {
  subject: string;
  text: string;
}) {
  try {
    await transporter.sendMail({
      to: process.env.EMAIL_TO,
      subject,
      text,
    });
    return { ok: true };
  } catch (err) {
    console.error(err);
    return { ok: false };
  }
}
