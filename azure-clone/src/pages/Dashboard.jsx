import Topbar from "../components/Topbar.jsx";
import { useNavigate } from "react-router-dom";
import {
  Home24Regular,
  Edit24Regular,
  Settings24Regular,
  Toolbox24Regular,
  HatGraduation24Regular
} from "@fluentui/react-icons";



function Dashboard() {
  const navigate = useNavigate();
  return (
    <>
      <Topbar />

      <div className="layout">
<div className="sidebar">
  <Home24Regular onClick={() => navigate("/")} />
  <Edit24Regular />
  <Settings24Regular />
  <Toolbox24Regular />
  <HatGraduation24Regular />
</div>

        <div className="main">
          <div className="content">
            <h1 className="dashboard-title">Birthday Dashboard 😎</h1>

            <div className="tiles">
              <div className="tile" onClick={() => navigate("/ingest")}>
                <img src="/images/icons/ingest.png" />
                <div>
                  <div className="tile-title">Ingest</div>
                  <div className="tile-desc">Import memories</div>
                </div>
              </div>

              <div className="tile" onClick={() => navigate("/pipeline")}>
                <img src="/images/icons/orch.png" />
                <div>
                  <div className="tile-title">Orchestrate</div>
                  <div className="tile-desc">Control chaos</div>
                </div>
              </div>

              <div className="tile" onClick={() => navigate("/transform")}>
                <img src="/images/icons/transform.png" />
                <div>
                  <div className="tile-title">Transform</div>
                  <div className="tile-desc">Make it legendary</div>
                </div>
              </div>

              <div className="tile" onClick={() => navigate("/chocolate")}>
                <img src="/images/icons/ssis.png" />
                <div>
                  <div className="tile-title">Hot Chocolate</div>
                  <div className="tile-desc">Critical dependency</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;