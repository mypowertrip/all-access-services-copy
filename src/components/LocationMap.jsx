export default function LocationMap({ location }) {
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(location.address)}&output=embed`;

  return (
    <iframe
      width="100%"
      height="100%"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen=""
      referrerPolicy="no-referrer-when-downgrade"
      src={mapUrl}
    />
  );
}