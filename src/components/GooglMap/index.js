import * as React from "react";
const GoogleMapFrame = ({ mapUrl, className }) => {
  console.log(mapUrl);
  const iframe = `<iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7957.124816626945!2d15.315343906042624!3d-4.3048058503884565!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2scd!4v1680620727369!5m2!1sfr!2scd" 
                      width="100%" 
                      height="450" 
                      style="border:0;" 
                      allowfullscreen="" 
                      loading="lazy" 
                      referrerpolicy="no-referrer-when-downgrade">
                  </iframe>`;
  return (
    <div
      dangerouslySetInnerHTML={{ __html: mapUrl ? iframe : "" }}
      className={className}
    />
  );
};

export default GoogleMapFrame;
