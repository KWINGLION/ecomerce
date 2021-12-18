import React from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

const User = () => {
  const { isAuthenticate } = React.useContext(UserContext);
  const navigate = useNavigate();
  console.log("Pagina user");

  React.useEffect(() => {
    if (isAuthenticate === false) {
      navigate("/login");
    } else {
    
    }
  }, [isAuthenticate, navigate]);

  if (isAuthenticate)
    return (
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse possimus
        nobis odio eos eum numquam exercitationem voluptate. Debitis quidem
        nobis dolore dicta explicabo. Debitis illum ut perspiciatis! Itaque,
        vitae maxime!
      </div>
    );
  return null;
};

export default User;
