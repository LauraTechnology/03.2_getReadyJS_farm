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

5. Item.jsx (vietoj th įsistatom lentelės stulpelių pavadinimus)
function Item({ data, modal }) {
  const showEdit = () => {
    modal(data);
  };

  return (
    <tr>
      <td>{data.th}</td>
      <td>{data.th}</td>
      <td>{data.th}</td>
      <td>{data.th}</td>
      <button className="btn btn-primary" onClick={showEdit}>
        Edit
      </button>
    </tr>
  );
}

export default Item;
