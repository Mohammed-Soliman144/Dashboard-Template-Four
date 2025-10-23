const userData = 'user_data';

let userObject = JSON.parse(localStorage.getItem(userData)) || {
    id: crypto.randomUUID(),
    firstVisit: new Date().toISOString(),
    currentVisit: new Date().toISOString(),
    lastVisit: new Date().toISOString(),
    visitCount: 1,
    profileObj: {}
}


if(localStorage.getItem(userData)) {
    userObject.visitCount++;
    userObject.lastVisit = userObject.currentVisit;
    userObject.currentVisit = new Date().toISOString();
}

document.addEventListener('DOMContentLoaded', () => {
    const allSpan = document.querySelectorAll('main section.profile form fieldset > span:last-of-type');
    const general_checkBox = document.getElementById('chBoxGen');
    const personal_checkBox = document.getElementById('chBoxPer');
    const job_checkBox = document.getElementById('chBoxJob');
    const bill_checkBox = document.getElementById('chBoxBill');

    console.log(general_checkBox);
        console.log(personal_checkBox);
        console.log(job_checkBox);
        console.log(bill_checkBox);
        // console.log(childSpans);

    allSpan.forEach(span => {
        // const general_checkBox = span.querySelector('input[name="chBoxGen"]');
        // const personal_checkBox = span.querySelector('input[name="chBoxPer"]');
        // const job_checkBox = span.querySelector('input[name="chBoxJob"]');
        // const bill_checkBox = span.querySelector('input[name="chBoxBill"]');
        const childSpans = span.querySelectorAll('span');

        // console.log(general_checkBox);
        // console.log(personal_checkBox);
        // console.log(job_checkBox);
        // console.log(bill_checkBox);
        // console.log(childSpans);

        // Read User Data From Local Storage
        if(userObject.profileObj.generalCheckBox){
            general_checkBox.checked = userObject.profileObj.generalCheckBox;
        }
        if(userObject.profileObj.personalCheckBox){
            personal_checkBox.checked = userObject.profileObj.personalCheckBox;
        }
        if(userObject.profileObj.jobCheckBox){
            job_checkBox.checked = userObject.profileObj.jobCheckBox;
        }
        if(userObject.profileObj.billCheckBox){
            bill_checkBox.checked = userObject.profileObj.billCheckBox;
        }

        // Store or Write Data in local storage again
        general_checkBox.addEventListener('change', (e) => {
            userObject.profileObj.generalCheckBox = e.target.checked;
            saveUserData();
        });

        personal_checkBox.addEventListener('change', (e) => {
            userObject.profileObj.personalCheckBox = e.target.checked;
            saveUserData();
        });

        job_checkBox.addEventListener('change', (e) => {
            userObject.profileObj.jobCheckBox = e.target.checked;
            saveUserData();
        });

        bill_checkBox.addEventListener('change', (e) => {
            userObject.profileObj.billCheckBox = e.target.checked;
            saveUserData();
        })
    })
})



function saveUserData() {
    userObject.currentVisit = new Date().toISOString();
    localStorage.setItem(userData, JSON.stringify(userObject));
}