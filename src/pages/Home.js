import React from "react";
import Carousel from "../components/Carousel";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <div
        className="introduction flex-with-center"
        style={{ backgroundImage: `url('./introbg.svg')` }}
      >
        <div>
          <h1 data-aos="fade-up">HA NAM</h1>
          <div className="intro-content d-flex justify-content-between">
            <p>
              MERN Stack <br /> Developer, Instructor
            </p>
            <button className="primary-button font-bold">
              <a href="#carousel">Get Started</a>
            </button>
          </div>
        </div>
      </div>

      <Carousel />

      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#001220"
            fill-opacity="1"
            d="M0,192L21.8,181.3C43.6,171,87,149,131,138.7C174.5,128,218,128,262,112C305.5,96,349,64,393,53.3C436.4,43,480,53,524,64C567.3,75,611,85,655,122.7C698.2,160,742,224,785,229.3C829.1,235,873,181,916,154.7C960,128,1004,128,1047,154.7C1090.9,181,1135,235,1178,234.7C1221.8,235,1265,181,1309,165.3C1352.7,149,1396,171,1418,181.3L1440,192L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="container">
        <div className="row justify-content-start">
          <div className="col-md-4">
            <div className="n-box2 p-5 font-bold" data-aos="fade-right">
              <h1>Yes you are right...</h1>
              <br />
              <p>I am a Javascript Buff...</p>
            </div>
          </div>
        </div>

        <div className="row pt-5 justify-content-center">
          <div className="col-md-4">
            <div>
              <img
                src="./jsbuff.svg"
                data-aos="fade-up"
                alt=""
                height={200}
                className="w-100"
              />
            </div>
          </div>
        </div>

        <div className="row pt-5 justify-content-end">
          <div className="col-md-4">
            <div className="n-box2 p-5 font-bold" data-aos="fade-left">
              <p>
                JavaScript is one of the most top-ranked programming languages
                because of its ubiquitous use on all platforms and mass
                adoption. Main Use Cases: Web Development.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="devstack container my-5 n-box2 py-5 ">
        <div className="text-center">
          <h3 className="font-bold text-center">My Development Stack</h3>
          <hr />
          <img
            src="./developer.svg"
            alt="developer"
            height="200"
            className="text-center"
          />
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="font-bold text-start">
              <h3 className="font-bold">Front End</h3>
              <hr />
              <p>HTML/CSS</p>
              <p>Javascript</p>
              <p>ReactDOM</p>

              <p>Redux</p>
              <p>Angular</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="font-bold text-center">
              <h3 className="font-bold">UI/Styling</h3>
              <hr />
              <p>Tailwind CSS</p>
              <p>Material UI</p>
              <p>Bootstrap</p>

              <p>AntDesign</p>
              <p>Semantic UI</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="font-bold text-end">
              <h3 className="font-bold">Backend/DB</h3>
              <hr />
              <p>Node JS</p>
              <p>Express</p>
              <p>PHP</p>

              <p>SQL</p>
              <p>Mongo DB</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-bold text-center">Who is Ha Nam</h3>
        <div
          className="who-is-peter flex-with-center"
          style={{ backgroundImage: `url('/whoispeter.svg` }}
        >
          <div>
            <h3>Hi , Hello , Namste</h3>
            <hr />
            <p>
              <pre>
                {JSON.stringify(
                  {
                    name: "Huynh Nguyen Ha Nam",
                    from: "Vietnam",
                    gender: "Male",
                    job: "Frontend-DEVELOPER",
                  },
                  null,
                  2
                )}
              </pre>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
