interface Point {
  x: number;
  y: number;
}

let drawPoint = (point: Point) => {
  const { x, y } = point;
  console.log(point);
};

drawPoint({
  x: 1,
  y: 0,
});
