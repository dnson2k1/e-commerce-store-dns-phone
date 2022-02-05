import React from "react";
import Helmet from "../components/Helmet";
import contact from "../api/contact";
import ContactInfo from "../components/ContactInfo";
import MapBox from "../components/MapBox";

const Contact = () => {
  return (
    <Helmet title="Liên hệ">
      <div className="contact">
        <div className="contact__name">Hãy kết nối với chúng tôi</div>
        <div className="contact__img">
          <img
            src="https://dien-thoai-dns.000webhostapp.com/FE/img/lienhe-mid1.jpg"
            alt=""
          />
          <img
            src="https://dien-thoai-dns.000webhostapp.com/FE/img/lienhe-mid2.jpg"
            alt=""
          />
        </div>
        <div className="contact__info">
          <div className="contact__left">
            {contact.map((item) => (
              <ContactInfo
                key={item.id}
                icon={item.icon}
                name={item.name}
                title={item.title}
              />
            ))}
          </div>
          <div className="contact__right"></div>
        </div>
        <div className="contact__map">
          <MapBox />
        </div>
        <div className="contact__footer">
          <div className="contact__footer__name">Electronics :</div>
          <div className="contact__footer__title">
            If you're considering a new laptop, looking for a powerful new car
            stereo or shopping for a new HDTV, we make it easy to find exactly
            what you need at a price you can afford. We offer Every Day Low
            Prices on TVs, laptops, cell phones, tablets and iPads, video games,
            desktop computers, cameras and camcorders, audio, video and more.
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default Contact;
