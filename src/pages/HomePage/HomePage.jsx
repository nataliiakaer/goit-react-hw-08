import css from "../ContactsPage/ContactsPage.module.css";

const HomePage = () => {
  return (
    <div>
      <h1 className={css.section}>
        Task manager welcome page{" "}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
    </div>
  );
};

export default HomePage;
