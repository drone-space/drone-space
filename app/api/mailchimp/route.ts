import addSubscriber from "@/handlers/mailchimp";

export async function POST(req: Request) {
	try {
		const { email } = await req.json();

		const result = await addSubscriber(email);

		return Response.json({ ...result });
	} catch (error) {
		console.error("x-> Error sending contact message:", error);
		return Response.error();
	}
}
