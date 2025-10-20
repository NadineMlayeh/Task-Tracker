import React, { useState, useEffect } from "react";

function TaskApp() {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState("");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (taskTitle.trim() === "") return;
    setTasks([...tasks, { title: taskTitle, done: false }]);
    setTaskTitle("");
  };

  const toggleDone = (index) => {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const styles = {
    body: {
      background: "linear-gradient(135deg, #1e1e2f, #252547, #1b1b3a)",
      minHeight: "100vh",
      color: "#fff",
      fontFamily: "'Poppins', sans-serif",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      paddingTop: "50px",
      transition: "all 0.3s ease",
    },
    container: {
      background: "rgba(255, 255, 255, 0.1)",
      backdropFilter: "blur(15px)",
      borderRadius: "20px",
      padding: "30px",
      width: "400px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
      textAlign: "center",
      animation: "fadeIn 0.8s ease",
    },
    input: {
      padding: "10px",
      width: "70%",
      borderRadius: "10px",
      border: "none",
      outline: "none",
      fontSize: "16px",
      background: "rgba(255,255,255,0.2)",
      color: "#fff",
      transition: "0.3s",
    },
    button: {
      padding: "10px 15px",
      marginLeft: "10px",
      border: "none",
      borderRadius: "10px",
      background: "linear-gradient(90deg, #ff8a00, #e52e71)",
      color: "#fff",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "0.3s",
    },
    buttonHover: {
      transform: "scale(1.1)",
      boxShadow: "0 0 10px #e52e71",
    },
    list: {
      listStyle: "none",
      padding: 0,
      marginTop: "20px",
      textAlign: "left",
    },
    li: {
      background: "rgba(255,255,255,0.1)",
      borderRadius: "12px",
      padding: "10px 15px",
      marginBottom: "10px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      transition: "all 0.3s ease",
    },
    liHover: {
      transform: "scale(1.02)",
      background: "rgba(255,255,255,0.2)",
    },
    span: (done) => ({
      textDecoration: done ? "line-through" : "none",
      color: done ? "#bbb" : "#fff",
      flexGrow: 1,
      fontSize: "16px",
      marginLeft: "10px",
      transition: "0.3s",
    }),
    deleteBtn: {
      background: "transparent",
      color: "#ff6b6b",
      border: "none",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "0.3s",
      fontSize: "14px",
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>

        <div>
          <input
            type="text"
            placeholder="Add a new task..."
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            style={styles.input}
          />
          <button
            onClick={addTask}
            style={styles.button}
            onMouseOver={(e) =>
              (e.target.style.transform = "scale(1.1)")
            }
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          >
            Add
          </button>
        </div>

        <ul style={styles.list}>
          {tasks.map((task, index) => (
            <li
              key={index}
              style={styles.li}
              onMouseOver={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.2)")}
              onMouseOut={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
            >
              <div style={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
                <input
                  type="checkbox"
                  checked={task.done}
                  onChange={() => toggleDone(index)}
                  style={{ cursor: "pointer" }}
                />
                <span style={styles.span(task.done)}>{task.title}</span>
              </div>
              <button
                style={styles.deleteBtn}
                onClick={() => deleteTask(index)}
                onMouseOver={(e) => (e.target.style.color = "#ff3b3b")}
                onMouseOut={(e) => (e.target.style.color = "#ff6b6b")}
              >
                ✖
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TaskApp;
