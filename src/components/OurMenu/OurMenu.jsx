import Button from '@material-ui/core/Button';
import { startersCategory, mainCoursesCategory, sidesCategory, dessertsCategory } from "../../assets/constant.js";
import MenuCategory from "../../common/MenuCategory";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './OurMenu.css';

const OurMenu = () => {
  AOS.init();
  return (
    <section className="vertical-scrolling" id="menuSection">
      <div className="OurMenu-section-container">
        <div className="OurMenu-section-header">
          <span className="OurMenu-title" style={{ background: "linear-gradient( 180deg, rgba(0,0,0,0) calc(50% - 5px), rgba(255, 218, 201,1) calc(50%), rgba(0,0,0,0) calc(50% + 5px) )" }}>OUR MENU</span>
          <Button variant="contained" className="know-more-btn">KNOW MORE</Button>
        </div>

        <div className="OurMenu-section-body">

          <div className="OurMenu-section-category" style={{ border: '0' }} data-aos="fade-up" data-aos-anchor-placement="top-center">
            <div className="OurMenu-category-title">
              <span className="category-title OurMenu-title">STARTERS</span>
            </div>
            <div className="OurMenu-category-body">
              {
                startersCategory.map(cat => <MenuCategory
                  title={cat.title}
                  content={cat.content}
                  price={cat.price}
                />
                )
              }
            </div>
          </div>

          <div className="OurMenu-section-category" style={{ paddingTop: '300px' }} data-aos="fade-down" data-aos-anchor-placement="center-bottom">
            <div className="OurMenu-category-title">
              <span className="category-title OurMenu-title">MAIN <br /> COURSES</span>
            </div>
            <div className="OurMenu-category-body">
              {
                mainCoursesCategory.map(cat => <MenuCategory
                  title={cat.title}
                  content={cat.content}
                  price={cat.price}
                />
                )
              }
            </div>
          </div>

          <div className="OurMenu-section-category" style={{ paddingTop: '250px' }} data-aos="fade-up" data-aos-anchor-placement="top-center" >
            <div className="OurMenu-category-title">
              <span className="category-title OurMenu-title">SIDES</span>
            </div>
            <div className="OurMenu-category-body">
              {
                sidesCategory.map(cat => <MenuCategory
                  title={cat.title}
                  content={cat.content}
                  price={cat.price}
                />
                )
              }
            </div>
          </div>

          <div className="OurMenu-section-category" style={{ paddingTop: '170px' }} data-aos="fade-down" data-aos-anchor-placement="center-bottom">
            <div className="OurMenu-category-title">
              <span className="category-title OurMenu-title">DESSERTS</span>
            </div>
            <div className="OurMenu-category-body">
              {
                dessertsCategory.map(cat => <MenuCategory
                  title={cat.title}
                  content={cat.content}
                  price={cat.price}
                />
                )
              }
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
export default OurMenu;