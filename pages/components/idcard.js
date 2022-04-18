import React, { Component } from "react";
import Image from "next/image";
import Head from "next/head";
import styles from "./IDdesign.module.scss";
import { Datepicker, Page, setOptions } from "@mobiscroll/react";
import Link from "next/link";
import Button from "./basics/Button";
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
                    {Math.floor(10 * (Math.random() + 3.8)) / 10} stars
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
                              <label> </label>
                              <input
                                type="date"
                                min="2019-01-01"
                                max="2022-12-31"
                              />
                              <Link href="/conf">
                                <button className={styles.simple}>Book</button>
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
              <span className={styles.tooltip}>Load More Users</span>

              {/* <Button title="Load More" redirect="" /> */}
            </button>
          </div>
        </div>
      </>
    );
  }
}
export default UserCards;
