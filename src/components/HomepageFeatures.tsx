import useBaseUrl from '@docusaurus/useBaseUrl';
import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
    title: string;
    image?: string;
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Sales',
        description: (
            <>
                Znglists empower sales with the ability to share carefully curated selections of content both publicly
                and privately to help shorten the sales cycle and drive campgains forward.
            </>
        ),
    },
    {
        title: 'Marketing',
        description: (
            <>
                Zngly enables you to publish your content to the world in a matter of clicks. Got an ad for an upcoming
                product featured on your homepage? No problem. Zngly looks to simplify the maintenance of your
                organisation’s campaigns.
            </>
        ),
    },
    {
        title: 'Zngalytics',
        description: (
            <>
                Tracks every click, view, page turn and download in real-time, in one place, creating in-depth reports
                without the need for complex data tools. Know where your audience is coming from. Powerful search tools.
            </>
        ),
    },
];

function Feature({ title, description, ...props }: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            {props?.image && (
                <div className='text--center'>
                    <img className={styles.featureSvg} alt={title} src={useBaseUrl(props.image)} />
                </div>
            )}
            <div className='text--center padding-horiz--md'>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className='container'>
                <div className='row'>
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
