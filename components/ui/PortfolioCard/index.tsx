import { FC } from 'react';
import cx from 'classnames';

import { motion } from 'framer-motion';

import Card from './Card';
import CardOverlay from './CardOverlay';
import CardModal from './CardModal';
import CardContent, { CardContentProps } from './CardContent';

import { fadeInUp } from '../../../animations';

import styles from './styles.module.css';

type TaggedContentCardProps = {
    id: number;
    className?: string;
    deployedLink: string;
    githubLink: string;
    thumbnail: CardContentProps['thumbnail'];
    title: CardContentProps['title'];
    description?: CardContentProps['description'];
    technologies: CardContentProps['technologies'];
    tags: CardContentProps['tags'];
    icons: CardContentProps['icons'];
    isActive?: boolean;
    showDetail?: number | null;
    setShowDetail?: (id: number | null) => void;
};

const PortfolioCard: FC<TaggedContentCardProps> = ({
    id,
    className,
    githubLink,
    deployedLink,
    thumbnail,
    title,
    description,
    tags,
    icons,
    technologies,
    isActive = false,
    showDetail = null,
    setShowDetail = () => {},
    ...rest
}) => {
    


    return (
        <>

            <CardModal
                id={id}
                description={description}
                thumbnail={thumbnail}
                technologies={technologies}
                icons={icons}
                githubLink={githubLink}
                deployedLink={deployedLink}
                showDetail={showDetail}
                setShowDetail={setShowDetail}
                title={title}
            />

            <motion.div className={className} onClick={() => setShowDetail(id)}
            variants={fadeInUp}
            >
                <div className={styles['card-link']}>
                    <Card
                        className={cx(styles['tagged-content-card'])}
                        {...rest}>
                        <CardOverlay thumbnail={thumbnail} />
                        <CardContent
                            thumbnail={thumbnail}
                            title={title}
                            description={description}
                            tags={tags}
                            icons={icons}
                            technologies={technologies}
                        />
                    </Card>
                </div>
            </motion.div>
        </>
    );
};

export default PortfolioCard;
