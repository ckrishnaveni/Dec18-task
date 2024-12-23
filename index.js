//dec18
// TASK1 
// create user object same as above with details of purchasing the product object should contain username,product,price,day,occassion,platform ----- (O/P should be mahesh has purchased a washingmachine which costs 25000 on monday on occassion of pongal in amazon))
let purchaser=prompt("Enter Purchaser Name");
let product=prompt("Enter the Product Name");
let amount=prompt("Enter the Amount");
let day=prompt("Enter the Day");
let occassion=prompt("Enter the Occassion");
let platform=prompt("Enter the Platform")

let objpurchaser ={
    username: purchaser,
    product: product,
    price: amount,
    day: day,
    occassion: occassion,
    platform: platform
}
alert(`${objpurchaser.username} has purchased a ${objpurchaser.product} which costs 
    ${objpurchaser.price} on ${objpurchaser.day} on the occassion of ${objpurchaser.occassion} in ${objpurchaser.platform}`)

// TASK2 
// create a student object with details of placement obj should contain studentname,company name,package,domain,joining date --- (O/P should be Mahesh got placed in stick-soft company as a react developer with package of 4lakhs & joining is on 01/01/2025))
let student =prompt("Enter Student Name");
let company=prompt("Enter Company Name");
let designation=prompt("Enter Designation");
let package=prompt("Enter the Package");
let joiningdate=prompt("Enter the Joining Date")
let objstudent={
    studentname: student,
    companyname: company,
    designation: designation,
    package:package,
    joining: joiningdate
}
alert(`${objstudent.studentname} has got placed in ${objstudent.companyname} as ${objstudent.designation} with package of ${objstudent.package} & joining is on ${objstudent.joining}`)
