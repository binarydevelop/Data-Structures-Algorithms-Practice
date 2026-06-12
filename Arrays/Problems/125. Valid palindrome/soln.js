        while (start < end && !isAlphaNumeric(inputString[start])) {
            start++;
        }

        while (start < end && !isAlphaNumeric(inputString[end])) {
            end--;
        }
