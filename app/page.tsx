import { getFrameMetadata } from '@coinbase/onchainkit/core';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Stake Against!',
    },
    {
      action: 'link',
      label: 'View Ante',
      target: 'https://app.ante.xyz',
    },
    {
      label: 'Redirect to pictures',
      action: 'post_redirect',
    },
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/ante-gearwave-banner2x.png`,
    aspectRatio: '1:1',
  },
  input: {
    text: 'Tell me a boat story',
  },
  postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata: Metadata = {
  metadataBase: new URL(NEXT_PUBLIC_URL),
  title: 'app.ante.xyz',
  description: 'Ante',
  openGraph: {
    title: 'app.ante.xyz',
    description: 'Ante',
    images: [`${NEXT_PUBLIC_URL}/ante-gearwave-banner2x.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>app.ante.xyz</h1>
    </>
  );
}
