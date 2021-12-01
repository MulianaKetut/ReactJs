import Board from "react-trello";

function App() {
  return (
    <>
      <Board data={data} />
      
    </>
  );
}

const data = {
  lanes: [
    {
      id: "lane1",
      title: "TODO",
      label: "2/2",
      cards: [
        {
          id: "Card1",
          title: "Write Blog",
          description: "Can AI make memes",
          label: "30 mins",
          draggable: true,
        },
        {
          id: "Card2",
          title: "Pay Rent",
          description: "Transfer via NEFT",
          label: "5 mins",
          metadata: { sha: "be312a1" },
        },
      ],
    },
    {
      id: "lane2",
      title: "Done",
      label: "0/0",
      cards: [],
    },
  ],
};

export default App;
