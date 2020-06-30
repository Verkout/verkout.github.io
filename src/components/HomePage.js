import React from "react";
import { Helmet } from "react-helmet";
import s from "../styles/home.style";

export default function HomePage() {
  return (
    <div style={s.root}>
      <div class="section hero">
        <div class="container">
          <div class="row">
            <div class="column">
              <div class="centered-box">
                <h2>
                  <b>Verkout</b>
                  <br />
                  <span class="subtitle">is a fitness app.</span>
                </h2>
                <h5 class="constrained-header bullets">
                  <br />
                  We're in stealth mode, for now.
                  <br />
                  <br />
                  <br />
                  <br />
                </h5>
              </div>

              <h4 class="padded">- coming soon -</h4>
              <p>
                Please hold. Our small team in Austin, TX is building something
                great.
              </p>
              <a target="_" href="https://instagram.com/verkoutapp">
                <img class="icon" width="32" src="img/icon-ig.png" />
              </a>
              <a target="_" href="https://twitter.com/verkoutapp">
                <img class="icon" width="32" src="img/icon-twitter.png" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
