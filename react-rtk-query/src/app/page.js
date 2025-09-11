
import styles from "./page.module.css";
import Counter from "../components/Counter.js";
import UserList from "../components/UserList.js";

export default function Home() {
  return (
    <div >
        <p> lorem ipsum dolor sit amet </p>
        <Counter />
        <UserList />
    </div>
  );
}
