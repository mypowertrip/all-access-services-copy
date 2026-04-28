export default function LocationMap({ location }) {
  const mapEmbeds = {
    'San Diego': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3357.5443842449366!2d-117.16106292345!3d32.71574777246589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d954c8e8f5c8d1%3A0x1d8f8f8f8f8f8f8f!2sSan%20Diego%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890',
    'Orange County': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.1944471633!2d-117.86768922345!3d33.74854877246589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd7d12b3b3b3b%3A0x1d8f8f8f8f8f8f8f!2sOrange%20County%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890',
    'Inland Empire': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3357.8044391949!2d-117.11860222345!3d34.05222277246589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcfe7a7a7a7a7b%3A0x1d8f8f8f8f8f8f8f!2sInland%20Empire%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890',
    'Los Angeles': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3358.2844311449!2d-118.24368722345!3d34.05222277246589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75dbed51371%3A0x1d8f8f8f8f8f8f8f!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890',
  };

  return (
    <iframe
      width="100%"
      height="100%"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen=""
      src={mapEmbeds[location.name]}
    />
  );
}