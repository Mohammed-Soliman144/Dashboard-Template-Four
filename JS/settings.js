/* 
    textarea
    checkbox
    radio
    textbox
    email
*/


const userData = 'user_settings';

let settingObj = JSON.parse(localStorage.getItem(userData)) || {
    id: crypto.randomUUID(),
    customId: Math.random().toString(36).substring(2,Math.random().toString(36).length-1).concat('-',new Date().toISOString()),
    firstVisit: new Date().toISOString(),
    currentVisit: new Date().toISOString(),
    lastVisit: new Date().toISOString(),
    visitCount: 1,
    inputText: {},
    textarea: {},
    inputCheckBox: {},
    inputRadio: {}
}

if(localStorage.getItem(userData)) {
    settingObj = JSON.parse(localStorage.getItem(userData));
    settingObj.visitCount++;
    settingObj.lastVisit = settingObj.currentVisit;
    settingObj.currentVisit = new Date().toISOString();
}


document.addEventListener('DOMContentLoaded', () => {
    const allForms = document.querySelectorAll('main section article form');
    const area = document.getElementById('textarea');
    const siteChkBox = document.getElementById('chBoxCon');
    const securityChkBox = document.getElementById('chBoxAuth');
    const infoText = document.querySelectorAll('input#first, input#last, input#email');
    const socialText = document.querySelectorAll('#twitter, #facebook, #linkedin, #youtube');
    const widgetChkBox = document.querySelectorAll('input[name="chBoxQuick"], input[name="chBoxYearly"],  input[name="chBoxTickets"], input[name="chBoxNews"], input[name="chBoxTasks"], input[name="chBoxItems"]');

    // console.log(allForms);
    if(!allForms.length) return;
    allForms.forEach(form => {
        // const area = form.querySelector('textarea');
        // const siteChkBox = form.querySelector('input[name="chBoxCon"]');
        // const infoText = form.querySelectorAll('#first, #last, #email');
        // const securityChkBox = form.querySelector('input#chBoxAuth');
        // const socialText = form.querySelectorAll('#twitter, #facebook, #linkedin, #youtube');
        // const widgetChkBox = form.querySelectorAll('input[name="chBoxQuick"], input[name="chBoxYearly"],  input[name="chBoxTickets"], input[name="chBoxNews"], input[name="chBoxTasks"], input[name="chBoxItems"]');
        const backupRadio = form.querySelectorAll('input[type="radio"]');

        // console.log("area", "=>", area);
        // console.log("siteChkBox", "=>", siteChkBox);
        // console.log("infoText", "=>", infoText);
        // console.log("securityChkBox", "=>", securityChkBox);
        // console.log("socialText", "=>", socialText);
        // console.log("widgetChBox", "=>", widgetChkBox);
        // console.log("backupRadio", "=>", backupRadio);

        // Read Data From LocalStorage
        if(settingObj.textarea.txtarea)
            area.value = settingObj.textarea.txtarea;
        

        if(settingObj.inputCheckBox.siteChkBox) 
            siteChkBox.checked = settingObj.inputCheckBox.siteChkBox;
        

        if(settingObj.inputText.first)
            infoText[0].value = settingObj.inputText['first'];
        

        if(settingObj.inputText.last)
            infoText[1].value = settingObj.inputText['last'];
        

        if(settingObj.inputText.email)
            infoText[2].value = settingObj.inputText['email'];
        

        if(settingObj.inputCheckBox.securityChkBox) 
            securityChkBox.checked = settingObj.inputCheckBox.securityChkBox;
        

        if(settingObj.inputText.twitter) 
            socialText[0].value = settingObj.inputText['twitter'];
        

        if(settingObj.inputText.facebook) 
            socialText[1].value = settingObj.inputText['facebook'];
        
        if(settingObj.inputText.linkedin) 
            socialText[2].value = settingObj.inputText['linkedin'];
        
        if(settingObj.inputText.youtube) 
            socialText[3].value = settingObj.inputText['youtube'];
        

        
        //  input[name="chBoxItems"]');
        if(settingObj.inputCheckBox.chBoxQuick) {
            widgetChkBox[0].checked = settingObj.inputCheckBox.chBoxQuick;
            // widgetChkBox[0].checked = settingObj.inputCheckBox.chBoxQuick;
            console.log(widgetChkBox);
        }

        
    
        if(settingObj.inputCheckBox.chBoxYearly) 
            widgetChkBox[1].checked = settingObj.inputCheckBox.chBoxYearly;
        
    
        if(settingObj.inputCheckBox.chBoxTickets) 
            widgetChkBox[2].checked = settingObj.inputCheckBox.chBoxTickets;
        
        if(settingObj.inputCheckBox.chBoxNews) 
            widgetChkBox[3].checked = settingObj.inputCheckBox.chBoxNews;
        
    
        if(settingObj.inputCheckBox.chBoxTasks) 
            widgetChkBox[4].checked = settingObj.inputCheckBox.chBoxTasks;
        
    
        if(settingObj.inputCheckBox.chBoxItems) 
            widgetChkBox[5].checked = settingObj.inputCheckBox.chBoxItems;
        
    
        if(settingObj.inputRadio.radioSelected)
            backupRadio.forEach(choice => {
                if(choice.id === settingObj.inputRadio.radioSelected) {
                    choice.checked = true;
                    return;
                }
            })


        // Store Data In LocalStorage
        area.addEventListener('input', e => {
            settingObj.textarea.txtarea = e.target.value;
            saveUserData();
        })

        area.addEventListener('input', e => {
            settingObj.textarea.txtarea = e.target.value;
            saveUserData();
        })

        siteChkBox.addEventListener('change', e => {
            settingObj.inputCheckBox.siteChkBox = e.target.checked;
            saveUserData();
        })

        infoText.forEach(input => {
            input.addEventListener('input', e => {
                settingObj.inputText[e.target.id] = e.target.value;
                saveUserData();
            })
        })
        
        securityChkBox.addEventListener('change', e => {
            settingObj.inputCheckBox.securityChkBox = e.target.checked;
            saveUserData();
        })
        

        socialText.forEach((txt, index) => {
            txt.addEventListener('input', e => {
                settingObj.inputText[e.target.id] = e.target.value;
                saveUserData();
            })
        })
        
        widgetChkBox.forEach(chbox => {
            chbox.addEventListener('change', e => {
                switch(e.target.id){
                    case 'chBoxQuick':
                        settingObj.inputCheckBox.chBoxQuick = e.target.checked;
                    break;
                    case 'chBoxYearly':
                        settingObj.inputCheckBox.chBoxYearly = e.target.checked;
                    break;
                    case 'chBoxTickets':
                        settingObj.inputCheckBox.chBoxTickets = e.target.checked;
                    break;
                    case 'chBoxNews':
                        settingObj.inputCheckBox.chBoxNews = e.target.checked;
                    break;
                    case 'chBoxTasks':
                        settingObj.inputCheckBox.chBoxTasks = e.target.checked;
                    break;
                    case 'chBoxItems':
                        settingObj.inputCheckBox.chBoxItems = e.target.checked;
                    break;
                }
                saveUserData();
            })
        })

        backupRadio.forEach(choice => {
            choice.addEventListener('change', e => {
                switch(e.target.checked){
                    case true:
                        settingObj.inputRadio.radioSelected = e.target.id;
                    // break; // there is no any other cases to use break; to stop execute other cases;
                }
                saveUserData();
            })
        })

    })
})


function saveUserData() {
    localStorage.setItem(userData, JSON.stringify(settingObj));
    settingObj.lastVisit = settingObj.currentVisit;
    settingObj.currentVisit = new Date().toISOString();
}