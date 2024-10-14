import { Subscribe } from "@/types/form";

const addSubscriber = async (formData: Subscribe) => {
	try {
		const response = await fetch(
			`https://${process.env.NEXT_PUBLIC_MAILCHIMP_SERVERNAME_PREFIX}.api.mailchimp.com/3.0/lists/${process.env.NEXT_MAILCHIMP_AUDIENCE_ID_DST}/members`,

			{
				body: JSON.stringify({
					email_address: formData.email,
					status: "subscribed",
					merge_fields: {
						FNAME: formData.fname,
						LNAME: formData.lname,
						COMPANY: formData.company,
						PHONE: formData.phone,
					},
				}),
				headers: {
					Authorization: `apikey ${process.env.NEXT_MAILCHIMP_KEY_GENERAL}`,
					"Content-Type": "application/json",
				},
				method: "POST",
			}
		);

		const res = await response.json();

		if (res.title == "Forgotten Email Not Subscribed") {
			return { ...res, url: process.env.NEXT_PUBLIC_MAILCHIMP_SIGNUP_URL };
		}

		return res;
	} catch (error) {
		console.error("X-> Failed to subscribe:", error);
	}
};

export default addSubscriber;
