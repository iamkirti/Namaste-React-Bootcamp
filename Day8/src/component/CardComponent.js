const CardComponent = ({ details }) => {
  console.log("details", details);
  const { avatar_url, name, location, company, following } = details;
  return (
    <div id="card" className="card">
      <div className="card-dp">
        <img src={avatar_url} alt="Employee Image"></img>
      </div>

      <div className="card-content">
        <h3>{name}</h3>
        <div className="card-info">
          <h4>{location}</h4>
          <p className="card-company">{company}</p>
          <p>{following}</p>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
