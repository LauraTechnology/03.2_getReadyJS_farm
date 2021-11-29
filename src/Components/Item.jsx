// 5. Item.jsx (vietoj th įsistatom lentelės stulpelių pavadinimus)
function Item({ data, modal, remove }) {
  const showEdit = () => {
    modal(data);
  };

  return (
    <tr>
      <td>{data.name}</td>
      <td>{data.weight}</td>
      <td>{data.total_milk}</td>
      <td>{data.last_milking_time}</td>
      <button className="btn btn-primary" onClick={showEdit}>
        EDIT
      </button>
      <button className="btn btn-danger" onClick={() => remove(data.id)}>
        Delete
      </button>
    </tr>
  );
}

export default Item;