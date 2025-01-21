## Step 1 Create project

```bash
npm create vite .
npm install
npm run dev
```

## Step 2 Push project to Github

```bash
git init
git add .
git commit -m "Add a descriptive message"
```

## Step 3 Install react-router

React-Router Documentation: https://reactrouter.com/start/library/installation

```bash
npm i react-router
```

## Step 4 Call `<App />` in `<BrowserRouter>` tags

```jsx
<BrowserRouter>
  <App />
</BrowserRouter>
```

## Step 5 Create Routes map

`url/about` will render the `<About />` component etc. <br>
When the parent path is called with any child path, the child pathe with the `index` attribut will display <br>
For example, `url/admin` will display the `<Dashboard />` component

```jsx
function AppRoutes() {
  return (
    <div>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        {/* Private */}
        <Route path="admin" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="manage" element={<Manage />} />
          <Route path="setting" element={<Setting />} />
        </Route>
      </Routes>
    </div>
  );
}
export default AppRoutes;
```

## Step 6 Create a `<Layout />` component, ensure there is an `<Outlet />` component to render child components

Child component will be rendered where the `<Outlet />` is called, in this case under the `<hr />` tag

```jsx
function Layout() {
  return (
    <div>
      <MainNav />
      <hr />
      <Outlet />
    </div>
  );
}
```
