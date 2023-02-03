const CardComponent = ({ details }) => {
  const { img, name, address, organization, designation } = details;
  return (
    <div id="card" className="card">
      <div className="card-dp">
        <img src={img} alt="DisplayPic"></img>
      </div>

      <div className="card-content">
        <h3>{name}</h3>
        <div className="card-info">
          <h4>{address}</h4>
          <p className="card-company">{organization}</p>
          <p>{designation}</p>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
