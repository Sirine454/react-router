import { useState } from "react";
import { Route, Switch } from "react-router";
import App from "./App";
import Description from "./component/Description";
import { v4 as uuidv4 } from "uuid";

//Using react Router to navigate the App

const RoutComponent = () => {
  const data = [
    {
      id: uuidv4(),
      title: "Demon Slayer the Movie: Mugen Train",
      src:
        "https://i.egycdn.com/pic/WmFwZndlY21ZVExjdk52bWpFY3htenhheGxtYm1t.jpg",
      rating: 4,
      trailer: "https://www.youtube.com/embed/watch?v=bFwdl2PDAFM",
      text:
        "After his family was brutally murdered and his sister turned into a demon, Tanjiro Kamado's journey as a demon slayer began. Tanjiro and his comrades embark on a new mission aboard the Mugen Train, on track to despair."
    },
    {
      id: uuidv4(),
      title: "Joker",
      src:
        "https://i.egycdn.com/pic/WmFwZndlY21MTnZtYm1qbWptYWN4dmNtam1tbW13VG1tYg.jpg",
      rating: 4,
      trailer: "https://www.youtube.com/embed/watch?v=bFwdl2PDAFM",

      text:
        "Arthur Fleck, a party clown, leads an impoverished life with his ailing mother. However, when society shuns him and brands him as a freak, he decides to embrace the life of crime and chaos."
    },
    {
      id: uuidv4(),
      title: "Birds of prey",
      src:
        "https://i.egycdn.com/pic/WmFwZndlY21MdE5qbVlqdmNFY2xtRW1ibWJjd3h2Y21t.jpg",
      rating: "1",
      trailer: "https://www.youtube.com/embed/watch?v=kGM4uYZzfu0",

      text:
        "The film follows Harley Quinn, who after breaking up with the Joker, is threatened by Gotham City crime lord Roman Sionis, and joins forces with Helena Bertinelli, Dinah Lance, and Renee Montoya (who go on to form the Birds of Prey) to save Cassandra Cain."
    },
    {
      id: uuidv4(),
      title: "The Invisible guest",
      src:
        "https://i.egycdn.com/pic/WmFwZndlY21idmNtbW1qbWp2Y0VjdmNQdk5FYW1tbXpQ.jpg",
      rating: 5,
      trailer: "https://www.youtube.com/embed/watch?v=epCg2RbyF80",
      text:
        "A young businessman wakes up in a locked hotel room next to the body of his dead lover. He hires a prestigious lawyer to defend him, and over the course of one night, they work together to find out what happened."
    },
    {
      id: uuidv4(),
      title: "The Perks of Being a Wallflower",
      src:
        "https://i.egycdn.com/pic/WmFwZndlY21FdmNtb051Y21tbUhjUHZORXZOdg.jpg",
      rating: 5,
      trailer: "https://www.youtube.com/embed/watch?v=n5rh7O4IDc0",

      text:
        "Fifteen-year-old Charlie is coping with the suicide of his friend, Michael. To lessen the fear and anxiety of starting high school alone, Charlie starts writing letters to a stranger, someone he heard was nice but has never met in person."
    },
    {
      id: uuidv4(),
      title: "The Body",
      src: "https://i.egycdn.com/pic/WmFwZndlY21UWW1tcG9SY21ZcHZheG1wemE.jpg",
      rating: 4,
      trailer: "https://www.youtube.com/embed/watch?v=NyE5LnY3dT0",

      text:
        "A detective searches for the body of a femme fatale which has gone missing from a morgue"
    }
  ];
  const [movieList, setMovieList] = useState(data);

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(props) => (
          <App
            {...props}
            movieList={movieList}
            setMovieList={setMovieList}
          ></App>
        )}
      ></Route>
      <Route
        exact
        path="/description/:id"
        render={(props) => (
          <Description {...props} movieList={movieList}></Description>
        )}
      ></Route>
    </Switch>
  );
};
export default RoutComponent;