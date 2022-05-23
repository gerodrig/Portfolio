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
                className={styles['thumbnail']}>
                <Image
                    src={thumbnail}
                    alt="image"
                    layout="fill"
                    objectFit="fill"
                />
            </div>

            <div className={styles['text']}>
                <div className="font-bold">{title}</div>
                <div className={styles['tags']}>
                    {icons.map((Icon, i) => (
                        <div key={i} className="pt-2 ml-4">
                            <Icon />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CardContent;
