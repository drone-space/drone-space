import resend from "@/services/resend";

import TemplateEmailInquiryGeneral from "@/templates/email/inquiry/General";
import TemplateEmailInquiryTraining from "@/templates/email/inquiry/Training";
import TemplateEmailInquiryTechnical from "@/templates/email/inquiry/Technical";
import TemplateEmailInquiryCallback from "@/templates/email/inquiry/Callback";

import { typeContact } from "@/types/form";

const inquiry = {
	async general(formData: typeContact) {
		const { data, error } = await resend.general.emails.send({
			from: `${formData.fname} ${formData.lname} <${process.env.NEXT_EMAIL_INFO}>`,
			to: [process.env.NEXT_EMAIL_INFO as string],
			// cc:[]
			subject: formData.subject,
			react: TemplateEmailInquiryGeneral(formData),
			reply_to: formData.email,
		});

		if (!error) {
			return data;
		} else {
			console.error("x-> Error sending general inquiry email:", (error as Error).message);
			throw error;
		}
	},

	async callback(formData: typeContact) {
		const { data, error } = await resend.general.emails.send({
			from: `${formData.fname} ${formData.lname} <${process.env.NEXT_EMAIL_INFO}>`,
			to: [process.env.NEXT_EMAIL_INFO as string],
			// cc:[]
			subject: formData.subject,
			react: TemplateEmailInquiryCallback(formData),
			// reply_to: formData.email,
		});

		if (!error) {
			return data;
		} else {
			console.error("x-> Error sending callback request email:", (error as Error).message);
			throw error;
		}
	},

	async training(formData: typeContact) {
		const { data, error } = await resend.general.emails.send({
			from: `${formData.fname} ${formData.lname} <${process.env.NEXT_EMAIL_TRAINING}>`,
			to: [process.env.NEXT_EMAIL_TRAINING as string],
			// cc:[]
			subject: formData.subject,
			react: TemplateEmailInquiryTraining(formData),
			reply_to: formData.email,
		});

		if (!error) {
			return data;
		} else {
			console.error("x-> Error sending training inquiry email:", (error as Error).message);
			throw error;
		}
	},

	async technical(formData: typeContact) {
		const { data, error } = await resend.general.emails.send({
			from: `${formData.fname} ${formData.lname} <${process.env.NEXT_EMAIL_KEVON}>`,
			to: [process.env.NEXT_EMAIL_KEVON as string],
			// cc:[]
			subject: formData.subject,
			react: TemplateEmailInquiryTechnical(formData),
			reply_to: formData.email,
		});

		if (!error) {
			return data;
		} else {
			console.error("x-> Error sending technical inquiry email:", (error as Error).message);
			throw error;
		}
	},
};

export default inquiry;
