import React from "react";
import Slider from "react-slick";
import "./Contents.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Contents extends React.Component {
  render() {
    const settings = {
      slidesToShow: 2,
      slidesToScroll: 1,
    };
    return (
      <div className="Contents">
        <video
          className="collection-video"
          width="100%"
          height="100%"
          loop
          autoPlay
          muted
        >
          <source
            src="https://player.vimeo.com/external/412737001.hd.mp4?s=3f71c64ea91fd46ed927a06d2eb80e143873cd6a&profile_id=175"
            type="video/mp4"
          />
        </video>
        <div className="first-img">
          <div>Spring - Summer 20</div>
          <div className="spring-summer">
            <a href="#!">
              <img
                src="https://www.amiparis.com/BWStaticContent/14000/14000/9a8962a2-24ed-460f-831d-b3cd93143bfd_half-image-tablet2.jpg"
                alt=""
              />
            </a>
            <a href="#!">
              <img
                src="https://www.amiparis.com/BWStaticContent/14000/14000/9f6fdb5a-7417-41ee-84be-1e414819e2b1_half-image-desktop.jpg"
                alt=""
              />
            </a>
          </div>
        </div>
        <section>
          <div className="img">
            <img
              className="odd-img"
              src="https://www.amiparis.com/BWStaticContent/14000/36416111-2c6f-463a-890d-f3425bc55e8f_homepage-desktop-gay-pride.jpg"
              alt=""
            />
          </div>
          <div className="gray-link">
            <div className="text">
              <p>AMI x GLAAD</p>
              <p>The Rainbow Collection</p>
            </div>
            <a href="#!">Discover now</a>
          </div>
        </section>
        <section>
          <div className="black-link">
            <div className="text">
              <p>9 years of AMI shows</p>
              <p> by Loic Prigent</p>
            </div>
            <a href="#!">Watch now</a>
          </div>
          <div className="video">
            <video
              width="100%"
              height="100%"
              autoPlay
              // poster="https://www.amiparis.com/BWStaticContent/14000/68c560e9-08a8-49dc-9451-bec3460f449f_card-block-desktop.jpg"
              controls
            >
              <source
                src="https://www.amiparis.com/BWStaticContent/14000/c9005082-e162-457e-8f70-71da907a1c25_card-block-desktop.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </section>
        <section>
          <div className="img">
            <img
              className="odd-img"
              src="https://www.amiparis.com/BWStaticContent/14000/068ed2b2-47ae-431e-bc2d-abd5b082c486_desktop.jpg"
              alt=""
            />
          </div>
          <div className="gray-link slider-container">
            <div className="text slide-text">New Pre-Collection</div>
            <div className="slider-box">
              <Slider className="slider" {...settings}>
                <div className="slider-img">
                  <img
                    src="https://cdn-images.farfetch-contents.com/ami-ami-de-coeur-denim-jacket_14942478_27093441_500.jpg"
                    alt=""
                  />
                  <p>Ami De Coeur Denim Jacket</p>
                </div>
                <div className="slider-img">
                  <img
                    src="https://cdn-images.farfetch-contents.com/ami-chino-trousers_14942366_27093119_500.jpg"
                    alt=""
                  />
                  <p>Chino Trousers</p>
                </div>
                <div className="slider-img">
                  <img
                    src="https://cdn-images.farfetch-contents.com/ami-multicolor-striped-sweater_14942390_27093250_500.jpg"
                    alt=""
                  />
                  <p>Multicolor Striped Sweater</p>
                </div>
              </Slider>
            </div>
          </div>
        </section>
        <section>
          <div className="black-link">
            <div className="text">
              <p>AMI Saint-Honore</p>
              <p>14 rue d'Alger 75001 Paris</p>
            </div>
            <a href="#!">Discover our stores</a>
          </div>
          <div className="img">
            <img
              className="even-img"
              src="https://www.amiparis.com/BWStaticContent/14000/14000/76cc54ba-3bcc-49cf-82f0-48dade2a0e18_alger-desktop.jpg"
              alt=""
            />
          </div>
        </section>
        <section>
          <div className="img">
            <img
              className="odd-img"
              src="https://www.amiparis.com/BWStaticContent/14000/14000/76495c33-ece4-4c78-8793-f1cbd7340be1_card-block-desktop.jpg"
              alt=""
            />
          </div>
          <div className="gray-link">
            <div className="text">
              <p>The House</p>
            </div>
            <a href="#!">Discover our history</a>
          </div>
        </section>
        <section>
          <div className="gray-link">
            <div className="text">
              <p>Nick Jonas wearing our</p>
              <p>Spring Summer collection</p>
            </div>
          </div>
          <div className="img">
            <img
              className="even-img"
              src="https://www.amiparis.com/BWStaticContent/14000/14000/7b0af43c-36e1-4a19-a879-8938ed10a59c_press-homepage-desktop.jpg"
              alt=""
            />
          </div>
        </section>
        <button>
          <div className="gray-text">Want to hear from us?</div>
          <div className="signupto">Sign up to our Newsletter</div>
          <div className="register">Register</div>
        </button>
      </div>
    );
  }
}

export default Contents;
