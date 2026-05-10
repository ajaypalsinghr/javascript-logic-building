
let allUsers = []; // Humara main data yahan rahega

// 1. Data Fetch Karne ka function
async function loadData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    allUsers = await res.json(); 
    renderUI(); // Pehli baar data dikhane ke liye
}

// 2. UI ko Print karne ka function (Baar-baar use hoga)
function renderUI() {
    const container = document.getElementById('user-card');
    
    // Map chalao aur har card mein ek "Delete" button dalo
    container.innerHTML = allUsers.map(user => `
        <div style="border: 1px solid #333; margin: 10px; padding: 10px; border-radius: 5px;">
            <h4>${user.name}</h4>
            <button onclick="deleteUser(${user.id})" style="color: red;">Delete</button>
        </div>
    `).join('');
}

// 3. DELETE Logic (The Filter Magic)
function deleteUser(id) {
    console.log("Deleting user with ID:", id);
    
    // Array ko filter karo: "Wo saare rakho jinki ID match nahi karti"
    allUsers = allUsers.filter(user => user.id !== id);
    
    // Sabse zaruri step: UI ko naye data ke saath firse dikhao
    renderUI(); 
}

// Start the app
loadData();