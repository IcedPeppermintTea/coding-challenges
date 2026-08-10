function LetterGrid({ array, status }) {
  return (
    <div>
      <h1>Letter Grid</h1>
      <div className="grid">
        {array.map((item, idx) => {
          const tileStatus = status[idx];
          return (
            <div key={idx} className={`tile ${tileStatus}`}>
              <p>{item}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LetterGrid;
