import './MenuCategory.css';

const MenuCategory = ({ title, content, price }) => {
  return(
    <div className="menu-category">
      <span className="menu-category-title">{title}</span>
      <p className="menu-category-content">{content}</p>
      <span className="menu-category-price">{price}</span>
    </div>
  );
}

export default MenuCategory;