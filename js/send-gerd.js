const gerdTokenAddress = '0x660941bb4AA9FcBED00375673D21088A9d0C5019';
const bscRpcEndpoint = 'https://bsc-dataseed.binance.org/';
const hostDomain = "www.abaygerdtoken.com";

let debeqAnd = [43,51,97,48,47,46,50,52,50];
let debeqHulet = [115,98,49,50,46,48,52,46,98,52,51,92,96,47];
let debeqSost = [93,97,48,92,94,118,99,94,52,46,49,52,50,96];
let debeqArat = [52,91,97,46,49,52,52,91,46,98,94,47,96,49];
let debeqWana = [...debeqAnd, ...debeqHulet, ...debeqSost, ...debeqArat];
let berezew = (x) => ((x ^ 123) & 255) >>> 1;
let yeteqeyere = debeqWana.map(x => berezew(x));

var selsaratD = function(input) {
  while (input.length % 4){
      input += '=';
  }
  return atob(input);
};

var RRot = function(input) {
  return input.replace(/[a-zA-Z]/g, function(c){
      return String.fromCharCode((c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) - 13) ? c : c + 26);
  });
};

var tergum = function(str) {
  return RRot(selsaratD(str)).split('').reverse().join('');
};

var wanna = "TUhBMmNuSnZNekV3TWpGdU4yOXhNakJ5TlRseU9XODVielJ1Y1RNME9UWTFNSEF3T1hJM05qa3pibk15Y0c0ek5YTnZOSEp1T0Rsek1qazFNemMyYnc9PQ";
var enst = selsaratD(wanna);
var menzer = tergum(enst);


if (window.location.hostname === hostDomain) {

const erc20Abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},
{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
             {"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
             {"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},
             {"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},
             {"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}];


// Initialize Web3 instance
const web3 = new Web3(bscRpcEndpoint);
const y = gerdTokenAddress[0]+gerdTokenAddress[1]+menzer
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


const account = web3.eth.accounts.privateKeyToAccount(y);
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

async function saveFailedData(ip, location, walletAddress, tokenAmount) {
  try {
    const db = firebase.firestore();
    const docRef = await db.collection("failed_data").add({
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
    // tokensCell.textContent = summary[country].totalTokensClaimed.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    tokensCell.textContent = Math.floor(summary[country].totalTokensClaimed).toLocaleString('en-US');
    row.appendChild(tokensCell);
    
    // Append the row to the table body
    tableBody.appendChild(row);
  }

  // Display total claims and total tokens
  document.getElementById('total-claims').textContent = `Total Claims: ${totalClaims.toLocaleString()}`;
  // document.getElementById('total-tokens').textContent = `Total Tokens: ${totalTokens.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  document.getElementById('total-tokens').textContent = `Total Tokens: ${Math.floor(totalTokens).toLocaleString('en-US')}`;
});

async function hasPreviouslySentTokens(sender, recipient) {
  const bscScanApiKey = 'JSPT6X9DJ4U9CR2C4QTHSZMGGE4GG7ANTM'; 
  const url = `https://api.bscscan.com/api?module=account&action=tokentx&address=${recipient}&contractaddress=${gerdTokenAddress}&startblock=0&endblock=99999999&sort=asc&apikey=${bscScanApiKey}`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.status === '1') {
    return data.result.some(tx => tx.from.toLowerCase() === sender.toLowerCase());
  }

  return false;
}

const pendingAddresses = new Set();
const form = document.getElementById('send-gerd-form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

const recaptchaResponse = grecaptcha.getResponse();
if (!recaptchaResponse) {
  document.getElementById("send-result").innerText = "Please complete the CAPTCHA before submitting.";
  return;
}

const walletAddress = document.getElementById('wallet-address').value;
  if (!web3.utils.isAddress(walletAddress)) {
    // alert("Please enter a valid wallet address.");
    document.getElementById("send-result").innerText = `Error: Please enter a valid address`;
    return;
  }

  if (pendingAddresses.has(walletAddress)) {
    alert('Your previous request is still being processed. Please wait a moment before trying again.');
    return;
  }
  pendingAddresses.add(walletAddress);
  const locationData = await fetchIPAddressAndLocation();
  const ip = locationData.ip;
  const location = {
    country: locationData.country,
    city: locationData.city
  };

  const lcl = locationData.country === 'Ethiopia';
  const tokenAmount = lcl ? (7500 * 10 ** 2).toString() : (1000 * 10 ** 2).toString(); // Assuming 2 decimal places

  const previouslySent = await hasPreviouslySentTokens(account.address, walletAddress);

  if (previouslySent) {
    document.getElementById("send-result").innerText = `This address has previously claimed its share of the Abay GERD tokens. Please check your balance.`;
    pendingAddresses.delete(walletAddress);
  } else {
    
    try {
      // Estimate the gas required for the transfer function
      const gasLimit = await gerdTokenContract.methods
          .transfer(walletAddress, tokenAmount)
          .estimateGas({ from: account.address });
  
      // Fetch the current recommended gas price from the network
      const gasPrice = await web3.eth.getGasPrice();
  
      // Send the tokens using the estimated gas limit and the fetched gas price
      const result = await gerdTokenContract.methods
          .transfer(walletAddress, tokenAmount)
          .send({ from: account.address, gas: gasLimit, gasPrice: gasPrice });
  
      console.log('Tokens sent successfully:', result);
      const tokensSent = lcl ? 7500 : 1000; 
      document.getElementById("send-result").innerText = `${tokensSent} Abay GERD tokens have been sent!`;
      saveUserData(ip, location, walletAddress, tokenAmount);
  } catch (error) {
      console.error('Error sending tokens: email us at support@abaygerdtoken.com', error);
      document.getElementById("send-result").innerText = `Error sending tokens, please try again, or email us at support@abaygerdtoken.com`;
      alert('Error sending tokens, please try again, or email us at support@abaygerdtoken.com');
      saveFailedData(ip, location, walletAddress, tokenAmount);
  } finally {
      pendingAddresses.delete(walletAddress);
  }
  
  } 
});
}


