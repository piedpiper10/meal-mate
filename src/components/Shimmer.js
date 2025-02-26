const Shimmer = () => {
  let cards = [];
  for (let i = 0; i <= 10; i++) {
    cards.push(<div className="shimmer-card"></div>);
  }

  return <div className="shimmer-container">{cards}</div>;
};

export default Shimmer;
