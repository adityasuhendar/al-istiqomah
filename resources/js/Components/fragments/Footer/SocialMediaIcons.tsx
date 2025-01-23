import { FaFacebook } from 'react-icons/fa';

const SocialMediaIcons = () => {
    return (
        <div className="mt-4 flex gap-12">
            <a
                href="https://web.facebook.com/p/Mts-Al-Istiqomah-Girimulyo-100083816620698/?_rdc=1&_rdr"
                target="_blank"
                className="hover:text-color-accent"
                rel="noreferrer"
            >
                <FaFacebook className="text-2xl md:text-4xl" />
            </a>
            {/* <a
                href="https://www.instagram.com/spantija.official"
                target="_blank"
                className="hover:text-color-accent"
                rel="noreferrer"
            >
                <FaInstagram className="text-2xl md:text-4xl" />
            </a>
            <a
                href="https://www.youtube.com/@smpn3jatiagung"
                target="_blank"
                className="hover:text-color-accent"
                rel="noreferrer"
            >
                <FaYoutube className="text-2xl md:text-4xl" />
            </a> */}
        </div>
    );
};

export default SocialMediaIcons;
