import Statistics from "./statistics";
import { useParams } from "react-router-dom";
import GroupList from "./groupList";
import Test from "./test";

const InformationList = () => {
  const params = useParams();
  const { bookkeeping } = params;

  return (
    <div className="information-container">
      <GroupList />
      {bookkeeping ? <Test /> : <Statistics />}
    </div>
  );
};

export default InformationList;
