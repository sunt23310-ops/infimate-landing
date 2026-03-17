import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { company, name, phone, desc } = await req.json();

    await resend.emails.send({
      from: "Infimate 官网 <onboarding@resend.dev>",
      to: "support@infimate.ai",
      subject: `[预约演示] ${company} - ${name}`,
      html: `
        <h2>新的预约演示申请</h2>
        <p><strong>公司名称：</strong>${company}</p>
        <p><strong>联系人：</strong>${name}</p>
        <p><strong>手机号码：</strong>${phone}</p>
        <p><strong>需求描述：</strong></p>
        <p>${desc}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "发送失败" }, { status: 500 });
  }
}
