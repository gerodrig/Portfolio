import { FC } from 'react';
import classnames from 'classnames';
import styles from './styles.module.css';

type CardProps = {
    className?: string;
    float?: boolean;
    children: JSX.Element | JSX.Element[];
};

const Card: FC<CardProps> = ({ className, float, children, ...rest }) => {
    return (
        <div
            className={classnames(
                styles.card,
                styles.card,
                { [styles.float]: float },
                className
            )}
            {...rest} >
            {children}
        </div>
    );
};

export default Card;
