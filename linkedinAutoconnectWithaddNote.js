//step 1 test for name 
//class of content from this div get strong tag text and print 
//artdeco-modal__content ember-view
(async function connectAndExtractName() {
    try {
        let connectButtons = document.querySelectorAll('.artdeco-button--2.artdeco-button--secondary');
        console.log(`Found ${connectButtons.length} buttons.`);
        for (let i = 0; i < connectButtons.length; i++) {
            try {
                let buttonText = connectButtons[i].querySelector('.artdeco-button__text')?.innerText;
                if (buttonText === "Connect") {
                    console.log(`Clicking Connect button #${i + 1}`);
                    connectButtons[i].click();
                    await new Promise(resolve => setTimeout(resolve, 1000));
                    let modalContent = document.querySelector('.artdeco-modal__content.ember-view');
                    if (modalContent) {
                        let strongTag = modalContent.querySelector('strong');
                        if (strongTag) {
                            console.log(`Name: ${strongTag.innerText}`);
                        } else {
                            console.log("No <strong> tag found in the modal.");
                        }
                    } else {
                        console.log("No modal content found.");
                    }
                    let closeButton = document.querySelector('.artdeco-modal__dismiss');
                    if (closeButton) {
                        closeButton.click();
                        await new Promise(resolve => setTimeout(resolve, 1000));
                    }
                }
            } catch (err) {
                console.error(`Error processing button #${i + 1}: ${err.message}`);
            }
        }
    } catch (err) {
        console.error("An error occurred:", err.message);
    }
})();
//step 2:
//class of add note button  
//artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--secondary ember-view mr1
//full code..

(async function connectWithNote() {
    try {
        let connectButtons = document.querySelectorAll('.artdeco-button--2.artdeco-button--secondary');
        console.log(`Found ${connectButtons.length} Connect buttons.`);
        for (let i = 0; i < connectButtons.length; i++) {
            try {
                let buttonText = connectButtons[i].querySelector('.artdeco-button__text')?.innerText;
                if (buttonText === "Connect") {
                    console.log(`Clicking Connect button #${i + 1}`);
                    connectButtons[i].click(); 
                    await new Promise(resolve => setTimeout(resolve, 1000)); 
                    let addNoteButton = document.querySelector('.artdeco-button--muted.artdeco-button--2.artdeco-button--secondary.ember-view.mr1');
                    if (addNoteButton) {
                        addNoteButton.click();
                        await new Promise(resolve => setTimeout(resolve, 500));
                        let modalContent = document.querySelector('.artdeco-modal__content.ember-view');
                        if (modalContent) {
                            let strongTag = modalContent.querySelector('strong');
                            if (strongTag) {
                                let name = strongTag.innerText.trim();
                                console.log(`Name: ${name}`);
                                let message = `Hi ${name},\n\nI’m seeking .NET development roles. With 2 years’ experience in ASP.NET, MVC, ADO.NET, and Web Services, I’d appreciate any leads or connections. Happy to share my resume if needed.`;
                                let noteTextarea = document.querySelector('textarea[name="message"]');
                                if (noteTextarea) {
                                    noteTextarea.value = message;
                                    console.log(`Message set:\n${message}`);
                                    let sendButton = document.querySelector('.artdeco-button--2.artdeco-button--primary.ml1');
                                    if (sendButton) {
                                        sendButton.click();
                                        console.log("Connection request with note sent.");
                                    } else {
                                        console.log("Send button not found.");
                                    }
                                } else {
                                    console.log("Note textarea not found.");
                                }
                            } else {
                                console.log("No <strong> tag found in the modal.");
                            }
                        } else {
                            console.log("No modal content found.");
                        }
                    } else {
                        console.log("Add Note button not found.");
                    }
                    let closeButton = document.querySelector('.artdeco-modal__dismiss');
                    if (closeButton) {
                        closeButton.click();
                        await new Promise(resolve => setTimeout(resolve, 1000));
                    }
                }
            } catch (err) {
                console.error(`Error processing button #${i + 1}: ${err.message}`);
            }
        }
    } catch (err) {
        console.error("An error occurred:", err.message);
    }
})();
