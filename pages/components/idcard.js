import React, { Component } from "react";
import Image from "next/image";
import styles from "./IDdesign.module.scss";

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
                      <div className={styles.author}>Plumber</div>
                    </div>
                    <div className={styles["flex-column"] + " " + styles.group}>
                      <div className={styles.members}>
                        <span className={styles.current}>4 ⭐️</span>
                      </div>
                      <div className={styles.hidden + " " + styles.bottom}>
                        <button className={styles.simple}>Book</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
