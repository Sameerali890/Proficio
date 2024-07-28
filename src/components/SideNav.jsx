import { Link } from "react-router-dom";
function SideNav() {
  let navList = [
    { name: "Home", to: "/" },
    { name: "Gallery", to: "/Gallery" },
    { name: "profile", to: "/profile" },
  ];

  return (
    <section className="p-4 bg-red-950 w-80 flex  gap-3 flex-col">
      <div className="logo">
        <h1 className="text-3xl font-bold">Proficio</h1>
      </div>
      {navList.map((nav, index) => (
        <Link to={nav.to} key={index} className="navlist capitalize">
          {nav.name}
        </Link>
      ))}
      <h1 className="mt-auto">Logout</h1>
    </section>
  );
}
export default SideNav;
