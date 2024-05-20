import React from "react";

import typeContact from "@src/types/form";

import Layout from "@src/layouts";

export default function Contact({ formValues }: { formValues: typeContact }) {
	return (
		<Layout.Page>
			<p>
				Name: {formValues.fname} {formValues.lname}
			</p>
			<p>Email: {formValues.email} </p>
			{formValues.phone && <p>Phone: {formValues.phone} </p>}
			<p>Message: {formValues.message}</p>
		</Layout.Page>
	);
}
