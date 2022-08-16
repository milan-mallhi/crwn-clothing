

import SignUpform from "../../components/sign-up-form/sign-up-form.component";
import SignInform from "../../components/sign-in-form/sign-in-form.component";


import './authentication.scss'

const Authentication = () => {
  


  return (
    <div className="authentication-container">
      <SignInform/>
      <SignUpform/>
    </div> 
  );
};

export default Authentication;
