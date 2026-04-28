export default function LocationMap({ location }) {
  const mapEmbeds = {
    'San Diego': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3357.544!2d-117.0789!3d32.8376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d59ea82c5d8001%3A0x1d8f8f8f8f8f8f8f!2s8711%20N%20Magnolia%20Ave%2C%20Santee%2C%20CA%2092071!5e0!3m2!1sen!2sus!4v1713000000',
    'Orange County': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3358.194!2d-117.7998!3d33.7372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd3b7d7d7d7d7%3A0x1d8f8f8f8f8f8f8f!2s621%20N%20Main%20St%2C%20Orange%2C%20CA%2092868!5e0!3m2!1sen!2sus!4v1713000000',
    'Inland Empire': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3357.804!2d-117.4395!3d34.0272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcf88888888889%3A0x1d8f8f8f8f8f8f8f!2s3631%20W%20Center%20Dr%2C%20Riverside%2C%20CA%2092501!5e0!3m2!1sen!2sus!4v1713000000',
    'Los Angeles': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3358.284!2d-118.4514!3d34.2199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c29a4c4c4c4c4d%3A0x1d8f8f8f8f8f8f8f!2s8563%20San%20Fernando%20Rd%2C%20Sun%20Valley%2C%20CA%2091352!5e0!3m2!1sen!2sus!4v1713000000',
  };

  return (
    <iframe
      width="100%"
      height="100%"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen=""
      referrerPolicy="no-referrer-when-downgrade"
      src={mapEmbeds[location.name]}
    />
  );
}