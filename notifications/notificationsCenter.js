import CONSTANTS from '../constants.js';
import transporter from './notificationsConf.js';

/**
 *
 * @param {string} emailTo - email address to ping
 * Sends a ping email to the 'to' address
 */
export const emailPing = (emailTo) => {
	transporter.sendMail({
		to: emailTo,
		from: CONSTANTS.SENDGRID_EMAIL_SENDER,
		subject: 'Notifications Test',
		html: '<h1>This is a ping test!</h1>',
	});
};

// TODO emailWelcome

// TODO emailPasswordReset

// TODO emailPasswordChanged

// TODO email2FA

// TODO sms2FA