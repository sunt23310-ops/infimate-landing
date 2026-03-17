import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    await resend.emails.send({
      from: "Infimate 官网 <onboarding@resend.dev>",
      to: "support@infimate.ai",
      subject: `[官网留言] 来自 ${name}`,
      html: `
        <h2>新的官网留言</h2>
        <p><strong>姓名：</strong>${name}</p>
        <p><strong>邮箱：</strong>${email}</p>
        <p><strong>留言内容：</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "发送失败" }, { status: 500 });
  }
}
