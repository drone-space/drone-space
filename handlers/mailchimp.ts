const addSubscriber = async (email: string) => {
	try {
		const response = await fetch(
			`https://${process.env.NEXT_PUBLIC_MAILCHIMP_SERVERNAME_PREFIX}.api.mailchimp.com/3.0/lists/${process.env.NEXT_MAILCHIMP_AUDIENCE_ID_DST}/members`,

			{
				body: JSON.stringify({ email_address: email, status: "subscribed" }),
				mode: "cors",
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
