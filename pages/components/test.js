import React from "react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import { Datepicker, Button, Page, setOptions } from "@mobiscroll/react";

setOptions({
  theme: "ios",
  themeVariant: "light",
});

function App() {
  const [openPicker, setOpenPicker] = React.useState(false);
  const [date, setDate] = React.useState(new Date());

  const show = () => {
    setOpenPicker(true);
  };

  const onClose = () => {
    setOpenPicker(false);
  };

  const inputProps = {
    className: "md-mobile-picker-input",
    placeholder: "Please Select...",
  };

  return (
    <Page>
      <div className="mbsc-grid">
        <div className="mbsc-form-group">
          <div className="mbsc-row">
            <div className="mbsc-col-12 mbsc-txt-muted md-mobile-picker-header">
              Disable <code>onClick/onFocus</code> and only show on button
            </div>
            <div className="mbsc-col-8">
              <Datepicker
                controls={["calendar"]}
                inputComponent="input"
                inputProps={inputProps}
                showOnClick={false}
                showOnFocus={false}
                isOpen={openPicker}
                onClose={onClose}
                defaultValue={date}
              />
            </div>
            <div className="mbsc-col-4">
              <Button
                variant="outline"
                color="primary"
                className="md-mobile-picker-button"
                onClick={show}
              >
                Show picker
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}

export default App;
