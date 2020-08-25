import React from "react";
import { Button } from "reactstrap";
import API from "../utils/API";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth0 } from "@auth0/auth0-react";

const DisplayWord = (props) => {
  console.log("word");
  console.log(props.word);
  const { user } = useAuth0();

  const postToDB = () => {
    var dbUser = {
      email: user.email,
      word: props.word.meta.stems[0],
    };
    API.saveWord(dbUser)
      .then(() => toast.success(`You added ${props.word.meta.stems[0]} to your Profile`))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2>{props.word.meta.stems[0]}</h2><br></br>
      <Button
        className="btn-info"
        type="primary"
        onClick={() => {
          postToDB(props.word.meta.stems[0]);
        }}
      >
        Save Word
      </Button>
      <ToastContainer />
    </div>
  );
};

export default DisplayWord;
