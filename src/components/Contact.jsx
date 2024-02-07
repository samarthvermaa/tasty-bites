import Button from "./Button";

const Contact = () => {
  return (
    <>
      <h1 className="font-bold text-3xl m-4 p-4">Contact Us Page</h1>
      <form>
        <input
          type="text"
          className=" border border-black p-2 m-2"
          placeholder="Name"
        />
        <input
          type="text"
          className=" border border-black p-2 m-2"
          placeholder="Message"
        />
        <Button title="Submit" className="p-1 m-1" />
      </form>
    </>
  );
};

export default Contact;
