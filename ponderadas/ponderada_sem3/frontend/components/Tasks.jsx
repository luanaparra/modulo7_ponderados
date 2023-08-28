import { useState, useEffect, useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import EditableTask from "./EditableTask";
import { useRouter } from "next/router";

const Tasks = () => {
  const { authState, setAuthState } = useContext(AuthContext);
  const router = useRouter();
  const [tasks, setTasks] = useState([]);

  const handleCreateTask = async () => {
    const newTask = {
      text: "New task",
    };

    try {
      const response = await fetch("http://localhost:5000/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authState.token}`,
        },
        body: JSON.stringify(newTask),
      });

      if (response.ok) {
        fetchTasks();
      } else {
        handleError("Error creating task");
      }
    } catch (error) {
      handleError("Network error:", error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/tasks/${taskId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${authState.token}`,
        },
      });

      if (response.ok) {
        fetchTasks();
      } else {
        handleError("Error deleting task");
      }
    } catch (error) {
      handleError("Network error:", error);
    }
  };

  const handleTaskUpdate = async (taskId, updatedText, completedStatus) => {
    const updatedTask = {
      text: updatedText,
      completed: completedStatus,
    };

    try {
      const response = await fetch(`http://localhost:5000/api/tasks/${taskId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authState.token}`,
        },
        body: JSON.stringify(updatedTask),
      });

      if (response.ok) {
        fetchTasks();
      } else {
        if (response.status === 403) {
          setAuthState({ token: null });
          router.push("/");
        } else {
          handleError("Error updating task");
        }
      }
    } catch (error) {
      handleError("Network error:", error);
    }
  };

  const fetchTasks = async () => {
    if (authState.token) {
      try {
        const response = await fetch("http://localhost:5000/api/tasks", {
          headers: {
            Authorization: `Bearer ${authState.token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setTasks(data.tasks);
        } else {
          if (response.status === 403) {
            setAuthState({ token: null });
            router.push("/");
          } else {
            handleError("Error fetching tasks");
          }
        }
      } catch (error) {
        handleError("Network error:", error);
      }
    }
  };

  const handleError = (errorMessage, error = null) => {
    console.error(errorMessage, error);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-5 w-80">
        <div className="w-full shadow-md py-2 px-6 text-center text-white font-semibold bg-green">
          Tarefas
        </div>
        <div className="w-full shadow-md text-sm bg-white flex flex-col py-8 px-10 gap-8">
          {tasks.map((task) => (
            <EditableTask
              key={task.id}
              task={task}
              onUpdate={handleTaskUpdate}
              onDelete={handleDeleteTask}
              fetchTasks={fetchTasks}
            />
          ))}
        </div>
        <button
          className="bg-green py-3 px-6 rounded-full text-white font-semibold"
          onClick={handleCreateTask}
        >
          New Task
        </button>
      </div>
      <button
        onClick={() => {
          setAuthState({ token: null });
          localStorage.setItem("token", null);
          router.push("/");
        }}
      >
        Logout
      </button>
    </>
  );
};

export default Tasks;
