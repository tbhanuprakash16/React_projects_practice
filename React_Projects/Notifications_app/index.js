const Notification = (props) => {
  const { iconUrl, message, className } = props;
  return (
    <div className={`notification-box ${className}`}>
      <img src={iconUrl} className="icon" />
      <p className="message">{message}</p>
    </div>
  );
};

const element = (
  <div className="notifications-container">
    <h1 className="heading">Notifications</h1>
    <div className="notifications-list-container">
      <Notification
        iconUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        message="Information Message"
        className="information-message"
      />
      <Notification
        iconUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        message="Success Message"
        className="success-message"
      />
      <Notification
        iconUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        message="Warning Message"
        className="warning-message"
      />
      <Notification
        iconUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        message="Error Message"
        className="error-message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
