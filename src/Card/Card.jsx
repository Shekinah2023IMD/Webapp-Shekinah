import './Card.css'
export function Card({ logo, title, link }) {
    return (
      <div className="myCard">
        {title},{""}
        <a href={link} className="link">
          {""}
          Link to {""}
        </a>
        {logo}
      </div>
    );
  }
  