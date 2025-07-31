import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Here you would typically save analytics data to your database
    // For now we'll just log it and return success
    console.log('Analytics data received:', data);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing analytics:', error);
    return NextResponse.json(
      { error: 'Failed to process analytics data' },
      { status: 500 }
    );
  }
}

// This route is useful for collecting analytics data from the client
// You can expand it to track page views, user interactions, etc.
// which can help with SEO analysis 