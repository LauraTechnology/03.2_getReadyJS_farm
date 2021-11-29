import { useEffect, useState } from "react";

function Modal({ showModal, hide, modalInputs, edit }) {
  const [inputs, setInputs] = useState({
    name: "",
    weight: "",
    total_milk: "",
    last_milking_time: "",
  });

  const control = (e, what) => {
    const inputsCopy = { ...inputs };
    inputsCopy[what] = e.target.value;
    setInputs(inputsCopy);
  };

  useEffect(() => {
    setInputs({
        name: modalInputs.name,
        weight: modalInputs.weight,
        total_milk: modalInputs.total_milk,
        last_milking_time: modalInputs.last_milking_time,
    });
  }, [modalInputs]);

  const handleEdit = () => {
    edit(
      {
        name: inputs.name,
        weight: inputs.weight,
        total_milk: inputs.total_milk,
        last_milking_time: inputs.last_milking_time,
      },
      modalInputs.id
    );
  };

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style={{
        display: showModal ? "block" : "none",
        opacity: showModal ? "1" : "0",
      }}
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Edit X
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={hide}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="name" className="col-form-label">
                  Name
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="name"
                  value={inputs.name}
                  onChange={(e) => control(e, "name")}
                  placeholder="Enter name"
                />
              </div>


              <div className="form-group">
                <label htmlFor="weight" className="col-form-label">
                Weight
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="weight"
                  value={inputs.weight}
                  onChange={(e) => control(e, "weight")}
                  placeholder="Enter weight"
                />
              </div>


              <div className="form-group">
                <label htmlFor="total_milk" className="col-form-label">
                Total_Milk
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="total_milk"
                  value={inputs.total_milk}
                  onChange={(e) => control(e, "total_milk")}
                  placeholder="Enter total_milk"
                />
              </div>

              <div className="form-group">
                <label htmlFor="last_milking_time" className="col-form-label">
                Last_Milking_Time
                </label>
                <input
                  className="form-control"
                  type="date"
                  id="last_milking_time"
                  value={inputs.last_milking_time}
                  onChange={(e) => control(e, "last_milking_time")}
                  placeholder="Enter last_milking_time"
                />
              </div>

              <div class="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={hide}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleEdit}
                >
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Modal;