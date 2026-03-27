import "./Register.css";

function Register(){

  return(

    <div className="register-page">

      <h2>
        Looks like you're new to 99acres
      </h2>

      <p>Create a new account</p>

      <div className="register-box">

        <div className="role">

          <button className="active">
            An Owner
          </button>

          <button>
            A Broker
          </button>

        </div>

        <input
          type="text"
          placeholder="Your Full Name"
        />

        <input
          type="email"
          placeholder="Email Address"
        />

        <input
          type="text"
          placeholder="Phone Number"
        />

        <button className="register-btn">
          Register
        </button>

      </div>

    </div>

  )
}

export default Register