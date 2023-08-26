import './index.scss';
import React, { useEffect, useRef, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import emailjs from '@emailjs/browser';

const Contact = () => {
	const [letterClass, setLetterClass] = useState('text-animate');
	const form = useRef();

	useEffect(() => {
		setTimeout(() => {
			setLetterClass('text-animate-hover');
		}, 3000);
	}, []);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('service_riy2iyw', 'template_oa2k35h', form.current, 'qrbFYYJoqzIQsoU4F').then(
			() => {
				alert('Message successfully sent!');
				window.location.reload(false);
			},
			() => {
				alert('Failed to send the message, please try again');
			}
		);
	};
	return (
		<>
			<div className='container contact-page'>
				<div className='text-zone'>
					<h1>
						<AnimatedLetters
							letterClass={letterClass}
							strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
							idx={15}
						/>
					</h1>

					<p>
						Thank you for your interest in reaching out to me. Whether you have a project in mind, a question about web
						development, or just want to say hello, I'd love to hear from you! Please feel free to use the contact form
						below or use the provided contact information to get in touch.
					</p>
					<div className='contact-form'>
						<form
							ref={form}
							onSubmit={sendEmail}>
							<ul>
								<li className='half'>
									<input
										type='text'
										name='name'
										placeholder='Name'
										id='name'
										required
									/>
								</li>
								<li className='half'>
									<input
										type='email'
										name='email'
										placeholder='Email'
										id='email'
										required
									/>
								</li>
								<li>
									<input
										type='text'
										name='subject'
										id='subject'
										placeholder='Subject'
										required
									/>
								</li>
								<li>
									<textarea
										placeholder='Message'
										name='message'
										id='message'
										required></textarea>
								</li>
								<li>
									<input
										type='submit'
										className='flat-button'
										value='SEND'
									/>
								</li>
							</ul>
						</form>
					</div>
				</div>
			</div>
			<Loader type='pacman' />
		</>
	);
};

export default Contact;
