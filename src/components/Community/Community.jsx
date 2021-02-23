import Button from '@material-ui/core/Button';

import CommunityTextCard from '../../common/CommunityTextCard';
import CommunityImgCard from "../../common/CommunityImgCard";

import plusdetailbg from "../../assets/detail02.png";
import dotteddetailbg from "../../assets/detail03.png";
import burger from "../../assets/burger.jpg";
import waffel from "../../assets/waffel.jpg";
import sandwich from "../../assets/sandwich.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

import './Community.css';

const Community = () => {
  AOS.init({
    delay: 0, 
    // duration: 4000,
  });
  return (
    <section className="vertical-scrolling" id="communitySection">
      <div className="community-section">
        <div className="community-container">
          <div className="community-title-container">
            <span className="community-title">MEET OUR</span>
            <span className="community-title" style={{ background: "linear-gradient( 180deg, rgba(0,0,0,0) calc(50% - 5px), rgba(255, 218, 201,1) calc(50%), rgba(0,0,0,0) calc(50% + 5px) )" }}>COMMUNITY</span>
            <Button variant="contained" className="know-more-btn">KNOW MORE</Button>
            <p className="community-title-subtext">Lorem ipsum dolor sit<br /> amet, consectetur adipiscing<br /> elit, sed do eiusmod<br /> tempor</p>
          </div>

          <div className="community-body-container">

            <div className="community-card-container" 
            data-aos="fade-up"
            >
              <div className="card-text-holder">
              </div>
              <div className="card-holder card-back">
                <CommunityImgCard src={burger} />
                <img className="plus-bg" src={plusdetailbg} alt="Plus background" />
                <CommunityTextCard
                  title="@buzzfeedfood"
                  text="It's taco Tuesday! These tacos from @jesseszewczyk have no added sugars and are SO good 🌮.Find the recipe from the link in our bio! 📸: @taylormillerphoto"
                  comment="60"
                  likes="14.7K"
                />
              </div>
            </div>

            <div className="community-card-container" 
            data-aos="fade-up"
            >
              <div className="card-holder">
                <img className="dot-bg" src={dotteddetailbg} alt="Dot background" />
                <CommunityTextCard
                  title="@love_food"
                  text="Waffle sticks in Copenhagen! 🎏 😍 Milk chocolate with sprinkles, dark chocolate with coconut and milk chocolate with peanuts! [ 📸 : @foodwithmichel] #lovefood"
                  comment="789"
                  likes="99.7K"
                />
                <CommunityImgCard src={waffel} />
              </div>
              <div className="card-text-holder">
                <span className="community-title-sidetext">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
               Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</span>
                {/* <div className="blank-div"></div> */}
              </div>
            </div>

            <div className="community-card-container" 
            data-aos="fade-up"
            >
              <div className="card-text-holder">
                {/* <div className="blank-div"></div> */}
                <span className="community-title-sidetext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Duis aute irure.</span>
              </div>
              <div className="card-holder">
                <CommunityTextCard
                  title="@buzzfeedfood"
                  text="Getting into long weekend mode like 🥪 #pancitpalabok (📸 @jeepneyny)"
                  comment="152"
                  likes="18.2K"
                />
                <CommunityImgCard src={sandwich} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Community;
