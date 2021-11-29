// 5. Item.jsx (vietoj th įsistatom lentelės stulpelių pavadinimus)
function Item({ data, modal }) {
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
        Edit
      </button>
    </tr>
  );
}

export default Item;