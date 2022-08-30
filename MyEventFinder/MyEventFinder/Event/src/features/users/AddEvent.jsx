import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { userAdded } from "./EventSlice";

export function AddEvent() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState(null);

  const handleTitle = (e) => setTitle(e.target.value);
  const handleBody = (e) => setBody(e.target.value);

  const eventsAmount = useSelector((state) => state.events.entities.length);

  const handleClick = () => {
    if (title && body) {
      dispatch(
        userAdded({
          id: eventsAmount + 1,
          title,
          body,
        })
      );

      setError(null);
      history.push("/");
    } else {
      setError("Fill in all fields");
    }

    setTitle("");
    setBody("");
  };

  return (
    <div className="create">
       <h1>Add Event</h1>
        <label htmlFor="titleInput">Title</label>
          <input
            type="text"
            placeholder="Title of event"
            id="title"
            onChange={handleTitle}
            value={title}
          />
          <label htmlFor="bodyInput">Description</label>
          <input
            type="text"
            placeholder="Details of event"
            id="bodyInput"
            onChange={handleBody}
            value={body}
          />
          {error && error}
          <button onClick={handleClick} className="button-primary">
            Add Event
          </button>
    </div>
  );
}
