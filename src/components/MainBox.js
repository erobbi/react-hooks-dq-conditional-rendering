import React, {useState} from "react";
import MenuBar from "./MenuBar";
import { Profile, Photos, Cocktails, Pokemon } from "./pages";

function MainBox() {

  const [selection, setSelection] = useState('profile')

  const potatoes = (spongebob) => setSelection(spongebob)
  

  let detailsToDisplay = {
    profile: <Profile />,
    photos: <Photos />,
    cocktails: <Cocktails />,
    pokemon: <Pokemon />
  }

  return (
    <div>
      <MenuBar tomato={potatoes} />
      {detailsToDisplay[selection]}
    </div>

  );
}

export default MainBox;
