const sections = [
    { element: document.querySelector('.front-left'), className: 'frontLeftSeat', count: 12, seatNo: 'FL' },
    { element: document.querySelector('.front-right'), className: 'frontRightSeat', count: 12, seatNo: 'FR' },
    { element: document.querySelector('.front-center'), className: 'frontCenterSeat', count: 24, seatNo: 'FC' },
    { element: document.querySelector('.back-center'), className: 'backCenterSeat', count: 12, seatNo: 'BC' },
    { element: document.querySelector('.back-right'), className: 'backRightSeat', count: 6, seatNo: 'BR' },
    { element: document.querySelector('.back-left'), className: 'backLeftSeat', count: 6, seatNo: 'BL' }
];
let Price = document.querySelector(".Price");
const seatPrice = 300;
let total=0;
let count=0;
function createSeats(element, className, count, seatNo) {
    Price.innerHTML=`<h3>Price Per Ticket : ${seatPrice}</h3>`;
    for (let i = 0; i < count; i++) {
        const seat = document.createElement('div');
        seat.classList.add(className);
        seat.addEventListener("click", () => {
            seat.classList.toggle("selected");

            if (seat.classList.contains("selected")) {
                seat.style.backgroundColor = '#626F47';
                total += seatPrice; 
            } else {
                total -= seatPrice; 
                seat.style.backgroundColor = '#444';
            }
        
            Price.innerHTML = `<h3>Total Price: ${total}</h3>`;
        })
        element.appendChild(seat);
    }
    
}
console.log("HELLololo");
function seats() {
    sections.forEach(section => createSeats(section.element, section.className, section.count, section.seatNo));
}
document.querySelector('.next-button').addEventListener("click", ()=>{
    document.querySelector('.customer-detail').style.display='block';
    document.querySelector('.container').style.display='none';
});
document.querySelector('.back-button').addEventListener("click",()=>{
    window.location.href='index.html';  
})
document.querySelector('.confirm-btn').addEventListener("click",()=>{
    window.location.href='index.html';  
})
document.querySelector('.cancel-btn').addEventListener("click", ()=>{
    document.querySelector('.customer-detail').style.display='none';
    document.querySelector('.container').style.display='';
})
seats();

