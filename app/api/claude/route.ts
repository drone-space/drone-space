import anthropic from "@/services/anthropic";

export async function POST(req: Request) {
	try {
		const data = await req.json();

		// // create message
		// const message = await anthropic.messages.create(data);

		console.log(data);
		return Response.json(data);
	} catch (error) {
		console.error("x-> Error sending ai prompt message:", (error as Error).message);
		return Response.error();
	}
}
