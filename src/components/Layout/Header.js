import { Fragment } from 'react';

import mealsImage from "../../assets/meals.jpeg";
import classes from "./Header.module.css";

const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Restaurant React</h1>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="my react meals" />;
            </div>
        </Fragment>
    );
};

export default Header;
