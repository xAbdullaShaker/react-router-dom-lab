import { useParams } from "react-router-dom";

export default function MailboxDetails({ mailboxes }) {
  const { mailboxId } = useParams();
  const box = mailboxes.find((m) => m._id === Number(mailboxId));

  if (!box) {
    return <h2>Mailbox Not Found!</h2>;
  }

  return (
    <div>
      <h2>Mailbox #{box._id}</h2>
      <p>Boxholder: {box.boxholder}</p>
      <p>Box Size: {box.boxSize}</p>
    </div>
  );
}
