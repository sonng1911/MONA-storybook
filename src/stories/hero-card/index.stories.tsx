import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import renderPug from './hero-card.compiled.js';
import './hero-card.scss';
import previewUrl from './product1.png?url';
import '../_common/fonts/SVN-Gilroy/stylesheet.css';

type Props = {
  imgSrc: string;
  imgAlt: string;
  title: string;
  desc: string;
  ctaHref: string;
  ctaLabel: string;
};

const meta: Meta<Props> = {
  title: 'Cards/Style 1',
  parameters: { layout: 'centered' },
  // tags: ['!dev'],

  argTypes: {
    imgSrc: { control: 'text' },
    title: { control: 'text' },
    desc: { control: 'text' },
    ctaHref: { control: 'text' },
    ctaLabel: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj;

export const Overview: Story = {
  // Default args
  args: {
    imgSrc: (previewUrl as any).blurDataURL,
    title: 'Thiết kế nhanh & nhất quán',
    desc: 'Mẫu thẻ hero tối giản để tái sử dụng.',
    ctaHref: '#!',
    ctaLabel: 'Bắt đầu ngay',
  },

  render: (args) => {
    const html = renderPug(args);

    return (
      <>
        <div
          style={{ width: '80vw', maxWidth: '1000px', margin: '0 auto' }}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </>
    );
  },
};
