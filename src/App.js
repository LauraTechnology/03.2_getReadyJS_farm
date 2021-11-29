import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import List from "./Components/List";
import Modal from "./Components/Modal";
import Create from "./Components/Create";

function App() {
  const [table, setTable] = useState([]);
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [showModal, setShowModal] = useState(false);
  const [modalInputs, setModalInputs] = useState({
    name: "",
    weight: "",
    total_milk: "",
    last_milking_time: "",
  });

  const dateOnly = (data) => {
    return data.map((a) => {
      a.last_milking_time = a.last_milking_time.slice(0, 10);

      return a;
    });
  };

//Create React
const create = item => {
  axios.post('http://localhost:3003/cow_farm', item)
  .then(res => {
    console.log(res.data);
    setLastUpdate(Date.now());
  })
}

//Read React
  useEffect(() => {
    axios
      .get("http://localhost:3003/cow_farm")
      .then((res) => {
        setTable(dateOnly(res.data));
      })
      .catch((err) => console.log(err));
  }, [lastUpdate]);



//Update React
  const edit = (item, id) => {
    setShowModal(false);
    axios.put('http://localhost:3003/cow_farm/' + id, item)
    .then(res => {
        setLastUpdate(Date.now());
    })
    .catch((err)=> console.log(err));
}

  const modal = (item) => {
    setShowModal(true);
    setModalInputs(item);
  };

  const hide = () => {
    setShowModal(false);
  };

  const remove = (id) => {
    setShowModal(false);
    axios.delete('http://localhost:3003/kolt_scooters/'+id)
        .then(res => {
            console.log(res.data);
            setLastUpdate(Date.now());
        })
  }
  
  return (
    <div className="App">
      <Create create={create}></Create>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">List of Cows</div>
              <div className="card-body">
                <table className="table">
                  <tbody>
                  <tr>
                    <th>Name</th>
                    <th>Weight</th>
                    <th>Total_Milk</th>
                    <th>Last_Milking_Time</th>
                
                  </tr>
                  <Modal
                    showModal={showModal}
                    modalInputs={modalInputs}
                    hide={hide}
                    edit={edit}
                  />
                  <List table={table} modal={modal} remove={remove} />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;