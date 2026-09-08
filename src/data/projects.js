import { images } from './images';

export const projectCategories = ['All', 'STS Prepaid', 'NB-IoT Metering'];

export const projects = [
  {
    id: 'nakuru-apartments',
    name: 'Nakuru — Residential Apartments',
    category: 'STS Prepaid',
    desc: 'STS prepaid water metering installed across a multi-unit residential development, giving every household its own prepaid account and putting an end to shared bills and disputes over usage.',
    tech: ['STS Prepaid', 'Residential', 'Per-unit billing'],
    image: images.installNakuru,
    link: '',
  },
  {
    id: 'molo-apartments',
    name: 'Molo — Residential Apartments',
    category: 'STS Prepaid',
    desc: 'A full STS prepaid rollout across a residential apartment block: tenants top up by M-Pesa before they draw water, and the property has run without a single arrears case since commissioning.',
    tech: ['STS Prepaid', 'Residential', 'Pay-before-use'],
    image: images.installStsBalcony,
    link: '',
  },
  {
    id: 'nairobi-estate',
    name: 'Nairobi — Gated Estate',
    category: 'NB-IoT Metering',
    desc: 'NB-IoT smart metering deployed across a gated residential estate, giving management individual-unit accountability and live consumption data without a single manual meter reading.',
    tech: ['NB-IoT', 'Gated Community', 'Individual accountability'],
    image: images.meterNbiot,
    link: '',
  },
  {
    id: 'ruiru-pharma',
    name: 'Ruiru — Pharmaceutical Industry',
    category: 'NB-IoT Metering',
    desc: 'High-flow NB-IoT ultrasonic metering for a pharmaceutical manufacturing site, delivering accurate bulk measurement and automatic leak alerting on a supply line that cannot afford downtime.',
    tech: ['NB-IoT', 'Industrial', 'Leak alerting'],
    image: images.installValveControl,
    link: '',
  },
];
