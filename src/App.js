import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Link,
  Outlet,
  useParams,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <nav>
        <button>
          <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 1rem",
                color: isActive ? "red" : "steelblue",
                textDecoration: "none",
              };
            }}
            to="/"
          >
            Home
          </NavLink>
        </button>
        <button>
          <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 1rem",
                color: isActive ? "red" : "steelblue",
                textDecoration: "none",
              };
            }}
            to="/Launch"
          >
            {" "}
            Launch
          </NavLink>
        </button>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Launch" element={<Launch />}>
          <Route index element={<LaunchIndex />} />
          <Route path=":slug" element={<LaunchShoe />} />
        </Route>
        <Route path="*" element={<h2>Not Found</h2>} />
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h1>Welcome Home!</h1>
      <p>
        A simple shoe app that is created using react router. Click the Launch
        in the navbar to see the shoes.
      </p>
    </div>
  );
}

function Launch() {
  return (
    <div>
      <h1>Launch</h1>
      <Outlet />
    </div>
  );
}

function LaunchIndex() {
  return (
    <ul>
      {Object.entries(shoes).map(([slug, { name, img }]) => (
        <li key={slug}>
          <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 1rem",
                color: isActive ? "red" : "steelblue",
                textDecoration: "none",
              };
            }}
            to={`/Launch/${slug}`}
          >
            <h2>{name}</h2>
            <img src={img} alt={name} />
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

function LaunchShoe() {
  const { slug } = useParams();
  const shoe = shoes[slug];

  if (!shoe) {
    return <h2>Not Found</h2>;
  }

  const { name, img } = shoe;

  return (
    <div>
      <p>{name}</p>
      <img src={img} alt={name} />
      <p>
        <Link to="/Launch" element={<Launch />}>
          Back to Launch
        </Link>
      </p>
    </div>
  );
}

const shoes = {
  "air-jordan-3-valor-blue": {
    name: "VALOUR BLUE",
    img: "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  "jordan-mars-270-london": {
    name: "JORDAN MARS 270 LONDON",
    img: "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  "air-jordan-1-zoom-racer-blue": {
    name: "RACER BLUE",
    img: "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
};
