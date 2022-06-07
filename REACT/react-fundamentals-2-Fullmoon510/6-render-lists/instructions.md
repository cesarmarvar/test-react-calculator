# Renders a list of SidebarItems

Given an array of objects representing Sidebar Items, render them inside a nav element:

![SideBar Nav](https://p-vvf5mjm.t4.n0.cdn.getcloudapp.com/items/9Zumq77E/8eb7452a-8fd5-4b09-840a-b45ad071f5d7.jpg?source=viewer&v=cecb16fe41895c12317505b753383297)

```jsx
const categoryIcon = <svg>...</svg>
const transactionIcon = <svg>...</svg>
const budgetIcon = <svg>...</svg>

function SidebarNav() {
  const navigation = [
    {name: "Categories", icon: "categoryIcon", href: "#", current: true},
    {name: "Transactions", icon: "transactionIcon", href: "#", current: false},
    {name: "Budgets", icon: "budgetIcon", href: "#", current: false},
  ]

  return (
    <nav>
      {/* // complete your code here */}
    </nav>
  )
}
```

Check [here the Figma file](https://www.figma.com/file/Crqtn0kqnB1EKQWZVXE3of/Expensable-React?node-id=4101%3A1163)
