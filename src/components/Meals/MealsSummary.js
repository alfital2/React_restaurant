import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
    return <section className={classes.summary}>
        <h2>Yummy food for you!</h2>
        <p>
            Choose the meal you want from the following available meals.
        </p>
        <p>
            All meals are home made and yum yum !
        </p>
    </section>
}

export default MealsSummary;