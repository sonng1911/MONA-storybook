import Image from 'next/image';
import Link from 'next/link';
import styles from './story-gallery.module.scss';

type StoryItem = {
    label: string;
    storyId: string;   // <title-kebab>--<export-kebab>
    imgSrc: string;    // ảnh trong /public
    alt: string;
};

const STORYBOOK_BASE =
    process.env.NEXT_PUBLIC_STORYBOOK_URL ?? 'http://localhost:6006';

// TODO: thay danh sách này bằng stories của bạn
const items: StoryItem[] = [
    {
        label: 'Button / Primary',
        storyId: 'components-button--primary',
        imgSrc: '/story-gallery/button.png',
        alt: 'Button preview',
    },
    {
        label: 'Card / Default',
        storyId: 'components-card--default',
        imgSrc: '/story-gallery/card.png',
        alt: 'Card preview',
    },
    {
        label: 'Modal / Basic',
        storyId: 'components-modal--basic',
        imgSrc: '/story-gallery/modal.png',
        alt: 'Modal preview',
    },
];

export default function StoriesPage() {
    return (
        <main className={styles.container}>
            <header className={styles.header}>
                <h1>Stories Gallery</h1>
                <p>Nhấp vào ảnh để mở story tương ứng trong Storybook (mở tab mới).</p>
            </header>

            <ul className={styles.grid}>
                {items.map((item) => {
                    const href = `${STORYBOOK_BASE}/?path=/story/${item.storyId}`;
                    return (
                        <li key={item.storyId} className={styles.card}>
                            <Link href={href} rel="noopener noreferrer" className={styles.link}>
                                <div className={styles.thumb}>
                                    <Image
                                        src={item.imgSrc}
                                        alt={item.alt}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className={styles.img}
                                        priority={false}
                                    />
                                </div>
                                <div className={styles.meta}>
                                    <span className={styles.label}>{item.label}</span>
                                    <span className={styles.open}>Open ↗</span>
                                </div>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </main>
    );
}
