const root = React.createRoot(document.getElementById("root"))

// Icons
const mailIcon = (
  <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16 4.5L16.0001 4.5C16.3829 4.49993 16.7513 4.64622 17.0297 4.90892C17.2305 5.0984 17.3737 5.33809 17.4462 5.60038L10 9.323L2.55384 5.60038C2.62634 5.33809 2.76945 5.0984 2.97029 4.90892C3.24874 4.64622 3.6171 4.49993 3.99991 4.5H4H16ZM9.77639 12.5652L10 12.677L10.2236 12.5652L17.5 8.92702V14C17.5 14.3978 17.342 14.7794 17.0607 15.0607C16.7794 15.342 16.3978 15.5 16 15.5H4C3.60218 15.5 3.22064 15.342 2.93934 15.0607C2.65804 14.7794 2.5 14.3978 2.5 14V8.92702L9.77639 12.5652Z"
      fill="currentColor"
      stroke="currentColor"
    />
  </svg>
);

// Components
function Button({ size, type, children }) {
  const typeClass = type ? `button--${type}` : "";
  const sizeClass = size ? `button--${size}` : "";

  return (
    <button className={`button ${typeClass} ${sizeClass}`}>{children}</button>
  );
}

// Add the Sidegit adbarItem component here

// Render UI
root.render(ui)
// ReactDOM.render(<SidebarItem ...props />, document.getElementById("root"));
