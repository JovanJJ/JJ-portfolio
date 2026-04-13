"use server";

import nodemailer from "nodemailer";

export async function submitContactForm(formData) {
    try {
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        if (!name || !email || !message) {
            return { success: false, message: "All fields are required." };
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.NODE_MAILER_EMAIL,
                pass: process.env.NODE_MAILER_PW,
            },
        });

        await transporter.sendMail({
            from: `"${name}" <${process.env.NODE_MAILER_EMAIL}>`,
            replyTo: email,
            to: process.env.NODE_MAILER_EMAIL,
            subject: `New Contact Request from ${name}`,
            text: `You have received a new message from ${name} (${email}):\n\n${message}`,
            html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>`
        });

        return { success: true, message: "Your message has been sent successfully!" };
    } catch (error) {
        console.error("Error sending contact email:", error);
        return { success: false, message: "Failed to send message. Please try again." };
    }
}