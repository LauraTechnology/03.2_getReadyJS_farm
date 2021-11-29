import Item from "./Item";

function List({ table, modal }) {
  return (
    <>
      {table.map((data) => (
        <Item key={data.id} data={data} modal={modal}></Item>
      ))}
    </>
  );
}

export default List;


