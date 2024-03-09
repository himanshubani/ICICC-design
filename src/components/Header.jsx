export default function Header() {
  return (
    <div>
      <div className="container flex w-full">
        <div className="logo">
          <img
            src="https://icicc-conf.com/static/media/icicc.8fdf59f44e037ad83293.jpg"
            alt=""
          />
        </div>
        <div className="header-text">
          <p className="font-thin">
            7th INTERNATIONAL CONFERENCE ON INNOVATIVE COMPUTING AND
            COMMUNICATION (ICICC 2024)
          </p>
          <br/>
          <p className="font-bold">
            ORGANISED BY : SHAHEED SUKHDEV COLLEGE OF BUSINESS STUDIES,
            UNIVERSITY OF DELHI, NEW DELHI IN ASSOCIATION WITH NATIONAL
            INSTITUTE OF TECHNOLOGY,PATNA & UNIVERSITY OF VALLADOLID SPAIN
          </p>
        </div>
        <div className="logos flex flex-col">
            <div className="set1 flex ">
                <img className="" src="https://icicc-conf.com/static/media/logo.844ec7fc649a50eba5a3.png" alt="" />
                <img src="https://icicc-conf.com/static/media/logo2.408dbd4beaf34f2a2a21.jpeg" alt="" />
            </div>
            <div className="set2 flex">
                <img src="https://icicc-conf.com/static/media/logospain.8d22e3a92a5c92f69b26.png" alt="" />
                <img src="https://icicc-conf.com/static/media/logospain.8d22e3a92a5c92f69b26.png" alt="" />
            </div>
        </div>
      </div>
    </div>
  );
}