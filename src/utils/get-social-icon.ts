import { Link } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaGithub } from 'react-icons/fa';

export const getSocialIcon = (url: string) => {
    switch (true) {
        case url.includes('facebook.com'):
            return FaFacebook
        case url.includes('twitter.com'):
            return FaTwitter
        case url.includes('instagram.com'):
            return FaInstagram
        case url.includes('youtube.com'):
            return FaYoutube
        case url.includes('linkedin.com'):
            return FaLinkedin
        case url.includes('github.com'):
            return FaGithub
        default:
            return Link;
    }
}