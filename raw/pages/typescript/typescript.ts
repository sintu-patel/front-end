var myName: string = "<span>Sintu Singh Patel</span>";

function printName(name: string) {
    document.getElementById('heading').innerHTML = name;
}

printName(myName);