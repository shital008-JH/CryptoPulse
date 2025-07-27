const coinDescriptions = {
    bitcoin: "Bitcoin (BTC) is the first and most valuable cryptocurrency, often seen as digital gold.",
    ethereum: "Ethereum (ETH) supports smart contracts and decentralized applications.",
    ripple: "Ripple (XRP) is designed for fast, low-cost cross-border transactions.",
    tether: "Tether (USDT) is a stablecoin that maintains a 1:1 value with the US dollar.",
    binancecoin: "Binance Coin (BNB) is the native token of Binance, used for fee discounts and transactions.",
    solana: "Solana (SOL) is known for its high-speed blockchain and low transaction costs.",
    cardano: "Cardano (ADA) focuses on scalability and sustainability, offering smart contracts.",
    dogecoin: "Dogecoin (DOGE) started as a meme but has gained popularity as a fun cryptocurrency.",
    litecoin: "Litecoin (LTC) is similar to Bitcoin but offers faster transactions and lower fees.",
    polkadot: "Polkadot (DOT) enables cross-chain interoperability between different blockchains.",
    uniswap: "Uniswap (UNI) is a decentralized exchange token that powers liquidity provision."
};

async function fetchCryptoPrice() {
    const crypto = document.getElementById("cryptoSelect").value;
    const priceDisplay = document.getElementById("price");
    const coinInfo = document.getElementById("coinInfo");

    try {
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=usd`);
        const data = await response.json();
        
        console.log("API Response:", data); // ✅ Debugging step to check the API response

        if (data[crypto]) {
            priceDisplay.innerHTML = `$${data[crypto].usd.toFixed(2)}`;
            coinInfo.innerHTML = coinDescriptions[crypto];
        } else {
            priceDisplay.innerHTML = "Error fetching price";
            coinInfo.innerHTML = "<em>Could not retrieve information.</em>";
        }
    } catch (error) {
        console.error("Fetch error:", error); // ✅ Debugging step for network issues
        priceDisplay.innerHTML = "Failed to fetch price";
        coinInfo.innerHTML = "<em>Network error occurred.</em>";
    }
}
