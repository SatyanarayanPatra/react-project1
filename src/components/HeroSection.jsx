import React from 'react';

const HeroSection = () => {
	return (
		<div className='container hero-container'>
			<main className='hero '>
				<div className='hero-content'>
					<h1>YOUR FEET DESERVE THE BEST</h1>
					<div className='paragraph'>
						<p>
							YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP
							YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND
							WE’RE HERE TO HELP YOU WITH OUR SHOES.
						</p>
					</div>
					<div className='hero-btn'>
						<button>Shop Now</button>
						<button className='secondary-btn'>Category</button>
					</div>
					<div className='shopping'>
						<p className='shop-now'>Also available on</p>
						<div className='brand-icons'>
							<img
								src='../public/images/amazon.png'
								alt='amazon'
							/>
							<img
								src='../public/images/flipkart.png'
								alt='flipkart'
							/>
						</div>
					</div>
				</div>
				<div className='hero-image'>
					<img src='../public/images/shoe_image.png' alt='shoe' />
				</div>
			</main>
		</div>
	);
};

export default HeroSection;
