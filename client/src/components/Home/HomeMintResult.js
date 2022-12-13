function HomeMintResult(props) {
  return (
    <div>
      <p className="nft-info"><span className="bold">The minting result is: </span>{props.number}</p>
      <p className="nft-info"><span className="bold">The minting date is : </span>{props.mintDate}</p>
    </div>
  );
}

HomeMintResult.propTypes = {};

export default HomeMintResult;
