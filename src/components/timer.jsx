function Timer(time) {
  const sleep = (ms) => new promise((resolve) => setTimeout(resolve, ms));
  return async function timer() {
    console.log("Timer começou");
    await sleep(time);
    console.log("Timer Acabou");
  };
}
export default Timer;
