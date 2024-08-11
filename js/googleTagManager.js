async function calculateSHA(email) {
    let emailHash = '';
    if (email !== "") {

        // Convert string to Uint8Array
        const data = new TextEncoder().encode(email);

        // Calculate SHA value asynchronously
        const hashBuffer = await window.crypto.subtle.digest('SHA-256', data);

        // Convert ArrayBuffer to Array
        const hashArray = Array.from(new Uint8Array(hashBuffer));

        // Convert bytes to hexadecimal
        emailHash = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
    }
    // Return the raw SHA-256 value synchronously
    return emailHash;
}

function pushEvent(eventType, region, name, url, emailHash = null) {
    window.adobeDataLayer = window.adobeDataLayer || [];
    const eventObject = {
        'event': eventType,
        'eventType': eventType,
        'web': {
            'webInteraction': {
                'region': region,
                'name': name,
                'type': 'other',
                'url': url,
            }
        }
    };
    if (emailHash) {
        eventObject.email = emailHash;
    }
    window.adobeDataLayer.push(eventObject);
}

function pushLinkClickEvent(region, name, url, emailHash) {
    pushEvent('web.webinteraction.linkClicks', region, name, url, emailHash);
}

function pushLinkClickEventWithoutEmail(region, name, url) {
    pushEvent('web.webinteraction.linkClicks', region, name, url);
}

function pushDisclosureViewEvent(region, name, url, emailHash) {
    pushEvent('web.webinteraction.disclosureView', region, name, url, emailHash);
}

async function openLoopSubmitButtonClickEvent(region, emailId, submitButtonId) {
    let emailHash = '';
    var element = document.getElementById(emailId);
    if(element){
        emailHash = await calculateSHA(document.getElementById(emailId).value);
    }
    let name = document.getElementById(submitButtonId).value;
    // Trigger event
    pushLinkClickEvent(region.concat(name), name, '', emailHash);
}


async function privacyPolicyLinkClickEvent(region, privacyPolicyLinkId) {
    let name = document.getElementById(privacyPolicyLinkId).innerText;
    let hrefValue = document.getElementById(privacyPolicyLinkId).href;
    // Trigger event
    pushLinkClickEvent('HyperLink|main|'.concat(name), name, hrefValue, '');
}


function termsAndConditionsCheckBoxWithoutSpan(region, label) {
    // Trigger event
    pushLinkClickEvent(region, label, '', '');
}

function onCaptchaChecked(recaptchaElementId, response) {
    document.getElementById(recaptchaElementId).value = response;
    pushLinkClickEventWithoutEmail('checkBox|main|I\'m not a robot', 'I\'m not a robot', '');
}

function openLoopPhoneRegisterSubmitButtonClickEvent(region, submitButtonId) {
    let name = document.getElementById(submitButtonId).value;
    pushLinkClickEventWithoutEmail(region.concat(name), name, '');
}

function pdfScrollEventListener(canvasContainer, firstPageHeight,url){
    if (firstPageHeight > 0 && canvasContainer.scrollTop >= firstPageHeight) {
        pushDisclosureViewEvent('Page|main|'.concat("pdf-page-1"), 'pdf-page-1', url,'');
        return true;
    }
    return false;
}
