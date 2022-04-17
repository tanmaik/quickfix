import React, { Component } from "react";
import Image from "next/image";
import styles from "./IDdesign.module.scss";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import { Datepicker, Button, Page, setOptions } from "@mobiscroll/react";
import Link from "next/link";
import ReactDom from "react-dom";

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
      <div className="clearfix">
        <div className="row">
          {this.state.data.map((data) => (
            <div className="col-md-4 animated fadeIn" key={data.id.value}>
              <div className={styles.container}>
                <div className={styles.center + " " + styles["flex-column"]}>
                  <div
                    className={
                      styles.card + " " + styles["flex-row"] + " " + styles.open
                    }
                  >
                    <div className={styles.book}>
                      <img src={data.picture.large} />
                    </div>
                    <div className={styles["flex-column"] + " " + styles.info}>
                      <div className={styles.title}>
                        {this.uppercase(data.name.first) +
                          " " +
                          this.uppercase(data.name.last)}
                      </div>
                      <div className={styles.author}>{this.props.job}</div>
                    </div>
                    <div className={styles["flex-column"] + " " + styles.group}>
                      <div className={styles.members}>
                        <span className={styles.current}>
                          {Math.floor(10 * (Math.random() + 3.8)) / 10.0} ⭐️
                        </span>
                      </div>
                      <div className={styles.hidden + " " + styles.bottom}>
                        <Page>
                          <div className="mbsc-grid">
                            <div className="mbsc-form-group">
                              <div className="mbsc-row">
                                <div className="mbsc-col-12">
                                  <div className="mbsc-txt-muted md-mobile-picker-header"></div>

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
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="btn btn-light btn-block w-50 mx-auto"
          onClick={(e) => {
            this.loadMore();
          }}
        >
          Load More Users
        </button>
      </div>
    );
  }
}

export default UserCards;
