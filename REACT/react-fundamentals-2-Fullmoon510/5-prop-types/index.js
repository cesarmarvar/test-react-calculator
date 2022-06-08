// function Button({ size, type, children }) {
//   const typeClass = type ? `button--${type}` : "";
//   const sizeClass = size ? `button--${size}` : "";

//   return (
//     <button className={`button ${typeClass} ${sizeClass}`}>{children}</button>
//   );
// }

// Root 

const root = ReactDOM.createRoot(document.getElementById("root"))

// // Icon component

// function Icon(props) {
//   const { fill = true, name } = props
//   const fillIcon = fill ? "fill" : "line"
//   const nameIcon = name ? name : ""
  
//   return <i className={`ri-${nameIcon}-${fillIcon} ri-sm`}></i>
// }

// Icon.propTypes = {
//   fill: PropTypes.bool,
//   name: PropTypes.oneOf(['mail', 'user']),
// }


// // Add the Sidegit adbarItem component here
// function SidebarItem(props) {
//   const { children, href = "#", icon, current} = props
//   const currentActive = current ? "sidebar-item--active" : ""

//   return (
//   <a 
//   href={href} 
//   className={`sidebar-item ${currentActive}`}
//   >
//     { icon }
//     {children}
//   </a>
//   )
// }

// SidebarItem.propTypes = {
//   href: PropTypes.string,
//   current: PropTypes.bool
// }

// // Render UI
// const ui = (
//   <div className="">
//     <div className="">
//       <SidebarItem current={true} icon={<Icon name="mail" />}>
//       Content Text</SidebarItem>
//     </div>
//   </div>
// )

// ReactDOM.render(<SidebarItem ...props />, document.getElementById("root"));
// root.render(ui)

function Icon(props) {
const { name, fill } = props

const nameIcon = name ? name : ""
const fillIcon = fill ? "fill" : "line"

  return( <i className={`ri-${nameIcon}-${fillIcon} ri-sm`}></i>)
}

Icon.propTypes = {
  nameIcon: PropTypes.string,
  fillIcon: PropTypes.string
}

function SidebarItem(props) {
  const {children, href = "#", current, icon } = props

  const currentActive = current ? "sidebar-item:active" : ""

  return (
    <a href={href} className={`sidebar-item ${currentActive}`}>
      {icon}
      {children}
    </a>
  )
}

  SidebarItem.propTypes = {
    current: PropTypes.bool,
    href: PropTypes.string,
    icon: PropTypes.element
  }

const ui = (
  <div>
    <SidebarItem current={true} href={"https://www.google.com"} icon={<Icon name="mail" fill="fill" />} >Link</SidebarItem>
  </div>
)

root.render(ui)