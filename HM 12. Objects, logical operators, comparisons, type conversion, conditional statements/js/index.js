const user = {
     name: "Charlie",
     age : 29,
     email: "user1@gmail.com",
     isSubscribed: true,
     balance: "150.25",
     verified: "1",
}

let balance = Number(user.balance);
let verified = (user.verified === "1");

function accessService () {
    if ( user.age >= 18 && verified && (balance > 0 || user.isSubscribed === true)){
            return "доступ до сервісу підключеній"
    } else return "доступ до сервісу відсутній"
}
console.log(accessService());

const newAge = String(user.age);
const ageWithDouble = newAge === user.age;
const ageWithTriple = newAge == user.age;


const order = {
     total: "950",
     currency: 'USD',
     isPaid: true,
     delivery: "yes",
     priority: "1",
}

const deliveryBool = (order.delivery === "yes")
const priorityBool = (order.priority === "1")
const numberTotal  = Number(order.total);

const LargeTotal = numberTotal >= 1000;
   
let orderDescription = "";

if ( order.isPaid === false){
    orderDescription = "Order is not paid"
} else if ( LargeTotal && order.isPaid === true){
    orderDescription = "High-value paid order"
} else if ( order.isPaid === true && deliveryBool === true){
    orderDescription = "Paid order with delivery"
} else if ( order.isPaid === true && deliveryBool === false){
    orderDescription = "Paid order without delivery"
} 

if ( priorityBool === true){
    orderDescription += " [PRIORITY]"
}



const totalWithDouble = numberTotal == order.total
const totalWithTriple = numberTotal === order.total

const systemSettings = {
     darkMode : true,
     fontSize : '18',
     language : "en",
     betaAccess : "true",
}

const numFontSize = Number(systemSettings.fontSize);
const boolBetaAccess = ( systemSettings.betaAccess === "true" );
const isLargeFont = numFontSize >= 18;

let resultSystemSettings = "";

if ( isLargeFont && systemSettings.darkMode === true ){
    resultSystemSettings = "Dark mode + large font"
} else if ( isLargeFont ){
    resultSystemSettings = "Large font";
} else if ( systemSettings.darkMode === true){
    resultSystemSettings = "Dark mode";
} else resultSystemSettings = "Default settings";

if ( boolBetaAccess === true ){
    resultSystemSettings += " (Beta tester)";
} 

let finalAccess = "";
let userSuccess = (user.age >= 18 && verified && (balance > 0 || user.isSubscribed === true));
let orderSuccess = (balance >= numberTotal || order.isPaid === true);
let systemSettingsSuccess = (numFontSize > 12 && (systemSettings.language === "en" || systemSettings.language === "uk"));


if ( userSuccess && orderSuccess && systemSettingsSuccess){
    finalAccess += "Full access granted"
} 
 if ( !userSuccess ){
    finalAccess += "\n User " + "access denied"
} 
 if ( !orderSuccess ){
    finalAccess += "\n Order " + "access denied"
} 
 if ( !systemSettingsSuccess ){
    finalAccess += "\n System " + "access denied"
}  

// if ( (user.age >= 18 && verified && (balance > 0 || user.isSubscribed === true)) && (balance >= numberTotal || order.isPaid === true) && numFontSize > 12 && (systemSettings.language === "en" || systemSettings.language === "uk")){
 //   finalAccess += "Full access granted"