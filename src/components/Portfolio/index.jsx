import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import data from '../../data/portfolio.json';

const Portfolio = () => {
	const [letterClass, setLetterClass] = useState('text-animate');
	const [portfolio, setPortfolio] = useState([]);

	useEffect(() => {
		setPortfolio(data.portfolio);
		const timer = setTimeout(() => {
			setLetterClass('text-animate-hover');
		}, 3000);

		return () => {
			clearTimeout(timer);
		};
	}, []);

	const renderPortfolio = (portfolio) => {
		return (
			<div className='images-container'>
				{portfolio.map((port, idx) => {
					return (
						<div
							className='image-box'
							key={idx}>
							<img
								src={require(`../../assets/portfolio/${port.cover}`)} // Update the path
								className='portfolio-image'
								alt='portfolio'
							/>
							<div className='content'>
								<p className='title'>{port.name}</p>
								<h4 className='description'>{port.description}</h4>
								<div className='btn-line'>
									<button
										className='btn'
										onClick={() => window.open(port.url)}>
										View
									</button>
									<button
										className='btn'
										onClick={() => window.open(port.git)}>
										git
									</button>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		);
	};

	return (
		<>
			<div className='container portfolio-page'>
				<h1 className='page-title'>
					<AnimatedLetters
						letterClass={letterClass}
						strArray={'Portfolio'.split('')}
						idx={15}
					/>
				</h1>
				<div>{renderPortfolio(portfolio)}</div>
			</div>
			<Loader type='pacman' />
		</>
	);
};

export default Portfolio;
