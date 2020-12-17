import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <section>
      <h1>My Calorie Pal V2</h1>
      <div>
        <button>
          <Link to="/signup">Signup</Link>
        </button>
        <button>
          <Link to="/login">Login</Link>
        </button>
      </div>
    </section>
  );
};

export default Home;
