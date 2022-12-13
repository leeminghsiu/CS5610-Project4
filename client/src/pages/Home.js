import React, { useState, useEffect } from "react";
import "./Home.modual.css";
import { nanoid } from "nanoid";
import PropTypes from "prop-types"; // import propTypes from "eslint-plugin-react/lib/rules/prop-types";
// eslint-disable-next-line no-unused-vars
import HomeMintResult from "../components/Home/HomeMintResult";
// eslint-disable-next-line no-unused-vars
import Homehistory from "../components/Home/Homehistory";
import nameForUsers from "../nameForUsers/nameForUsers.js";

function Home() {
  const [name, setName] = useState(0);
  const [number, setNumber] = useState(null);
  const [mintDate, setMintDate] = useState(null);
  let [date, setDate] = useState(null);
  let [mintHistorys, setMintHistorys] = useState([]);

  // SHOW CURRENT TIME
  useEffect(() => {
    setInterval(() => {
      setDate(() => Date());
    }, 1000);
  }, []);

  // CREATE
  // const mintAlot = async () => {
  //   async function fetchPOST_addMint(input_name, input_number, input_date) {
  //     let data = new URLSearchParams();
  //     data.append("name", input_name);
  //     data.append("number", input_number);
  //     data.append("date", input_date);
  //     await fetch("http://localhost:3001/addMint", {
  //       method: "post",
  //       body: data
  //     }).catch((err) => {
  //       console.log(err);
  //       console.log("it doesn't worked!");
  //     });
  //   }
  //   for (let i = 0; i < 50; i++) {
  //     await fetchPOST_addMint(nameForUsers(), nanoid(), Date());
  //     console.log("yeaah");
  //   }
  // };

  const mintResult = (number, date, name) => {
    setNumber(number);
    setMintDate(date);
    setName(name);
  };

  const addMint = async () => {
    // SET THE NAME NUMBER AND TIME OF THIS MINT (can use to populate DB)
    async function fetchPOST_addMint(input_name, input_number, input_date) {
      let data = new URLSearchParams();
      // URLSearchParams() take the current URL and get the object after "?"
      // https://googlechrome.github.io/samples/urlsearchparams/
      data.append("name", input_name);
      data.append("number", input_number);
      data.append("date", input_date);

      //   await fetch("https://five610-project3-server.onrender.com/addMint", {
      await fetch("http://localhost:3001/addMint", {
        method: "post",
        body: data
      })
        .then((res) => res.text())
        .catch((err) => {
          console.log(err);
          console.log("it doesn't worked!");
        });
    }
    let nameA = nameForUsers();
    let numberA = nanoid();
    let dateA = Date();
    mintResult(numberA, dateA, nameA);
    await fetchPOST_addMint(nameA, numberA, dateA);
    await fetchGET_findAllMints();
  };

  // READ
  // update all mint historys
  async function fetchGET_findAllMints() {
    // await fetch("https://five610-project3-server.onrender.com/findAllFriends")
    await fetch("http://localhost:3001/findAllMints")
      .then((res) => res.json())
      .then((txt) => {
        setMintHistorys(txt);
        console.log(txt);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    async function updateThis() {
      if (mintHistorys.length === 0) {
        await fetchGET_findAllMints();
      }
    }
    updateThis();
  }, []);

  // UPDATE
  const updateMintNameById = async (id) => {
    const newName = prompt("Enter new name: ");
    async function fetchPOST_updateMintNameById(target_id, newName) {
      let data = new URLSearchParams();
      data.append("_id", target_id);
      data.append("new_name", newName);

      // await fetch("https://five610-project3-server.onrender.com/updateCommentById", {
      await fetch("http://localhost:3001/updateMintNameById", {
        method: "post",
        body: data
      })
        .then((res) => res.text())
        .then((txt) => {
          console.log(txt);
          setMintHistorys(
            mintHistorys.map((val) => {
              return val._id === id
                ? { _id: id, name: newName, number: val.number, date: date }
                : val;
            })
          );
        })
        .catch((err) => {
          console.log(err);
        });
    }
    await fetchPOST_updateMintNameById(id, newName);
  };

  // DELETE
  const deleteMintById = async (id) => {
    async function fetchPOST_deleteMintById(target_id) {
      let data = new URLSearchParams();
      data.append("_id", target_id);

      // fetch("https://five610-project3-server.onrender.com/deleteById", {
      fetch("http://localhost:3001/deleteMintById", {
        method: "post",
        body: data
      })
        .then((res) => res.text())
        .then((txt) => {
          console.log(txt);
          setMintHistorys(
            mintHistorys.filter((val) => {
              return val._id !== id;
            })
          );
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchPOST_deleteMintById(id);
  };

  return (
    <div className="page">
      <div className="topic-part">
        <h1>Welcome to NFT-Minter!</h1>
        <p>This website/app is designed for people who want to Mint NFT</p>
      </div>

      <div className="instruction-part-0 card">
        <h2 className="instruction-part-1">Instruction: </h2>
        <div className="instruction-part-1">
          <div className="instruction-part-2">
            <div className="instruction-part-3">
              <p>1. Make sure you have installed crypto wallet plug-in on your
                browser (ex: MetaMask)</p>
            </div>
            <div className="instruction-part-3">
              <p>2. Click the “Mint” button Below, connect to your wallet.</p>
            </div>
            <div className="instruction-part-3">
              <p>3. Choose how many coins you want to mint.</p>
            </div>
          </div>
          <div className="instruction-part-2">
            <div className="instruction-part-3">
              <p>4. Confirm the purchase and put it in your wallet.</p>
            </div>
            <div className="instruction-part-3">
              <p>5. We will generate a unique fake Username and the unique id for
              the NFT below.</p>
            </div>
            <div className="instruction-part-3">
              <p>6. You can modify Username or delete the history by clicking
              “Update” button and “X” button.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mint-part-0 card">
        <div className="mint-part-1 mint-btn">
          <button id="mint-button" onClick={addMint} >
            Mint
          </button>
        </div>
        <div className="mint-part-1">
          <h2 className="mint-part-2 nft-info">Your NFT info:</h2>
          <div className="mint-part-2 nft-info-box">
            <div>
              <p className="nft-info">
                {" "}
                You can go to opensea testnet to check your NFTs !!
              </p>
            </div>
            <HomeMintResult name={name} number={number} mintDate={mintDate} />
          </div>
        </div>
      </div>

      <div className="history-part">
        <h2>Mint History</h2>
        <div className="col-12">
          <Homehistory
            history={mintHistorys}
            deleteMintById={deleteMintById}
            updateMintNameById={updateMintNameById}
          />
        </div>
      </div>
    </div>
  );
}

Home.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  mintDate: PropTypes.string,
  history: PropTypes.object,
  deleteMintHistory: PropTypes.func,
  updateMintNameById: PropTypes.func
};

export default Home;
