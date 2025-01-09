![Image Alt text](/images/0000.png)
## Real time result score
![Image Alt text](/images/0001.png)
## add your custom quiz exam
![Image Alt text](/images/0002.png)
## add your custom images
![Image Alt text](/images/0003.png)

# See live the project
- OnLine: https://quiz-exam-real-time-score.netlify.app/
- OnLine: you can use [nextifly](https://www.netlify.com/)
- Localhost: install the Go Live extension in your visual Studio Code, and you will see running on your local machine under url like: https://localhost:5501

# Quiz Exam Real Time Score
Quiz Exam preparation. Allow some text explanation to help. Green green or red color if correct/wrong answer in a realtime js before submit form. Keep the Score in realtime.
- [x] Add your custom Quiz Exam
- [x] Keep the incorrect questions with timeStamp
- [x] Try again only with incorrect quiz
- [x] Try again only with all incorrect quiz
- [x] Show / hide explanation or extra help of each question
- [x] Show / hide explanation images
- [x] No database needed, works with FileStorage
- [x] No server config needed, works on localhost or free online solutions like vercel, netlify,...

# GPG Encripted Description - Method 1
This method allow:
- Use a public repository
- keep encripted the exam files
- keep the exam files decrypted working on your localhost
- gitHub ignore to prevent your exam be public
- save a copy of your exam encrypted in github. You must save the password on your keepass

### GPG Installation
Linux/WSL
```sudo apt install gnupg ```

Windows
https://gpg4win.org/

### GPG Encrypt some exam
gpg --symmetric --cipher-algo AES256 my_name_file.js

Example:
gpg --symmetric --cipher-algo AES256 questions-bases-de-datos-b.js
gpg --symmetric --cipher-algo AES256 questions-entornos-de-desarrollo.js
gpg --symmetric --cipher-algo AES256 questions-programacion-b.js
gpg --symmetric --cipher-algo AES256 questions-formacion-y-orientacion-laboral.js
gpg --symmetric --cipher-algo AES256 questions-lenguajes-de-marcas.js


### GPG password 
save your password in your keepass. The output file will be like:
my_name_file.js.gpg

### GPG Decrypt
gpg --decrypt my_name_file.js.gpg > my_name_file.js

recomend try to decrypt the file to checks if works.

Example:
gpg --decrypt questions-programacion-b.js.gpg > questions-programacion-b.js
gpg --decrypt questions-formacion-y-orientacion-laboral.js.gpg > questions-formacion-y-orientacion-laboral.js
gpg --decrypt questions-entornos-de-desarrollo.js.gpg > questions-entornos-de-desarrollo.js
gpg --decrypt questions-bases-de-datos-b.js.gpg > questions-bases-de-datos-b.js
gpg --decrypt questions-bases-de-datos-b.js.gpg > questions-lenguajes-de-marcas.js

## GPG GitHub ignore
Now you can save the exams of sensitive files encrypted in a public GitHub repository but keep running these files running in your localhost Decrypted.

### Add GitHub ignore files, create on root repository folder the file:
.gitignore

### Add files to ignore
js/questions-bases-de-datos-b.js
js/questions-entornos-de-desarrollo.js
js/questions-formacion-y-orientacion-laboral.js
js/questions-programacion-b.js
js/questions-lenguajes-de-marcas.js

# Add images
In the explanation you can add images in order to help the estudents or show image code.
The images are located on ```/images``` folder.
Add the new key/value on your ```js/question.js``` file like: 
```
image:["images/java/0001.png", "images/java/0002.png"]
```

# XOR Encripted Description - Method 2
## Encryption and Decryption of Quiz Question Files

This project uses a basic XOR cipher for encrypting quiz question files to prevent casual inspection of their content in the public repository. This section describes how to encrypt and decrypt the question files using Node.js.

### Prerequisites

Before you begin, ensure that you have the following installed on your system:

-   **Node.js:** You can download and install Node.js from [https://nodejs.org/](https://nodejs.org/).

### Encryption Process

The `encrypt-questions.js` script encrypts the question files, overwriting their original content and saving a copy of the original files with a `-original` suffix.

1.  **Set Up your Secret Key:**
    - In your project's root, you will find a file named `config.js`, this file contains the `secretKey` used to encrypt and decrypt your files.
    - Make sure to add `config.js` in the `.gitignore` file to not publish your key on a public repository.

2. **Install dependencies:**
    - Open your terminal in the root project folder.
    - Execute `npm install` this will install all the project dependencies.

3.  **Run the Encryption Script:**

    -   Open your terminal or command prompt.
    -   Navigate to the project's root directory where your `encrypt-questions.js` file is located.
    -   Execute the following command:

        ```bash
        node encrypt-questions.js
        ```

    - This command will:
        *   Read all the `js/questions-*.js` files.
        *   Create a copy of your original files with a `-original` suffix in the same folder.
        *   Encrypt the original question files and saves them with a new encrypted content.
        *   Output confirmation messages to the console.

4.  **Important:** After this step, your question files (`js/questions-*.js`) will contain encrypted text, and a copy of the original files will be created with a `-original` suffix.

### Decryption Process

The decryption process happens automatically inside the application:

1.  When a user selects a quiz, if the selected quiz is marked as encrypted, the application will show a password input.
2.  If the user enters the correct password (the same password used to encrypt the files) the questions file will be decrypted using the `decrypt` method on `script.js` and rendered in the user interface.

**Important Notes:**

-   The encryption process will overwrite the original content of your question files.
-   The encryption method used in this project is very basic and is intended only for obfuscation, and not for real security.
-   The `config.js` file must be added to the `.gitignore` to not commit this file on a public repository.




