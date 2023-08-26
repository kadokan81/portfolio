import './index.scss';
import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders';

const Home = () => {
	const [letterClass, setLetterClass] = useState('text-animate');
	const nameArray = ['A', 'l', 'e', 'k', 's', 'a', 'n', 'd', 'r', ' ', 'T', 'o', 'l', 'k', 'a', 'c', 'h', 'o', 'v'];
	const jobArray = ['W', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.'];

	useEffect(() => {
		setTimeout(() => {
			setLetterClass('text-animate-hover');
		}, 4000);
	}, []);

	return (
		<div className='container home-page'>
			<div className='text-zone'>
				<h1>
					<span className={letterClass}>H</span>
					<span className={`letterClass _12`}>i </span>

					<span className={`${letterClass} _13`}>I</span>
					<span className={`${letterClass} _14`}>'m</span>
					<br />

					<AnimatedLetters
						letterClass={letterClass}
						strArray={nameArray}
						idx={15}
					/>
					<br />
					<AnimatedLetters
						letterClass={letterClass}
						strArray={jobArray}
						idx={22}
					/>
				</h1>
				<h2>Frontend Developer / Java Script / React / Next.js / Type Script</h2>
				<Link
					className='flat-button'
					to='/contact'>
					CONTACT ME
				</Link>
			</div>
			<Loader type='pacman' />
		</div>
	);
};

export default Home;
