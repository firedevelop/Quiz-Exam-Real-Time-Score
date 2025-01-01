![Image Alt text](/images/00.jpg)
## Real time result score
![Image Alt text](/images/01.jpg)
# add your custom quiz exam
![Image Alt text](/images/02.jpg)

# Quiz Exam Real Time Score
Quiz Exam preparation. Allow some text explanation to help. Green green or red color if correct/wrong answer in a realtime js before submit form. Keep the Score in realtime.

# GPG Encripted Description Method
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

### GPG password 
save your password in your keepass. The output file will be like:
my_name_file.js.gpg

### GPG Decrypt
gpg --decrypt my_name_file.js.gpg > my_name_file.js

# GPG GitHub ignore
Now you can save the exams of sensitive files encrypted in a public GitHub repository but keep running these files running in your localhost Decrypted.

### Add GitHub ignore files, create on root repository folder the file:
.gitignore

### Add files to ignore
js/questions-bases-de-datos-b.js
js/questions-entornos-de-desarrollo.js
js/questions-formacion-y-orientacion-laboral.js
js/questions-programacion-b.js









