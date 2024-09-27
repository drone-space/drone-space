import mailchimp from "@mailchimp/mailchimp_marketing";

// Custom types for environment variables
declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NEXT_MAILCHIMP_KEY_GENERAL: string;
			NEXT_PUBLIC_SERVERNAME_PREFIX: string;
		}
	}
}

// Mailchimp configuration
mailchimp.setConfig({
	apiKey: process.env.NEXT_MAILCHIMP_KEY_GENERAL,
	server: process.env.NEXT_PUBLIC_SERVERNAME_PREFIX,
});

export default mailchimp;
