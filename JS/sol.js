// JS/sol.js

function showPopup(message, address) {
    const popup = document.getElementById('popup-text');
    popup.textContent = `${message}\n\n${address}`;
    popup.style.display = 'block';

    setTimeout(() => {
        popup.style.display = 'none';
    }, 4000); // Display for 4 seconds
}

document.getElementById("copy-btn-text-sol").onclick = function() {
    const solAddress = document.getElementById("sol-address").value;
    navigator.clipboard.writeText(solAddress).then(() => {
        showPopup("Solana Address Copied", solAddress);
    });
};
