import React from "react";

const Team: React.FC = () => {
  return (
    <div>
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          font-family: Arial, Helvetica, sans-serif;
        }

        .row {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          padding: 20px;
        }

        .column {
          flex: 0 0 300px;
          margin: 20px;
        }

        .card {
          box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
          transition: 0.3s;
          border-radius: 5px;
        }

        .card:hover {
          box-shadow: 0 8px 16px 0 rgba(0,0,0,0.3);
        }

        .card img {
          border-radius: 5px 5px 0 0;
          width: 100%;
          height: 250px;
          object-fit: cover;
        }

        .container {
          padding: 16px;
          text-align: center;
        }

        .title {
          color: grey;
          font-size: 18px;
        }

        .icons a {
          text-decoration: none;
          font-size: 22px;
          color: black;
          margin: 0 8px;
          transition: color 0.3s;
        }

        .icons a:hover {
          color: #0077b5;
        }
      `}</style>

      <div className="row">
        <div className="column">
          <div className="card">
            <img
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
              alt="Kailey Nance"
            />
            <div className="container">
              <h2>Kailey Nance</h2>
              <p className="title">CEO & Founder</p>
              <div className="icons">
                <a href="#">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img
              src="https://images.pexels.com/photos/598917/pexels-photo-598917.jpeg"
              alt="Vincent Kingston"
            />
            <div className="container">
              <h2>Vincent Kingston</h2>
              <p className="title">Art Director</p>
              <div className="icons">
                <a href="#">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
