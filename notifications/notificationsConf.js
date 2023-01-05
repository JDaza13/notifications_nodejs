import nodemailer from 'nodemailer';
import sendgridTransport from 'nodemailer-sendgrid-transport';
import CONSTANTS from '../constants.js';

/**
 * transporter - the sendgridTransport transporter
 */
const transporter = nodemailer.createTransport(
	sendgridTransport({
		auth: {
			api_key: CONSTANTS.SENDGRID_API_KEY,
		},
	})
);

export default transporter;
