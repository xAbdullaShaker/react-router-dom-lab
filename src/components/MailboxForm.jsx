import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MailboxForm({ addBox }) {
  const [boxholder, setBoxholder] = useState("");
  const [boxSize, setBoxSize] = useState("Small");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    addBox({ boxholder, boxSize });
    navigate("/mailboxes");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Boxholder:
        <input
          type="text"
          value={boxholder}
          onChange={(e) => setBoxholder(e.target.value)}
          required
        />
      </label>

      <label>
        Box Size:
        <select
          value={boxSize}
          onChange={(e) => setBoxSize(e.target.value)}
        >
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
        </select>
      </label>

      <button type="submit">Create Mailbox</button>
    </form>
  );
}
