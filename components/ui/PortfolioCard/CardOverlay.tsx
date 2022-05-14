import { FC } from 'react';
import styles from './styles.module.css';

type CardOverlayProps = {
    thumbnail: string;
};

const CardOverlay: FC<CardOverlayProps> = ({ thumbnail }) => {
    return (
        <div className={styles['card-overlay']}>
            <div
                className={styles['overlay']}
                style={{
                    backgroundImage: `url(${thumbnail})`,
                }}
            />
        </div>
    );
};

export default CardOverlay;
