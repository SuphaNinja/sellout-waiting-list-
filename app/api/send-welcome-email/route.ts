import { NextRequest, NextResponse } from 'next/server';
import { WelcomeEmail } from '@/components/emailTemplates/welcome-email';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    // Parse the request body to get the email
    const { email } = await request.json();
    
    console.log("Email received:", email);

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }
    const emailName = (email: string): string => {
      if (!email || !email.includes('@')) return '';
      
      return email.split('@')[0];
    }
    

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: [email],
      subject: 'Welcome to our waiting list!',
      react: WelcomeEmail({ firstName: email.split('@')[0] }), // You might want to get the name from the request
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
