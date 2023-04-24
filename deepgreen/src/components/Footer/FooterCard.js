import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleWhole, faDatabase, faGhost, faGlobe, faSnowflake } from '@fortawesome/free-solid-svg-icons';

const FooterCard = ({ card }) => {
    const { id, title, subtitle, icon } = card;
    const [hoverEffect, setHoverEffect] = useState(false);

    return (
        <div
            onMouseEnter={() => setHoverEffect(true)}
            onMouseLeave={() => setHoverEffect(false)}
            // className='flex flex-row gap-2 justify-center items-center hover:bg-info hover:text-secondary text-neutral-400  p-4 rounded-sm'
            className={`${id === 2 ? "bg-info text-secondary" : "text-neutral-400"} flex flex-row gap-2 justify-center items-center hover:bg-info hover:text-secondary p-4 rounded-sm`}
            >

            <div>
                {
                    icon === 'faSnowflake' &&
                    <FontAwesomeIcon
                        icon={faSnowflake}
                        className={`${hoverEffect ? "text-primary" : "text-neutral-400"} text-4xl`}
                    />
                }
                {
                    icon === 'faGlobe' &&
                    <FontAwesomeIcon
                        icon={faGlobe}
                        className={`${hoverEffect ? "text-primary" : "text-primary"} text-4xl`}
                    />
                }
                {
                    icon === 'faGhost' &&
                    <FontAwesomeIcon
                        icon={faGhost}
                        className={`${hoverEffect ? "text-primary" : "text-neutral-400"} text-4xl`}
                    />
                }
                {
                    icon === 'faAppleWhole' &&
                    <FontAwesomeIcon
                        icon={faAppleWhole}
                        className={`${hoverEffect ? "text-primary" : "text-neutral-400"} text-4xl`}
                    />
                }
                {
                    icon === 'faDatabase' &&
                    <FontAwesomeIcon
                        icon={faDatabase}
                        className={`${hoverEffect ? "text-primary" : "text-neutral-400"} text-4xl`}
                    />
                }
            </div>

            <div className='text-left'>
                <p className='uppercase text-sm font-coresens'>{title}</p>
                <p className='uppercase text-xs font-kiro'>{subtitle}</p>
            </div>
        </div>
    );
};

export default FooterCard;