import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"BITINVENT"<${process.env.EMAIL_USER}>`,
      to: "byte@bitinvent.org",
      subject: subject || "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ message: "Error sending email" }), {
      status: 500,
    });
  }
}

// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";


// export async function POST(req) {
//   try {
//     const { name, email, message } = await req.json();

//     const transporter = nodemailer.createTransport({
//       host: "smtp.office365.com",
//       port: 587,
//       secure: false,
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//       tls: {
//         ciphers: "SSLv3",
//       },
//     });

//     const mailOptions = {
//       from: `"Direct to WhatsApp" <${process.env.EMAIL_USER}>`,
//       to: "aqsashamshad2003@gmail.com",
//       subject: `New Contact Form Submission from ${name}`,
//       text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
//     };

//     await transporter.sendMail(mailOptions);

//     return NextResponse.json({ success: true, message: "Email sent successfully!" }, { status: 200 });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     return NextResponse.json({ success: false, message: "Failed to send email" }, { status: 500 });
//   }
// }
