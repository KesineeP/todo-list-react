import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import AddToDo from "../AddToDo";
import DisplayToDos from "../DisplayToDos";
import RemoveCheckedTodos from "../RemoveCheckedTodos";
import CSS from "csstype";

interface Props {
  database: TodoType[];
  setDatabase: Dispatch<SetStateAction<TodoType[]>>;
}
type TodoType = {
  id: string;
  data: string;
  isChecked: boolean;
};
// click delete button
// that todo will be removed from todo list(database)
const TodoList: React.FC = () => {
  const [database, setDatabase] = useState<Props["database"]>([]);

  useEffect(() => {
    const database = JSON.parse(localStorage.getItem("database") || "[]");
    if (database) {
      setDatabase(database);
    }
  }, []);

  useEffect(() => {
    //save database while changing
    localStorage.setItem("database", JSON.stringify(database));
  }, [database]);

  const ordinalDate = (date: number) => {
    if (date > 3 && date < 21) return "th";
    switch (date % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };
  const today = new Date();
  const date = today.getDate();
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ][today.getMonth()];

  return (
    <div style={styles.container}>
      <h5>
        {date}
        <sup>{ordinalDate(date)}</sup> {month}, {today.getFullYear()}
      </h5>
      <AddToDo database={database} setDatabase={setDatabase} />
      <DisplayToDos database={database} setDatabase={setDatabase} />
      <RemoveCheckedTodos database={database} setDatabase={setDatabase} />
    </div>
  );
};
type Style = {
  container: CSS.Properties;
};
const styles: Style = {
  container: {
    display: "flex",
    flexDirection: "column",
    padding: " 5px 20px 20px 20px",
    boxShadow: "2px 2px 5px grey",
    background: "white",
    fontSize: "",
    maxWidth: "450px",
  },
};

export default TodoList;
