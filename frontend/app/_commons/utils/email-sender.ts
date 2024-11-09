import { createClient } from "smtpexpress"
import axios from "axios"

const client = createClient({
	projectSecret: process.env.NEXT_PUBLIC_SMTP_SECRET,
	projectId: process.env.NEXT_PUBLIC_SMTP_PROJECT_ID,
})


export const sendEmail = ({ subject, message, }: { subject: string, message: string }) => {

	const config = {
		method: "post",
		url: "https://api.elasticemail.com/v4/emails",
		headers: {
			"Content-Type": "application/json",
			"X-ElasticEmail-ApiKey": process.env.NEXT_PUBLIC_SMTP_KEY,
		},
		data: {
			Recipients: [{ Email: "sales@justcupcakes.uk" }],
			Content: {
				From: "notify@justcupcakes.uk",
				Body: [
					{
						"ContentType": "HTML",
						"Content": message,
					},
				],
				Subject: subject
			},
		},
	}

	return axios(config)

}
