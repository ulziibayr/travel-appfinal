import "./page.css";
import Image from "next/image";
import { Icon } from "react-icons-kit";
import { user } from "react-icons-kit/feather/user";
import { lock } from "react-icons-kit/feather/lock";
import googleIcon from "../../images/googleIcon.png";
import facebookIcon from "../../images/facebookIcon.png";
import twitterIcon from "../../images/twitterIcon.png";
import Link from "next/link";

function Login() {
  return (
    <section className="LoginSection">
      <div className="form-box">
        <div>
          {/* <form > */}
          <p className="LoginHeaderName">Нэвтрэх</p>
          <div className="inputbox">
            <input type="text" name="username" required />
            <Icon icon={user} />
            <label>Нэвтрэх нэр</label>
          </div>

          <div className="inputbox">
            <input type="password" name="password" required />
            <Icon icon={lock} />
            <label>Нууц үг</label>
          </div>

          <div className="forget">
            <label>
              <input type="checkbox" />
              Намайг сана
            </label>
            {/* <Link to="/">  */}
            <p>
              <a href="#">Нууц үг мартсан</a>
            </p>
            {/* </Link> */}
          </div>

          <div className="login">
            <Link href="/">
              <button type="submit" className="SignIn">
                Нэвтрэх
              </button>
            </Link>
          </div>

          <p className="orText">Эсвэл</p>
          <div className="social_row">
            <a
              className="social_link"
              target="_blank"
              rel="noreferrer"
              href="https://bit.ly/3SQ2Mqt"
            >
              <Image src={googleIcon} className="googleIcon" alt="" />
            </a>
            <a
              className="social_link"
              target="_blank"
              rel="noreferrer"
              href="https://bit.ly/3fqmY3F"
            >
              <Image src={facebookIcon} className="facebookIcon" alt="" />
            </a>
            <a
              className="social_link"
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/ultimateerp"
            >
              <Image src={twitterIcon} className="twitterIcon" alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
