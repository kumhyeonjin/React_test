import ProductCard from "./ProductCard";

function MainTopList(props) {
  let dataList = props.list.filter((a) => a.category === "top");
  console.log("아아아아", dataList);
  return (
    <>
      <section className="sec2 mw">
        <h1>Shop The Latest</h1>
        <ul className="sec2_con">
          {dataList.map((item, i) => {
            return <ProductCard item={item} />;
          })}
        </ul>
      </section>
    </>
  );
}

export default MainTopList;
