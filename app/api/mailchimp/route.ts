import addSubscriber from "@/handlers/mailchimp";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	try {
		// Add CORS headers
		const origin = req.headers.get("origin") || "*";
		const headers = {
			"Access-Control-Allow-Origin": origin, // Allow requests from any origin
			"Access-Control-Allow-Methods": "POST", // Specify allowed methods
			"Access-Control-Allow-Headers": "Content-Type", // Specify allowed headers
		};

		const formValues = await req.json();

		const result = await addSubscriber(formValues);

		// Return the response with CORS headers
		return new NextResponse(JSON.stringify({ ...result }), { headers });
	} catch (error) {
		console.error("x-> Error sending contact message:", error);
		return NextResponse.error();
	}
}
