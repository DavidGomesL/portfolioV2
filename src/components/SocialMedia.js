import React from 'react';
import { Icon } from '@iconify/react';

import '../styles/components/socialMedia.scss';

export default function SocialMedia() {
  return (
    <section className="social-media">
      <a href="https://www.linkedin.com/in/david-gomes-lima" target="_blank" rel="noopener noreferrer">
        <Icon icon="akar-icons:linkedin-fill" />
      </a>
      <a href="https://github.com/DavidGomesL" target="_blank" rel="noopener noreferrer">
        <Icon icon="bi:github" />
      </a>
      <a href="https://www.instagram.com/davidd_luan/" target="_blank" rel="noopener noreferrer">
        <Icon icon="bi:instagram" />
      </a>

      <a href="mailto:davidgomes1194@gmail.com" target="_blank" rel="noopener noreferrer" className="mail-icon">
        <Icon icon="ant-design:mail-outlined" />
      </a>
    </section>
  )
}
