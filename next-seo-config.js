const title =
    'Oakdale High Esports';
const description = 'Oakdale High Schools Esports Team Website';

const SEO = {
    title,
    description,
    canonical: 'https://oakdale-esports.vercel.app/',
    openGraph: {
        type: 'website',
        locale: 'en_IE',
        url: 'https://oakdale-esports.vercel.app/',
        title,
        description,
        images: [
            {
                url: 'https://oakdale-esports.vercel.app/SEO.png',
                alt: title,
                width: 1280,
                height: 720
            }
        ]
    }
};

export default SEO;