#!/usr/bin/expect -f
# chmod +x encrypt_with_gpg.sh
# ./encrypt_with_gpg.sh
# List of files to encrypt
set files {
    "js/questions-bases-de-datos-b.js"
    "js/questions-questions-entornos-de-desarrollo.js"
    "js/questions-programacion-b.js"
    "js/questions-questions-formacion-y-orientacion-laboral.js"
    "js/questions-lenguajes-de-marcas.js"
}

# Password for GPG
set password "2YjeGTz9bD1hpgMU656Grt1gW22jeCFdNg3d7hxJ4PYQEJB2a4kFfGc36ieBhCe1"

foreach file $files {
    spawn gpg --symmetric --cipher-algo AES256 $file
    expect "Enter passphrase:"
    send "$password\r"
    expect "Repeat passphrase:"
    send "$password\r"
    expect eof
}

