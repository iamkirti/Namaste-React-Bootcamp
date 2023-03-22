import CardComponent from "./CardComponent";
import NoResultsComponent from "./NoResultsComponent";
import { Link } from "react-router-dom";
const CardContainer = ({ filteredEmp, stateName }) =>
  //console.log("filteredEmp", filteredEmp);
  !filteredEmp.length ? (
    <NoResultsComponent />
  ) : (
    filteredEmp.map((empDetail) => (
      <Link key={empDetail.id} to={`/avenger/${empDetail.login}`}>
        <CardComponent
          details={empDetail}
          key={empDetail.id}
          state={stateName}
        />
        ;
      </Link>
    ))
  );

export default CardContainer;
