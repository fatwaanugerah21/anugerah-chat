export const AddContact = () => {
  return (
    <button className="btn full-width bg-white soft-shadow add-contact">
      New Contact
    </button>
  );
};

export const ChatAppBar = () => {
  return (
    <div className="app-bar f-sb row a-c">
      <div className="row">
        <img
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=650&w=940 940w, https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260 1260w, https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 1880w, https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 2520w"
          alt=""
          className="circle-avatar avatar-md"
        />
        <div>
          <h6 className="contact-name">Fatwa Anugerah Nasir</h6>
          <p className="contact-info">online</p>
        </div>
      </div>
      <div className="menu">...</div>
    </div>
  );
};

export const Message = ({ sent }) => {
  return (
    <div className={`message-component row ${sent ? "sent" : "receive"}`}>
      <img
        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=650&w=940 940w, https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260 1260w, https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 1880w, https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 2520w"
        alt=""
        className="sender-picture avatar-sm circle-avatar"
      />
      <div className="message f-c bg-white soft-shadow">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi,
          adipisci!
        </p>

        <div className="row">
          <small className="time">1:09 PM</small>
        </div>
      </div>
    </div>
  );
};

export const Search = () => {
  return (
    <div className="search">
      <form action="">
        <input type="text" placeholder="Search Name" className="full-width " />
      </form>
    </div>
  );
};
