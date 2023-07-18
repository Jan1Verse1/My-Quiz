import React from "react";
import Header from "../components/layouts/Header";
import NavBar from "../components/layouts/NavBar";

import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.container}>
      <Header className={classes.header} />
      <NavBar className={classes.nav} />
      <main className={classes.main}>
        <div className={classes.contactHeader}>
          <h1>About Us</h1>
        </div>
        <div className={classes.intro}>
          <div className={classes.introText}>
            <p>
              At the core of KPMG's vibrant culture are a set of values that
              bring out the best in our people.
            </p>
            <ul>
              <li>
                Our values create a sense of shared identity within the KPMG
                organization, which is a network of member firms in over 155
                countries.
              </li>
              <li>They define what we stand for and how we do things.</li>
              <li>
                Our values help us to work together in the most effective and
                fulfilling way.
              </li>
              <li>They bring us closer as a global organization.</li>
            </ul>
          </div>
        </div>

        <div className={classes.content}>
          <div className={classes.card}>
            <h3>We lead by example</h3>
            <p>
              At all levels we act in a way that exemplifies what we expect of
              each other and our member firms' clients.
            </p>
          </div>
          <h3>We work together</h3>
          <p>
            We bring out the best in each other and create strong and successful
            working relationships.
          </p>

          <div className={classes.card}>
            <h3>We respect the individual</h3>
            <p>
              We respect people for who they are and for their knowledge, skills
              and experience as individuals and team members.
            </p>
          </div>
          <h3>We seek the facts and provide insight</h3>
          <p>
            By challenging assumptions and pursuing facts, we strengthen our
            reputation as trusted and objective business advisers.
          </p>

          <div className={classes.card}>
            <h3>We are open and honest in our communication</h3>
            <p>
              We share information, insight and advice frequently and
              constructively and manage tough situations with courage and
              candor.
            </p>
          </div>
          <h3>We are committed to our communities</h3>
          <p>
            We act as responsible corporate citizens by broadening our skills,
            experience and perspectives through work in our communities and
            protecting the environment.
          </p>

          <div className={classes.card}>
            <h3>Above all, we act with integrity</h3>
            <p>
              We are constantly striving to uphold the highest professional
              standards, provide sound advice and rigorously maintain our
              independence
            </p>
          </div>
        </div>
        <a href="https://kpmg.com/ng/en/home.html" target="_blank">
          <button className={classes.seeBtn}>See more</button>
        </a>
      </main>
    </div>
  );
};

export default About;
