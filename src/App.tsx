import { useSelector } from "react-redux";
import { Column } from "./components/Column";
import { AppContainer } from "./styles";

export const App = () => {
  const lists: List[] = useSelector((state: CardsState) => state.lists);

  console.log("lists", lists)
  return (
    <AppContainer>
      {lists.map((list,i) => (
        <Column key={list.id} id={list.id} text={list.text} index={i}/>
      ))}
    </AppContainer>
  );
};
