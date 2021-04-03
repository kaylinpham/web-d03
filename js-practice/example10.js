function countDown(count) {
  for (let i = count; i >= 0; i--) {
    setTimeout(() => console.log(i), 1000 * (count - i));
  }
}
countDown(6);
