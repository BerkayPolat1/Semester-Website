import HomeDown from "./HomeDown";
import {AiOutlineDown} from "react-icons/ai";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section className="home_container">
        <div className="home_header_section">
          <h1 className="home_header"> Welcome to the World of Web Development </h1>
        </div>
        <div className="scroll_container">
          <h3 className="scroll_text"> SCROLL DOWN </h3> 
            <AiOutlineDown className="scroll_button"/>
        </div>
      </section>
      <HomeDown />
    </>
  );
};
export default Home;
