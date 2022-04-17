import React from "react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import { Datepicker, Page, getJson, setOptions } from "@mobiscroll/react";
import Terminal from "terminal-in-react";
import ReactTerminalCommand from "react-terminal-command";

setOptions({
  theme: "ios",
  themeVariant: "light",
});

export default function Calendar() {
  const min = "2022-04-16T00:00";
  const max = "2022-10-16T00:00";
  const [singleLabels, setSingleLabels] = React.useState([]);
  const [singleInvalid, setSingleInvalid] = React.useState([]);

  const onPageLoadingSingle = React.useCallback((event, inst) => {
    getPrices(event.firstDay, (bookings) => {
      setSingleLabels(bookings.labels);
      setSingleInvalid(bookings.invalid);
    });
  }, []);

  const getPrices = (d, callback) => {
    let invalid = [];
    let labels = [];

    getJson(
      "https://trial.mobiscroll.com/getprices/?year=" +
        d.getFullYear() +
        "&month=" +
        d.getMonth(),
      (bookings) => {
        for (let i = 0; i < bookings.length; ++i) {
          const booking = bookings[i];
          const d = new Date(booking.d);

          if (booking.price > 0) {
            labels.push({
              start: d,
              title: "$" + booking.price,
              textColor: "#e1528f",
            });
          } else {
            invalid.push(d);
          }
        }
        callback({ labels: labels, invalid: invalid });
      },
      "jsonp"
    );
  };

  return (
    <Page className="md-calendar-booking">
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Book Me!</div>
        <Datepicker
          display="inline"
          controls={["calendar"]}
          min={min}
          max={max}
          labels={singleLabels}
          invalid={singleInvalid}
          pages="auto"
          onPageLoading={onPageLoadingSingle}
          //   onCellClick={cellClick}
        />
      </div>
    </Page>
  );
}
