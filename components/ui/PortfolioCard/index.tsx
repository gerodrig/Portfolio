import { FC, useState } from 'react';
import cx from 'classnames';

import Card from './Card';
import CardOverlay from './CardOverlay';

import CardContent, { CardContentProps } from './CardContent';

import styles from './styles.module.css';
import { MdClose } from 'react-icons/md';
import { SiGithub } from 'react-icons/si';
import Image from 'next/image';
import { IoMdRocket } from 'react-icons/io';
import CardModal from './CardModal';

type TaggedContentCardProps = {
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
};

const PortfolioCard: FC<TaggedContentCardProps> = ({
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
    ...rest
}) => {
    const [showDetail, setShowDetail] = useState(false);

    return (
        <>
            <CardModal
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

            <div className={className} onClick={() => setShowDetail(true)}>
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
            </div>
        </>
    );
};

export default PortfolioCard;
