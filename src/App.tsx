import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { Chronometer } from "./Modules/Chronometer";
import { Time } from "./utils/types";
import { FormType } from "./utils/types";
import { Buttons } from "./Modules/Buttons";
import { AlertForm } from "./Modules/AlertForm";
import { ModalAlert } from "./Modules/ModalAlert";

function App() {
  const [time, setTime] = useState<Time>({ h: 0, m: 0, s: 0, ms: 0 });
  const [alert, setAlert] = useState<Time | undefined>();
  const [toggleButton, setToogleButton] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const chronometerRef = useRef<NodeJS.Timeout | null>();

  useEffect(() => {
    chronometerRef.current = setInterval(() => {
      if (toggleButton) {
        setTime((prevState) => {
          let h = prevState.h;
          let m = prevState.m;
          let s = prevState.s;
          let ms = prevState.ms + 1;

          if (ms === 100) {
            ms = 0;
            s++;
          }
          if (s === 60) {
            s = 0;
            m++;
          }
          if (m === 60) {
            m = 0;
            h++;
          }
          if (h === 24) {
            h = 0;
          }

          if (alert?.h == h && alert.m == m && alert.s == s && alert.ms == ms) {
            changeModal();
          }

          return { h, m, s, ms };
        });
      }
    }, 10);

    return () => {
      if (chronometerRef.current) {
        clearInterval(chronometerRef.current);
      }
    };
  }, [toggleButton]);

  function toggleOption(): void {
    setToogleButton(!toggleButton);
  }

  function restartChronometer(): void {
    setToogleButton(false);
    setTime({ h: 0, m: 0, s: 0, ms: 0 });
  }

  function onSubmit(data: FormType) {
    setAlert({ h: data.hour, m: data.minute, s: data.second, ms: 0 });
  }

  function changeModal() : void {
    setShowAlert(!showAlert);
  }

  return (
    <div className="App">

    {showAlert && <ModalAlert changeModal={changeModal}/>}

      <div className="App-container">
        <Chronometer time={time} />
        <Buttons
          toggleOption={toggleOption}
          toggle={toggleButton}
          restartChronometer={restartChronometer}
        />
      </div>
      <AlertForm onSubmit={onSubmit} alert={alert}/>
    </div>
  );
}

export default App;
