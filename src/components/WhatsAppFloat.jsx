import { IconBrandWhatsapp } from '@tabler/icons-react';
import './WhatsAppFloat.css';

const WhatsAppFloat = () => {
  return (
    <a
      className="whatsapp-float"
      href="https://wa.me/254708001000"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Caledonia Heights on WhatsApp"
      title="Chat with us"
    >
      <IconBrandWhatsapp size={26} />
      <span className="wa-tooltip">Chat with us</span>
    </a>
  );
};

export default WhatsAppFloat;

