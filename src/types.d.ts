interface Card {
  taskId: string;
  text: string;
  listId?: string;
}

interface List {
  id: string;
  text: string;
  tasks: Card[];
}

type CardsState = {
  lists: List[];
};

type CardAction = {
  type: string;
  payload: Card;
};

type DispatchType = (args: CardAction) => CardAction;
