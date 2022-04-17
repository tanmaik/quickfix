import React, { Component } from "react";
import Image from "next/image";
import Head from "next/head";
import styles from "./IDdesign.module.scss";
import { Datepicker, Button, Page, setOptions } from "@mobiscroll/react";
import Link from "next/link";

setOptions({
  theme: "ios",
  themeVariant: "light",
});

class UserCards extends Component {
  state = {
    data: [],
    per: 9,
    page: 1,
    total_pages: null,
  };

  uppercase = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  loadData = () => {
    const { per, page, data } = this.state;
    const endpoint = `https://randomuser.me/api/?nat=us&results=${per}&page=${page}`;
    console.log(endpoint);
    fetch(endpoint)
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          data: [...data, ...json.results],
          scrolling: false,
          total_pages: json.info.results,
        });
      });
  };

  loadMore = () => {
    this.setState(
      (prevState) => ({
        page: prevState.page + 1,
        scrolling: true,
      }),
      this.loadData
    );
  };

  componentDidMount() {
    this.loadData();
  }

  render() {
    const inputProps = {
      className: "md-mobile-picker-input",
      placeholder: "Please Select...",
    };
    var date;
    const change = (ev) => {
      date = ev.valueText;
      console.log(JSON.stringify(date));
    };
    return (
      <>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap"
            rel="stylesheet"
          />
        </Head>

        <div className={styles.clearfix}>
          <div className={styles.container}>
            {this.state.data.map((data) => (
              <div className="col-md-4 animated fadeIn" key={data.id.value}>
                {/* <div className={styles.container}> */}
                {/* <div className={styles.center + " " + styles["flex-column"]}> */}
                {/* <div
                    className={
                      styles.card + " " + styles["flex-row"] + " " + styles.open
                    }
                  > */}
                {/* <div className={styles.book}> */}
                <div className={styles.wrapper}>
                  <div className={styles["circular--portrait"]}>
                    <img src={data.picture.large} />
                  </div>
                  <div className={styles.text}>
                    {this.uppercase(data.name.first) +
                      " " +
                      this.uppercase(data.name.last)}
                    {"\n"}
                    {Math.floor(10 * (Math.random() + 3.8)) / 10} ⭐️
                    <Page>
                      <div className={styles.mbsc}>
                        <div className={styles["mbsc-form-group"]}>
                          <div className={styles["mbsc-row"]}>
                            <div className={styles["mbsc-col-12"]}>
                              <div
                                className={
                                  styles["mbsc-txt-muted"] +
                                  " " +
                                  styles["md-mobile-picker-header"]
                                }
                              ></div>

                              <Datepicker
                                controls={["calendar"]}
                                inputComponent="input"
                                inputProps={inputProps}
                                onChange={change}
                              />
                              <Link href="/conf">
                                <button className={styles.simple}>
                                  Confirm Booking
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Page>
                  </div>
                </div>

                {/* </div> */}
                {/* <div className={styles["flex-column"] + " " + styles.info}>
                      <div className={styles.title}>
                        {this.uppercase(data.name.first) +
                          " " +
                          this.uppercase(data.name.last)}
                      </div>
                      <div className={styles.author}>Plumber</div>
                    </div> */}
                {/* <div className={styles["flex-column"] + " " + styles.group}>
                      <div className={styles.members}>
                        <span className={styles.current}>4 </span>
                      </div>
                      <div className={styles.hidden + " " + styles.bottom}>
                        <button className={styles.simple}>Book</button>
                      </div>
                    </div> */}
                {/* </div> */}
                {/* </div> */}
                {/* </div> */}
                {/* <div className="card">
                <div className="card-body">
                  <div className="avatar">
                    <img
                      src={data.picture.large}
                      className="card-img-top"
                      alt=""
                    />
                  </div>
                  <h5 className="card-title">
                    {this.uppercase(data.name.first) +
                      " " +
                      this.uppercase(data.name.last)}
                  </h5>
                  <p className="card-text">
                    {data.location.city +
                      ", " +
                      this.uppercase(data.location.state)}
                    <br />
                    <span className="phone">{data.phone}</span>
                  </p>
                </div>
              </div> */}
              </div>
            ))}
            <button
              className={
                styles["btn"] +
                " " +
                styles["btn-light"] +
                " " +
                styles["btn-block"] +
                " " +
                styles["w-50"] +
                " " +
                styles["mx-auto"]
              }
              onClick={(e) => {
                this.loadMore();
              }}
            >
              <span class="tooltip">Load More Users</span>
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default UserCards;
