import { Link } from "react-router-dom";
import "./MailboxList.css"; 


export default function MailboxList({ mailboxes }) {
  return (
    <div>
      <h2>Mailboxes</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {mailboxes.map((mailbox) => (
          <Link key={mailbox._id} to={`/mailboxes/${mailbox._id}`}>
            <div className="mail-box">{mailbox._id}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
