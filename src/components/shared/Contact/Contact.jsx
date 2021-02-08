import "./Contact.css";
import { connect } from "react-redux";

const Contact = ({ activeContact, setActiveContact, id }) => {
  function handleClick() {
    setActiveContact(id);
  }

  return (
    <div
      className={`row a-c contact ${
        activeContact === id ? "active-contact" : ""
      }`}
      onClick={() => handleClick()}
    >
      <img
        src="https://images.pexels.com/photos/842548/pexels-photo-842548.jpeg?auto=compress&cs=tinysrgb&h=650&w=940 940w, https://images.pexels.com/photos/842548/pexels-photo-842548.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260 1260w, https://images.pexels.com/photos/842548/pexels-photo-842548.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 1880w, https://images.pexels.com/photos/842548/pexels-photo-842548.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 2520w"
        alt=""
        className="circle-avatar avatar-sm"
      />
      <div className="">
        <h3 className="contact-name">Fatwa Anugerah</h3>
        <p className="contact-info">23 mins ago</p>
      </div>
    </div>
  );
};

function mapStateToProps(state, _) {
  return {
    activeContact: state.activeContact,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    setActiveContact: (id) => dispatch({ type: "ACTIVE_CONTACT", id }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
