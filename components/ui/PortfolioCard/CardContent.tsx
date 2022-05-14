import Image from 'next/image';
import { FC } from 'react';
import { IconType } from 'react-icons';

import styles from './styles.module.css';

export type CardContentProps = {
    description?: string;
    icons: IconType[];
    tags?: (string | (() => JSX.Element))[];
    technologies: string[];
    thumbnail: string;
    title: string;
};

const CardContent: FC<CardContentProps> = ({
    thumbnail,
    title,
    description,
    tags,
    icons,
}) => {
    return (
        <div className={styles['card-content']}>
            <div
                className={styles['thumbnail']}
                style={{ height: '95%', width: '95%', position: 'relative' }}>
                <Image
                    src={thumbnail}
                    alt="image"
                    layout="fill"
                    height={'95%'}
                    width={'100%'}
                    // objectFit="fill"
                    className={styles['next-image']}
                    style={{ marginTop: '2%' }}
                />
            </div>

            <div className={styles['text']}>
                <div className="font-bold">{title}</div>
                {/* <div className={styles['description']}>{description}</div> */}
                <div className={styles['tags']}>
                    {icons.map((Icon, i) => (
                        <div key={i} className="pt-2 ml-4">
                            <Icon />
                        </div>
                    ))}
                    {/* {tags.map((tag, i) => (
                        <span key={i} className={styles['tag']}>
                            {typeof tag === 'function' ? tag() : tag}
                        </span>
                    ))} */}
                </div>
            </div>
        </div>
    );
};

export default CardContent;
