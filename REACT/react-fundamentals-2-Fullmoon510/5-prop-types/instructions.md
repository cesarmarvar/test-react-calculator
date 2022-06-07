# Create a component with prop types validations

Create a re-usable custom component for Codeable's design Sidebar Item.

![SideBar Item](https://p-vvf5mjm.t4.n0.cdn.getcloudapp.com/items/E0ugWk1z/d479ad7a-5b1f-4bdc-9cec-a24fbeed1c19.jpg?source=viewer&v=430c2f0f7b6cca25311395537a441b37)

| prop      | options                        |
|-----------|--------------------------------|
| href      | string, default: "#"           |
| current   | boolean, default: false        |
| icon      | svg element                    |

You should be able to use the Button component like this:

```jsx
const icon = <svg>...</svg>

<SidebarItem href="www.example.com" current={true} icon={icon}>
  Example Page
</SidebarItem>
```

The component should implement the PropTypes feature to show warnings on the
console when the props are invalid.

Check [here the Figma file](https://www.figma.com/file/Crqtn0kqnB1EKQWZVXE3of/Expensable-React?node-id=4101%3A1163)
