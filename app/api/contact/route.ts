import inquiry from "@/handlers/resend/email/inquiry";
import contact from "@/handlers/resend/contact";
import addSubscriber from "@/handlers/mailchimp";

export async function POST(req: Request) {
	try {
		const dataForm = await req.json();

		let emailHandler;

		switch (dataForm.inquiry) {
			case "training":
				emailHandler = await inquiry.training(dataForm);
				break;

			case "technical":
				emailHandler = await inquiry.technical(dataForm);
				break;

			case "callback":
				emailHandler = await inquiry.callback(dataForm);
				break;

			default:
				emailHandler = await inquiry.general(dataForm);
				break;
		}

		// add to newsletter
		if (dataForm.newsletter) {
			await addSubscriber(dataForm);
		}

		return Response.json({
			// send email
			email: emailHandler,
			// add to audience
			contact: !dataForm.email ? null : await contact.create(dataForm),
		});
	} catch (error) {
		console.error("x-> Error sending contact message:", (error as Error).message);
		return Response.error();
	}
}
