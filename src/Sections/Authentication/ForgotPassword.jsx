import { NavLink } from "react-router-dom";
import AuthenticationStyleWrapper from "./Authentication.style";
import AuthFormWrapper from "./AuthFormWrapper";
import AuthRightSection from "./AuthRightSection";
import ScrollAnimate from "../../Components/ScrollAnimate";

const ForgotPassword = () => {
  return (
    <AuthenticationStyleWrapper>
      <AuthFormWrapper>
        <ScrollAnimate>
          <h2>Hi there!</h2>
          <h4 className="dm-sans">Reset link will be send to your mail 📨</h4>
        </ScrollAnimate>

        <form action="/" method="post">
          <ScrollAnimate>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                name="email"
                placeholder="e.g.  example@mail.com"
                required
              />
            </div>
          </ScrollAnimate>

          <ScrollAnimate>
            <button type="submit" className="form-primary-btn">
              Send me reset mail
            </button>
          </ScrollAnimate>

          <ScrollAnimate>
            <p className="mt-5">
              Remember your password ?&nbsp;
              <NavLink to="/sign-in">Log in now!</NavLink>
            </p>
          </ScrollAnimate>
        </form>
      </AuthFormWrapper>

      <AuthRightSection />
    </AuthenticationStyleWrapper>
  );
};

export default ForgotPassword;
