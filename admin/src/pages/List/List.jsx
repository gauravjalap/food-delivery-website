import React, { useEffect, useState } from "react";
import "./List.css";
import { toast } from "react-toastify";
import axios from "axios";
const List = ({ url }) => {
  const [list, setList] = useState([]);
  const fetchList = async () => {
    const respone = await axios.get(`${url}/api/food/list`);
    if (respone.data.success) {
      setList(respone.data.data);
    } else {
      toast.error("Error in fetching list");
    }
  };
  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, {
      id: foodId,
    });
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error("Error in removing food");
    }
  };
  useEffect(() => {
    fetchList();
  }, []);
  return (
    <div className="list add flex-col">
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className="list-table-format">
              <img src={`${url}/images/` + item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p onClick={() => removeFood(item._id)} className="cursor">
                x
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
