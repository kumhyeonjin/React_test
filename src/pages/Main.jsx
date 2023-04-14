import MainEvent from "./MainEvent";
import MainTopList from "./MainTopList";

function Main(props) {
  console.log("메인", props.list);
  return (
    <>
      <MainEvent />
      <MainTopList list={props.list} />
    </>
  );
}

export default Main;
