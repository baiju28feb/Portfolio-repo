function typeWriter(elementId, textArray, delay = 2000) {
    let element = document.getElementById(elementId);
    let arrayIndex = 0;
    let charIndex = 0;
    let currentText = '';
    let isDeleting = false;

    function type() {
        if (arrayIndex < textArray.length) {
            if (!isDeleting && charIndex <= textArray[arrayIndex].length) {
                currentText = textArray[arrayIndex].substring(0, charIndex++);
                element.innerHTML = currentText;
            }

            if (isDeleting && charIndex <= textArray[arrayIndex].length) {
                currentText = textArray[arrayIndex].substring(0, charIndex--);
                element.innerHTML = currentText;
            }

            if (charIndex == textArray[arrayIndex].length) {
                isDeleting = true;
                setTimeout(type, delay);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                arrayIndex++;
                if (arrayIndex === textArray.length) {
                    arrayIndex = 0;
                }
            }

            setTimeout(type, isDeleting ? 50 : 100);
        }
    }

    type();
}
