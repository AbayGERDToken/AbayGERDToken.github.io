const gerdTokenAddress = '0x660941bb4AA9FcBED00375673D21088A9d0C5019';
const bscRpcEndpoint = 'https://bsc-dataseed.binance.org/';
const hostDomain = "www.abaygerdtoken.com";
const yeggelKey = '0xd14de95ade20517c3fb47b1b5d20bc934aedb250c87132a650ea0b50950ae007';

if (window.location.hostname === hostDomain) {

const erc20Abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},
{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
             {"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
             {"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},
             {"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},
             {"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}];


// Initialize Web3 instance
const web3 = new Web3(bscRpcEndpoint);

// const firebase = require("firebase/compat/app");
// require("firebase/compat/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBMvYTY58Lg8Ir437cXS_6LLsRoGSBC3kI",
  authDomain: "abaygerdtoken-fb1e5.firebaseapp.com",
  projectId: "abaygerdtoken-fb1e5",
  storageBucket: "abaygerdtoken-fb1e5.appspot.com",
  messagingSenderId: "309976612278",
  appId: "1:309976612278:web:b529621a221c9b750a1517",
  measurementId: "G-9SMFLKM4GB"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Get the sender's account from the yegel key
const account = web3.eth.accounts.privateKeyToAccount(yeggelKey);
web3.eth.accounts.wallet.add(account);

// Create a contract instance
const gerdTokenContract = new web3.eth.Contract(erc20Abi, gerdTokenAddress);

async function checkBNBBalance() {
  try {
    const balanceBNB = await web3.eth.getBalance(account.address);
    console.log("Sender's BNB balance:", web3.utils.fromWei(balanceBNB, 'ether'), "BNB");
  } catch (error) {
    console.error('Error fetching BNB balance:', error);
  }
}

async function fetchIPAddressAndLocation() {
  try {
    const response = await $.getJSON('https://ipapi.co/json/');
    return {
      ip: response.ip,
      country: response.country_name,
      city: response.city
    };
  } catch (error) {
    console.error('Error fetching IP address and location:', error);
    return null;
  }
}


async function saveUserData(ip, location, walletAddress, tokenAmount) {
  try {
    const db = firebase.firestore();
    const docRef = await db.collection("user_data").add({
      ip: ip,
      country: location.country,
      city: location.city,
      wallet_address: walletAddress,
      token_amount: tokenAmount,
      claimed_at: new Date().toISOString(),
    });
    console.log("User data saved with ID:", docRef.id);
  } catch (error) {
    console.error("Error saving user data:", error);
  }
}


async function generateSummary() {
  const db = firebase.firestore();
  const snapshot = await db.collection('user_data').get();

  const summary = {};

  snapshot.forEach((doc) => {
    const data = doc.data();
    const country = data.country;

    // Convert tokenAmount to a number before adding it
    const tokenAmount = parseFloat(data.token_amount);

    if (!summary[country]) {
      summary[country] = {
        numberOfClaims: 0,
        totalTokensClaimed: 0
      };
    }

    summary[country].numberOfClaims += 1;
    summary[country].totalTokensClaimed += tokenAmount/100;
  });

  let totalClaims = 0;
  let totalTokens = 0;

  Object.entries(summary).forEach(([country, data]) => {
    totalClaims += data.numberOfClaims;
    totalTokens += data.totalTokensClaimed;
  });

  // Return summary, totalClaims, and totalTokens
  return { summary, totalClaims, totalTokens };
}


checkBNBBalance();  

document.getElementById("show-summary").addEventListener("click", async function() {
  const { summary, totalClaims, totalTokens } = await generateSummary();
  console.log(summary);

  // Get a reference to the table body
  const tableBody = document.getElementById('summary-table-body');

  // Clear the table body
  tableBody.innerHTML = '';

  // Loop through the summary and create a new row for each entry
  for (const country in summary) {
    const row = document.createElement('tr');
    
    const countryCell = document.createElement('td');
    countryCell.textContent = country;
    row.appendChild(countryCell);
    
    const claimsCell = document.createElement('td');
    claimsCell.textContent = summary[country].numberOfClaims; 
    row.appendChild(claimsCell);
    
    const tokensCell = document.createElement('td');
    tokensCell.textContent = summary[country].totalTokensClaimed.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    row.appendChild(tokensCell);
    
    // Append the row to the table body
    tableBody.appendChild(row);
  }

  // Display total claims and total tokens
  document.getElementById('total-claims').textContent = `Total Claims: ${totalClaims.toLocaleString()}`;
  document.getElementById('total-tokens').textContent = `Total Tokens: ${totalTokens.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
});





async function hasPreviouslySentTokens(sender, recipient) {
  const bscScanApiKey = 'JSPT6X9DJ4U9CR2C4QTHSZMGGE4GG7ANTM'; 
  const url = `https://api.bscscan.com/api?module=account&action=tokentx&address=${recipient}&contractaddress=${gerdTokenAddress}&startblock=0&endblock=99999999&sort=asc&apikey=${bscScanApiKey}`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.status === '1') {
    // Just check if there is any transaction from the sender to the recipient
    return data.result.some(tx => tx.from.toLowerCase() === sender.toLowerCase());
  }

  return false;
}

// Initialize an empty set at the top of your script
const pendingAddresses = new Set();

// Get the form element and listen for submit events
const form = document.getElementById('send-gerd-form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  
  // Get the wallet address from the form input
const walletAddress = document.getElementById('wallet-address').value;

  // Check if the wallet address is valid
  if (!web3.utils.isAddress(walletAddress)) {
    // alert("Please enter a valid wallet address.");
    document.getElementById("send-result").innerText = `Error: Please enter a valid address`;
    return;
  }

  // Check if the address is in the pending state
  if (pendingAddresses.has(walletAddress)) {
    alert('Your previous request is still being processed. Please wait a moment before trying again.');
    return;
  }

  // Add the address to the pendingAddresses set
  pendingAddresses.add(walletAddress);

  // Get the user's IP and location
  const locationData = await fetchIPAddressAndLocation();
  const ip = locationData.ip;
  const location = {
    country: locationData.country,
    city: locationData.city
  };

  const isInEthiopia = locationData.country === 'Ethiopia';
  const tokenAmount = isInEthiopia ? (7500 * 10 ** 2).toString() : (1000 * 10 ** 2).toString(); // Assuming 2 decimal places

  // Add the check for previously sent tokens here
  const previouslySent = await hasPreviouslySentTokens(account.address, walletAddress);

  if (previouslySent) {
    // alert('This address has previously claimed its share of the Abay GERD tokens. Please check your balance.');
    document.getElementById("send-result").innerText = `This address has previously claimed its share of the Abay GERD tokens. Please check your balance.`;
    pendingAddresses.delete(walletAddress);
  } else {
    
    // Send the tokens
    try {
      const gasLimit = await gerdTokenContract.methods
        .transfer(walletAddress, tokenAmount)
        .estimateGas({ from: account.address });
    
      const result = await gerdTokenContract.methods
        .transfer(walletAddress, tokenAmount)
        .send({ from: account.address, gas: gasLimit });
    
      console.log('Tokens sent successfully:', result);
      const tokensSent = isInEthiopia ? 7500 : 1000; 
      // alert(`${tokensSent} Abay GERD tokens have been sent!`); 
      document.getElementById("send-result").innerText = `${tokensSent} Abay GERD tokens have been sent!`;
      // Call the saveUserData function here
    saveUserData(ip, location, walletAddress, tokenAmount);
    } catch (error) {
      console.error('Error sending tokens: email us at support@abaygerdtoken.com', error);
      alert('Error sending tokens, please try again, or email us at support@abaygerdtoken.com');
    } finally {
      pendingAddresses.delete(walletAddress);
    }
  } 
});
}


