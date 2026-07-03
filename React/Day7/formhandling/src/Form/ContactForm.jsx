import { useState } from "react"


const ContactForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [mobile, setMobile] = useState("")
  const [message, setMessage] = useState("")

  const [details, setDetails] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault();

    setDetails({
      name,
      email,
      mobile,
      message,
    });
  };

  return (
    <>
      <div className="text-center bg-blue-800 text-white">Contact Form</div>
    <form>
      <div className="text-center mt-6">
      <label htmlFor="name">Name </label>
      <input type="text" id="name" value={name}
        onChange={(e) => setName(e.target.value)} className="border rounded-lg p-2"/>
      <br />

      <label htmlFor="email">Email </label>
      <input type="email" id="email" value={email}
        onChange={(e) => setEmail(e.target.value)} className="border rounded-lg p-2 mt-2"/>
      <br />

      <label htmlFor="mobile">Mobile </label>
      <input type="tel" id="mobile" value={mobile}
        onChange={(e) => setMobile(e.target.value)} className="border rounded-lg p-2 mt-2"/>
      <br />

      <label htmlFor="message">Message </label>
      <textarea id="message" value={message}
        onChange={(e) => setMessage(e.target.value)} className="border rounded-lg p-2 mt-2"></textarea>
      <br />

      <button onClick={handleSubmit} className="bg-green-700 text-white p-2 rounded-lg mt-2">
        Submit</button>

      <h3>Contact Details</h3>
      <p>Name: {details.name}</p>
      <p>Email: {details.email}</p>
      <p>Mobile: {details.mobile}</p>
      <p>Message: {details.message}</p>
    </div>
    </form>
    </>
  );
};

export default ContactForm;