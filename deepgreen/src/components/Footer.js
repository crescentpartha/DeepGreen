import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPinterest, faTwitter, faBehance, faDribbble } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import footerBanner from '../images/footer-banner.jpg';
import FooterCard from './FooterCard';

const Footer = () => {
    const cards = [
        { id: 1, title: 'Luxury Dress', subtitle: 'Tagline goes here', icon: 'faSnowflake' },
        { id: 2, title: 'Global Seo', subtitle: 'Tagline goes here', icon: 'faGlobe' },
        { id: 3, title: 'Veet Style', subtitle: 'Tagline goes here', icon: 'faGhost' },
        { id: 4, title: 'Fresh Fruits', subtitle: 'Tagline goes here', icon: 'faAppleWhole' },
        { id: 5, title: 'Digital Tech', subtitle: 'Tagline goes here', icon: 'faDatabase' }
    ]
    return (
        <div className="hero max-h-screen" style={{ backgroundImage: `url(${footerBanner})` }}>
            <div className="hero-overlay bg-opacity-30" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}></div>
            <div className="hero-content text-center text-neutral-content w-full p-0 pt-20 pb-5">
                <div className='w-full flex flex-col justify-center items-center'>
                    <div className="max-w-xl">
                        <Link to='/' className="btn btn-link no-underline hover:no-underline normal-case text-xl text-neutral font-coresens border-4 border-neutral hover:border-neutral rounded-none">DeepGreen</Link>
                        <p className='text-neutral-400 text-sm my-6 font-kiro'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem consectetur voluptas, iure ipsum ratione asperiores dolor tempora nobis labore praesentium.</p>
                        <div>
                            <Link to='/' className='py-2 px-5 font-coresens rounded-none hover:bg-primary hover:text-neutral-50 text-neutral-400 border-r hover:border-primary border-neutral-600 uppercase text-sm'>Facebook</Link>
                            <Link to='/' className='py-2 px-3 font-coresens rounded-none hover:bg-primary hover:text-neutral-50 text-neutral-400 border-r hover:border-primary border-neutral-600'><FontAwesomeIcon icon={faPinterest} /></Link>
                            <Link to='/' className='py-2 px-3 font-coresens rounded-none hover:bg-primary hover:text-neutral-50 text-neutral-400 border-r hover:border-primary border-neutral-600'><FontAwesomeIcon icon={faTwitter} /></Link>
                            <Link to='/' className='py-2 px-3 font-coresens rounded-none hover:bg-primary hover:text-neutral-50 text-neutral-400 border-r hover:border-primary border-neutral-600'><FontAwesomeIcon icon={faBehance} /></Link>
                            <Link to='/' className='py-2 px-3 font-coresens rounded-none hover:bg-primary hover:text-neutral-50 text-neutral-400 border-r hover:border-primary border-neutral-600'><FontAwesomeIcon icon={faDribbble} /></Link>
                        </div>
                    </div>

                    <div className="max-w-full flex flex-row flex-wrap sm:flex-nowrap gap-5 justify-center my-10">
                        {
                            cards.map(card => <FooterCard
                                key={card.id}
                                card={card}
                            ></FooterCard>)
                        }
                    </div>

                    {/* <div className="divider w-full h-0"></div> */}
                    <hr className='border-t border-neutral-700 w-full' />

                    <div className="max-w-full">
                        <p className='text-neutral text-sm my-3 font-kiro'><span className='text-primary font-coresens'>DeepGreen</span> @{new Date().getFullYear()} Made with ❤ All Right Reserved</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;